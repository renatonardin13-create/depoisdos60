import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Utensils, 
  Dumbbell, 
  Brain, 
  Lock, 
  Download, 
  Smartphone, 
  Crown, 
  Sparkles, 
  Activity, 
  Bell, 
  BookOpen, 
  Home, 
  Calendar, 
  User, 
  CheckCircle,
  Sprout
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
      className={`relative flex items-center justify-center select-none w-full py-2 cursor-pointer group ${className}`}
      onClick={onOpenCheckout}
      title="Clique para garantir o seu kit completo"
    >
      {/* Ambient background glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-teal-400/20 to-amber-300/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Main 3D Box Container with isometric / 3/4 perspective */}
      <div className="relative w-full max-w-[430px] sm:max-w-[480px] md:max-w-[510px] mx-auto filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-[1.02]">

        {/* 3D Isometric Wrapper */}
        <div className="relative flex items-stretch">

          {/* ========================================================= */}
          {/* 1. 3D BOX SPINE (LEFT SIDE) */}
          {/* ========================================================= */}
          <div 
            className="w-14 sm:w-16 md:w-20 bg-gradient-to-r from-[#041a13] via-[#082a20] to-[#041a13] rounded-l-md border-l border-y border-[#0e4838] flex flex-col justify-between items-center py-4 px-1.5 text-white relative shrink-0 shadow-[-10px_10px_20px_rgba(0,0,0,0.5)] transform -skew-y-6 origin-top-right z-10"
            style={{
              clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 96%)',
            }}
          >
            {/* Top Spine Crest */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#082a20] flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div className="text-center leading-tight">
                <span className="font-display font-extrabold text-[9px] sm:text-[10px] tracking-tight block text-white">
                  Depois<br />dos<span className="text-emerald-400">60</span>
                </span>
                <span className="text-[5.5px] sm:text-[6px] text-emerald-300 font-medium tracking-tight block mt-0.5">
                  Guia Prático
                </span>
              </div>
            </div>

            {/* Spine Vertical Tags */}
            <div className="py-2 text-center space-y-1">
              <div className="h-0.5 w-6 bg-amber-400/80 mx-auto rounded-full" />
              <span className="text-[5.5px] sm:text-[6.5px] font-black text-amber-300 uppercase tracking-widest block transform -rotate-90 origin-center my-6 whitespace-nowrap">
                MAIS SAÚDE • MAIS VIDA
              </span>
              <div className="h-0.5 w-6 bg-amber-400/80 mx-auto rounded-full" />
            </div>

            {/* Spine Mid Script */}
            <div className="text-center px-0.5">
              <span className="font-serif italic text-[8px] sm:text-[9.5px] text-emerald-100/90 leading-tight block drop-shadow-xs">
                Viver bem sempre é possível!
              </span>
            </div>

            {/* Spine Bottom Leaf & Slogan */}
            <div className="flex flex-col items-center gap-1 text-center">
              <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[6px] sm:text-[7px] font-black text-amber-300 tracking-wider uppercase leading-tight">
                SAÚDE HOJE.<br />MAIS AMANHÃ.
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. 3D BOX FRONT FACE (MAIN SHOWCASE) */}
          {/* ========================================================= */}
          <div className="flex-1 bg-gradient-to-b from-[#0a3528] via-[#06291e] to-[#041c15] rounded-r-md border-r border-y border-[#0e4838] overflow-hidden shadow-2xl relative flex flex-col justify-between z-10 text-left">

            {/* Top Angled Lid Effect (simulated top box fold) */}
            <div className="w-full bg-[#0e4a39] py-1 px-3 border-b border-emerald-500/30 flex items-center justify-between text-[7px] sm:text-[8px] font-black tracking-widest text-emerald-200 uppercase">
              <span className="flex items-center gap-1">
                <Sprout className="w-2.5 h-2.5 text-amber-300" />
                <span>Depois dos 60 • Guia Oficial</span>
              </span>
              <span className="text-amber-300">Mais Saúde • Mais Vida</span>
            </div>

            {/* Premium Gold Ribbon (Top Right) */}
            <div className="absolute top-0 right-3 sm:right-4 z-30 flex flex-col items-center">
              <div className="bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 text-stone-950 px-2 sm:px-2.5 py-1.5 shadow-lg border-x border-b border-amber-200 text-center relative font-black">
                <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-950 mx-auto fill-stone-950 mb-0.5" />
                <span className="text-[7.5px] sm:text-[8.5px] font-black uppercase tracking-wider block leading-none">
                  VERSÃO
                </span>
                <span className="text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider block leading-tight">
                  PREMIUM
                </span>
                <div className="h-[1px] w-full bg-stone-950/30 my-0.5" />
                <span className="text-[5.5px] sm:text-[6.5px] font-bold uppercase tracking-tight block leading-tight">
                  Sua Vida<br />Merece Mais
                </span>
              </div>
              {/* Ribbon V-Cut Bottom */}
              <div 
                className="w-full h-2.5 bg-amber-500"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                }}
              />
            </div>

            {/* Front Header Brand */}
            <div className="p-3 sm:p-4 pb-1 space-y-1 relative z-20">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/60 flex items-center justify-center">
                  <Sprout className="w-3 h-3 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h2 className="font-display font-black text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-none">
                      Depois dos <span className="text-emerald-400">60</span>
                    </h2>
                  </div>
                  <span className="text-[8px] sm:text-[9.5px] text-emerald-200 font-semibold tracking-tight block">
                    Guia Prático de Prevenção & Autonomia
                  </span>
                </div>
              </div>

              {/* Sub-header tagline with line */}
              <div className="flex items-center gap-2 pt-0.5">
                <div className="h-[1px] flex-1 bg-amber-400/60" />
                <span className="text-[6.5px] sm:text-[7.5px] font-black tracking-widest uppercase text-amber-300">
                  Mais Saúde • Mais Vida • Sem Limites
                </span>
                <div className="h-[1px] flex-1 bg-amber-400/60" />
              </div>
            </div>

            {/* Center Area: Senior Couple & Script Text */}
            <div className="relative px-3 sm:px-4 py-1 flex items-center justify-between">
              
              {/* Senior Couple Photo inside Radiant Aura */}
              <div className="relative w-32 sm:w-36 md:w-40 h-28 sm:h-32 rounded-2xl overflow-hidden shadow-lg border border-emerald-400/40">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80" 
                  alt="Casal idoso alegre e saudável com vitalidade na luz natural"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06291e] via-transparent to-black/20" />
                
                {/* Sunburst badge */}
                <div className="absolute top-1.5 left-1.5 bg-amber-400/90 text-amber-950 p-1 rounded-full shadow-xs">
                  <Sparkles className="w-3 h-3 fill-amber-950 text-amber-950" />
                </div>
              </div>

              {/* Script Callout on the right */}
              <div className="flex-1 pl-2.5 sm:pl-3 text-right">
                <span className="font-serif italic text-xs sm:text-sm md:text-base font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] block leading-snug">
                  Mais vida<br />em cada<br /><span className="text-amber-300">novo dia!</span>
                </span>
              </div>
            </div>

            {/* Front Headline & Subtitle */}
            <div className="px-3 sm:px-4 py-1 space-y-0.5 relative z-10">
              <h3 className="font-display font-extrabold text-xs sm:text-sm md:text-base text-white leading-tight">
                Depois dos 60:{' '}
                <span className="text-amber-300 font-black block sm:inline">
                  50 Cuidados Que Toda Idosa e Sua Família Precisam Conhecer!
                </span>
              </h3>
              <p className="text-[8.5px] sm:text-[10px] text-emerald-100/90 font-medium leading-tight">
                Mais saúde, segurança e bem-estar para uma vida mais longa e feliz.
              </p>
            </div>

            {/* 5 Feature Bullet Points with Green Round Badges */}
            <div className="px-3 sm:px-4 py-1 space-y-1 relative z-10 max-w-[65%] sm:max-w-[62%]">
              
              {/* Bullet 1 */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-400/80 flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="w-2.5 h-2.5 text-white fill-white" />
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold text-white leading-tight">
                  Saúde física, mental e emocional
                </span>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-400/80 flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold text-white leading-tight">
                  Prevenção de acidentes e quedas
                </span>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-400/80 flex items-center justify-center shrink-0 shadow-xs">
                  <Utensils className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold text-white leading-tight">
                  Alimentação e qualidade de vida
                </span>
              </div>

              {/* Bullet 4 */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-400/80 flex items-center justify-center shrink-0 shadow-xs">
                  <Dumbbell className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold text-white leading-tight">
                  Exercícios práticos e autonomia
                </span>
              </div>

              {/* Bullet 5 */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-600 border border-emerald-400/80 flex items-center justify-center shrink-0 shadow-xs">
                  <Brain className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[7.5px] sm:text-[9px] font-bold text-white leading-tight">
                  Memória ativa e bem-estar
                </span>
              </div>

            </div>

            {/* Bottom Golden Badge Bar (Compra Segura • Entrega Imediata • Multi-dispositivo) */}
            <div className="mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 px-2 sm:px-3 py-1.5 text-stone-950 border-t border-amber-200 flex items-center justify-between gap-1 text-[6.5px] sm:text-[7.5px] font-black uppercase">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                <div className="leading-none text-left">
                  <span className="block font-black">COMPRA SEGURA</span>
                  <span className="text-[5.5px] font-bold lowercase">seus dados protegidos</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                <div className="leading-none text-left">
                  <span className="block font-black">ENTREGA IMEDIATA</span>
                  <span className="text-[5.5px] font-bold lowercase">receba no seu e-mail</span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                <div className="leading-none text-left">
                  <span className="block font-black">QUALQUER TELA</span>
                  <span className="text-[5.5px] font-bold lowercase">leia no celular ou pc</span>
                </div>
              </div>
            </div>

            {/* Very Bottom Dark Green Footer Stripe */}
            <div className="bg-[#03140e] py-1 px-3 flex items-center justify-center gap-2 text-[6.5px] sm:text-[7.5px] font-extrabold text-emerald-300 tracking-wider uppercase border-t border-emerald-900/50">
              <Sprout className="w-2.5 h-2.5 text-amber-400" />
              <span>GUIA COMPLETO EM PDF</span>
              <span>•</span>
              <span>PRÁTICO</span>
              <span>•</span>
              <span className="text-white">FEITO PARA VOCÊ</span>
            </div>

          </div>

          {/* ========================================================= */}
          {/* 3. LEANING SMARTPHONE (OVERLAPPING LOWER-RIGHT) */}
          {/* ========================================================= */}
          <div 
            className="absolute -right-2 sm:-right-4 bottom-2 sm:bottom-3 w-[155px] sm:w-[175px] md:w-[195px] rounded-[24px] sm:rounded-[28px] bg-neutral-950 p-1.5 sm:p-2 border-[2.5px] sm:border-[3px] border-neutral-700 shadow-[-12px_18px_30px_rgba(0,0,0,0.85)] z-30 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
            style={{
              boxShadow: '-10px 15px 35px rgba(0,0,0,0.8), 0 0 15px rgba(16,185,129,0.35)',
            }}
          >
            {/* Phone Screen */}
            <div className="w-full rounded-[18px] sm:rounded-[22px] bg-stone-950 overflow-hidden flex flex-col justify-between border border-neutral-800 text-white select-none">
              
              {/* Phone Status Bar */}
              <div className="pt-1 px-2.5 flex items-center justify-between text-[7px] sm:text-[8px] text-neutral-400 font-semibold bg-stone-950">
                <span>9:41</span>
                {/* Dynamic Island / Notch Pill */}
                <div className="w-8 h-2 bg-black rounded-full" />
                <div className="flex items-center gap-1">
                  <div className="w-2 h-1.5 bg-neutral-400 rounded-2xs" />
                </div>
              </div>

              {/* App Header Inside Phone */}
              <div className="px-2 pt-1.5 pb-1 flex items-center gap-1.5 border-b border-neutral-800/80 bg-gradient-to-b from-emerald-950/40 to-stone-950">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Sprout className="w-3 h-3 text-emerald-400" />
                </div>
                <div className="text-left leading-none">
                  <span className="font-display font-extrabold text-[8px] sm:text-[9px] text-white block">
                    Depois dos <span className="text-emerald-400">60</span>
                  </span>
                  <span className="text-[5.5px] sm:text-[6px] text-neutral-400">
                    Mais saúde • Mais vida
                  </span>
                </div>
              </div>

              {/* App Welcome Greeting */}
              <div className="px-2 pt-1 text-left leading-tight">
                <span className="text-[9px] sm:text-[10px] font-black text-white block">
                  Olá!
                </span>
                <span className="text-[6.5px] sm:text-[7.5px] text-emerald-300 font-medium block">
                  Que bom ter você aqui!
                </span>
              </div>

              {/* 6 App Module Tiles (2 cols x 3 rows matching Image 1) */}
              <div className="p-1.5 grid grid-cols-2 gap-1 text-left">
                
                {/* 1. Saúde (Green) */}
                <div className="bg-emerald-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <Activity className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Saúde</span>
                </div>

                {/* 2. Exercícios (Blue) */}
                <div className="bg-sky-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <Dumbbell className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Exercícios</span>
                </div>

                {/* 3. Alimentação (Orange) */}
                <div className="bg-amber-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <Utensils className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Alimentação</span>
                </div>

                {/* 4. Lembretes (Purple) */}
                <div className="bg-purple-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <Bell className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Lembretes</span>
                </div>

                {/* 5. Bem-estar (Lime) */}
                <div className="bg-lime-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <Sprout className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Bem-estar</span>
                </div>

                {/* 6. Conteúdos (Teal/Blue) */}
                <div className="bg-teal-600 rounded-lg p-1 flex items-center gap-1 shadow-xs">
                  <BookOpen className="w-3 h-3 text-white shrink-0" />
                  <span className="text-[6.5px] sm:text-[7.5px] font-bold text-white">Conteúdos</span>
                </div>

              </div>

              {/* Motivational Quote Box inside Phone */}
              <div className="mx-1.5 mb-1 bg-emerald-950/80 border border-emerald-600/40 rounded-lg p-1 flex items-start gap-1">
                <Sprout className="w-2.5 h-2.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="font-serif italic text-[6px] sm:text-[6.5px] text-emerald-100 leading-tight">
                  &ldquo;Pequenas escolhas hoje, grandes conquistas amanhã!&rdquo;
                </span>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="bg-stone-900/95 border-t border-neutral-800 py-1 px-2 flex items-center justify-between text-[5.5px] sm:text-[6px] text-neutral-400">
                <div className="flex flex-col items-center text-emerald-400">
                  <Home className="w-2.5 h-2.5" />
                  <span>Início</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-2.5 h-2.5" />
                  <span>Rotinas</span>
                </div>
                <div className="flex flex-col items-center">
                  <Heart className="w-2.5 h-2.5" />
                  <span>Favoritos</span>
                </div>
                <div className="flex flex-col items-center">
                  <User className="w-2.5 h-2.5" />
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
