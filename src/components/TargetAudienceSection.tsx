import React from 'react';
import { salesContent } from '../data/salesContent';
import { HeartHandshake, Sparkles, ShieldCheck, CheckCircle2, Users } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const { personas } = salesContent;

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-brand-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
      default:
        return <Users className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <section id="para-quem" className="py-16 md:py-24 bg-white border-t border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-warm-700 bg-warm-100 px-3.5 py-1 rounded-full border border-warm-200">
            <Users className="w-3.5 h-3.5 text-brand-700" />
            Público-Alvo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            Para Quem Este Guia Foi Criado?
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-2xl mx-auto">
            O material foi desenvolvido com linguagem acessível e acolhedora, atendendo três perfis fundamentais:
          </p>
        </div>

        {/* 3 Personas Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="bg-warm-50/80 rounded-3xl p-7 border border-warm-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Persona Header */}
                <div className="w-12 h-12 rounded-2xl bg-brand-100/90 flex items-center justify-center border border-brand-200/60">
                  {getIcon(persona.iconName)}
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-warm-950 leading-snug">
                    {persona.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-800 mt-1">
                    {persona.subtitle}
                  </p>
                </div>

                <p className="text-sm text-warm-700 leading-relaxed">
                  {persona.description}
                </p>

                {/* Benefits Bullets */}
                <div className="pt-2 space-y-2 border-t border-warm-200/70">
                  <span className="text-xs font-bold uppercase tracking-wider text-warm-500 block">
                    Benefícios diretos:
                  </span>
                  {persona.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-warm-800">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
