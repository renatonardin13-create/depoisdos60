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
  Sparkles,
  Activity,
  BellRing,
  BookOpen,
  Users,
  Footprints
} from 'lucide-react';

interface ProductBundleMockupProps {
  onOpenCheckout?: () => void;
  className?: string;
}

export const ProductBundleMockup: React.FC<ProductBundleMockupProps> = ({ 
  onOpenCheckout,
  className = ''
}) => {
  const [customImage, setCustomImage] = useState<string | null>(null);

  // Load custom image from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('hero_box_mockup_image_v2');
      if (saved) {
        setCustomImage(saved);
        return;
      }
    } catch {
      // ignore
    }

    // Try probe /hero-bundle.png or /hero-box.png
    const probe = new Image();
    probe.onload = () => setCustomImage('/hero-bundle.png');
    probe.src = '/hero-bundle.png';
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setCustomImage(result);
        try {
          localStorage.setItem('hero_box_mockup_image_v2', result);
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div 
      className={`relative w-full max-w-[480px] sm:max-w-[500px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Atmospheric green & amber glow */}
      <div 
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-amber-300/20 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ========================================================================= */}
      {/* CASE A: USER UPLOADED ORIGINAL PNG (ChatGPT Image 14_01_37.png)          */}
      {/* ========================================================================= */}
      {customImage ? (
        <div className="relative group/customHero flex flex-col items-center z-10 w-full">
          <img 
            src={customImage} 
            alt="Depois dos 60: 50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer! - Box 3D com Celular" 
            className="w-full max-w-[440px] sm:max-w-[470px] h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] cursor-pointer transition-transform duration-300 group-hover/customHero:scale-[1.015]"
            onClick={onOpenCheckout}
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        /* ========================================================================= */
        /* CASE B: EXACT 3D MOCKUP IDENTICAL TO CHATGPT IMAGE 14_01_37               */
        /* 3D Box Packaging + Overlapping Smartphone + Ground Shadow                */
        /* ========================================================================= */
        <div 
          className="relative z-10 w-full flex flex-col items-center cursor-pointer group"
          onClick={onOpenCheckout}
          title="Clique para garantir seu exemplar do Depois dos 60"
        >
          {/* 3D Packaging Layout Container */}
          <div className="relative flex items-stretch filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] w-full max-w-[440px] sm:max-w-[460px]">

            {/* ===================================================================== */}
            {/* 1. 3D LEFT SPINE (Lombada Esquerda da Caixa)                          */}
            {/* ===================================================================== */}
            <div 
              className="w-[70px] xs:w-[80px] sm:w-[90px] shrink-0 rounded-l-md overflow-hidden bg-gradient-to-b from-[#031c13] via-[#063021] to-[#02130c] text-white border-y-2 border-l-2 border-[#125339] relative flex flex-col justify-between py-3.5 px-2 shadow-inner"
              style={{
                transform: 'perspective(900px) rotateY(-24deg) skewY(-8deg)',
                transformOrigin: 'right center',
                marginRight: '-2px',
              }}
            >
              {/* Spine light gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-white/10 pointer-events-none" />

              {/* Top: Circular Couple Emblem with Sunburst & Leaf */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-11 h-11 rounded-full border-2 border-amber-300 bg-gradient-to-b from-amber-400/30 to-emerald-950 p-0.5 shadow-md flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:4px_4px]" />
                  <div className="w-full h-full rounded-full bg-emerald-950/90 flex items-center justify-center">
                    <Users className="w-5 h-5 text-amber-200" />
                  </div>
                </div>
                <span className="text-[6.5px] font-black uppercase text-amber-200 tracking-wider mt-1 block">
                  Depois dos 60
                </span>
              </div>

              {/* Middle Spine: Title & Yellow Slogan */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-1.5 py-1">
                <div>
                  <span className="font-display font-black text-xs text-white tracking-tight leading-none block">
                    Depois
                  </span>
                  <span className="font-display font-black text-sm text-emerald-300 tracking-tight leading-none block">
                    dos 60
                  </span>
                </div>

                <div className="h-[1px] w-6 bg-amber-400/40 my-0.5" />

                <span className="text-[6px] uppercase font-bold text-emerald-100/90 tracking-tighter leading-tight block">
                  Guia Prático<br />de Prevenção<br />&amp; Autonomia
                </span>

                <div className="h-[1px] w-5 bg-amber-400/30 my-0.5" />

                {/* Yellow Slogan on Spine */}
                <div className="text-[7px] sm:text-[7.5px] font-black text-amber-300 uppercase tracking-tighter leading-tight">
                  MAIS SAÚDE<br />
                  MAIS VIDA<br />
                  SEM LIMITES
                </div>

                {/* Leaves & Cursive Slogan */}
                <div className="flex flex-col items-center py-0.5">
                  <Sprout className="w-3 h-3 text-emerald-400 fill-emerald-400/30" />
                  <span className="font-serif italic text-[7px] sm:text-[8px] text-emerald-100 font-bold leading-tight mt-0.5 text-center">
                    Viver bem<br />sempre<br />é possível!
                  </span>
                </div>
              </div>

              {/* Bottom Spine Tag */}
              <div className="relative z-10 text-center border-t border-emerald-500/30 pt-1">
                <Sprout className="w-3 h-3 text-emerald-400 mx-auto mb-0.5" />
                <span className="text-[6px] font-black uppercase text-amber-300 block leading-tight">
                  SAÚDE HOJE.
                </span>
                <span className="text-[6px] font-bold uppercase text-emerald-200 block leading-tight">
                  MAIS AMANHÃ.
                </span>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* 2. 3D FRONT FACE (Capa Frontal da Caixa)                              */}
            {/* ===================================================================== */}
            <div 
              className="flex-1 rounded-r-xl overflow-hidden bg-gradient-to-b from-[#06291b] via-[#083524] to-[#041a12] border-y-2 border-r-2 border-[#125339] shadow-2xl relative flex flex-col"
              style={{
                transform: 'perspective(900px) rotateY(4deg) skewY(2deg)',
                transformOrigin: 'left center',
              }}
            >
              {/* Glossy vertical fold highlight */}
              <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-white/30 via-white/10 to-transparent z-30 pointer-events-none" />

              {/* Gold Ribbon Badge on Top Right: "VERSÃO PREMIUM - SUA VIDA MERECE MAIS" */}
              <div className="absolute top-0 right-3 z-30 flex flex-col items-center pointer-events-none drop-shadow-md">
                <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2 pt-2 pb-1.5 text-center font-black border-x border-b border-amber-200/90 shadow-sm w-[72px]">
                  <Crown className="w-3.5 h-3.5 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                  <span className="text-[7.5px] font-black uppercase tracking-wider block leading-none">
                    VERSÃO
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-wider block leading-tight">
                    PREMIUM
                  </span>
                  <div className="h-[1px] w-full bg-stone-950/30 my-0.5" />
                  <span className="text-[6px] font-extrabold uppercase tracking-tight block leading-tight">
                    SUA VIDA<br />MERECE MAIS
                  </span>
                </div>
                {/* Ribbon Notch */}
                <div 
                  className="w-full h-2.5 bg-[#d97706]"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                />
              </div>

              {/* Upper Section: White/Cream Header with Logo */}
              <div className="bg-gradient-to-b from-[#f4f9f6] via-[#ffffff] to-[#f0f7f3] px-3.5 sm:px-4 pt-3 pb-2 text-left border-b border-stone-200">
                {/* Logo: Sprout + Depois dos 60 */}
                <div className="flex items-center gap-1.5 max-w-[70%]">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Sprout className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
                  </div>
                  <span className="font-display font-black text-xl sm:text-2xl text-stone-900 tracking-tight leading-none">
                    Depois <span className="text-emerald-700">dos 60</span>
                  </span>
                </div>

                <p className="text-[9.5px] sm:text-[10.5px] font-bold text-emerald-950 tracking-tight mt-0.5">
                  Guia Prático de Prevenção &amp; Autonomia
                </p>

                {/* Slogan Bar */}
                <div className="flex items-center gap-1.5 py-1 max-w-[75%]">
                  <div className="h-[1px] flex-1 bg-amber-500/70" />
                  <span className="text-[7px] sm:text-[7.5px] font-black uppercase text-amber-800 tracking-wider whitespace-nowrap">
                    MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                  </span>
                  <div className="h-[1px] flex-1 bg-amber-500/70" />
                </div>
              </div>

              {/* Middle Section: Photo of Smiling Elderly Couple + Cursive Slogan */}
              <div className="relative px-3 pt-2.5 pb-1">
                <div className="relative rounded-xl overflow-hidden border border-emerald-400/40 shadow-md bg-stone-900">
                  <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" 
                    alt="Casal idoso sorrindo com vitalidade e saúde ao ar livre"
                    className="w-full h-32 sm:h-36 object-cover object-top filter brightness-[0.98] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-end p-2.5">
                    <span className="font-serif italic text-white text-xs sm:text-sm font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      “Mais vida em cada novo dia!”
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Headline Block on Dark Green Background */}
              <div className="px-3.5 pt-1.5 pb-2 text-left space-y-0.5">
                <h3 className="font-display font-black text-sm sm:text-[15px] text-white tracking-tight leading-tight">
                  Depois dos 60:{' '}
                  <span className="text-amber-300">
                    50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer!
                  </span>
                </h3>
                <p className="text-[9px] sm:text-[10px] text-emerald-100/90 leading-snug">
                  Mais saúde, segurança e bem-estar para uma vida mais longa e feliz.
                </p>
              </div>

              {/* Two-Column Section: 5 Circles on Left, Smartphone on Right */}
              <div className="px-3 pb-3 grid grid-cols-12 gap-1.5 items-center">
                
                {/* Left 7 Columns: 5 Round Badges */}
                <div className="col-span-7 space-y-1.5 text-left pr-1">
                  
                  {/* 1. Saúde física, mental e emocional */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 border border-emerald-300/60 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Heart className="w-3 h-3 fill-white" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-white leading-tight">
                      Saúde física, mental e emocional
                    </span>
                  </div>

                  {/* 2. Prevenção de acidentes e quedas */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-300/60 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-white leading-tight">
                      Prevenção de acidentes e quedas
                    </span>
                  </div>

                  {/* 3. Alimentação e qualidade de vida */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-700 border border-emerald-300/60 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Utensils className="w-3 h-3" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-white leading-tight">
                      Alimentação e qualidade de vida
                    </span>
                  </div>

                  {/* 4. Exercícios práticos e autonomia */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-teal-600 border border-teal-300/60 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Dumbbell className="w-3 h-3" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-white leading-tight">
                      Exercícios práticos e autonomia
                    </span>
                  </div>

                  {/* 5. Memória ativa e bem-estar */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-teal-700 border border-teal-300/60 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Brain className="w-3 h-3" />
                    </div>
                    <span className="text-[8.5px] sm:text-[9px] font-bold text-white leading-tight">
                      Memória ativa e bem-estar
                    </span>
                  </div>

                </div>

                {/* Right 5 Columns: Realistic 3D Smartphone */}
                <div className="col-span-5 flex justify-center">
                  <div 
                    className="w-full max-w-[130px] rounded-xl bg-neutral-950 p-1 shadow-xl border-2 border-neutral-700 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      transform: 'rotate(-2deg)',
                    }}
                  >
                    {/* Screen Inner */}
                    <div className="rounded-lg bg-[#041d13] p-1.5 text-white text-center space-y-1 border border-emerald-500/30 overflow-hidden">
                      
                      {/* Top Phone Status */}
                      <div className="flex items-center justify-between text-[6px] text-emerald-300 font-bold border-b border-emerald-800/60 pb-0.5">
                        <span>9:41</span>
                        <div className="flex items-center gap-0.5">
                          <Sprout className="w-2 h-2 text-emerald-400" />
                          <span>Depois dos 60</span>
                        </div>
                      </div>

                      {/* Greeting */}
                      <div className="text-left px-0.5 pt-0.5">
                        <span className="text-[7.5px] font-black text-white block leading-tight">Olá!</span>
                        <span className="text-[6px] text-emerald-300 block leading-tight">Que bom ter você aqui!</span>
                      </div>

                      {/* 6 App Buttons */}
                      <div className="grid grid-cols-3 gap-0.5 pt-0.5">
                        <div className="bg-emerald-500 rounded p-0.5 flex flex-col items-center">
                          <Activity className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Saúde</span>
                        </div>
                        <div className="bg-sky-500 rounded p-0.5 flex flex-col items-center">
                          <Footprints className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Exercícios</span>
                        </div>
                        <div className="bg-orange-500 rounded p-0.5 flex flex-col items-center">
                          <Utensils className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Alimentação</span>
                        </div>
                        <div className="bg-purple-600 rounded p-0.5 flex flex-col items-center">
                          <BellRing className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Lembretes</span>
                        </div>
                        <div className="bg-teal-500 rounded p-0.5 flex flex-col items-center">
                          <Sprout className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Bem-estar</span>
                        </div>
                        <div className="bg-blue-600 rounded p-0.5 flex flex-col items-center">
                          <BookOpen className="w-2 h-2 text-white" />
                          <span className="text-[5px] font-bold mt-0.5">Conteúdos</span>
                        </div>
                      </div>

                      {/* Quote card */}
                      <div className="bg-[#0b3826] rounded p-0.5 text-[5px] text-emerald-200 italic leading-tight">
                        “Pequenas escolhas hoje, grandes conquistas amanhã!”
                      </div>

                      {/* Bottom Nav */}
                      <div className="flex items-center justify-around text-[5px] text-emerald-300/80 pt-0.5 border-t border-emerald-900/60">
                        <span>Início</span>
                        <span>Rotinas</span>
                        <span>Favoritos</span>
                        <span>Perfil</span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              {/* Golden Strip: 3 Trust Badges */}
              <div className="bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#ca8a04] py-1.5 px-2 text-stone-950 font-bold border-t border-amber-300">
                <div className="grid grid-cols-3 gap-0.5 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-4 h-4 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="text-[7.5px] sm:text-[8px] font-black uppercase block">
                        COMPRA SEGURA
                      </span>
                      <span className="text-[6px] sm:text-[6.5px] font-medium text-stone-900 block">
                        seus dados protegidos
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1 border-x border-amber-500/50 px-0.5">
                    <div className="w-4 h-4 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                      <Download className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="text-[7.5px] sm:text-[8px] font-black uppercase block">
                        ENTREGA IMEDIATA
                      </span>
                      <span className="text-[6px] sm:text-[6.5px] font-medium text-stone-900 block">
                        receba no seu e-mail
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-1">
                    <div className="w-4 h-4 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                      <Smartphone className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <div className="text-left leading-tight">
                      <span className="text-[7.5px] sm:text-[8px] font-black uppercase block">
                        LEIA EM QUALQUER
                      </span>
                      <span className="text-[6px] sm:text-[6.5px] font-medium text-stone-900 block">
                        DISPOSITIVO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Dark Emerald Bar */}
              <div className="bg-[#02180f] py-1 px-2 text-center border-t border-[#09422a] flex items-center justify-center gap-1.5">
                <Sprout className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                <span className="text-[7px] sm:text-[8px] font-bold text-emerald-200 uppercase tracking-wider">
                  GUIA COMPLETO EM PDF • PRÁTICO • FEITO PARA VOCÊ
                </span>
              </div>

            </div>

          </div>

          {/* Realistic Ground Shadow */}
          <div 
            className="w-[85%] h-5 bg-black/50 blur-lg rounded-[100%] mx-auto -mt-1.5 pointer-events-none"
            aria-hidden="true"
          />

          {/* Social Proof Pill underneath */}
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[11px] border border-emerald-500/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-emerald-100 font-medium">Box 3D Oficial + App Viva+60</span>
            <span className="text-amber-300 font-bold ml-0.5">• Acesso Imediato</span>
          </div>

        </div>
      )}
    </div>
  );
};
