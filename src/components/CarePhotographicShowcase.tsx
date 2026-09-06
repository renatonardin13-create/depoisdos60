import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout, 
  User, 
  Users, 
  Crown, 
  Heart, 
  Home, 
  FileText, 
  Settings, 
  Check, 
  Download, 
  Laptop, 
  ClipboardList,
  Footprints,
  ShieldCheck,
  UploadCloud,
  Image as ImageIcon,
  RotateCcw
} from 'lucide-react';

interface CarePhotographicShowcaseProps {
  onOpenCheckout?: () => void;
  className?: string;
}

export const CarePhotographicShowcase: React.FC<CarePhotographicShowcaseProps> = ({
  onOpenCheckout,
  className = '',
}) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage and standard public paths on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bonus_box_image_custom');
      if (saved) {
        setCustomImage(saved);
        return;
      }
    } catch {
      // ignore
    }

    // Check if user placed bonus-4-box.png in public folder
    const probeImg = new Image();
    probeImg.onload = () => setCustomImage('/bonus-4-box.png');
    probeImg.src = '/bonus-4-box.png';
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomImage(result);
        try {
          localStorage.setItem('bonus_box_image_custom', result);
        } catch {
          // ignore storage quota
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomImage(null);
    try {
      localStorage.removeItem('bonus_box_image_custom');
    } catch {
      // ignore
    }
  };

  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none w-full py-2 ${className}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Hidden file input for uploading the original PNG */}
      <input 
        ref={fileInputRef}
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* Ambient floor shadow */}
      <div 
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-emerald-950/50 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ===================================================================== */}
      {/* CASE A: USER'S ORIGINAL RENDERED PNG IMAGE (100% FAITHFUL TO IMAGE 2) */}
      {/* ===================================================================== */}
      {customImage ? (
        <div className="relative group/customImg flex flex-col items-center">
          <img 
            src={customImage} 
            alt="Bônus #4: 50 Ações Práticas - Depois dos 60" 
            className="w-full max-w-[420px] sm:max-w-[460px] h-auto object-contain filter drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)] cursor-pointer transition-transform duration-300 group-hover/customImg:scale-[1.015]"
            onClick={onOpenCheckout}
            referrerPolicy="no-referrer"
          />

          {/* Discreet controls to change or reset */}
          <div className="mt-3 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-stone-800 text-[11px] font-semibold shadow-xs border border-stone-300 hover:bg-white cursor-pointer"
            >
              <UploadCloud className="w-3.5 h-3.5 text-emerald-700" />
              <span>Trocar imagem</span>
            </button>
            <button
              type="button"
              onClick={handleResetImage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-100/90 text-stone-600 text-[11px] font-medium hover:text-stone-900 cursor-pointer"
              title="Restaurar visual padrão"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar</span>
            </button>
          </div>
        </div>
      ) : (
        /* ===================================================================== */
        /* CASE B: PRECISE 3D PRODUCT BOX (CLEAN, SOLID, NO SKEW DISTORTION)     */
        /* Plus an integrated dropzone prompt to load the original PNG file      */
        /* ===================================================================== */
        <div className="relative w-full max-w-[450px] mx-auto flex flex-col items-center">

          {/* Dropzone prompt banner */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`w-full mb-3 p-2.5 rounded-xl border-2 border-dashed transition-all cursor-pointer flex items-center justify-between gap-2 shadow-xs ${
              isDragging 
                ? 'bg-emerald-100 border-emerald-600 text-emerald-950 scale-102' 
                : 'bg-emerald-50/90 hover:bg-emerald-100/80 border-emerald-400/60 text-emerald-900'
            }`}
            title="Clique ou arraste o arquivo original PNG gerado pelo ChatGPT aqui"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                <UploadCloud className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="text-xs font-black block text-emerald-950">
                  Usar a Imagem Original PNG
                </span>
                <span className="text-[10px] text-emerald-700 font-medium block">
                  Arraste o arquivo PNG aqui ou clique para selecionar do computador
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider shrink-0 shadow-2xs">
              Carregar PNG
            </span>
          </div>

          {/* Clean 3D Box Representation with balanced, realistic proportions */}
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-2 border-[#12553e] bg-[#072418] cursor-pointer group"
            onClick={onOpenCheckout}
            title="Clique para garantir o Guia Completo"
          >
            {/* Box Header Graphic */}
            <div className="relative bg-gradient-to-b from-white via-[#f7fbf8] to-[#edf7f1] p-4 text-left border-b border-emerald-800">
              
              {/* Gold Ribbon Badge ("VERSÃO PREMIUM") */}
              <div className="absolute top-0 right-4 z-20 flex flex-col items-center">
                <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2.5 py-1.5 shadow-md border-x border-b border-amber-200 text-center font-black">
                  <Crown className="w-3.5 h-3.5 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                  <span className="text-[7.5px] font-black uppercase tracking-wider block leading-none">
                    VERSÃO
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider block leading-tight">
                    PREMIUM
                  </span>
                  <div className="h-[1px] w-full bg-stone-950/30 my-0.5" />
                  <span className="text-[5.5px] font-extrabold uppercase tracking-tight block leading-tight">
                    CONHECIMENTO<br />QUE TRANSFORMA<br />SUA VIDA
                  </span>
                </div>
                {/* Ribbon V-Cut Bottom */}
                <div 
                  className="w-full h-2.5 bg-[#d97706]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                />
              </div>

              {/* Brand Header */}
              <div className="space-y-0.5 max-w-[70%]">
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-[#2ea542] shrink-0" />
                  <h2 className="font-display font-black text-xl sm:text-2xl text-[#0b3323] tracking-tight leading-none">
                    Depois dos<span className="text-[#2ea542]">60</span>
                  </h2>
                </div>
                <p className="text-[9px] sm:text-[10px] text-[#0f3b2a] font-bold tracking-tight">
                  Guia Prático de Prevenção & Autonomia
                </p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                  <span className="text-[6.5px] font-black tracking-widest uppercase text-amber-700">
                    MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                  </span>
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                </div>
              </div>

              {/* Badges: BÔNUS #4 + GUIA ILUSTRADO */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="bg-[#facc15] text-stone-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-amber-300">
                  BÔNUS #4
                </span>
                <span className="bg-[#dcfce7] text-[#065f46] font-extrabold text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-300">
                  <ClipboardList className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>GUIA ILUSTRADO • GUIA DE APLICAÇÃO RÁPIDA</span>
                </span>
              </div>

              {/* Main Headline */}
              <div className="mt-2.5 space-y-0.5">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0c3725] tracking-tight leading-none">
                  50 Ações Práticas
                </h3>
                <h4 className="font-display font-extrabold text-xs sm:text-sm text-[#0c3725] leading-snug">
                  Para Mais Saúde, Segurança e Autonomia
                </h4>
                <p className="text-[10px] sm:text-[11px] text-stone-600 font-medium leading-tight pt-0.5">
                  Passo a passo visual e aplicável no seu dia a dia. Da prevenção ao carinho diário.
                </p>
              </div>

              {/* 4 Topic Cards in 2x2 Grid */}
              <div className="mt-3.5 grid grid-cols-2 gap-2 sm:gap-2.5">
                
                {/* 1. Autonomia & Vitalidade */}
                <div className="p-2.5 rounded-xl border border-emerald-200 bg-white shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Footprints className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="font-display font-extrabold text-[11px] text-[#0f291e] block">
                      Autonomia & Vitalidade
                    </span>
                    <span className="text-[8.5px] text-stone-500 block">
                      Idosos ativos e confiantes no seu lar
                    </span>
                  </div>
                </div>

                {/* 2. Apoio Familiar com Afeto */}
                <div className="p-2.5 rounded-xl border border-rose-200 bg-white shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#f43f5e] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <div className="leading-tight">
                    <span className="font-display font-extrabold text-[11px] text-[#0f291e] block">
                      Apoio Familiar com Afeto
                    </span>
                    <span className="text-[8.5px] text-stone-500 block">
                      Conversas que acolhem sem complicação
                    </span>
                  </div>
                </div>

                {/* 3. Remédios Organizados */}
                <div className="p-2.5 rounded-xl border border-amber-200 bg-white shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="font-display font-extrabold text-[11px] text-[#0f291e] block">
                      Remédios Organizados
                    </span>
                    <span className="text-[8.5px] text-stone-500 block">
                      Rotina clara com horários e dosagens
                    </span>
                  </div>
                </div>

                {/* 4. Prevenção de Quedas */}
                <div className="p-2.5 rounded-xl border border-sky-200 bg-white shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0284c7] flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Home className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="font-display font-extrabold text-[11px] text-[#0f291e] block">
                      Prevenção de Quedas
                    </span>
                    <span className="text-[8.5px] text-stone-500 block">
                      Ambientes seguros e iluminados
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Lower Section: 4 Features with Round Badges */}
            <div className="py-2.5 px-3 bg-[#0a3525] border-t border-emerald-700/60">
              <div className="grid grid-cols-4 gap-1 text-center text-white">
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#062016] border border-emerald-400/60 flex items-center justify-center">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7.5px] font-bold leading-tight">
                    Conteúdo visual e prático
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#062016] border border-emerald-400/60 flex items-center justify-center">
                    <Settings className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7.5px] font-bold leading-tight">
                    Aplicação no dia a dia
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#062016] border border-emerald-400/60 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-[7.5px] font-bold leading-tight">
                    Mais segurança e bem-estar
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#062016] border border-emerald-400/60 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7.5px] font-bold leading-tight">
                    Para você e sua família
                  </span>
                </div>

              </div>
            </div>

            {/* Gold Bottom Banner */}
            <div className="bg-gradient-to-r from-[#f5c242] via-[#ffe066] to-[#e6ac22] px-3 py-1.5 text-stone-950 flex items-center justify-between gap-1 text-[7.5px] font-black uppercase">
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">COMPRA SEGURA</span>
                  <span className="text-[6px] font-bold lowercase text-stone-900">seus dados protegidos</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Download className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">ENTREGA IMEDIATA</span>
                  <span className="text-[6px] font-bold lowercase text-stone-900">receba no seu e-mail</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Laptop className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">LEIA EM QUALQUER</span>
                  <span className="text-[6px] font-bold uppercase text-stone-900">DISPOSITIVO</span>
                </div>
              </div>

            </div>

            {/* Dark Green Footer Ribbon */}
            <div className="bg-[#031810] py-1.5 px-3 flex items-center justify-center gap-2 text-[7.5px] font-black text-emerald-300 tracking-wider uppercase border-t border-emerald-900/60">
              <Sprout className="w-3 h-3 text-emerald-400" />
              <span>GUIA COMPLETO EM PDF</span>
              <span className="text-amber-400">•</span>
              <span>PRÁTICO</span>
              <span className="text-amber-400">•</span>
              <span className="text-white">FEITO PARA VOCÊ</span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
