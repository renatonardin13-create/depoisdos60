import React, { useState, useEffect, useRef } from 'react';
import { PDFViewer } from '../components/PDFViewer';
import { 
  ShieldCheck, 
  AlertCircle, 
  Loader2, 
  ArrowLeft, 
  Smartphone, 
  CheckCircle2, 
  Calendar, 
  Mail, 
  BookOpen,
  Sparkles,
  RotateCcw
} from 'lucide-react';

interface AcessoData {
  valido: boolean;
  email?: string;
  nome?: string;
  data_compra?: string;
  produto?: string;
  pdfUrl?: string;
  accessId?: string;
  savedPage?: number;
}

export const MembroPage: React.FC = () => {
  const [token, setToken] = useState<string>('');
  const [acesso, setAcesso] = useState<AcessoData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [initialPageToLoad, setInitialPageToLoad] = useState<number>(1);
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [savedProgressPage, setSavedProgressPage] = useState<number>(1);

  // Debounce ref para salvar progresso
  const saveTimeoutRef = useRef<any>(null);

  useEffect(() => {
    // Extrair token seguro da URL (?token=...)
    const searchParams = new URLSearchParams(window.location.search);
    const queryToken = searchParams.get('token') || '';

    // Se estiver em modo de demonstração ou desenvolvimento sem token na URL, podemos aceitar demo-token para testes visuais
    const activeToken = queryToken || (window.location.hostname === 'localhost' ? 'demo-token-123' : '');
    setToken(activeToken);

    if (!activeToken) {
      setLoading(false);
      setErro('Nenhum token de acesso válido foi informado. Verifique o link recebido por e-mail.');
      return;
    }

    const validarAcessoToken = async () => {
      setLoading(true);
      setErro(null);

      try {
        // Se for token de demonstração em ambiente local
        if (activeToken === 'demo-token-123') {
          await new Promise((r) => setTimeout(r, 800));
          setAcesso({
            valido: true,
            email: 'cliente.teste@exemplo.com.br',
            nome: 'Carlos Eduardo',
            data_compra: new Date().toLocaleDateString('pt-BR'),
            produto: 'Depois dos 60: 50 Cuidados Essenciais',
            pdfUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
            accessId: 'demo-access-id',
            savedPage: 12,
          });
          setSavedProgressPage(12);
          if (12 > 1) {
            setShowResumeModal(true);
          } else {
            setInitialPageToLoad(1);
          }
          setLoading(false);
          return;
        }

        // Validação real via API backend ou Supabase REST/Client
        // Nota: Em produção, utilize rotas seguras do servidor. Aqui simulamos a validação contra a tabela ebook_access e compras.
        await new Promise((r) => setTimeout(r, 1000));

        // Simulação de resposta válida baseada no token
        setAcesso({
          valido: true,
          email: 'usuario.autenticado@exemplo.com.br',
          nome: 'Maria da Silva',
          data_compra: new Date().toLocaleDateString('pt-BR'),
          produto: 'Depois dos 60: 50 Cuidados Essenciais',
          pdfUrl: 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf',
          accessId: 'real-access-id-1',
          savedPage: 1,
        });
        setInitialPageToLoad(1);
      } catch (err) {
        console.error('Erro ao validar token:', err);
        setErro('Erro de conexão ao validar seu token de acesso.');
      } finally {
        setLoading(false);
      }
    };

    validarAcessoToken();
  }, []);

  // Função para salvar progresso com debounce (evita gravações excessivas)
  const handlePageChange = (page: number, totalPages: number) => {
    if (!acesso?.accessId) return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(async () => {
      try {
        console.log(`Salvando progresso: página ${page} de ${totalPages} para o token ${token}`);
        // Em produção: chamada supabase.from('reading_progress').upsert({ ebook_access_id: acesso.accessId, email: acesso.email, current_page: page, total_pages: totalPages })
      } catch (err) {
        console.error('Erro ao salvar progresso de leitura:', err);
      }
    }, 1500); // Debounce de 1.5s
  };

  const handleResumeReading = (resume: boolean) => {
    setShowResumeModal(false);
    if (resume) {
      setInitialPageToLoad(savedProgressPage);
    } else {
      setInitialPageToLoad(1);
    }
  };

  const handleVoltarHome = () => {
    window.location.href = '/';
  };

  const handleAbrirCheckoutViva60 = () => {
    window.open('https://viva-mais-60.vercel.app', '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-warm-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4 shadow-sm animate-pulse">
          <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
        </div>
        <h2 className="text-xl font-display font-bold text-warm-900 mb-2">Validando seu acesso seguro...</h2>
        <p className="text-sm text-warm-600 max-w-sm">
          Estamos verificando suas credenciais de compra e ativando seu leitor digital. Aguarde um instante.
        </p>
      </div>
    );
  }

  if (erro || !acesso || !acesso.valido) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50/50 via-white to-warm-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 rounded-3xl bg-red-100 flex items-center justify-center mb-5 shadow-sm text-red-600">
          <AlertCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-display font-bold text-warm-950 mb-2">Acesso Restrito ou Negado</h2>
        <p className="text-sm text-warm-600 max-w-md mb-6 leading-relaxed">
          {erro || 'Não encontramos uma compra aprovada associada a este token. O acesso ao eBook é exclusivo para clientes com pagamento confirmado.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
          <button
            onClick={handleVoltarHome}
            className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para Página Inicial</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/60 via-white to-warm-50 text-warm-900 flex flex-col font-sans">
      {/* Modal de Retomar Leitura */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-warm-200 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-display font-bold text-warm-950 mb-2">Continuar de onde parou?</h3>
            <p className="text-sm text-warm-600 mb-6">
              Identificamos que sua última leitura foi na <strong className="text-emerald-700">página {savedProgressPage}</strong>. Deseja continuar de onde parou ou começar do início?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleResumeReading(true)}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-md"
              >
                Continuar da Página {savedProgressPage}
              </button>
              <button
                onClick={() => handleResumeReading(false)}
                className="py-3 px-4 rounded-xl bg-warm-200 hover:bg-warm-300 text-warm-950 font-bold text-xs transition"
              >
                Começar do Início
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Banner de Membro Autenticado */}
      <header className="w-full bg-white border-b border-warm-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-display font-black text-lg shadow-sm">
              V+
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                Área de Membros Protegida
              </span>
              <h1 className="text-sm sm:text-base font-display font-bold text-warm-950">
                Depois dos 60 • Leitor Oficial
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-xs font-bold text-warm-900">{acesso.nome || 'Cliente'}</span>
              <span className="text-[11px] text-warm-500">{acesso.email}</span>
            </div>
            <button
              onClick={handleVoltarHome}
              className="px-3 py-2 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-700 text-xs font-bold transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/30 text-emerald-200 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <span>Compra Aprovada & Verificada</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Olá, {acesso.nome?.split(' ')[0] || 'Leitor'}! 👋
              </h2>
              <p className="text-emerald-100/90 text-sm max-w-xl leading-relaxed">
                Seu eBook <strong>"{acesso.produto}"</strong> está liberado para leitura online. Navegue pelas páginas abaixo com total conforto no celular ou computador.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2 text-xs text-emerald-100">
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Comprado em: <strong>{acesso.data_compra}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-100">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>E-mail: <strong>{acesso.email}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Leitor de eBook embutido com PDF.js */}
        <PDFViewer 
          pdfUrl={acesso.pdfUrl}
          titulo={acesso.produto}
          emailCliente={acesso.email}
          initialPage={initialPageToLoad}
          onPageChange={handlePageChange}
          onOpenCheckout={handleAbrirCheckoutViva60}
        />
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-warm-200 py-6 text-center text-xs text-warm-500">
        <p>© {new Date().getFullYear()} Depois dos 60. Todos os direitos reservados. Ambiente protegido por criptografia.</p>
      </footer>
    </div>
  );
};

export default MembroPage;
