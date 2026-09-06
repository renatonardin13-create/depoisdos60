import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Upload, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowLeft, 
  Eye, 
  Calendar, 
  Database,
  Lock,
  Sparkles
} from 'lucide-react';

interface EbookMeta {
  fileName: string;
  totalPages: number;
  status: 'published' | 'processing' | 'draft';
  publishedAt: string;
  fileSize: string;
}

export const AdminEbookPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  const [ebookMeta, setEbookMeta] = useState<EbookMeta>({
    fileName: 'Um_guia_pratico_com_50_cuidados_compressed.pdf',
    totalPages: 50,
    status: 'published',
    publishedAt: '05/09/2026',
    fileSize: '4.8 MB',
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Simular verificação de permissão de admin
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrorMsg('Por favor, selecione um arquivo em formato PDF válido.');
      return;
    }

    setUploading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      // Simulação do upload seguro para o Supabase Storage (Bucket Privado 'ebook-bucket')
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const sizeInMB = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
      
      setEbookMeta({
        fileName: file.name,
        totalPages: 50, // O PDF oficial tem 50 páginas
        status: 'published',
        publishedAt: new Date().toLocaleDateString('pt-BR'),
        fileSize: sizeInMB,
      });

      setSuccessMsg('PDF enviado e processado com sucesso para o bucket privado do Supabase Storage!');
    } catch (err) {
      console.error('Erro no upload:', err);
      setErrorMsg('Falha ao enviar o arquivo PDF. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  const handleVoltarMembros = () => {
    window.location.href = '/membros';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 text-warm-900 font-sans">
      {/* Top Header */}
      <header className="bg-white border-b border-warm-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleVoltarMembros}
              className="inline-flex items-center gap-2 text-sm font-medium text-warm-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar à Área de Membros
            </button>
            <span className="text-warm-300">|</span>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-200">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              Painel Administrativo Restrito
            </div>
          </div>
          <div className="text-xs text-warm-500">
            Supabase Storage &bull; Bucket Privado
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-warm-900 mb-2">
            Gerenciamento do Ebook Oficial
          </h1>
          <p className="text-warm-600 text-sm sm:text-base">
            Faça o upload ou substituição do arquivo PDF original. O sistema processa automaticamente a renderização protegida para o Leitor Online / Flipbook.
          </p>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">{successMsg}</div>
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-sm font-medium">{errorMsg}</div>
          </div>
        )}

        {/* Grid de Informações e Ações */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card de Status Atual */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-warm-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-warm-500">Status Atual</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  {ebookMeta.status === 'published' ? 'Publicado & Ativo' : 'Processando'}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs text-warm-500 mb-1">Arquivo Armazenado</div>
                  <div className="text-sm font-semibold text-warm-900 break-all flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                    {ebookMeta.fileName}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-warm-100">
                  <div>
                    <div className="text-xs text-warm-500">Páginas</div>
                    <div className="text-base font-bold text-warm-800">{ebookMeta.totalPages} páginas</div>
                  </div>
                  <div>
                    <div className="text-xs text-warm-500">Tamanho</div>
                    <div className="text-base font-bold text-warm-800">{ebookMeta.fileSize}</div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-warm-500 mb-1">Última Atualização</div>
                  <div className="text-xs font-medium text-warm-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-warm-400" />
                    {ebookMeta.publishedAt}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-warm-100">
              <a
                href="/membros/ebook?token=demo-token-123"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-warm-800 text-sm font-semibold transition-colors"
              >
                <Eye className="w-4 h-4" />
                Visualizar Leitor Online
              </a>
            </div>
          </div>

          {/* Card de Ações Admin (Upload / Substituição) */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 border border-warm-200 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-warm-900 mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-emerald-600" />
                Atualização do Arquivo PDF
              </h2>
              <p className="text-sm text-warm-600 mb-6">
                Envie o novo arquivo PDF oficial (exatamente 50 páginas). O arquivo será enviado diretamente para o Supabase Storage protegido, substituindo a versão anterior de forma segura.
              </p>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="application/pdf"
                className="hidden"
              />

              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-warm-300 hover:border-emerald-500 rounded-2xl p-8 text-center cursor-pointer bg-warm-50/50 hover:bg-emerald-50/30 transition-all group"
              >
                {uploading ? (
                  <div className="flex flex-col items-center py-4">
                    <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mb-3" />
                    <p className="text-sm font-semibold text-warm-800">Enviando e processando PDF...</p>
                    <p className="text-xs text-warm-500 mt-1">Isso pode levar alguns segundos.</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 group-hover:bg-emerald-200 text-emerald-700 flex items-center justify-center mb-4 transition-colors shadow-xs">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-base font-bold text-warm-900 mb-1">
                      Clique para selecionar o PDF ou arraste aqui
                    </p>
                    <p className="text-xs text-warm-500">
                      Formato aceito: PDF (Até 50MB) &bull; Fonte oficial de 50 páginas
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-warm-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-warm-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Protegido por políticas RLS e Storage privado
              </div>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm transition-all text-sm disabled:opacity-50"
              >
                <Upload className="w-4 h-4" />
                [ SUBSTITUIR PDF ]
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminEbookPage;
