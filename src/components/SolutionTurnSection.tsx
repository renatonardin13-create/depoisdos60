import React from 'react';
import { salesContent } from '../data/salesContent';
import { ShieldCheck, HeartHandshake, Smile, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { CarePhotographicShowcase } from './CarePhotographicShowcase';

interface SolutionTurnSectionProps {
  onOpenCheckout: () => void;
}

export const SolutionTurnSection: React.FC<SolutionTurnSectionProps> = ({ onOpenCheckout }) => {
  const { solutionTurn } = salesContent;

  const pillarIcons = [
    <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0" />,
    <Smile className="w-5 h-5 text-emerald-700 shrink-0" />,
    <HeartHandshake className="w-5 h-5 text-emerald-700 shrink-0" />,
  ];

  return (
    <section id="solucao" className="py-16 md:py-24 bg-warm-100/60 border-t border-warm-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Tag */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-emerald-900 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
            {solutionTurn.tag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950 max-w-3xl mx-auto leading-tight">
            {solutionTurn.title}
          </h2>
        </div>

        {/* 2-Column Showcase Grid: Narrative & Pillars on Left, Photographic Tablet Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative, Pillars & Action Button */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200/90 shadow-sm space-y-5">
              <div className="space-y-3 text-warm-800 text-base sm:text-lg leading-relaxed">
                <p className="font-bold text-warm-950">
                  {solutionTurn.leadText}
                </p>
                <p className="text-warm-700 text-sm sm:text-base">
                  {solutionTurn.explanationText}
                </p>
              </div>

              {/* 3 Pillars List */}
              <div className="space-y-3.5 pt-3 border-t border-warm-100">
                {solutionTurn.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-warm-50/80 border border-warm-200/80 flex items-start gap-3.5 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 shadow-2xs">
                      {pillarIcons[idx]}
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="font-display font-bold text-base text-warm-950">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to action button */}
              <div className="pt-2">
                <button
                  id="solution-cta-btn"
                  type="button"
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-brand-900 hover:from-emerald-700 hover:to-brand-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <span>Garantir o Guia Completo por R$ 37,00</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Boxset Showcase (Bonus #4: 50 Ações Práticas) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <CarePhotographicShowcase onOpenCheckout={onOpenCheckout} />
          </div>

        </div>

      </div>
    </section>
  );
};
