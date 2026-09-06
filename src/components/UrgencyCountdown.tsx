import React from 'react';
import { useCountdown } from '../context/CountdownContext';
import { Timer, Zap, Flame, AlertCircle } from 'lucide-react';

interface UrgencyCountdownProps {
  variant?: 'hero' | 'compact';
  className?: string;
}

export const UrgencyCountdown: React.FC<UrgencyCountdownProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const { minutes, seconds, isExpired } = useCountdown();

  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 shadow-2xs whitespace-nowrap ${className}`}
        title="Tempo restante para garantir a condição especial"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
        </span>
        <Timer className="w-3.5 h-3.5 text-amber-700 shrink-0" />
        <span className="text-[11px] sm:text-xs font-semibold text-amber-900 hidden xs:inline">
          {isExpired ? 'Oferta Encerrando:' : 'Desconto expira em:'}
        </span>
        <div className="font-mono font-bold text-xs sm:text-sm text-amber-950 bg-amber-200/70 px-1.5 py-0.5 rounded-md border border-amber-300 tracking-wider">
          {minutes}:{seconds}
        </div>
      </div>
    );
  }

  // Hero variant: More prominent, persuasive, and beautifully styled
  return (
    <div
      className={`rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 border-2 border-amber-300/90 shadow-md text-left relative overflow-hidden ${className}`}
    >
      {/* Decorative subtle background icon */}
      <Flame className="w-24 h-24 text-amber-400/10 absolute -right-2 -bottom-4 pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left message */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-950 bg-amber-200/90 px-2 py-0.5 rounded-md border border-amber-300 whitespace-nowrap">
              <Zap className="w-3 h-3 text-amber-800 fill-amber-500" />
              Condição Promocional
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="text-xs text-rose-800 font-extrabold whitespace-nowrap hidden sm:inline">
              Vagas promocionais ativas
            </span>
          </div>
          <h3 className="font-display font-extrabold text-sm sm:text-base text-stone-900 leading-snug">
            {isExpired
              ? 'Últimos instantes para garantir por R$ 37,00'
              : 'O valor promocional de R$ 37,00 está reservado por:'}
          </h3>
          <p className="text-xs sm:text-[13px] text-stone-700 leading-normal">
            De <span className="line-through text-stone-400 font-medium">R$ 97,00</span> por apenas <strong className="text-emerald-800 font-black text-xs sm:text-sm">R$ 37,00</strong> (economia imediata de R$ 60,00).
          </p>
        </div>

        {/* Right countdown digits */}
        <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div className="min-w-[46px] sm:min-w-[54px] py-1 sm:py-1.5 px-2 bg-stone-900 text-amber-400 rounded-xl shadow-inner font-mono font-extrabold text-xl sm:text-2xl text-center border border-stone-800 tracking-wider">
              {minutes}
            </div>
            <span className="text-[10px] font-extrabold text-stone-600 uppercase mt-1">Minutos</span>
          </div>

          {/* Separator */}
          <span className="font-mono font-bold text-xl sm:text-2xl text-stone-700 pb-4">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div className="min-w-[46px] sm:min-w-[54px] py-1 sm:py-1.5 px-2 bg-stone-900 text-amber-400 rounded-xl shadow-inner font-mono font-extrabold text-xl sm:text-2xl text-center border border-stone-800 tracking-wider">
              {seconds}
            </div>
            <span className="text-[10px] font-extrabold text-stone-600 uppercase mt-1">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
