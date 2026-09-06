import React, { useState } from 'react';
import { BookOpen, Star, Smartphone, ShieldCheck, Sparkles, CheckCircle2, Heart, Award, Layers } from 'lucide-react';
import { Ebook3DMockupGraphic } from './illustrations/Ebook3DMockupGraphic';

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
          {/* Floating Badge: MAIS VENDIDO */}
          <div className="absolute top-10 right-4 sm:right-8 z-30 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-amber-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/30 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
            <span>Mais Vendido 2026</span>
          </div>

          {/* Main Bundle Container */}
          <div className="relative pt-6 pb-4 px-2 sm:px-4 flex items-center justify-center">
        
        {/* ============================================================ */}
        {/* 1. TABLET / iPAD MOCKUP (Tilted slightly to the left behind) */}
        {/* ============================================================ */}
        <div 
          className="absolute -left-2 sm:left-2 bottom-10 sm:bottom-12 w-48 sm:w-60 aspect-[3/4] rounded-2xl bg-neutral-900 p-2 sm:p-2.5 shadow-2xl border-2 border-neutral-700/80 transform -rotate-6 sm:-rotate-8 hover:rotate-0 transition-transform duration-500 z-10 hidden xs:block"
          style={{ boxShadow: '-15px 20px 35px rgba(0,0,0,0.55)' }}
        >
          {/* Tablet Screen */}
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-warm-50 to-warm-100 overflow-hidden flex flex-col justify-between border border-warm-200 text-left">
            {/* Tablet Header */}
            <div className="bg-brand-900 text-white px-2.5 py-1.5 flex items-center justify-between text-[9px] font-bold">
              <span className="truncate">Capítulo 01: Casa Segura</span>
              <span className="text-amber-300 shrink-0">pág. 14</span>
            </div>
            
            {/* Tablet Content Preview */}
            <div className="p-2 space-y-1.5 text-[8px] text-warm-800">
              <div className="h-14 rounded-lg overflow-hidden relative shadow-2xs">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80" 
                  alt="Ambiente residencial e banheiro adaptado com segurança e barras de apoio"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-1">
                  <span className="text-white font-bold text-[8px] leading-tight">Capítulo 1 • Prevenção e Casa Segura</span>
                </div>
              </div>

              <div className="space-y-1 pt-0.5">
                <div className="flex items-center gap-1 font-bold text-brand-950">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span>Iluminação Noturna Automática</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-brand-950">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span>Barras e Apoios Estratégicos</span>
                </div>
              </div>
            </div>

            {/* Tablet Footer */}
            <div className="bg-warm-200/80 px-2 py-1 text-[8px] text-warm-600 flex justify-between font-semibold">
              <span>Depois dos 60 • Área de Membros</span>
              <span>100% Legível</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. REALISTIC 3D HARDCOVER BOOK (Centerpiece)                 */}
        {/* ============================================================ */}
        <div 
          className="relative z-20 w-56 sm:w-64 md:w-72 aspect-[1/1.42] transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
          onClick={onOpenCheckout}
          title="Clique para garantir o seu ebook"
        >
          {/* 3D Book Container with Realistic Spine & Depth */}
          <div className="relative w-full h-full rounded-r-xl rounded-l-xs overflow-hidden shadow-2xl bg-neutral-900 border-r-2 border-y border-warm-600/40 flex"
            style={{
              boxShadow: '18px 22px 40px rgba(0,0,0,0.65), 5px 8px 15px rgba(0,0,0,0.4)',
            }}
          >
            {/* Book Spine (Left 3D Curve) */}
            <div className="w-5 sm:w-6 h-full bg-gradient-to-r from-neutral-950 via-brand-950 to-brand-900 border-r border-amber-400/30 shrink-0 flex flex-col justify-between py-4 items-center text-amber-300 relative shadow-inner">
              <span className="text-[7px] font-black uppercase tracking-widest text-amber-400 transform -rotate-90 origin-center whitespace-nowrap">
                DEPOIS DOS 60
              </span>
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[6px] text-neutral-400 font-mono">2026</span>
            </div>

            {/* Front Cover Card */}
            <div className="relative flex-1 h-full bg-gradient-to-b from-[#031d16] via-[#08382b] to-[#02130e] text-white p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden text-left">
              
              {/* Cover Header */}
              <div className="space-y-1.5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] sm:text-[9px] font-black tracking-wider uppercase text-amber-300 bg-black/50 px-2 py-0.5 rounded border border-amber-400/40">
                    GUIA OFICIAL 2026
                  </span>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="h-0.5 w-8 bg-amber-400" />
              </div>

              {/* Cover Title and Visual */}
              <div className="my-auto py-2 space-y-2 relative z-10">
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-emerald-200/90 block">
                  MANUAL PRÁTICO DE PREVENÇÃO & SAÚDE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-black text-warm-50 leading-[1.1] drop-shadow-md">
                  Depois dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 font-black">60</span>
                </h3>
                <p className="text-[10px] sm:text-xs text-warm-200 font-medium leading-tight">
                  50 Cuidados Que Todo Idoso e Sua Família Precisam Conhecer
                </p>

                    {/* Bespoke Vector Longevity Crest Emblem */}
                    <div className="mt-2.5 py-2 px-2.5 rounded-xl bg-black/40 border border-amber-400/30 flex items-center gap-2.5 shadow-inner">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 shadow-sm">
                        <Heart className="w-4 h-4 text-neutral-950 fill-neutral-950" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="text-[9px] font-bold text-amber-300 block">Longevidade & Autonomia</span>
                        <span className="text-[7.5px] text-emerald-100">Guia Prático • Edição Oficial 2026</span>
                      </div>
                    </div>
                  </div>

              {/* Cover Footer */}
              <div className="pt-2 border-t border-emerald-700/50 flex items-center justify-between text-[8px] sm:text-[9px] text-warm-200 relative z-10">
                <span className="font-semibold text-warm-300">128 Páginas • 8 Capítulos</span>
                <span className="bg-amber-400 text-amber-950 font-black px-2 py-0.5 rounded text-[8px] uppercase tracking-wider">
                  Guia Digital
                </span>
              </div>

              {/* Glossy Overlay Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>

            {/* 3D Page Edges (Right Side Thick Stacked Paper Effect) */}
            <div 
              className="w-3 sm:w-4 h-full bg-gradient-to-r from-warm-200 via-warm-100 to-warm-300 border-l border-neutral-700/60 flex flex-col justify-around py-2"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #f5f5f0, #f5f5f0 1px, #e2e0d8 1px, #e2e0d8 2px)'
              }}
            >
              {/* Golden Bookmark Ribbon Tab */}
              <div className="w-full h-4 bg-amber-500 shadow-xs" />
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. SMARTPHONE MOCKUP (Foreground Right)                     */}
        {/* ============================================================ */}
        <div 
          className="absolute -right-2 sm:right-0 bottom-4 sm:bottom-6 w-32 sm:w-40 aspect-[9/18] rounded-2xl bg-black p-1.5 shadow-2xl border-2 border-neutral-600 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-30"
          style={{ boxShadow: '15px 18px 30px rgba(0,0,0,0.65)' }}
        >
          {/* Phone Screen */}
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-brand-900 to-teal-950 text-white p-2 flex flex-col justify-between text-left overflow-hidden relative">
            {/* Soft-lighting Authentic Background Photo */}
            <img 
              src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=300&q=80" 
              alt="Idosa utilizando o aplicativo Viva+60 com autonomia"
              className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-[0.5px]"
              referrerPolicy="no-referrer"
            />

            {/* Phone Speaker Notch */}
            <div className="w-10 h-1 bg-neutral-800 rounded-full mx-auto mb-1 relative z-10" />

            {/* App Screen Header */}
            <div className="space-y-0.5 relative z-10">
              <div className="flex items-center justify-between text-[7px] text-teal-200">
                <span className="font-bold">App Web Viva+60</span>
                <span className="bg-emerald-500 text-white px-1 rounded text-[6px]">BÔNUS</span>
              </div>
              <p className="text-[8px] font-black text-amber-300 leading-tight">
                Lembrete Ativo
              </p>
            </div>

            {/* Notification Card */}
            <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-lg border border-white/25 space-y-1 my-auto relative z-10 shadow-lg">
              <div className="flex items-center gap-1 text-[7px] text-emerald-300 font-bold">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                <span>14:00 • Remédio Tomado</span>
              </div>
              <div className="text-[6px] text-warm-200 leading-tight">
                Losartana 50mg + Copo d'água
              </div>
            </div>

            {/* App Footer */}
            <div className="bg-black/70 backdrop-blur-xs p-1 rounded text-[7px] text-center font-bold text-amber-300 border border-amber-400/30 relative z-10">
              7 Dias Grátis
            </div>
          </div>
        </div>

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
