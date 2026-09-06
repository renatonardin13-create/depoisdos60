import React from 'react';
import { 
  Sprout, 
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
  Pill,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface CarePhotographicShowcaseProps {
  onOpenCheckout?: () => void;
  className?: string;
}

export const CarePhotographicShowcase: React.FC<CarePhotographicShowcaseProps> = ({
  onOpenCheckout,
  className = '',
}) => {
  return (
    <div 
      className={`relative flex flex-col items-center justify-center select-none w-full py-4 ${className}`}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute -inset-8 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-amber-300/15 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ========================================================================= */}
      {/* 3D PRODUCT BOXSET PACKAGING - IDENTICAL TO CHATGPT IMAGE 14_21_00         */}
      {/* With left spine, top lid, 3D perspective angle & photorealistic finish    */}
      {/* ========================================================================= */}
      <div 
        className="relative z-10 cursor-pointer group transition-transform duration-500 hover:scale-[1.02] active:scale-[0.99]"
        onClick={onOpenCheckout}
        title="Clique para garantir o Bônus #4 junto com seu Guia"
      >
        {/* 3D Container with natural isometric depth */}
        <div className="relative flex items-stretch filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]">

          {/* ===================================================================== */}
          {/* 1. LEFT SPINE (Lombada Esquerda da Caixa 3D)                          */}
          {/* ===================================================================== */}
          <div 
            className="w-[74px] xs:w-[84px] sm:w-[94px] shrink-0 rounded-l-md overflow-hidden bg-gradient-to-b from-[#041a12] via-[#072c1e] to-[#02130c] text-white border-y-2 border-l-2 border-[#125339] relative flex flex-col justify-between py-4 px-2 shadow-inner"
            style={{
              transform: 'perspective(900px) rotateY(-24deg) skewY(-8deg)',
              transformOrigin: 'right center',
              marginRight: '-2px',
            }}
          >
            {/* Spine lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-white/10 pointer-events-none" />

            {/* Top: Emblem with Elderly Couple & Sunburst */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-amber-300/90 bg-gradient-to-b from-amber-400/30 to-emerald-900/80 p-0.5 shadow-md flex items-center justify-center relative overflow-hidden">
                {/* Sunburst background effect */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fde047_1px,transparent_1px)] [background-size:4px_4px]" />
                <div className="w-full h-full rounded-full bg-emerald-950/90 flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-200" />
                </div>
              </div>
              <span className="text-[7px] font-black uppercase text-amber-200 tracking-wider mt-1 block">
                Depois dos 60
              </span>
            </div>

            {/* Middle: Vertical Title & Motto */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-2 py-2">
              <div>
                <span className="font-display font-black text-xs sm:text-sm text-white tracking-tight leading-none block">
                  Depois
                </span>
                <span className="font-display font-black text-sm sm:text-base text-emerald-300 tracking-tight leading-none block">
                  dos 60
                </span>
              </div>

              <div className="h-[1px] w-8 bg-amber-400/40 my-1" />

              <span className="text-[6.5px] uppercase font-bold text-emerald-100/90 tracking-tighter leading-tight block">
                Guia Prático<br />de Prevenção<br />&amp; Autonomia
              </span>

              <div className="h-[1px] w-6 bg-amber-400/30 my-0.5" />

              {/* Yellow Slogan on Spine */}
              <div className="text-[7.5px] sm:text-[8px] font-black text-amber-300 uppercase tracking-tighter leading-tight">
                MAIS SAÚDE<br />
                MAIS VIDA<br />
                SEM LIMITES
              </div>

              {/* Sprout Icon & Script Text */}
              <div className="flex flex-col items-center py-1">
                <Sprout className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
                <span className="font-serif italic text-[7.5px] sm:text-[8.5px] text-emerald-100 font-bold leading-tight mt-0.5 text-center">
                  Viver bem<br />sempre<br />é possível!
                </span>
              </div>
            </div>

            {/* Bottom Spine Tag */}
            <div className="relative z-10 text-center border-t border-emerald-500/30 pt-1.5">
              <Sprout className="w-3 h-3 text-emerald-400 mx-auto mb-0.5" />
              <span className="text-[6.5px] font-black uppercase text-amber-300 block leading-tight">
                SAÚDE HOJE.
              </span>
              <span className="text-[6.5px] font-bold uppercase text-emerald-200 block leading-tight">
                MAIS AMANHÃ.
              </span>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 2. FRONT FACE (Capa Frontal da Caixa 3D)                              */}
          {/* ===================================================================== */}
          <div 
            className="w-[330px] xs:w-[390px] sm:w-[440px] md:w-[460px] rounded-r-xl overflow-hidden bg-white border-y-2 border-r-2 border-[#125339] shadow-2xl relative flex flex-col"
            style={{
              transform: 'perspective(900px) rotateY(4deg) skewY(2deg)',
              transformOrigin: 'left center',
            }}
          >
            {/* Glossy fold highlight on the left corner */}
            <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-white/40 via-white/15 to-transparent z-30 pointer-events-none" />

            {/* Hanging Golden Ribbon (Top Right) */}
            <div className="absolute top-0 right-4 z-30 flex flex-col items-center pointer-events-none drop-shadow-md">
              <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2.5 pt-2 pb-1.5 text-center font-black border-x border-b border-amber-200/90 shadow-sm w-20">
                <Crown className="w-4 h-4 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                <span className="text-[8px] font-black uppercase tracking-wider block leading-none">
                  VERSÃO
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider block leading-tight">
                  PREMIUM
                </span>
                <div className="h-[1px] w-full bg-stone-950/30 my-1" />
                <span className="text-[6.5px] font-extrabold uppercase tracking-tight block leading-tight">
                  CONHECIMENTO<br />QUE TRANSFORMA<br />SUA VIDA
                </span>
              </div>
              {/* Swallowtail / Ribbon Notch */}
              <div 
                className="w-full h-3 bg-[#d97706]"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </div>

            {/* Front Header Zone (Top Off-White/Light Cream) */}
            <div className="bg-gradient-to-b from-[#f0f8f3] via-[#ffffff] to-[#ffffff] px-4 sm:px-5 pt-4 pb-2.5 text-left border-b border-stone-100">
              
              {/* Logo: Sprout + Depois dos 60 */}
              <div className="flex items-center gap-1.5 max-w-[70%]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Sprout className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" />
                </div>
                <span className="font-display font-black text-xl sm:text-2xl text-stone-900 tracking-tight leading-none">
                  Depois <span className="text-emerald-700">dos 60</span>
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-[10.5px] sm:text-xs font-bold text-emerald-900 tracking-tight mt-1">
                Guia Prático de Prevenção &amp; Autonomia
              </p>

              {/* Golden Separator */}
              <div className="flex items-center gap-2 py-1.5 max-w-[75%]">
                <div className="h-[1px] flex-1 bg-amber-400/80" />
                <span className="text-[8px] sm:text-[8.5px] font-black uppercase text-amber-800 tracking-wider whitespace-nowrap">
                  MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                </span>
                <div className="h-[1px] flex-1 bg-amber-400/80" />
              </div>

              {/* Pill Badges Row */}
              <div className="flex items-center gap-2 pt-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#facc15] text-stone-950 font-black text-[10px] sm:text-[11px] shadow-xs uppercase tracking-wider">
                  BÔNUS #4
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-extrabold text-[9px] sm:text-[10px] shadow-xs flex items-center gap-1">
                  <ClipboardList className="w-3 h-3 text-emerald-700 shrink-0" />
                  <span>GUIA ILUSTRADO • GUIA DE APLICAÇÃO RÁPIDA</span>
                </span>
              </div>

              {/* Large Headlines */}
              <div className="pt-2 space-y-0.5">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-emerald-950 tracking-tight leading-tight">
                  50 Ações Práticas
                </h3>
                <h4 className="font-display font-bold text-sm sm:text-base text-emerald-900 leading-snug">
                  Para Mais Saúde, Segurança e Autonomia
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 leading-snug pt-0.5">
                  Passo a passo visual e aplicável no seu dia a dia. Da prevenção ao carinho diário.
                </p>
              </div>
            </div>

            {/* =================================================================== */}
            {/* 2x2 PHOTOGRAPHIC CARDS GRID (Exact match to ChatGPT Image 14_21_00) */}
            {/* =================================================================== */}
            <div className="p-3 sm:p-4 bg-gradient-to-b from-[#ffffff] via-[#f7faf8] to-[#edf4f0] space-y-2.5 sm:space-y-3">
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                
                {/* Card 1: Autonomia & Vitalidade (Cadeira de Rodas no Parque Outonal) */}
                <div className="bg-white rounded-xl overflow-hidden border border-emerald-200/90 shadow-xs flex flex-col group/card hover:border-emerald-400 transition-colors">
                  <div className="h-24 sm:h-28 relative overflow-hidden bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=500&q=80" 
                      alt="Idoso ativo em cadeira de rodas passeando no parque com cuidador"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Round Green Icon Badge */}
                    <div className="absolute bottom-1.5 left-2 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                      <Footprints className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 text-left space-y-0.5">
                    <span className="font-bold text-[11px] sm:text-xs text-stone-900 leading-snug block">
                      Autonomia &amp; Vitalidade
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 leading-tight block">
                      Idosos ativos e confiantes no seu lar
                    </span>
                  </div>
                </div>

                {/* Card 2: Apoio Familiar com Afeto (Idosa com Médica/Filha Sorrindo) */}
                <div className="bg-white rounded-xl overflow-hidden border border-emerald-200/90 shadow-xs flex flex-col group/card hover:border-emerald-400 transition-colors">
                  <div className="h-24 sm:h-28 relative overflow-hidden bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=500&q=80" 
                      alt="Idosa sorrindo com médica ou filha em momento de carinho e consulta"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Round Red/Pink Icon Badge */}
                    <div className="absolute bottom-1.5 left-2 w-7 h-7 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                      <Heart className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 text-left space-y-0.5">
                    <span className="font-bold text-[11px] sm:text-xs text-stone-900 leading-snug block">
                      Apoio Familiar com Afeto
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 leading-tight block">
                      Conversas que acolhem sem complicação
                    </span>
                  </div>
                </div>

                {/* Card 3: Remédios Organizados (Cápsulas e Medicamentos em Detalhe) */}
                <div className="bg-white rounded-xl overflow-hidden border border-emerald-200/90 shadow-xs flex flex-col group/card hover:border-emerald-400 transition-colors">
                  <div className="h-24 sm:h-28 relative overflow-hidden bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80" 
                      alt="Cápsulas de remédios organizadas para controle e dosagem segura"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Round Orange Icon Badge */}
                    <div className="absolute bottom-1.5 left-2 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white">
                      <Pill className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 text-left space-y-0.5">
                    <span className="font-bold text-[11px] sm:text-xs text-stone-900 leading-snug block">
                      Remédios Organizados
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 leading-tight block">
                      Rotina clara com horários e dosagens
                    </span>
                  </div>
                </div>

                {/* Card 4: Prevenção de Quedas (Sala de Estar Acolhedora e Iluminada) */}
                <div className="bg-white rounded-xl overflow-hidden border border-emerald-200/90 shadow-xs flex flex-col group/card hover:border-emerald-400 transition-colors">
                  <div className="h-24 sm:h-28 relative overflow-hidden bg-stone-100">
                    <img 
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80" 
                      alt="Ambiente seguro da sala de estar sem tapetes escorregadios e bem iluminado"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    {/* Round Blue Icon Badge */}
                    <div className="absolute bottom-1.5 left-2 w-7 h-7 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                      <Home className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                  </div>
                  <div className="p-2 sm:p-2.5 text-left space-y-0.5">
                    <span className="font-bold text-[11px] sm:text-xs text-stone-900 leading-snug block">
                      Prevenção de Quedas
                    </span>
                    <span className="text-[9.5px] sm:text-[10px] text-stone-500 leading-tight block">
                      Ambientes seguros e iluminados
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* =================================================================== */}
            {/* DARK GREEN BASE: 4 ICONS ROW                                        */}
            {/* =================================================================== */}
            <div className="bg-[#052b1b] text-white py-3 px-3 border-t border-[#09422a]">
              <div className="grid grid-cols-4 gap-1 text-center">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#0a472d] border border-emerald-400/40 flex items-center justify-center shadow-xs">
                    <FileText className="w-3.5 h-3.5 text-emerald-200" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-emerald-100 leading-tight font-medium">
                    Conteúdo visual e prático
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#0a472d] border border-emerald-400/40 flex items-center justify-center shadow-xs">
                    <Settings className="w-3.5 h-3.5 text-emerald-200" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-emerald-100 leading-tight font-medium">
                    Aplicação no dia a dia
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#0a472d] border border-emerald-400/40 flex items-center justify-center shadow-xs">
                    <Heart className="w-3.5 h-3.5 text-emerald-200" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-emerald-100 leading-tight font-medium">
                    Mais segurança e bem-estar
                  </span>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <div className="w-7 h-7 rounded-full bg-[#0a472d] border border-emerald-400/40 flex items-center justify-center shadow-xs">
                    <Users className="w-3.5 h-3.5 text-emerald-200" />
                  </div>
                  <span className="text-[8px] sm:text-[9px] text-emerald-100 leading-tight font-medium">
                    Para você e sua família
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* GOLDEN STRIP: 3 TRUST PROMISES                                      */}
            {/* =================================================================== */}
            <div className="bg-gradient-to-r from-[#eab308] via-[#facc15] to-[#ca8a04] py-2 px-3 text-stone-950 font-bold border-t border-amber-300">
              <div className="grid grid-cols-3 gap-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  <div className="w-5 h-5 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase block">
                      COMPRA SEGURA
                    </span>
                    <span className="text-[7px] sm:text-[7.5px] font-medium text-stone-800 block">
                      seus dados protegidos
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 border-x border-amber-500/50 px-1">
                  <div className="w-5 h-5 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Download className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase block">
                      ENTREGA IMEDIATA
                    </span>
                    <span className="text-[7px] sm:text-[7.5px] font-medium text-stone-800 block">
                      receba no seu e-mail
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <div className="w-5 h-5 rounded bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
                    <Laptop className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] sm:text-[9px] font-black uppercase block">
                      LEIA EM QUALQUER
                    </span>
                    <span className="text-[7px] sm:text-[7.5px] font-medium text-stone-800 block">
                      DISPOSITIVO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================== */}
            {/* BOTTOM-MOST EMERALD BAR                                             */}
            {/* =================================================================== */}
            <div className="bg-[#02180f] py-1.5 px-3 text-center border-t border-[#09422a] flex items-center justify-center gap-2">
              <Sprout className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span className="text-[8.5px] sm:text-[9.5px] font-bold text-emerald-200 uppercase tracking-wider">
                GUIA COMPLETO EM PDF • PRÁTICO • FEITO PARA VOCÊ
              </span>
            </div>

          </div>

        </div>

        {/* 3. REALISTIC GROUND SHADOW */}
        <div 
          className="w-[85%] h-6 bg-black/45 blur-lg rounded-[100%] mx-auto -mt-2 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
