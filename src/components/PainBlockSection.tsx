import React from 'react';
import { salesContent } from '../data/salesContent';
import { AlertCircle, PhoneCall, HeartCrack, AlertTriangle, Flame, ShieldAlert, FileQuestion, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

export const PainBlockSection: React.FC = () => {
  const { painBlock } = salesContent;

  const painItems = [
    {
      id: 1,
      title: 'O sobressalto a cada toque de telefone',
      text: 'O medo instantâneo de ser uma ligação avisando sobre uma queda no banheiro, tontura ou mal súbito enquanto você está no trabalho ou cuidando dos afazeres.',
      icon: <PhoneCall className="w-5 h-5 text-red-600" />,
    },
    {
      id: 2,
      title: 'Confusão perigosa com caixas de remédios',
      text: 'Múltiplos comprimidos com horários trocados, dúvidas se a dose foi tomada e o perigo silencioso de interações medicamentosas graves.',
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
    },
    {
      id: 3,
      title: 'Conflitos e resistência ao tentar ajudar',
      text: 'A frustração de sugerir cuidados e ser recebido com teimosia ou chateação, pois os pais sentem que estão perdendo a própria autonomia.',
      icon: <HeartCrack className="w-5 h-5 text-red-600" />,
    },
    {
      id: 4,
      title: 'Culpa e sensação constante de despreparo',
      text: 'A dúvida diária e silenciosa: “Será que estou fazendo o suficiente ou estou deixando passar algum sinal médico grave por pura falta de conhecimento?”.',
      icon: <ShieldAlert className="w-5 h-5 text-red-600" />,
    },
    {
      id: 5,
      title: 'Falta de um plano rápido para emergências',
      text: 'Não ter uma ficha médica organizada com tipo sanguíneo, contatos e alergias que possa ser entregue aos socorristas em menos de 1 minuto.',
      icon: <FileQuestion className="w-5 h-5 text-red-600" />,
    },
    {
      id: 6,
      title: 'Exaustão de viver “apagando incêndios”',
      text: 'Viver em alerta permanente substitui conversas afetuosas por cansaço, estresse familiar e desgaste entre irmãos.',
      icon: <Flame className="w-5 h-5 text-red-600" />,
    },
  ];

  return (
    <section id="dor" className="py-16 md:py-24 bg-white border-t border-warm-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (matching image.png) */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-red-800 bg-red-100 px-3.5 py-1 rounded-full border border-red-200 whitespace-nowrap">
            Desafios Silenciosos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            Você Se Identifica Com Algum Desses Problemas?
          </h2>
          <p className="text-base sm:text-lg text-warm-600 max-w-2xl mx-auto">
            A rotina de cuidar de quem envelhece traz desafios diários que quase ninguém ensina ou compartilha abertamente:
          </p>
        </div>

        {/* 6 Problem Cards Grid (matching image.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {painItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-neutral-50/80 border border-warm-200/90 hover:border-red-300 hover:bg-red-50/20 transition-all shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-red-100/90 flex items-center justify-center shrink-0 border border-red-200">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200/60">
                    Alerta #{item.id}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-warm-950 leading-snug group-hover:text-red-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Connective Solution Box (matching image.png) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-warm-50 to-amber-50 border-2 border-emerald-300/80 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-100/80 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>A Boa Notícia: Você Não Precisa Mais Passar Por Isso Sozinho</span>
            </div>
            <p className="font-serif text-base sm:text-lg md:text-xl text-warm-950 font-bold leading-relaxed">
              Reunimos no guia prático “Depois dos 60” exatamente o passo a passo objetivo para eliminar cada uma destas 6 preocupações, trazendo segurança imediata para o seu lar.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
