// Supabase Edge Function (Deno runtime) para processar webhooks da PERFECTPAY com segurança, idempotência e entrega automática de acesso seguro ao eBook.

import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.8';

interface PerfectPayCustomer {
  full_name?: string;
  email?: string;
  phone_area_code?: string;
  phone_number?: string;
  identification_number?: string;
}

interface PerfectPayProduct {
  name?: string;
  external_reference?: string;
}

interface PerfectPayPayload {
  token?: string;
  code?: string; // Identificador único da venda (transaction ID)
  sale_status?: string; // 'approved', 'completed', 'refunded', 'charged_back', 'returned', etc.
  status?: string;
  customer?: PerfectPayCustomer;
  product?: PerfectPayProduct;
  sale_amount?: number;
  payment_method_enum?: number;
  [key: string]: unknown;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Método não permitido.' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
  const resendApiKey = Deno.env.get('RESEND_API_KEY') || '';
  const appUrl = Deno.env.get('APP_URL') || 'https://depois-dos-60.vercel.app';

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({ error: 'Configuração interna incompleta.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  
  let payload: PerfectPayPayload;
  try {
    payload = await req.json();
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Payload JSON inválido.' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  const saleCode = payload.code || (payload as any).sale_code || 'N/A';
  const customerEmail = (payload.customer?.email || (payload as any).email || '').trim().toLowerCase();
  const customerName = (payload.customer?.full_name || (payload as any).name || 'Cliente').trim();
  const rawStatus = (payload.sale_status || payload.status || '').toLowerCase();

  // Mapear status da PerfectPay para estados padronizados
  let saleStatus = 'pending';
  if (['approved', 'completed', 'paid', 'autorizado', 'completo'].includes(rawStatus)) {
    saleStatus = 'approved';
  } else if (['refunded', 'charged_back', 'returned', 'devolvido', 'estornado'].includes(rawStatus)) {
    saleStatus = 'refunded';
  } else if (['canceled', 'cancelled', 'cancelado', 'rejected', 'rejeitado'].includes(rawStatus)) {
    saleStatus = 'cancelled';
  }

  // Verificação de Idempotência no Webhook Log
  const { data: existingLog } = await supabase
    .from('webhook_logs')
    .select('id, processado')
    .eq('codigo_venda', saleCode)
    .eq('status_evento', saleStatus)
    .single();

  if (existingLog && existingLog.processado) {
    console.log(`Evento duplicado ignorado para PerfectPay sale code: ${saleCode}, status: ${saleStatus}`);
    return new Response(
      JSON.stringify({ success: true, message: 'Evento já processado (idempotente)' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // Registrar log inicial
  const { data: logEntry } = await supabase.from('webhook_logs').insert({
    origem: 'perfectpay',
    codigo_venda: saleCode,
    email: customerEmail,
    status_evento: saleStatus,
    payload: payload,
  }).select('id').single();

  const logId = logEntry?.id;

  try {
    // 1. PAGAMENTO APROVADO ('approved')
    if (saleStatus === 'approved' && customerEmail && saleCode !== 'N/A') {
      const phoneFull = payload.customer?.phone_area_code && payload.customer?.phone_number
        ? `(${payload.customer.phone_area_code}) ${payload.customer.phone_number}`
        : null;

      // Inserir ou atualizar tabela compras
      const { data: compraData, error: compraError } = await supabase.from('compras').upsert({
        email: customerEmail,
        nome_comprador: customerName,
        telefone: phoneFull,
        produto: payload.product?.name || 'Depois dos 60: 50 Cuidados',
        codigo_venda: saleCode,
        status_pagamento: 'approved',
        valor_pago: payload.sale_amount || null,
        payload_bruto: payload,
      }, { onConflict: 'codigo_venda' }).select('id').single();

      if (compraError) {
        throw new Error(`Erro ao salvar compra PerfectPay: ${compraError.message}`);
      }

      const compraId = compraData.id;

      // Verificar se já existe acesso ativo para esta compra específica
      let { data: existingAccess } = await supabase
        .from('ebook_access')
        .select('id')
        .eq('compra_id', compraId)
        .single();

      if (!existingAccess) {
        // Gerar token seguro aleatório
        const rawToken = `${crypto.randomUUID()}-${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
        
        // Calcular SHA-256 Hash do token
        const msgUint8 = new TextEncoder().encode(rawToken);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const tokenHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        const { error: accessError } = await supabase.from('ebook_access').insert({
          compra_id: compraId,
          email: customerEmail,
          ebook_id: 'depois-dos-60',
          token_hash: tokenHash,
          status: 'active',
        });

        if (accessError) {
          throw new Error(`Erro ao criar acesso ao eBook: ${accessError.message}`);
        }

        // Enviar e-mail automático via Resend com o token original (apenas enviado ao cliente)
        if (resendApiKey) {
          await enviarEmailAcessoEbook({
            resendApiKey,
            toEmail: customerEmail,
            customerName: customerName.split(' ')[0],
            appUrl,
            rawToken,
          });
        }
      }

      if (logId) {
        await supabase.from('webhook_logs').update({ processado: true, sucesso: true }).eq('id', logId);
      }

      return new Response(
        JSON.stringify({ success: true, message: 'Venda PerfectPay processada e acesso liberado.' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 2. REEMBOLSO OU CHARGEBACK ('refunded') - REVOGAÇÃO ESPECÍFICA POR COMPRA
    if (saleStatus === 'refunded' && saleCode !== 'N/A') {
      const { data: compraEncontrada } = await supabase
        .from('compras')
        .select('id')
        .eq('codigo_venda', saleCode)
        .single();

      if (compraEncontrada) {
        await supabase.from('compras').update({
          status_pagamento: 'refunded',
        }).eq('id', compraEncontrada.id);

        // Revogar acesso SOMENTE para o compra_id correspondente (sem afetar outras compras do mesmo e-mail)
        await supabase.from('ebook_access').update({
          status: 'revoked',
        }).eq('compra_id', compraEncontrada.id);
      } else {
        console.warn(`Compra PerfectPay não encontrada para estorno com code: ${saleCode}`);
      }

      if (logId) {
        await supabase.from('webhook_logs').update({ processado: true, sucesso: true }).eq('id', logId);
      }

      return new Response(
        JSON.stringify({ success: true, action: 'revoked_specific', message: 'Acesso revogado especificamente para a compra PerfectPay correspondente.' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (logId) {
      await supabase.from('webhook_logs').update({ processado: true, sucesso: true }).eq('id', logId);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Status de webhook PerfectPay ignorado com sucesso.' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erro ao processar webhook PerfectPay:', error);
    if (logId) {
      await supabase.from('webhook_logs').update({ mensagem_erro: String(error), processado: true, sucesso: false }).eq('id', logId);
    }
    return new Response(
      JSON.stringify({ error: 'Erro interno ao processar webhook PerfectPay.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

async function enviarEmailAcessoEbook(params: {
  resendApiKey: string;
  toEmail: string;
  customerName: string;
  appUrl: string;
  rawToken: string;
}) {
  const { resendApiKey, toEmail, customerName, appUrl, rawToken } = params;
  const secureAccessUrl = `${appUrl}/membros?token=${encodeURIComponent(rawToken)}`;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Depois dos 60 <acesso@depoisdos60.com.br>',
      to: [toEmail],
      subject: `[Acesso Liberado] Seu eBook "Depois dos 60" está pronto para leitura! 🎉`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1f2937;">
          <h2 style="color: #059669;">Olá, ${customerName}!</h2>
          <p>Seu pagamento via PerfectPay foi confirmado com sucesso e seu acesso ao eBook <strong>"Depois dos 60: 50 Cuidados"</strong> já está liberado.</p>
          <p>Você pode ler diretamente no seu celular ou computador através do nosso leitor online exclusivo (não é necessário baixar nenhum arquivo).</p>
          
          <div style="text-align: center; margin: 35px 0;">
            <a href="${secureAccessUrl}" style="background-color: #059669; color: white; padding: 16px 28px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px rgba(5, 150, 105, 0.2);">
              📖 Acessar Meu eBook Agora
            </a>
          </div>

          <p style="font-size: 13px; color: #6b7280; line-height: 1.5;">
            Guarde este e-mail para acessar sempre que quiser. Se tiver qualquer dúvida, responda a esta mensagem.
          </p>
        </div>
      `,
    }),
  });
}
