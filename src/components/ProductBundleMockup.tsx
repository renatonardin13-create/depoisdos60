import React, { useState } from 'react';
import { BookOpen, Star, Smartphone, ShieldCheck, Sparkles, CheckCircle2, Heart, Award, Layers } from 'lucide-react';
import { Ebook3DMockupGraphic } from './illustrations/Ebook3DMockupGraphic';
import { Boxset3DMockupGraphic } from './illustrations/Boxset3DMockupGraphic';

interface ProductBundleMockupProps {
  onOpenCheckout?: () => void;
}

export const ProductBundleMockup: React.FC<ProductBundleMockupProps> = ({ onOpenCheckout }) => {
  const [viewMode, setViewMode] = useState<'bundle' | 'ebook3d'>('bundle');
  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Background Soft Emerald & Amber Atmospheric Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      {/* View Mode Toggle: Kit Completo vs Ebook 3D Ilustrado */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="bg-black/70 backdrop-blur-md p-1 rounded-xl border border-emerald-500/30 flex items-center gap-1 shadow-lg">
          <button
            type="button"
            onClick={() => setViewMode('bundle')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'bundle'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Kit Completo</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('ebook3d')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'ebook3d'
                ? 'bg-amber-400 text-amber-950 shadow-xs'
                : 'text-emerald-200 hover:text-white hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ebook 3D Ilustrado</span>
          </button>
        </div>
      </div>

      {viewMode === 'ebook3d' ? (
        <div className="py-2">
          <Ebook3DMockupGraphic onOpenCheckout={onOpenCheckout} />
          
          {/* Quick Action Button & Micro-Guarantee */}
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <button
              type="button"
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-700/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 border border-emerald-400/40"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Garantir Meu Ebook por R$ 37,00</span>
            </button>
            <div className="flex items-center gap-3 text-[11px] text-emerald-200/90">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Acesso Imediato</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Leitura em Qualquer Aparelho</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>7 Dias de Garantia</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Floating Badge: MAIS VENDIDO (Positioned so it doesn't obstruct the gold ribbon on the right) */}
          <div className="absolute top-2 right-2 sm:right-4 z-30 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
            <span>Mais Vendido 2026</span>
          </div>

          {/* 3D Boxset + Smartphone Mockup (Exact Match to Image 2) */}
          <div className="relative pt-6 pb-1 px-1 flex items-center justify-center">
            <Boxset3DMockupGraphic onOpenCheckout={onOpenCheckout} />
          </div>
        </>
      )}

      {/* Floating Trust Pill Beneath Mockup */}
      <div className="relative z-30 -mt-2 flex flex-wrap items-center justify-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold border border-warm-700/60 shadow-lg whitespace-nowrap">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>Acesso Imediato Vitalício • </span>
          <span className="text-amber-400 font-bold">★ 5.0 (1.400+ avaliações)</span>
        </div>
      </div>

    </div>
  );
};
