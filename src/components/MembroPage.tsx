import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Loader2, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen,
  Calendar, 
  Mail, 
  Sparkles,
  Lock,
  ExternalLink
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface AcessoData {
  valido: boolean;
  email?: string;
  nome?: string;
  data_compra?: string;
  produto?: string;
  accessId?: string;
  savedPage?: number;
}

export const MembroPage: React.FC = () => {
  const [acesso, setAcesso] = useState<AcessoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState<string>('');
  const [verificandoEmail, setVerificandoEmail] = useState<boolean>(false);

  useEffect(() => {
    const verificarSessaoOuToken = async () => {
      setLoading(true);
      try {
        // Verificar sessão ativa do Supabase Auth
        const { data: { session } } = await supabase.auth.getSession();
        
        let userEmail = session?.user?.email;

        // Se não houver sessão ativa, verificar parâmetro na URL (?email=... ou ?token=...)
        const searchParams = new URLSearchParams(window.location.search);
        const urlEmail = searchParams.get('email');
        const token = searchParams.get('token');

        if (urlEmail) {
          userEmail = urlEmail;
        } else if (token) {
          // Consultar token na tabela ebook_access
          const { data: accessByToken, error: tokenErr } = await supabase
            .from('ebook_access')
            .select('*')
            .eq('transaction_id', token)
            .single();

          if (accessByToken && !tokenErr) {
            userEmail = accessByToken.email;
          }
        }

        if (!userEmail) {
          setLoading(false);
          setAcesso({ valido: false });
          return;
        }

        // Consulta REAL na tabela ebook_access do Supabase
        const { data: accessData, error: accessError } = await supabase
          .from('ebook_access')
          .select('*')
          .eq('email', userEmail)
          .eq('status', 'active')
          .single();

        if (accessError || !accessData) {
          setAcesso({ valido: false });
          setErro('Nenhuma compra ativa encontrada para este e-mail. Realize a compra para liberar o acesso.');
          setLoading(false);
          return;
        }

        // Buscar progresso de leitura real
        const { data: progressData } = await supabase
          .from('ebook_reading_progress')
          .select('current_page')
          .eq('email', userEmail)
          .single();

        setAcesso({
          valido: true,
          email: accessData.email,
          nome: accessData.name || 'Cliente Verificado',
          data_compra: new Date(accessData.created_at).toLocaleDateString('pt-BR'),
          produto: 'Depois dos 60: 50 Cuidados Essenciais',
          accessId: accessData.id,
          savedPage: progressData?.current_page || 1,
        });

      } catch (err) {
        console.error('Erro ao verificar acesso real:', err);
        setErro('Erro ao conectar com o banco de dados Supabase.');
      } finally {
        setLoading(false);
      }
    };

    verificarSessaoOuToken();
  }, []);

  const handleVerificarEmailManual = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;

    setVerificandoEmail(true);
    setErro(null);

    try {
      const { data: accessData, error: accessError } = await supabase
        .from('ebook_access')
        .select('*')
        .eq('email', emailInput.trim().toLowerCase())
        .eq('status', 'active')
        .single();

      if (accessError || !accessData) {
        setErro('E-mail não encontrado ou sem acesso ativo. Verifique o e-mail cadastrado na compra.');
        setVerificandoEmail(false);
        return;
      }

      const { data: progressData } = await supabase
        .from('ebook_reading_progress')
        .select('current_page')
        .eq('email', accessData.email)
        .single();

      setAcesso({
        valido: true,
        email: accessData.email,
        nome: accessData.name || 'Cliente Verificado',
        data_compra: new Date(accessData.created_at).toLocaleDateString('pt-BR'),
        produto: 'Depois dos 60: 50 Cuidados Essenciais',
        accessId: accessData.id,
        savedPage: progressData?.current_page || 1,
      });
    } catch (err) {
      console.error('Erro na consulta manual:', err);
      setErro('Falha ao consultar acesso no Supabase.');
    } finally {
      setVerificandoEmail(false);
    }
  };

  const handleAbrirEbook = () => {
    const page = acesso?.savedPage || 1;
    window.location.href = `/membros/ebook?page=${page}`;
  };

  const handleVoltarHome = () => {
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
      </div>
    );
  }

  // Se não estiver autenticado ou sem acesso aprovado
  if (!acesso || !acesso.valido) {
    return (
      <div className="min-h-screen bg-warm-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-warm-200 p-8 text-center">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-warm-900 mb-2">Área de Membros Protegida</h1>
          <p className="text-sm text-warm-600 mb-6">
            Insira o e-mail utilizado no momento da compra para acessar instantaneamente o seu e-book.
          </p>

          {erro && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-medium border border-red-200">
              {erro}
            </div>
          )}

          <form onSubmit={handleVerificarEmailManual} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Seu e-mail de compra"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-warm-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={verificandoEmail}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {verificandoEmail ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
              Acessar Meus Produtos
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-warm-100 flex items-center justify-between text-xs text-warm-500">
            <button onClick={handleVoltarHome} className="hover:text-emerald-700 font-medium">
              &larr; Voltar à Página Principal
            </button>
            <a href="https://go.perfectpay.com.br/PPU38CQFTDE" target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold hover:underline">
              Comprar Ebook (R$ 37)
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 font-sans">
      <header className="bg-white border-b border-warm-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-warm-900">Depois dos 60</span>
            <span className="text-warm-300">|</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
              Área do Aluno
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-semibold text-warm-900">{acesso.nome}</div>
              <div className="text-[11px] text-warm-500">{acesso.email}</div>
            </div>
            <button 
              onClick={() => { window.location.href = '/admin/ebook'; }}
              className="text-xs font-medium text-warm-600 hover:text-emerald-700 underline"
            >
              Painel Admin
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg mb-10 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 translate-x-10 translate-y-10">
            <BookOpen className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-800/80 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-emerald-700/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Acesso Verificado e Liberado
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-3">
              Bem-vindo(a) de volta, {acesso.nome}!
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base mb-6 leading-relaxed">
              Seu acesso ao e-book oficial está ativo e seguro. Leia online diretamente pelo nosso leitor protegido com salvamento automático de progresso.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleAbrirEbook}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-warm-950 font-bold shadow-md transition-all text-sm"
              >
                <BookOpen className="w-5 h-5" />
                ABRIR EBOOK AGORA
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-warm-200 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-warm-500 mb-1">Meu Produto</div>
              <div className="text-base font-bold text-warm-900 mb-1">{acesso.produto}</div>
              <div className="text-xs text-warm-600 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                Adquirido em {acesso.data_compra}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-warm-200 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-warm-500 mb-1">Progresso de Leitura</div>
              <div className="text-base font-bold text-warm-900 mb-1">Página {acesso.savedPage} de 50</div>
              <div className="text-xs text-warm-600">
                Sincronizado com o Supabase
              </div>
            </div>
            <button
              onClick={handleAbrirEbook}
              className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembroPage;
