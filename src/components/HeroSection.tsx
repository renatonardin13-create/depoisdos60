import React from 'react';
import { salesContent } from '../data/salesContent';
import { 
  ShieldCheck, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  BookOpen,
  Heart,
  Star,
  FileText,
  Clock,
  Lock,
  Award
} from 'lucide-react';
import { UrgencyCountdown } from './UrgencyCountdown';

interface HeroSectionProps {
  onOpenCheckout: () => void;
  onExploreChapters: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout, onExploreChapters }) => {
  const { hero, product } = salesContent;

  const readerAvatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-b from-[#052119] via-[#083024] to-[#041a13] text-white">
      {/* Top Scarcity Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <div className="bg-emerald-950/80 border border-emerald-500/30 rounded-2xl py-2 px-4 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200 gap-2 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-amber-300">
              ⚡ OFERTA DE ATUALIZAÇÃO 2026: R$ 37,00 À VISTA (Últimas Vagas)
            </span>
          </div>
          <div className="text-[11px] text-emerald-300/80 font-medium">
            🔥 140 pessoas lendo esta página agora mesmo
          </div>
        </div>
      </div>

      {/* Atmospheric radial lights */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        {/* Golden Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-black shadow-xs whitespace-nowrap">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>★ O VERDADEIRO GUIA DEFINITIVO PARA 2026</span>
        </div>

        {/* Main Authoritative Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-extrabold text-white tracking-tight leading-[1.18] max-w-3xl mx-auto">
          Depois dos 60:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
            50 Cuidados Que Todo Idoso e Sua Família Precisam Conhecer!
          </span>
        </h1>

        {/* Empathetic Subheadline */}
        <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
          {hero.subheadline}
        </p>

        {/* Key Value Checklist Bullets */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
          {hero.keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-2.5 bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-3">
              <div className="mt-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 p-0.5 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-emerald-100 font-medium leading-snug">
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Urgency Countdown Timer (15-min scarcity) */}
        <div className="pt-2 flex justify-center">
          <UrgencyCountdown variant="hero" />
        </div>

        {/* Primary Action Buttons (Golden high-converting button) */}
        <div className="pt-2 space-y-4 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3.5">
            <button
              id="hero-primary-cta"
              type="button"
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 group cursor-pointer whitespace-nowrap border border-amber-200"
            >
              <Sparkles className="w-5 h-5 fill-amber-950 text-amber-950" />
              <span>QUERO ACESSAR AGORA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <button
              id="hero-secondary-btn"
              type="button"
              onClick={onExploreChapters}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base px-5 py-4 rounded-2xl border border-white/20 transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap backdrop-blur-xs"
            >
              <BookOpen className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Ver os 8 Capítulos</span>
            </button>
          </div>

          {/* Price Details & Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-5 text-xs sm:text-sm text-emerald-200/90 pt-1">
            <div className="flex items-center gap-1.5 text-white font-bold whitespace-nowrap">
              <span className="text-lg text-amber-300 font-black">R$ 37,00</span>
              <span className="text-emerald-300 font-normal">à vista</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia de 7 Dias Incondicional</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Clock className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Acesso Imediato à Área de Membros</span>
            </div>
            <div className="w-full text-[11px] sm:text-xs text-emerald-200/90 pt-0.5 text-center">
              💡 <strong className="text-amber-300">Lembrete:</strong> Todo o valor investido volta para você caso não goste (<em>Ex:</em> R$ 37,00 100% estornados em até 7 dias).
            </div>
          </div>

          {/* Verified Reader Proof with Real Photo Avatars */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3 border-t border-emerald-800/60">
            <div className="flex -space-x-2 overflow-hidden">
              {readerAvatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Leitor Verificado"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-emerald-500 object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-xs text-emerald-200">
              <span className="font-bold text-white">+1.400 vidas transformadas</span> no Brasil e mundo • 
              <span className="text-amber-300 font-bold ml-1">★ 5.0 (1.842 avaliações)</span>
            </div>
          </div>

          {/* Trust Badges Strip */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-[11px] text-emerald-300/80">
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Autoridade Médica & Geriátrica</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Checkout Criptografado SSL 256-bit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
