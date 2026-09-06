import React, { useState, useRef, useEffect } from 'react';
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
  AlertCircle
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
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const canvasLeftRef = useRef<HTMLCanvasElement>(null);
  const canvasRightRef = useRef<HTMLCanvasElement>(null);
  const canvasSingleRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const carregarPdfDoSupabase = async () => {
      setLoading(true);
      try {
        const { data: fileRecord } = await supabase
          .from('ebook_files')
          .select('storage_path')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        let pdfSource = 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
        
        if (fileRecord?.storage_path) {
          const { data: signedUrlData } = await supabase.storage
            .from('ebook-bucket')
            .createSignedUrl(fileRecord.storage_path, 3600);

          if (signedUrlData?.signedUrl) {
            pdfSource = signedUrlData.signedUrl;
          }
        }

        const loadingTask = pdfjsLib.getDocument(pdfSource);
        const doc = await loadingTask.promise;

        if (!isMounted) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages || 50);
        setLoading(false);
      } catch (err) {
        if (!isMounted) return;
        console.error('Erro ao carregar PDF do Supabase:', err);
        setErro('Erro ao carregar o e-book do servidor seguro.');
        setLoading(false);
      }
    };

    carregarPdfDoSupabase();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (numPages === 0) return;

    const salvarProgresso = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const userEmail = session?.user?.email || 'usuario.teste@exemplo.com.br';

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
  }, [currentPage, numPages]);

  useEffect(() => {
    if (!pdfDoc) return;

    const renderPageToCanvas = async (pageNum: number, canvasEl: HTMLCanvasElement | null) => {
      if (!canvasEl || pageNum < 1 || pageNum > numPages) return;
      try {
        const page = await pdfDoc.getPage(pageNum);
        const context = canvasEl.getContext('2d');
        if (!context) return;

        const viewport = page.getViewport({ scale });
        canvasEl.height = viewport.height;
        canvasEl.width = viewport.width;

        await page.render({
          canvasContext: context,
          viewport: viewport
        }).promise;
      } catch (err) {
        console.error(`Erro ao renderizar página ${pageNum}:`, err);
      }
    };

    if (isMobile || currentPage === 1) {
      renderPageToCanvas(currentPage, canvasSingleRef.current);
    } else {
      const leftPage = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      const rightPage = leftPage + 1;

      renderPageToCanvas(leftPage, canvasLeftRef.current);
      if (rightPage <= numPages) {
        renderPageToCanvas(rightPage, canvasRightRef.current);
      }
    }
  }, [pdfDoc, currentPage, scale, numPages, isMobile]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-900 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-10 h-10 text-amber-400 animate-spin mb-4" />
        <p className="text-sm font-medium tracking-wide">Carregando e-book protegido do Supabase Storage...</p>
      </div>
    );
  }

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
          Depois dos 60: 50 Cuidados Essenciais
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
            <canvas ref={canvasSingleRef} className="max-h-[75vh] w-auto object-contain rounded-lg shadow-sm" />
          </div>
        ) : (
          <div className="flex bg-warm-900 p-4 rounded-2xl shadow-2xl border border-warm-800 gap-2 max-w-full">
            <div className="bg-white p-2 rounded-xl shadow-inner">
              <canvas ref={canvasLeftRef} className="max-h-[72vh] w-auto object-contain" />
            </div>
            <div className="bg-white p-2 rounded-xl shadow-inner border-l border-warm-300">
              <canvas ref={canvasRightRef} className="max-h-[72vh] w-auto object-contain" />
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
          Página {currentPage} de {numPages}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage >= numPages}
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
