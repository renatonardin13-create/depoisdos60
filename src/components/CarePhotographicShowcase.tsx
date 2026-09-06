import React from 'react';
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
      className={`relative flex items-center justify-center select-none w-full py-4 cursor-pointer group ${className}`}
      onClick={onOpenCheckout}
      title="Clique para garantir o Bônus #4: 50 Ações Práticas"
    >
      {/* Soft Ambient Radial Floor Glow */}
      <div 
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-emerald-950/70 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ========================================================================= */}
      {/* 3D PERSPECTIVE STAGE CONTAINER                                           */}
      {/* Matches Image 1: 3D Box Packaging for "BÔNUS #4: 50 Ações Práticas"       */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[440px] sm:max-w-[490px] md:max-w-[530px] mx-auto filter drop-shadow-[0_28px_45px_rgba(0,0,0,0.75)] transition-transform duration-500 group-hover:scale-[1.015]">

        {/* ===================================================================== */}
        {/* 1. TOP LID (TOPO 3D DA CAIXA)                                         */}
        {/* Slanted perspective surface visible at the top                        */}
        {/* ===================================================================== */}
        <div 
          className="relative h-10 sm:h-12 w-full bg-gradient-to-r from-[#06241a] via-[#0b3829] to-[#082a1f] border-t border-r border-[#155a42] text-white flex items-center justify-center text-center overflow-hidden z-0"
          style={{
            transform: 'skewX(-28deg) scaleY(0.55)',
            transformOrigin: 'bottom left',
            marginLeft: '36px',
            marginBottom: '-16px',
            width: 'calc(100% - 36px)',
            boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.15), -4px -4px 10px rgba(0,0,0,0.4)',
          }}
        >
          <div className="flex items-center gap-2 transform skew-x-[28deg] scale-y-[1.8] text-[7.5px] sm:text-[9px] font-black tracking-wider uppercase text-emerald-100">
            <Sprout className="w-3 h-3 text-emerald-400" />
            <span className="font-extrabold text-white">Depois dos <strong className="text-emerald-400">60</strong></span>
            <span className="text-emerald-400">•</span>
            <span className="text-emerald-200">Guia Prático de Prevenção & Autonomia</span>
            <span className="text-amber-300 font-bold hidden sm:inline">— MAIS SAÚDE • MAIS VIDA —</span>
          </div>
        </div>

        {/* 3D Box Main Body (Spine + Front Face) */}
        <div className="relative flex items-stretch">

          {/* ===================================================================== */}
          {/* 2. LEFT 3D SPINE (LOMBADA DA CAIXA)                                   */}
          {/* Angled to the left with deep green gradient and gold highlights       */}
          {/* ===================================================================== */}
          <div 
            className="w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#031710] via-[#072c20] to-[#041d15] border-l-2 border-y border-r border-[#0d4533] flex flex-col justify-between items-center py-5 px-2 text-white relative shrink-0 shadow-[-18px_16px_30px_rgba(0,0,0,0.65)] z-20"
            style={{
              transform: 'skewY(-10deg)',
              transformOrigin: 'top right',
            }}
          >
            {/* Top Sunburst Crest with Silhouette */}
            <div className="flex flex-col items-center gap-1.5 w-full">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-amber-300 to-amber-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#072c20] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 via-transparent to-transparent" />
                  <div className="flex items-center justify-center gap-0.5 text-amber-300 z-10">
                    <User className="w-4 h-4 fill-amber-300 stroke-none" />
                    <User className="w-3.5 h-3.5 fill-white stroke-none -ml-1" />
                  </div>
                  <div className="text-[5px] font-black text-amber-400 uppercase tracking-tighter mt-0.5">VITA</div>
                </div>
              </div>

              {/* Spine Brand Logo */}
              <div className="text-center leading-none mt-1">
                <div className="flex items-center justify-center gap-0.5">
                  <Sprout className="w-2.5 h-2.5 text-emerald-400" />
                  <span className="font-display font-black text-[11px] sm:text-xs text-white tracking-tight">
                    Depois
                  </span>
                </div>
                <span className="font-display font-black text-[13px] sm:text-sm text-white tracking-tight block">
                  dos<span className="text-[#3fd158]">60</span>
                </span>
                <span className="text-[6.5px] sm:text-[7.5px] text-emerald-200 font-bold tracking-tight block mt-1 leading-tight">
                  Guia Prático<br />de Prevenção<br />& Autonomia
                </span>
              </div>
            </div>

            {/* Golden Slogan Sandwich */}
            <div className="my-auto py-4 text-center w-full space-y-1">
              <div className="h-[1.5px] w-8 bg-amber-400 mx-auto rounded-full shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
              <div className="space-y-0.5 py-1">
                <span className="text-[7.5px] sm:text-[8.5px] font-black text-amber-300 tracking-wider uppercase block leading-tight">
                  MAIS SAÚDE
                </span>
                <span className="text-[7.5px] sm:text-[8.5px] font-black text-amber-300 tracking-wider uppercase block leading-tight">
                  MAIS VIDA
                </span>
                <span className="text-[7px] sm:text-[8px] font-black text-amber-300 tracking-wider uppercase block leading-tight">
                  SEM LIMITES
                </span>
              </div>
              <div className="h-[1.5px] w-8 bg-amber-400 mx-auto rounded-full shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
            </div>

            {/* Cursive Script in Middle-Lower Spine */}
            <div className="text-center px-0.5 my-2">
              <Sprout className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
              <span className="font-serif italic text-[8px] sm:text-[9.5px] text-white leading-tight block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Viver bem<br />sempre<br />é possível!
              </span>
            </div>

            {/* Bottom Slogan */}
            <div className="flex flex-col items-center gap-1 text-center mt-2">
              <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[7px] sm:text-[8px] font-black text-amber-300 tracking-wider uppercase leading-tight">
                SAÚDE HOJE.<br />MAIS AMANHÃ.
              </span>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 3. MAIN FRONT FACE (CAPA FRONTAL DA CAIXA)                            */}
          {/* BÔNUS #4 • 50 AÇÕES PRÁTICAS COM GRADE DE 4 FOTOS E ÍCONES REDONDOS   */}
          {/* ===================================================================== */}
          <div className="flex-1 rounded-r-md border-r-2 border-y border-[#0e4838] overflow-hidden shadow-2xl relative flex flex-col justify-between z-10 text-left bg-gradient-to-b from-[#ffffff] via-[#f8faf6] to-[#0a3525]">

            {/* Top Light Ambiance Header */}
            <div className="p-3 sm:p-4 pb-2 relative">
              
              {/* Gold Ribbon Badge ("VERSÃO PREMIUM") at Top-Right */}
              <div className="absolute top-0 right-3 sm:right-5 z-30 flex flex-col items-center">
                <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2 sm:px-2.5 py-1.5 shadow-[0_6px_14px_rgba(0,0,0,0.35)] border-x border-b border-amber-200 text-center relative font-black">
                  <Crown className="w-3.5 h-3.5 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                  <span className="text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider block leading-none">
                    VERSÃO
                  </span>
                  <span className="text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider block leading-tight">
                    PREMIUM
                  </span>
                  <div className="h-[1px] w-full bg-stone-950/35 my-0.5" />
                  <span className="text-[5.5px] sm:text-[6.5px] font-extrabold uppercase tracking-tight block leading-tight">
                    CONHECIMENTO<br />QUE TRANSFORMA<br />SUA VIDA
                  </span>
                </div>
                {/* Ribbon V-Cut Bottom */}
                <div 
                  className="w-full h-2.5 bg-[#d97706] shadow-sm"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                />
              </div>

              {/* Brand Header */}
              <div className="space-y-1 max-w-[75%] sm:max-w-[72%]">
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 text-[#2ea542] shrink-0" />
                  <h2 className="font-display font-black text-xl sm:text-2xl text-[#0b3323] tracking-tight leading-none">
                    Depois dos<span className="text-[#2ea542]">60</span>
                  </h2>
                </div>
                <p className="text-[8.5px] sm:text-[10px] text-[#0f3b2a] font-bold tracking-tight leading-tight">
                  Guia Prático de Prevenção & Autonomia
                </p>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                  <span className="text-[6px] sm:text-[7px] font-black tracking-widest uppercase text-amber-700">
                    MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                  </span>
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                </div>
              </div>

              {/* Badges: BÔNUS #4 + GUIA ILUSTRADO */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="bg-[#facc15] text-stone-950 font-black text-[11px] sm:text-xs px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-amber-300">
                  BÔNUS #4
                </span>
                <span className="bg-[#dcfce7] text-[#065f46] font-extrabold text-[9px] sm:text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1 border border-emerald-300 shadow-2xs">
                  <ClipboardList className="w-3 h-3 text-[#059669] shrink-0" />
                  <span>GUIA ILUSTRADO • GUIA DE APLICAÇÃO RÁPIDA</span>
                </span>
              </div>

              {/* Main Headline & Subtitle */}
              <div className="mt-2 space-y-0.5">
                <h3 className="font-display font-black text-xl sm:text-2xl md:text-[26px] text-[#0c3725] tracking-tight leading-[1.1]">
                  50 Ações Práticas
                </h3>
                <h4 className="font-display font-extrabold text-xs sm:text-sm md:text-[15px] text-[#0c3725] leading-snug">
                  Para Mais Saúde, Segurança e Autonomia
                </h4>
                <p className="text-[9.5px] sm:text-[11px] text-stone-600 font-medium leading-tight pt-0.5">
                  Passo a passo visual e aplicável no seu dia a dia. Da prevenção ao carinho diário.
                </p>
              </div>

              {/* =============================================================== */}
              {/* 4 PHOTO CARDS IN 2x2 GRID (MATCHING IMAGE 1 EXACTLY)            */}
              {/* =============================================================== */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-2.5">
                
                {/* 1. Autonomia & Vitalidade (Green Badge) */}
                <div className="rounded-xl border border-emerald-300/80 bg-white shadow-sm overflow-hidden flex flex-col group/card hover:border-emerald-500 transition-colors">
                  <div className="relative h-20 sm:h-24 w-full bg-stone-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=450&q=80" 
                      alt="Idoso com cuidadora ao ar livre com vitalidade e apoio"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Green Circle Badge */}
                    <div className="absolute bottom-1.5 left-1.5 w-6 h-6 rounded-full bg-[#10b981] border-2 border-white flex items-center justify-center text-white shadow-md">
                      <Footprints className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-2 text-left">
                    <span className="font-display font-extrabold text-[10px] sm:text-xs text-[#0f291e] block leading-tight">
                      Autonomia & Vitalidade
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-stone-500 leading-tight block mt-0.5">
                      Idosos ativos e confiantes no seu lar
                    </span>
                  </div>
                </div>

                {/* 2. Apoio Familiar com Afeto (Red/Pink Badge) */}
                <div className="rounded-xl border border-rose-200 bg-white shadow-sm overflow-hidden flex flex-col group/card hover:border-rose-400 transition-colors">
                  <div className="relative h-20 sm:h-24 w-full bg-stone-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=450&q=80" 
                      alt="Idosa e médica conversando com empatia e carinho"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Red/Pink Circle Badge */}
                    <div className="absolute bottom-1.5 left-1.5 w-6 h-6 rounded-full bg-[#f43f5e] border-2 border-white flex items-center justify-center text-white shadow-md">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-2 text-left">
                    <span className="font-display font-extrabold text-[10px] sm:text-xs text-[#0f291e] block leading-tight">
                      Apoio Familiar com Afeto
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-stone-500 leading-tight block mt-0.5">
                      Conversas que acolhem sem complicação
                    </span>
                  </div>
                </div>

                {/* 3. Remédios Organizados (Orange Badge) */}
                <div className="rounded-xl border border-amber-200 bg-white shadow-sm overflow-hidden flex flex-col group/card hover:border-amber-400 transition-colors">
                  <div className="relative h-20 sm:h-24 w-full bg-stone-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=450&q=80" 
                      alt="Comprimidos organizados por horário e dosagem"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Orange Circle Badge */}
                    <div className="absolute bottom-1.5 left-1.5 w-6 h-6 rounded-full bg-[#f97316] border-2 border-white flex items-center justify-center text-white shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-2 text-left">
                    <span className="font-display font-extrabold text-[10px] sm:text-xs text-[#0f291e] block leading-tight">
                      Remédios Organizados
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-stone-500 leading-tight block mt-0.5">
                      Rotina clara com horários e dosagens
                    </span>
                  </div>
                </div>

                {/* 4. Prevenção de Quedas (Blue Badge) */}
                <div className="rounded-xl border border-sky-200 bg-white shadow-sm overflow-hidden flex flex-col group/card hover:border-sky-400 transition-colors">
                  <div className="relative h-20 sm:h-24 w-full bg-stone-100 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=450&q=80" 
                      alt="Ambiente residencial iluminado, espaçoso e livre de obstáculos"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Blue Circle Badge */}
                    <div className="absolute bottom-1.5 left-1.5 w-6 h-6 rounded-full bg-[#0284c7] border-2 border-white flex items-center justify-center text-white shadow-md">
                      <Home className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-2 text-left">
                    <span className="font-display font-extrabold text-[10px] sm:text-xs text-[#0f291e] block leading-tight">
                      Prevenção de Quedas
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-stone-500 leading-tight block mt-0.5">
                      Ambientes seguros e iluminados
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* =============================================================== */}
            {/* GREEN LOWER SECTION WITH 4 CIRCULAR BENEFIT BADGES             */}
            {/* =============================================================== */}
            <div className="mt-2 pt-2.5 pb-2 px-2.5 sm:px-3 bg-[#0a3525] border-t border-emerald-700/60">
              <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center text-white">
                
                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#072419] border border-emerald-400/80 flex items-center justify-center shadow-xs">
                    <FileText className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-bold leading-tight">
                    Conteúdo visual e prático
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#072419] border border-emerald-400/80 flex items-center justify-center shadow-xs">
                    <Settings className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-bold leading-tight">
                    Aplicação no dia a dia
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#072419] border border-emerald-400/80 flex items-center justify-center shadow-xs">
                    <Heart className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-bold leading-tight">
                    Mais segurança e bem-estar
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-[#072419] border border-emerald-400/80 flex items-center justify-center shadow-xs">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-bold leading-tight">
                    Para você e sua família
                  </span>
                </div>

              </div>
            </div>

            {/* =============================================================== */}
            {/* SOLID GOLD BOTTOM BANNER                                        */}
            {/* =============================================================== */}
            <div className="bg-gradient-to-r from-[#f5c242] via-[#ffe066] to-[#e6ac22] px-2.5 sm:px-3.5 py-1.5 text-stone-950 border-t border-amber-300 flex items-center justify-between gap-1 text-[7px] sm:text-[8px] font-black uppercase shadow-inner">
              
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">COMPRA SEGURA</span>
                  <span className="text-[5.5px] sm:text-[6.5px] font-bold lowercase text-stone-900">seus dados protegidos</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Download className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">ENTREGA IMEDIATA</span>
                  <span className="text-[5.5px] sm:text-[6.5px] font-bold lowercase text-stone-900">receba no seu e-mail</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div className="w-4 h-4 rounded-sm bg-stone-950 flex items-center justify-center text-amber-300 shrink-0">
                  <Laptop className="w-3 h-3 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="block font-black text-stone-950">LEIA EM QUALQUER</span>
                  <span className="text-[5.5px] sm:text-[6.5px] font-bold uppercase text-stone-900">DISPOSITIVO</span>
                </div>
              </div>

            </div>

            {/* Very Bottom Dark Green Footer Stripe with Leaf */}
            <div className="bg-[#041a12] py-1 px-3 flex items-center justify-center gap-2 text-[7px] sm:text-[8px] font-black text-emerald-300 tracking-wider uppercase border-t border-emerald-800/40">
              <Sprout className="w-3 h-3 text-emerald-400" />
              <span>GUIA COMPLETO EM PDF</span>
              <span className="text-amber-400">•</span>
              <span>PRÁTICO</span>
              <span className="text-amber-400">•</span>
              <span className="text-white">FEITO PARA VOCÊ</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
