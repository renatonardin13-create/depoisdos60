import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout, 
  Crown, 
  Heart, 
  ShieldCheck, 
  Utensils, 
  Dumbbell, 
  Brain, 
  Check, 
  Download, 
  Smartphone, 
  UploadCloud,
  RotateCcw,
  Sparkles,
  Activity,
  BellRing,
  BookOpen
} from 'lucide-react';

interface ProductBundleMockupProps {
  onOpenCheckout?: () => void;
}

export const ProductBundleMockup: React.FC<ProductBundleMockupProps> = ({ onOpenCheckout }) => {
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom image from localStorage or public folder if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('hero_box_mockup_image');
      if (saved) {
        setCustomImage(saved);
        return;
      }
    } catch {
      // ignore
    }

    // Try probe /hero-box.png
    const probe = new Image();
    probe.onload = () => setCustomImage('/hero-box.png');
    probe.src = '/hero-box.png';
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomImage(result);
        try {
          localStorage.setItem('hero_box_mockup_image', result);
        } catch {
          // ignore
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
      localStorage.removeItem('hero_box_mockup_image');
    } catch {
      // ignore
    }
  };

  return (
    <div 
      className="relative w-full max-w-[480px] mx-auto select-none flex flex-col items-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Hidden file input to upload the original PNG file (ChatGPT Image 6 de set. de 2026, 14_01_37.png) */}
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

      {/* Atmospheric green & amber glow */}
      <div 
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-amber-300/20 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ========================================================================= */}
      {/* CASE A: USER'S ORIGINAL PNG (ChatGPT Image 6 de set. de 2026, 14_01_37)   */}
      {/* ========================================================================= */}
      {customImage ? (
        <div className="relative group/customHero flex flex-col items-center z-10 w-full">
          <img 
            src={customImage} 
            alt="Depois dos 60: 50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer! - Boxset 3D com Celular" 
            className="w-full max-w-[440px] sm:max-w-[460px] h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] cursor-pointer transition-transform duration-300 group-hover/customHero:scale-[1.015]"
            onClick={onOpenCheckout}
            referrerPolicy="no-referrer"
          />

          {/* Discreet action buttons */}
          <div className="mt-3 flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900/90 text-emerald-300 text-[11px] font-semibold shadow-md border border-emerald-500/40 hover:bg-stone-900 cursor-pointer"
            >
              <UploadCloud className="w-3.5 h-3.5 text-emerald-400" />
              <span>Trocar imagem</span>
            </button>
            <button
              type="button"
              onClick={handleResetImage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 text-stone-300 text-[11px] font-medium hover:text-white cursor-pointer"
              title="Restaurar visual padrão"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Restaurar</span>
            </button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* CASE B: HIGH FIDELITY 3D BOXSET MATCHING EXACTLY IMAGEM 1                 */
        /* Plus top dropzone button to upload ChatGPT Image 14_01_37 with 1 click    */
        /* ========================================================================= */
        <div className="relative z-10 w-full flex flex-col items-center">
          
          {/* Quick upload trigger banner */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className={`w-full mb-3 p-2 rounded-xl border-2 border-dashed transition-all cursor-pointer flex items-center justify-between gap-2 shadow-md ${
              isDragging 
                ? 'bg-emerald-500/20 border-emerald-400 text-white scale-102' 
                : 'bg-black/60 hover:bg-black/80 border-emerald-400/40 text-emerald-200'
            }`}
            title="Arraste o arquivo original ChatGPT Image 6 de set. de 2026, 14_01_37.png aqui para exibir sem perdas"
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center shrink-0 shadow-xs font-black">
                <UploadCloud className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="text-[11px] font-black block text-white">
                  Colocar a Imagem 1 em Alta Resolução
                </span>
                <span className="text-[9.5px] text-emerald-300 block">
                  Arraste o arquivo PNG aqui ou clique para selecionar
                </span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider shrink-0 shadow-xs">
              Carregar PNG
            </span>
          </div>

          {/* 3D Box Packaging (Isometric Angle with Left Spine + Front Face + Overlapping Phone) */}
          <div 
            className="relative w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)] border-2 border-[#185e43] bg-gradient-to-b from-[#062419] to-[#02130c] cursor-pointer group"
            onClick={onOpenCheckout}
            title="Clique para garantir seu exemplar"
          >
            {/* Upper Portion: Header, Couple Photo, Title, Badges */}
            <div className="relative bg-gradient-to-b from-[#f2f8f4] via-[#e5f3eb] to-[#d6ebd9] p-4 sm:p-5 text-left border-b border-[#0d3f2d]">
              
              {/* Gold Ribbon Badge: "VERSÃO PREMIUM - SUA VIDA MERECE MAIS" */}
              <div className="absolute top-0 right-4 z-20 flex flex-col items-center">
                <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2.5 py-2 shadow-lg border-x border-b border-amber-200 text-center font-black">
                  <Crown className="w-4 h-4 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                  <span className="text-[8px] font-black uppercase tracking-wider block leading-none">
                    VERSÃO
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider block leading-tight">
                    PREMIUM
                  </span>
                  <div className="h-[1px] w-full bg-stone-950/30 my-1" />
                  <span className="text-[6.5px] font-extrabold uppercase tracking-tight block leading-tight">
                    SUA VIDA<br />MERECE MAIS
                  </span>
                </div>
                {/* Ribbon V-Cut */}
                <div 
                  className="w-full h-3 bg-[#d97706]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                />
              </div>

              {/* Top Logo & Slogan */}
              <div className="space-y-0.5 max-w-[70%]">
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-5 h-5 text-[#2ea542] shrink-0" />
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#0b3323] tracking-tight leading-none">
                    Depois dos<span className="text-[#2ea542]">60</span>
                  </h2>
                </div>
                <p className="text-[10px] text-[#0f3b2a] font-bold tracking-tight">
                  Guia Prático de Prevenção & Autonomia
                </p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                  <span className="text-[7px] font-black tracking-widest uppercase text-amber-700">
                    MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                  </span>
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                </div>
              </div>

              {/* Elderly Couple Photo + Cursive Quote */}
              <div className="mt-3.5 relative rounded-xl overflow-hidden border border-emerald-300 shadow-sm bg-emerald-950">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                  alt="Casal idoso sorrindo com vitalidade e saúde"
                  className="w-full h-36 sm:h-40 object-cover object-center filter brightness-[0.98] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <span className="font-serif italic text-white text-sm sm:text-base font-semibold drop-shadow-md tracking-wide">
                    “Mais vida em cada novo dia!”
                  </span>
                </div>
              </div>

              {/* Main Headline & Subtitle */}
              <div className="mt-3 space-y-1">
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#08291c] tracking-tight leading-tight">
                  Depois dos 60: <span className="text-[#107044]">50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer!</span>
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-700 font-medium leading-snug">
                  Mais saúde, segurança e bem-estar para uma vida mais longa e feliz.
                </p>
              </div>

              {/* Two-Column Area: 5 Bullet Points on Left, Smartphone Screen on Right */}
              <div className="mt-3.5 grid grid-cols-12 gap-2 items-center">
                
                {/* 5 Green Round Badges with Bullets (Left 7 Cols) */}
                <div className="col-span-7 space-y-1.5 text-left">
                  
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-800 leading-tight">
                      Saúde física, mental e emocional
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-800 leading-tight">
                      Prevenção de acidentes e quedas
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#047857] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Utensils className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-800 leading-tight">
                      Alimentação e qualidade de vida
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#0f766e] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Dumbbell className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-800 leading-tight">
                      Exercícios práticos e autonomia
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1e3a8a] flex items-center justify-center text-white shrink-0 shadow-2xs">
                      <Brain className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-bold text-stone-800 leading-tight">
                      Memória ativa e bem-estar
                    </span>
                  </div>

                </div>

                {/* Smartphone Mockup on Right (Right 5 Cols) */}
                <div className="col-span-5 flex justify-center">
                  <div className="w-full max-w-[155px] rounded-2xl bg-neutral-900 p-1.5 shadow-xl border-2 border-neutral-700">
                    
                    {/* Phone Screen */}
                    <div className="rounded-xl bg-[#041d13] p-2 text-white text-center space-y-1.5 border border-emerald-600/30">
                      
                      {/* Top Bar */}
                      <div className="flex items-center justify-between text-[7px] text-emerald-300 font-bold border-b border-emerald-800/60 pb-1">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <Sprout className="w-2.5 h-2.5 text-emerald-400" />
                          <span>Depois dos 60</span>
                        </div>
                      </div>

                      {/* Greeting */}
                      <div className="text-left px-0.5">
                        <span className="text-[8px] font-black text-white block">Olá!</span>
                        <span className="text-[6.5px] text-emerald-300 block">Que bom ter você aqui!</span>
                      </div>

                      {/* 6 App Buttons */}
                      <div className="grid grid-cols-3 gap-1 pt-0.5">
                        <div className="bg-emerald-500 rounded p-1 flex flex-col items-center">
                          <Activity className="w-2.5 h-2.5 text-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Saúde</span>
                        </div>
                        <div className="bg-sky-500 rounded p-1 flex flex-col items-center">
                          <Dumbbell className="w-2.5 h-2.5 text-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Treino</span>
                        </div>
                        <div className="bg-orange-500 rounded p-1 flex flex-col items-center">
                          <Utensils className="w-2.5 h-2.5 text-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Nutrição</span>
                        </div>
                        <div className="bg-purple-600 rounded p-1 flex flex-col items-center">
                          <BellRing className="w-2.5 h-2.5 text-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Alarmes</span>
                        </div>
                        <div className="bg-teal-500 rounded p-1 flex flex-col items-center">
                          <Heart className="w-2.5 h-2.5 text-white fill-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Rotina</span>
                        </div>
                        <div className="bg-blue-600 rounded p-1 flex flex-col items-center">
                          <BookOpen className="w-2.5 h-2.5 text-white" />
                          <span className="text-[5.5px] font-bold mt-0.5">Aulas</span>
                        </div>
                      </div>

                      {/* Small Motivational Quote */}
                      <div className="bg-[#0b3826] rounded p-1 text-[5.5px] text-emerald-200 italic leading-tight">
                        “Pequenas escolhas hoje, grandes conquistas amanhã!”
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Gold Banner */}
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
                  <Smartphone className="w-3 h-3 stroke-[3]" />
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

      {/* Floating Trust Badge Underneath */}
      <div className="relative z-20 mt-3 flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold border border-warm-700/60 shadow-lg whitespace-nowrap">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Acesso Imediato Vitalício • </span>
          <span className="text-amber-400 font-bold">★ 5.0 (1.400+ avaliações)</span>
        </div>
      </div>

    </div>
  );
};
