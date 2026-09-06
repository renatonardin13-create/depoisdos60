# Integração Webhook Kiwify (Supabase Edge Function)

Esta pasta contém a Edge Function e o esquema de banco de dados no **Supabase** para receber os postbacks da **Kiwify** e gerenciar exclusivamente o **trial de 7 dias do aplicativo Viva+60**.

---

## 📁 Estrutura de Arquivos

- `schema.sql`: Script SQL com a estrutura das tabelas `compras`, `webhook_logs` e regras de RLS (Row Level Security).
- `functions/webhook-kiwify/index.ts`: Edge Function (Deno) que processa as requisições HTTP POST da Kiwify e ativa/revoga o acesso ao Viva+60.

---

## ⚙️ Passo a Passo para Implantação no Supabase

### 1. Executar o Script SQL
Acesse o painel do seu projeto no **Supabase** > **SQL Editor** e execute o conteúdo do arquivo `supabase/schema.sql`.

### 2. Configurar as Variáveis de Ambiente / Secrets
No terminal com o Supabase CLI ou no painel do Supabase (**Project Settings** > **Edge Functions** > **Secrets**), adicione:

```bash
supabase secrets set KIWIFY_WEBHOOK_SECRET="seu_webhook_secret_da_kiwify"
supabase secrets set RESEND_API_KEY="re_123456789" # Opcional: para disparo de e-mails
supabase secrets set VIVA60_APP_URL="https://app.depoisdos60.com.br"
```

### 3. Publicar a Edge Function
No seu terminal local, execute:

```bash
supabase functions deploy webhook-kiwify --no-verify-jwt
```

---

## 🔗 Configuração no Painel da Kiwify

1. Acesse o painel da **Kiwify** > **Webhooks**.
2. Clique em **Criar Webhook**.
3. Configure:
   - **Nome**: Integração Viva+60
   - **URL de Envio**: `https://<seu-projeto>.supabase.co/functions/v1/webhook-kiwify`
   - **Eventos**: Pagamento Aprovado, Reembolso, Chargeback.
4. Copie o **Webhook Secret** e configure no Supabase como `KIWIFY_WEBHOOK_SECRET`.

---

## 🧪 Testando com cURL (Simulação)

### Venda Aprovada
```bash
curl -X POST https://<seu-projeto>.supabase.co/functions/v1/webhook-kiwify \
  -H "Content-Type: application/json" \
  -d '{
    "order_id": "KWF12345",
    "order_status": "paid",
    "customer": {
      "full_name": "Maria Silva",
      "email": "maria.silva@exemplo.com",
      "mobile": "11999998888"
    },
    "product": {
      "product_name": "Depois dos 60: 50 Cuidados"
    }
  }'
```
