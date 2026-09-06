import React, { useState, useRef, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  BookOpen, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2,
  FileText
} from 'lucide-react';

// Configurar o PDF.js worker via CDN conforme especificado
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl?: string;
  titulo?: string;
  emailCliente?: string;
  initialPage?: number;
  onPageChange?: (page: number, totalPages: number) => void;
  onOpenCheckout?: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ 
  pdfUrl = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf', 
  titulo = 'Depois dos 60: 50 Cuidados que Todo Idoso Precisa',
  emailCliente,
  initialPage = 1,
  onPageChange,
  onOpenCheckout 
}) => {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [scale, setScale] = useState<number>(1.2);
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);
  const [pageInput, setPageInput] = useState<string>(String(initialPage));
  const [renderLoading, setRenderLoading] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Carregar documento PDF
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setErro(null);

    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise
      .then((doc) => {
        if (!isMounted) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        if (initialPage > 1 && initialPage <= doc.numPages) {
          setCurrentPage(initialPage);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('Erro ao carregar PDF:', err);
        setErro('Não foi possível carregar o arquivo PDF. Verifique o link ou sua conexão.');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [pdfUrl, initialPage]);

  // Notificar alteração de página
  useEffect(() => {
    if (numPages > 0 && onPageChange) {
      onPageChange(currentPage, numPages);
    }
  }, [currentPage, numPages, onPageChange]);

  // Renderizar página atual no canvas
  useEffect(() => {
    if (!pdfDoc || currentPage < 1 || currentPage > numPages) return;

    let isCancelled = false;
    setRenderLoading(true);

    pdfDoc.getPage(currentPage).then((page: any) => {
      if (isCancelled) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      const renderTask = page.render(renderContext);
      renderTask.promise.then(() => {
        if (!isCancelled) {
          setRenderLoading(false);
        }
      }).catch((err: any) => {
        if (!isCancelled) {
          console.error('Erro ao renderizar página:', err);
          setRenderLoading(false);
        }
      });
    }).catch((err: any) => {
      if (!isCancelled) {
        console.error('Erro ao obter página:', err);
        setRenderLoading(false);
      }
    });

    setPageInput(String(currentPage));

    return () => {
      isCancelled = true;
    };
  }, [pdfDoc, currentPage, scale, numPages]);

  // Manipuladores de navegação
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageInput(e.target.value);
  };

  const handlePageInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
    } else {
      setPageInput(String(currentPage));
    }
  };

  // Manipuladores de Zoom (80% a 200%)
  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.8));
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-warm-200 overflow-hidden flex flex-col my-6 font-sans">
      {/* 1. Header gradiente verde (#10b981 → #059669) */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-100 bg-emerald-800/40 px-2 py-0.5 rounded-md">
              Ebook Oficial • Leitor Seguro
            </span>
            <h3 className="font-display font-bold text-lg text-white leading-tight mt-0.5">
              {titulo}
            </h3>
          </div>
        </div>

        {emailCliente && (
          <div className="text-xs text-emerald-100 bg-emerald-900/40 px-3 py-1.5 rounded-xl border border-emerald-400/30 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Licenciado para: <strong className="text-white">{emailCliente}</strong></span>
          </div>
        )}
      </div>

      {/* 2. Barra de Controles & Ferramentas */}
      <div className="bg-warm-100/80 border-b border-warm-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Navegação de Páginas */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage <= 1 || loading}
            className="p-2 rounded-xl bg-white border border-warm-300 text-warm-700 hover:bg-warm-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs flex items-center gap-1 text-xs font-bold"
            title="Página Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <form onSubmit={handlePageInputSubmit} className="flex items-center gap-1.5 text-xs font-semibold text-warm-700">
            <span>Página</span>
            <input
              type="text"
              value={pageInput}
              onChange={handlePageInputChange}
              className="w-12 text-center py-1 bg-white border border-warm-300 rounded-lg text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span>de {numPages || '...'}</span>
          </form>

          <button
            onClick={handleNextPage}
            disabled={currentPage >= numPages || loading}
            className="p-2 rounded-xl bg-white border border-warm-300 text-warm-700 hover:bg-warm-50 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs flex items-center gap-1 text-xs font-bold"
            title="Próxima Página"
          >
            <span className="hidden sm:inline">Próxima</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Controles de Zoom */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white border border-warm-300 rounded-xl p-1 shadow-2xs">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.8 || loading}
              className="p-1.5 rounded-lg text-warm-700 hover:bg-warm-100 disabled:opacity-40 transition"
              title="Diminuir Zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold px-2 text-warm-800 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 2.0 || loading}
              className="p-1.5 rounded-lg text-warm-700 hover:bg-warm-100 disabled:opacity-40 transition"
              title="Aumentar Zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Área de Visualização do Canvas (PDF Page) */}
      <div 
        ref={containerRef}
        className="w-full bg-warm-100 min-h-[500px] max-h-[750px] overflow-auto flex items-center justify-center p-4 sm:p-8 relative"
      >
        {loading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-10">
            <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
            <p className="text-sm font-semibold text-warm-700">Carregando livro digital...</p>
          </div>
        )}

        {erro && (
          <div className="max-w-md mx-auto text-center p-6 bg-red-50 rounded-2xl border border-red-200 text-red-800 my-12">
            <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-2" />
            <h4 className="font-bold text-base mb-1">Erro no Leitor</h4>
            <p className="text-xs text-red-700 mb-4">{erro}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {!erro && (
          <div className="relative shadow-2xl rounded-lg bg-white overflow-hidden border border-warm-300">
            {renderLoading && !loading && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-2xs flex items-center justify-center z-10">
                <Loader2 className="w-6 h-6 text-emerald-600 animate-spin" />
              </div>
            )}
            <canvas ref={canvasRef} className="block max-w-full h-auto shadow-sm" />
          </div>
        )}
      </div>

      {/* 4. Footer & CTA Viva+60 */}
      <div className="bg-warm-50 border-t border-warm-200 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-warm-600 text-center md:text-left">
          <FileText className="w-5 h-5 text-emerald-600 shrink-0 hidden sm:block" />
          <div>
            <p className="font-semibold text-warm-900">Guia Prático • 50 Cuidados Essenciais para Idosos</p>
            <p className="text-warm-500 text-[11px]">Leitura online protegida. Navegue pelas páginas acima para continuar.</p>
          </div>
        </div>

        {onOpenCheckout && (
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={onOpenCheckout}
              className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Conhecer App Viva+60 (7 Dias Grátis)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
