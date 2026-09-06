import React from 'react';
import { salesContent } from '../data/salesContent';
import { ShieldCheck, CheckCircle2, Lock, HeartHandshake } from 'lucide-react';
import { GoldGuaranteeSeal } from './GoldGuaranteeSeal';

export const GuaranteeSection: React.FC = () => {
  const { guarantee } = salesContent;

  return (
    <section id="garantia" className="py-16 md:py-24 bg-warm-100/50 border-t border-warm-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-[#06241b] via-[#0b382b] to-[#041a13] rounded-3xl p-8 sm:p-12 border-2 border-amber-400/50 shadow-2xl relative overflow-hidden text-center sm:text-left text-white">
          
          {/* Decorative watermark badge */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <ShieldCheck className="w-80 h-80 text-amber-300" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Golden Guarantee Emblem */}
            <div className="sm:col-span-4 flex flex-col items-center justify-center">
              <GoldGuaranteeSeal />
            </div>

            {/* Guarantee Text */}
            <div className="sm:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-400/40 inline-block mb-1">
                  {guarantee.subtitle}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-warm-50">
                  {guarantee.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
                {guarantee.text}
              </p>

              {/* Lembrete de Risco Zero com Exemplo Prático */}
              <div className="bg-amber-400/10 border border-amber-400/35 rounded-2xl p-4 text-xs sm:text-sm text-amber-100 space-y-1.5 backdrop-blur-xs">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
                  <span>Lembrete Importante: Todo o valor investido volta para você</span>
                </div>
                <p className="leading-relaxed text-emerald-100/95">
                  <strong>Exemplo prático:</strong> Você adquire o guia hoje por <strong>R$ 37,00</strong> e acessa a Área de Membros com sua família. Se em até 7 dias você sentir que o conteúdo não valeu a pena, basta pedir o cancelamento: <strong>100% do valor da compra (R$ 37,00) volta para sua conta</strong>, de forma rápida e sem qualquer desconto.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-warm-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Sem burocracia nem pegadinhas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Devolução integral com 1 clique</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Compromisso e respeito ético</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
