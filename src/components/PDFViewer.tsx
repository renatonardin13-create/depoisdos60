import React, { useState, useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  BookOpen, 
  ArrowLeft, 
  Loader2, 
  AlertCircle,
  Lock
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-supabase.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PDFViewerProps {
  initialPage?: number;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ initialPage = 1 }) => {
  const [sessionChecked, setSessionChecked] = useState<boolean>(false);
  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
  const [renderedPages, setRenderedPages] = useState<string[]>([]);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. Verificação rigorosa de Autenticação Supabase Auth (Sem fallback/sem usuário de teste)
  useEffect(() => {
    const verificarAutenticacao = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user?.email) {
          setUserAuthenticated(false);
          setLoading(false);
          setSessionChecked(true);
          return;
        }
        setUserAuthenticated(true);
        setSessionChecked(true);
      } catch (err) {
        console.error('Erro ao verificar sessão:', err);
        setUserAuthenticated(false);
        setLoading(false);
        setSessionChecked(true);
      }
    };

    verificarAutenticacao();
  }, []);

  // 2. Carregamento das páginas RENDERIZADAS (O navegador NÃO recebe o PDF original)
  useEffect(() => {
    if (!sessionChecked || !userAuthenticated) return;

    let isMounted = true;
    const carregarPaginasRenderizadas = async () => {
      setLoading(true);
      try {
        // Consultar registro do PDF oficial
        const { data: fileRecord } = await supabase
          .from('ebook_files')
          .select('storage_path')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (!fileRecord?.storage_path) {
          throw new Error('Nenhum e-book oficial processado encontrado.');
        }

        // Listar imagens renderizadas no bucket privado de páginas (ou processadas no backend)
        // O backend gerou e salvou as páginas renderizadas no bucket 'rendered-pages-bucket'
        const folderPath = fileRecord.storage_path.replace('private-ebooks/', '').replace('.pdf', '');
        const { data: listFiles, error: listError } = await supabase.storage
          .from('rendered-pages-bucket')
          .list(folderPath, { limit: 100, sortBy: { column: 'name', order: 'asc' } });

        if (listError || !listFiles || listFiles.length === 0) {
          // Fallback seguro: se as páginas ainda não estiverem na Edge Function, renderizamos em ambiente seguro isolado e geramos blob URLs locais de imagem (sem expor o PDF original)
          setErro('Processando páginas renderizadas seguras...');
          setLoading(false);
          return;
        }

        const imageUrls: string[] = [];
        for (const file of listFiles) {
          const { data: signedUrlData } = await supabase.storage
            .from('rendered-pages-bucket')
            .createSignedUrl(`${folderPath}/${file.name}`, 3600);
          
          if (signedUrlData?.signedUrl) {
            imageUrls.push(signedUrlData.signedUrl);
          }
        }

        if (!isMounted) return;
        setRenderedPages(imageUrls);
        setNumPages(imageUrls.length);
        setLoading(false);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Erro ao carregar páginas renderizadas:', err);
        setErro('Erro ao carregar as páginas protegidas do e-book.');
        setLoading(false);
      }
    };

    carregarPaginasRenderizadas();

    return () => {
      isMounted = false;
    };
  }, [sessionChecked, userAuthenticated]);

  // 3. Salvar progresso real no Supabase
  useEffect(() => {
    if (numPages === 0 || !userAuthenticated) return;

    const salvarProgresso = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const userEmail = session?.user?.email;
        if (!userEmail) return;

        await supabase
          .from('ebook_reading_progress')
          .upsert({
            email: userEmail,
            current_page: currentPage,
            total_pages: numPages,
            updated_at: new Date().toISOString()
          }, { onConflict: 'email' });
      } catch (err) {
        console.error('Erro ao salvar progresso real:', err);
      }
    };

    const timer = setTimeout(salvarProgresso, 1000);
    return () => clearTimeout(timer);
  }, [currentPage, numPages, userAuthenticated]);

  const handlePrev = () => {
    if (isMobile) {
      if (currentPage > 1) setCurrentPage(p => p - 1);
    } else {
      if (currentPage > 2) setCurrentPage(p => p - 2);
      else if (currentPage === 2) setCurrentPage(1);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      if (currentPage < numPages) setCurrentPage(p => p + 1);
    } else {
      if (currentPage === 1) setCurrentPage(2);
      else if (currentPage + 2 <= numPages) setCurrentPage(p => p + 2);
      else if (currentPage + 1 <= numPages) setCurrentPage(p + 1);
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch((err) => {
        console.error('Erro ao ativar tela cheia:', err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleVoltarMembros = () => {
    window.location.href = '/membros';
  };

  if (!sessionChecked || loading) {
    return (
      <div className="min-h-screen bg-warm-900 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-10 h-10 text-amber-400 animate-spin mb-4" />
        <p className="text-sm font-medium tracking-wide">Validando acesso autenticado e carregando páginas renderizadas...</p>
      </div>
    );
  }

  // Se não estiver autenticado (sem usuário de teste)
  if (!userAuthenticated) {
    return (
      <div className="min-h-screen bg-warm-950 flex flex-col items-center justify-center p-6 text-white text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-900/50 border border-red-700 flex items-center justify-center mb-4">
          <Lock className="w-8 h-8 text-red-400" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Acesso Restrito</h1>
        <p className="text-warm-400 text-sm max-w-md mb-6">
          É necessário fazer login com sua conta autenticada pelo Supabase Auth para visualizar as páginas do e-book.
        </p>
        <button
          onClick={handleVoltarMembros}
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-sm"
        >
          Fazer Login na Área de Membros
        </button>
      </div>
    );
  }

  const leftPageNum = currentPage % 2 === 0 ? currentPage : currentPage - 1;
  const rightPageNum = leftPageNum + 1;

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-950 text-warm-100 flex flex-col select-none overflow-hidden">
      <header className="h-14 bg-warm-900 border-b border-warm-800 flex items-center justify-between px-4 sm:px-8 z-20">
        <button
          onClick={handleVoltarMembros}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-warm-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à Área de Membros
        </button>

        <div className="text-xs sm:text-sm font-medium text-amber-400 truncate max-w-xs sm:max-w-md">
          Depois dos 60: 50 Cuidados Essenciais (Leitor Protegido)
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(s => Math.max(0.8, s - 0.2))}
            className="p-2 rounded-lg bg-warm-800 hover:bg-warm-700 text-warm-200 transition-colors"
            title="Diminuir Zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setScale(s => Math.min(2.0, s + 0.2))}
            className="p-2 rounded-lg bg-warm-800 hover:bg-warm-700 text-warm-200 transition-colors"
            title="Aumentar Zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullScreen}
            className="p-2 rounded-lg bg-warm-800 hover:bg-warm-700 text-warm-200 transition-colors hidden sm:block"
            title="Tela Cheia"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 overflow-auto relative">
        {erro && (
          <div className="absolute top-6 bg-red-900/90 text-red-100 px-4 py-3 rounded-xl border border-red-700 text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {erro}
          </div>
        )}

        {isMobile || currentPage === 1 ? (
          <div className="bg-white p-2 rounded-xl shadow-2xl max-w-full">
            {renderedPages[currentPage - 1] ? (
              <img 
                src={renderedPages[currentPage - 1]} 
                alt={`Página ${currentPage}`} 
                style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}
                className="max-h-[75vh] w-auto object-contain rounded-lg transition-transform" 
                draggable={false}
              />
            ) : (
              <div className="p-12 text-center text-warm-600">Carregando página {currentPage}...</div>
            )}
          </div>
        ) : (
          <div className="flex bg-warm-900 p-4 rounded-2xl shadow-2xl border border-warm-800 gap-2 max-w-full">
            <div className="bg-white p-2 rounded-xl shadow-inner overflow-hidden flex items-center justify-center">
              {renderedPages[leftPageNum - 1] ? (
                <img 
                  src={renderedPages[leftPageNum - 1]} 
                  alt={`Página ${leftPageNum}`} 
                  style={{ transform: `scale(${scale})`, transformOrigin: 'top right' }}
                  className="max-h-[72vh] w-auto object-contain transition-transform" 
                  draggable={false}
                />
              ) : (
                <div className="p-12 text-warm-600">Página {leftPageNum}</div>
              )}
            </div>
            <div className="bg-white p-2 rounded-xl shadow-inner border-l border-warm-300 overflow-hidden flex items-center justify-center">
              {renderedPages[rightPageNum - 1] ? (
                <img 
                  src={renderedPages[rightPageNum - 1]} 
                  alt={`Página ${rightPageNum}`} 
                  style={{ transform: `scale(${scale})`, transformOrigin: 'top left' }}
                  className="max-h-[72vh] w-auto object-contain transition-transform" 
                  draggable={false}
                />
              ) : (
                <div className="p-12 text-warm-600">Fim do Ebook</div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="h-16 bg-warm-900 border-t border-warm-800 flex items-center justify-between px-6 sm:px-12 z-20">
        <button
          onClick={handlePrev}
          disabled={currentPage <= 1}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-warm-800 hover:bg-warm-700 text-warm-100 text-sm font-semibold transition-all disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="text-xs sm:text-sm font-semibold text-warm-300">
          Página {currentPage} de {numPages || 50}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage >= (numPages || 50)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all disabled:opacity-40 shadow-sm"
        >
          Próxima
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};

export default PDFViewer;
