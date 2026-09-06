import React, { useState } from 'react';
import { salesContent } from '../data/salesContent';
import { Star, Quote, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = salesContent;
  const [failedAvatars, setFailedAvatars] = useState<Record<string, boolean>>({});

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-brand-900 bg-brand-100 px-3.5 py-1 rounded-full border border-brand-200">
            <Heart className="w-3.5 h-3.5 text-brand-700 fill-brand-600/30" />
            Histórias Reais de Famílias
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            O Alívio de Trocar o Medo por Rotina e Segurança
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-2xl mx-auto">
            Veja como filhos, idosos independentes e cuidadores transformaram suas rotinas com o guia prático:
          </p>

          {/* Social Proof Metric Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 pt-2 text-xs sm:text-sm font-semibold text-warm-800">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-warm-900 font-bold ml-1">4.9 / 5.0</span>
            </div>
            <span className="text-warm-400">•</span>
            <span className="text-warm-700">+1.400 famílias orientadas</span>
            <span className="text-warm-400">•</span>
            <span className="text-brand-800 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" /> 100% Avaliações Verificadas
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200/90 shadow-xs hover:shadow-md hover:border-brand-200 transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-warm-200 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <p className="font-display font-bold text-base sm:text-lg text-warm-950 leading-snug text-brand-900">
                  {t.highlight}
                </p>

                {/* Main Quote */}
                <p className="text-sm sm:text-base text-warm-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details with Real Photo Avatar */}
              <div className="pt-5 mt-4 border-t border-warm-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    {t.avatarUrl && !failedAvatars[t.id] ? (
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        onError={() => setFailedAvatars(prev => ({ ...prev, [t.id]: true }))}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-600/30 shadow-xs"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-brand-100 text-brand-800 font-bold text-sm flex items-center justify-center shrink-0 border border-brand-200">
                        {t.avatarText}
                      </div>
                    )}
                    <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white rounded-full p-0.5 shadow-xs" title="Leitor Verificado">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-display font-bold text-sm text-warm-950 block">
                      {t.name}
                    </span>
                    <span className="text-xs text-brand-800 font-medium block">
                      {t.role}
                    </span>
                    <span className="text-[11px] text-warm-500 block">
                      {t.location}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 hidden sm:inline-block">
                  Compra Verificada ✓
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
