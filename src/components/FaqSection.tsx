import React, { useState } from 'react';
import { salesContent } from '../data/salesContent';
import { HelpCircle, ChevronDown, MessageCircleQuestion } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { faq } = salesContent;
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'dificil-aplicar': true, // Keep first open by default
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-warm-700 bg-warm-200/80 px-3.5 py-1 rounded-full border border-warm-300">
            <HelpCircle className="w-3.5 h-3.5 text-brand-700" />
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            Tudo o Que Você Precisa Saber Antes de Começar
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-xl mx-auto">
            Respostas diretas, sem rodeios e com total transparência para a sua segurança:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.map((item) => {
            const isOpen = !!openIds[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-warm-200 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 text-warm-900 hover:text-brand-800 transition cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-warm-100 flex items-center justify-center shrink-0 text-warm-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-100 text-brand-800' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-warm-700 text-sm sm:text-base leading-relaxed border-t border-warm-100 pt-4 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-warm-500">
            Ainda ficou com alguma dúvida sobre o formato digital ou o acesso? O acesso à Área de Membros é liberado imediatamente após a confirmação do pagamento.
          </p>
        </div>

      </div>
    </section>
  );
};
