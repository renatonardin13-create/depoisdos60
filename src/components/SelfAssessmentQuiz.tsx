import React, { useState } from 'react';
import { salesContent } from '../data/salesContent';
import { AssessmentQuestion } from '../types';
import { ClipboardCheck, CheckCircle, HelpCircle, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface SelfAssessmentQuizProps {
  onOpenCheckout: () => void;
}

export const SelfAssessmentQuiz: React.FC<SelfAssessmentQuizProps> = ({ onOpenCheckout }) => {
  const { assessmentQuiz } = salesContent;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: number, hasIssue: boolean) => {
    const updated = { ...answers, [questionId]: hasIssue };
    setAnswers(updated);
    
    if (currentStep < assessmentQuiz.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  const currentQ = assessmentQuiz[currentStep];
  const issuesCount = Object.values(answers).filter(Boolean).length;

  return (
    <section className="py-14 md:py-20 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 mb-8">
          <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            <ClipboardCheck className="w-3.5 h-3.5 text-teal-700" />
            Autoavaliação Rápida de 1 Minuto
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-warm-950">
            A rotina de segurança da sua família está protegida?
          </h2>
          <p className="text-sm sm:text-base text-warm-600">
            Responda 4 perguntas simples e identifique os pontos mais urgentes para ajustar hoje:
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-200 shadow-sm relative">
          
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-warm-500 pb-2 border-b border-warm-100">
                <span>Pergunta {currentStep + 1} de {assessmentQuiz.length}</span>
                <div className="flex gap-1.5">
                  {assessmentQuiz.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentStep
                          ? 'w-6 bg-brand-600'
                          : idx < currentStep
                          ? 'w-2 bg-brand-300'
                          : 'w-2 bg-warm-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-warm-900 leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-xs sm:text-sm text-warm-600">
                  {currentQ.description}
                </p>
              </div>

              {/* Answer Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleAnswer(currentQ.id, true)}
                  className="w-full text-left p-4 rounded-2xl border border-warm-200 hover:border-amber-400 hover:bg-amber-50/40 text-warm-800 text-sm sm:text-base font-medium transition flex items-center justify-between group cursor-pointer"
                >
                  <span>{currentQ.optionYes}</span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-md">
                    Precisa de ajuste
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleAnswer(currentQ.id, false)}
                  className="w-full text-left p-4 rounded-2xl border border-warm-200 hover:border-brand-400 hover:bg-brand-50/40 text-warm-800 text-sm sm:text-base font-medium transition flex items-center justify-between group cursor-pointer"
                >
                  <span>{currentQ.optionNo}</span>
                  <span className="text-xs font-bold text-brand-700 bg-brand-100 px-2.5 py-1 rounded-md">
                    Já está seguro
                  </span>
                </button>
              </div>

            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-950">
                  Resultado da sua Avaliação
                </h3>
                <p className="text-sm sm:text-base text-warm-700 max-w-lg mx-auto">
                  {issuesCount > 0
                    ? `Identificamos ${issuesCount} ponto(s) de atenção que podem ser ajustados com facilidade usando as orientações do ebook.`
                    : 'Parabéns pela dedicação! O ebook servirá como um checklist perfeito de aprimoramento e manutenção da rotina.'}
                </p>
              </div>

              {/* Actionable chapter suggestions */}
              <div className="text-left space-y-2 bg-warm-50 p-4 sm:p-5 rounded-2xl border border-warm-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-warm-800">
                  Capítulos mais recomendados para sua família:
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-warm-700">
                  {assessmentQuiz.map((q) => {
                    const hadIssue = answers[q.id];
                    if (hadIssue) {
                      return (
                        <div key={q.id} className="p-2.5 rounded-xl bg-white border border-warm-200">
                          <span className="font-bold text-brand-800 block">{q.tip}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-warm-500 hover:text-warm-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer teste</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl shadow-sm transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Acessar o Ebook Completo por R$ 37,00</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
