import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { salesContent } from '../data/salesContent';
import { UrgencyCountdown } from './UrgencyCountdown';

interface StickyBottomBarProps {
  onOpenCheckout: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const { product } = salesContent;

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (> 420px)
      const scrolled = window.scrollY > 420;
      setIsVisible(scrolled);

      // Check distance to bottom of page (footer area)
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      // When reaching near the bottom, hide smoothly so footer links and disclaimer are never covered
      const nearBottom = scrollPosition >= totalHeight - 200;
      setIsNearFooter(nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-warm-200/90 shadow-2xl p-2.5 sm:py-3 sm:px-6 transition-all duration-300 ${
        isNearFooter ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 animate-fadeIn'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left summary info */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-brand-700" />
          </div>
          <div className="text-left">
            <span className="font-display font-bold text-sm text-warm-950 block leading-tight whitespace-nowrap">
              Depois dos 60: 50 Cuidados Práticos
            </span>
            <span className="text-xs text-warm-500 whitespace-nowrap">
              Ebook Completo na Área de Membros + 7 Dias Grátis no App Web Viva+60
            </span>
          </div>
        </div>

        {/* Center Countdown in Sticky Bar for Desktop */}
        <div className="hidden lg:flex items-center">
          <UrgencyCountdown variant="compact" />
        </div>

        {/* Right price, mobile countdown, and conversion CTA */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3 sm:gap-4">
          <div className="text-left md:text-right flex flex-col justify-center">
            {/* Mobile countdown badge */}
            <div className="lg:hidden mb-0.5">
              <UrgencyCountdown variant="compact" />
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-warm-500 font-medium whitespace-nowrap">Por apenas</span>
              <span className="text-xl sm:text-2xl font-extrabold text-brand-950 font-display whitespace-nowrap">
                R$ 37,00
              </span>
            </div>
            <span className="text-[11px] text-warm-500 hidden sm:block whitespace-nowrap">
              à vista ou {product.installments}
            </span>
          </div>

          <button
            id="sticky-bar-cta"
            type="button"
            onClick={onOpenCheckout}
            className="bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer whitespace-nowrap transform active:scale-[0.98]"
          >
            <span>Garantir Meu Ebook</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </div>
  );
};
