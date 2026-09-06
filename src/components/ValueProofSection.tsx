import React from 'react';
import { salesContent } from '../data/salesContent';
import { AlertCircle, CheckCircle2, Scale, ArrowRight, ShieldCheck } from 'lucide-react';

interface ValueProofSectionProps {
  onOpenCheckout: () => void;
}

export const ValueProofSection: React.FC<ValueProofSectionProps> = ({ onOpenCheckout }) => {
  const { valueProof, product } = salesContent;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-warm-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-warm-700 bg-warm-100 px-3.5 py-1 rounded-full border border-warm-200">
            <Scale className="w-3.5 h-3.5 text-brand-700" />
            {valueProof.tag}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            {valueProof.title}
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-2xl mx-auto">
            {valueProof.lead}
          </p>
        </div>

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProof.comparisons.map((box, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 border ${box.boxStyle} flex flex-col justify-between shadow-xs`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {idx === 0 ? (
                    <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 border border-red-200">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-brand-200 text-brand-800 flex items-center justify-center shrink-0 border border-brand-300">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  )}
                  <h3 className="font-display font-bold text-lg sm:text-xl leading-snug">
                    {box.category}
                  </h3>
                </div>

                <ul className="space-y-3 pt-2 text-sm sm:text-base">
                  {box.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 leading-relaxed">
                      {idx === 0 ? (
                        <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      ) : (
                        <span className="text-brand-700 font-bold shrink-0 mt-0.5">✓</span>
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Summary note & CTA */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-warm-100/70 border border-warm-200/90 text-center space-y-4">
          <p className="text-base sm:text-lg text-warm-800 font-medium max-w-2xl mx-auto leading-relaxed">
            {valueProof.summaryNote}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="value-proof-cta"
              type="button"
              onClick={onOpenCheckout}
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Garantir Meu Guia Completo por R$ 37,00</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
