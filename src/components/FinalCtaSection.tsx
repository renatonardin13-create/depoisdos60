import React from 'react';
import { salesContent } from '../data/salesContent';
import { 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  Lock, 
  CreditCard, 
  QrCode, 
  Heart, 
  BookOpen, 
  Smartphone,
  Sparkles
} from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  const { product } = salesContent;

  const includedItems = [
    'Ebook digital completo “Depois dos 60” (128 páginas na Área de Membros)',
    '50 cuidados práticos divididos nos 8 capítulos essenciais de prevenção',
    'Checklists prontos de segurança em casa e organização de medicamentos',
    'Modelo de ficha de emergência médica para fixar na geladeira',
    'Bônus Especial: 7 dias gratuitos no aplicativo Viva+60',
    'Garantia incondicional de 7 dias com devolução de 100%',
    'Acesso vitalício à Área de Membros para consultar sempre que precisar',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-warm-50 via-warm-100/60 to-warm-200/50 border-t border-warm-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Emotional Close Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-warm-200 shadow-xl space-y-8 text-center relative overflow-hidden">
          
          {/* Top Heart Badge */}
          <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center mx-auto shadow-xs">
            <Heart className="w-7 h-7 fill-brand-600/20" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950 leading-tight">
              A tranquilidade da sua família começa com um pequeno passo de prevenção.
            </h2>
            <p className="text-base sm:text-lg text-warm-700 leading-relaxed font-normal">
              Você não precisa esperar uma queda, um susto com remédio ou uma emergência acontecer para organizar a rotina de quem você mais ama. Garanta hoje o seu guia prático e receba o acesso à Área de Membros logo após a confirmação do pagamento.
            </p>
          </div>

          {/* Pricing & What is included box */}
          <div className="bg-warm-50 rounded-2xl p-6 sm:p-8 border border-warm-200 text-left space-y-6">
            
            <div className="border-b border-warm-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-brand-800 bg-brand-100 px-2.5 py-0.5 rounded-full">
                  Oferta de Acesso Digital
                </span>
                <h3 className="font-display font-bold text-xl text-warm-900 mt-1">
                  Guia Digital + Bônus Viva+60
                </h3>
              </div>

              {/* Price Tag */}
              <div className="text-left sm:text-right">
                <span className="text-xs text-warm-500 line-through block">De R$ 97,00</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-warm-600">Por apenas</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-900 font-display">
                    R$ 37,00
                  </span>
                </div>
                <span className="text-xs font-semibold text-warm-600">
                  ou {product.installments} no cartão
                </span>
              </div>
            </div>

            {/* Checklist of Included items */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-warm-600 block">
                Tudo o que você recebe agora:
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-warm-800">
                {includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Purchase Button CTA */}
          <div className="space-y-4 pt-2">
            <button
              id="final-cta-btn"
              type="button"
              onClick={onOpenCheckout}
              className="w-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-amber-950 font-black text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer border border-amber-200"
            >
              <Sparkles className="w-6 h-6 fill-amber-950 text-amber-950 shrink-0" />
              <span>QUERO GARANTIR MEU ACESSO POR R$ 37,00</span>
              <ArrowRight className="w-6 h-6 shrink-0" />
            </button>

            {/* Payment & Security Reassurances */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-warm-700">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <QrCode className="w-4 h-4 text-emerald-700" />
                <span>PIX (Liberação Imediata)</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <CreditCard className="w-4 h-4 text-emerald-700" />
                <span>Cartão de Crédito em até 4x</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <Lock className="w-4 h-4 text-emerald-700" />
                <span>Ambiente Criptografado SSL 256-bit</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Garantia Total de 7 Dias</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
