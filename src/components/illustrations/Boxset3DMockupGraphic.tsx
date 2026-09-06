import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Utensils, 
  Dumbbell, 
  Brain, 
  Smartphone, 
  Crown, 
  Activity, 
  Bell, 
  BookOpen, 
  Home, 
  Calendar, 
  User, 
  Sprout,
  Check,
  Download,
  Users,
  Footprints,
  Laptop
} from 'lucide-react';

interface Boxset3DMockupGraphicProps {
  onOpenCheckout?: () => void;
  className?: string;
}

export const Boxset3DMockupGraphic: React.FC<Boxset3DMockupGraphicProps> = ({
  onOpenCheckout,
  className = '',
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center select-none w-full py-4 cursor-pointer group ${className}`}
      onClick={onOpenCheckout}
      title="Clique para garantir o seu kit oficial Depois dos 60"
    >
      {/* Soft Ambient Radial Floor Glow */}
      <div 
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-emerald-950/80 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* ========================================================================= */}
      {/* 3D PERSPECTIVE STAGE CONTAINER                                           */}
      {/* Matches Image 2 (Box standing angled with top, spine, front & smartphone) */}
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

        {/* 3D Box Main Body (Spine + Front) */}
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
          {/* Light cream top half with senior couple + Rich dark green lower half  */}
          {/* ===================================================================== */}
          <div className="flex-1 rounded-r-md border-r-2 border-y border-[#0e4838] overflow-hidden shadow-2xl relative flex flex-col justify-between z-10 text-left bg-[#0c3d2b]">

            {/* =================================================================== */}
            {/* 3A. TOP HALF: SOFT LIGHT SUNNY AMBIANCE WITH SENIOR COUPLE          */}
            {/* Matches Image 2: Light cream/ivory top + couple in outdoor sunlight */}
            {/* =================================================================== */}
            <div className="relative bg-gradient-to-b from-[#ffffff] via-[#f7faf5] to-[#0c3d2b] p-3 sm:p-4 pb-4 overflow-hidden">
              
              {/* Background garden sunlight texture */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center"
                style={{
                  backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(254, 240, 138, 0.6) 0%, rgba(187, 247, 208, 0.3) 50%, transparent 80%)'
                }}
              />

              {/* Gold Ribbon / Versão Premium Badge (Top Right Corner) */}
              <div className="absolute top-0 right-3 sm:right-5 z-40 flex flex-col items-center">
                <div className="bg-gradient-to-b from-[#fcd34d] via-[#f59e0b] to-[#d97706] text-stone-950 px-2.5 sm:px-3 py-1.5 shadow-[0_6px_14px_rgba(0,0,0,0.4)] border-x border-b border-amber-200 text-center relative font-black">
                  <Crown className="w-4 h-4 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider block leading-none">
                    VERSÃO
                  </span>
                  <span className="text-[9px] sm:text-[10.5px] font-black uppercase tracking-wider block leading-tight">
                    PREMIUM
                  </span>
                  <div className="h-[1px] w-full bg-stone-950/40 my-0.5" />
                  <span className="text-[6px] sm:text-[7px] font-extrabold uppercase tracking-tight block leading-tight">
                    SUA VIDA<br />MERECE MAIS
                  </span>
                </div>
                {/* Ribbon V-Cut Bottom */}
                <div 
                  className="w-full h-3 bg-[#d97706] shadow-sm"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  }}
                />
              </div>

              {/* Brand Header on Light Top Background */}
              <div className="space-y-1 relative z-20 max-w-[75%] sm:max-w-[70%]">
                
                {/* Main Logo: "Depois dos 60" */}
                <div className="flex items-center gap-1.5">
                  <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ea542] shrink-0" />
                  <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[#0b3323] tracking-tight leading-none">
                    Depois dos<span className="text-[#2ea542]">60</span>
                  </h2>
                </div>

                {/* Subtitle */}
                <p className="text-[9px] sm:text-[10.5px] text-[#0f3b2a] font-black tracking-tight leading-tight">
                  Guia Prático de Prevenção & Autonomia
                </p>

                {/* Golden Divider Line with Tagline */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                  <span className="text-[6px] sm:text-[7px] font-black tracking-widest uppercase text-amber-700">
                    MAIS SAÚDE • MAIS VIDA • SEM LIMITES
                  </span>
                  <div className="h-[1px] flex-1 bg-amber-500/80" />
                </div>
              </div>

              {/* Senior Couple Showcase & Script Text */}
              <div className="mt-3 relative flex items-center justify-between z-10 min-h-[120px] sm:min-h-[140px]">
                
                {/* Authentic Senior Couple Portrait */}
                <div className="relative w-40 sm:w-48 md:w-52 h-32 sm:h-36 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-500/30">
                  <img 
                    src="https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=600&q=80" 
                    alt="Casal de idosos felizes, saudáveis e sorridentes ao ar livre na luz do sol"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle blend to box gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c3d2b] via-transparent to-transparent opacity-80" />
                </div>

                {/* Elegant Cursive Callout on the Right */}
                <div className="flex-1 pl-2 sm:pl-3 text-right">
                  <span className="font-serif italic text-base sm:text-lg md:text-xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] block leading-snug">
                    Mais vida<br />em cada<br /><span className="text-amber-300">novo dia!</span>
                  </span>
                </div>
              </div>

            </div>

            {/* =================================================================== */}
            {/* 3B. LOWER HALF: RICH FOREST GREEN WITH BENEFIT LIST & HEADLINE     */}
            {/* Matches Image 2: Bold yellow headline, 5 circular badges, gold bar */}
            {/* =================================================================== */}
            <div className="px-3 sm:px-4 pt-1 pb-3 space-y-2 relative z-10 bg-[#0c3d2b]">

              {/* Main Headline */}
              <div className="space-y-0.5">
                <h3 className="font-display leading-tight">
                  <span className="text-white font-black text-sm sm:text-base md:text-lg block">
                    Depois dos 60:
                  </span>
                  <span className="text-[#ffd033] font-black text-sm sm:text-base md:text-lg leading-tight block drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                    50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer!
                  </span>
                </h3>
                <p className="text-[8.5px] sm:text-[10px] text-emerald-100 font-medium leading-tight">
                  Mais saúde, segurança e bem-estar para uma vida mais longa e feliz.
                </p>
              </div>

              {/* 5 Circular Feature Badges (Matching Image 2 exactly) */}
              <div className="space-y-1.5 max-w-[62%] sm:max-w-[60%] pt-0.5">
                
                {/* 1. Saúde física, mental e emocional */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#082a1e] border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Heart className="w-2.5 h-2.5 text-white fill-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">
                    Saúde física, mental e emocional
                  </span>
                </div>

                {/* 2. Prevenção de acidentes e quedas */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#082a1e] border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">
                    Prevenção de acidentes e quedas
                  </span>
                </div>

                {/* 3. Alimentação e qualidade de vida */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#082a1e] border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Users className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">
                    Alimentação e qualidade de vida
                  </span>
                </div>

                {/* 4. Exercícios práticos e autonomia */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#082a1e] border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Dumbbell className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">
                    Exercícios práticos e autonomia
                  </span>
                </div>

                {/* 5. Memória ativa e bem-estar */}
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#082a1e] border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
                    <Brain className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">
                    Memória ativa e bem-estar
                  </span>
                </div>

              </div>

            </div>

            {/* =================================================================== */}
            {/* 3C. SOLID GOLD BOTTOM BANNER                                        */}
            {/* Compra Segura • Entrega Imediata • Leia em Qualquer Dispositivo     */}
            {/* =================================================================== */}
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

          {/* ===================================================================== */}
          {/* 4. REALISTIC SMARTPHONE (OVERLAPPING FOREGROUND RIGHT)                 */}
          {/* Matches Image 2: iPhone tilted with Depois dos 60 app dashboard        */}
          {/* ===================================================================== */}
          <div 
            className="absolute -right-3 sm:-right-5 bottom-1 sm:bottom-2 w-[165px] sm:w-[190px] md:w-[210px] rounded-[26px] sm:rounded-[30px] bg-stone-950 p-1.5 sm:p-2 border-[3px] border-neutral-600/90 shadow-[-18px_20px_40px_rgba(0,0,0,0.95)] z-30 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-300"
            style={{
              boxShadow: '-15px 18px 45px rgba(0,0,0,0.9), 0 0 20px rgba(16,185,129,0.3)',
            }}
          >
            {/* Screen Inner Glass */}
            <div className="w-full rounded-[20px] sm:rounded-[24px] bg-[#071711] overflow-hidden flex flex-col justify-between border border-neutral-800 text-white select-none">
              
              {/* iPhone Status Bar */}
              <div className="pt-1.5 px-3 flex items-center justify-between text-[7px] sm:text-[8px] text-neutral-300 font-semibold bg-[#071711]">
                <span>9:41</span>
                {/* Dynamic Island Notch */}
                <div className="w-10 h-2.5 bg-black rounded-full shadow-inner" />
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-1.5 border border-neutral-300 rounded-2xs p-0.5 flex items-center">
                    <div className="w-full h-full bg-emerald-400" />
                  </div>
                </div>
              </div>

              {/* App Header Inside Phone (Sunburst Logo + Brand) */}
              <div className="px-2.5 pt-1.5 pb-1 flex items-center gap-1.5 border-b border-emerald-900/40 bg-gradient-to-b from-emerald-950/60 to-[#071711]">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 p-0.5 shadow-sm flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-[#072c20] flex items-center justify-center">
                    <Sprout className="w-3 h-3 text-emerald-400" />
                  </div>
                </div>
                <div className="text-left leading-tight">
                  <span className="font-display font-black text-[9px] sm:text-[10px] text-white block">
                    Depois dos <span className="text-[#3fd158]">60</span>
                  </span>
                  <span className="text-[5.5px] sm:text-[6.5px] text-emerald-200/80">
                    Mais saúde • Mais vida • Sem limites
                  </span>
                </div>
              </div>

              {/* Welcome Greeting */}
              <div className="px-2.5 pt-1.5 text-left leading-tight">
                <span className="text-[10px] sm:text-[11px] font-black text-white block">
                  Olá!
                </span>
                <span className="text-[7px] sm:text-[8px] text-emerald-300 font-medium block">
                  Que bom ter você aqui!
                </span>
              </div>

              {/* 6 App Module Tiles (2 columns x 3 rows - Exact Match to Image 2) */}
              <div className="p-2 grid grid-cols-2 gap-1.5 text-left">
                
                {/* 1. Saúde (Green) */}
                <div className="bg-[#10b981] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <Activity className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Saúde</span>
                </div>

                {/* 2. Exercícios (Blue) */}
                <div className="bg-[#0ea5e9] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <Footprints className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Exercícios</span>
                </div>

                {/* 3. Alimentação (Orange) */}
                <div className="bg-[#f97316] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <Utensils className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Alimentação</span>
                </div>

                {/* 4. Lembretes (Purple) */}
                <div className="bg-[#a855f7] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <Bell className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Lembretes</span>
                </div>

                {/* 5. Bem-estar (Lime) */}
                <div className="bg-[#84cc16] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <Sprout className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Bem-estar</span>
                </div>

                {/* 6. Conteúdos (Teal/Cyan) */}
                <div className="bg-[#06b6d4] rounded-lg p-1.5 flex items-center gap-1 shadow-sm">
                  <BookOpen className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="text-[7px] sm:text-[8px] font-black text-white">Conteúdos</span>
                </div>

              </div>

              {/* Motivational Quote Card */}
              <div className="mx-2 mb-1 bg-[#042017] border border-emerald-600/50 rounded-lg p-1.5 flex items-start gap-1">
                <Sprout className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-serif italic text-[6.5px] sm:text-[7px] text-emerald-100 leading-tight">
                  &ldquo;Pequenas escolhas hoje, grandes conquistas amanhã!&rdquo;
                </span>
              </div>

              {/* Bottom Tab Bar */}
              <div className="bg-stone-900/95 border-t border-neutral-800 py-1.5 px-3 flex items-center justify-between text-[6px] sm:text-[6.5px] text-neutral-400">
                <div className="flex flex-col items-center text-emerald-400">
                  <Home className="w-3 h-3" />
                  <span className="font-bold">Início</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-3 h-3" />
                  <span>Rotinas</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="w-3 h-3" />
                  <span>Favoritos</span>
                </div>
                <div className="flex flex-col items-center">
                  <User className="w-3 h-3" />
                  <span>Perfil</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
