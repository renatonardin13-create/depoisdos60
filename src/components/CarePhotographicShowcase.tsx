import React from 'react';
import { Sparkles, CheckCircle2, Heart, ShieldCheck, Check } from 'lucide-react';

export const CarePhotographicShowcase: React.FC = () => {
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=600&q=80',
      title: 'Autonomia & Vitalidade',
      subtitle: 'Idosos ativos e confiantes no seu lar',
    },
    {
      url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
      title: 'Apoio Familiar com Afeto',
      subtitle: 'Conversas que acolhem sem infantilizar',
    },
    {
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      title: 'Remédios Organizados',
      subtitle: 'Rotina clara com horários e dosagens sem estresse',
    },
    {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
      title: 'Prevenção de Quedas',
      subtitle: 'Ambientes seguros e iluminados',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600/15 to-amber-500/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Tablet Frame */}
      <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-warm-200/90 text-left">
        
        {/* Tablet Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-warm-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] font-bold text-warm-700 ml-2">
              Guia Ilustrado • Guia de Aplicação Rápida
            </span>
          </div>
          <span className="text-[10px] font-bold text-brand-900 bg-brand-100 px-2 py-0.5 rounded-full border border-brand-200">
            50 Ações Práticas
          </span>
        </div>

        {/* 4-Photo Curated Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-warm-100 border border-warm-200/80 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.98]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 sm:p-2.5 text-white">
                <span className="text-[10px] sm:text-xs font-bold leading-tight drop-shadow-xs">
                  {item.title}
                </span>
                <span className="text-[8px] sm:text-[9px] text-warm-200 line-clamp-1 font-normal opacity-90">
                  {item.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Bottom Pill Badge (matching reference image) */}
        <div className="mt-4 pt-3 border-t border-warm-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-brand-900 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Passo a passo visual e aplicável hoje</span>
          </div>
          <div className="text-[11px] font-semibold text-warm-600 bg-warm-100 px-2.5 py-1 rounded-full border border-warm-200">
            Da prevenção ao carinho diário
          </div>
        </div>

      </div>
    </div>
  );
};
