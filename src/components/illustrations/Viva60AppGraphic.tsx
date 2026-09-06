import React, { useState } from 'react';
import { 
  BellRing, 
  CheckCircle2, 
  Droplets, 
  Activity, 
  PhoneCall, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface Viva60AppGraphicProps {
  className?: string;
  interactive?: boolean;
  activeTabIndex?: number;
  onTabChange?: (index: number) => void;
}

export const Viva60AppGraphic: React.FC<Viva60AppGraphicProps> = ({
  className = '',
  interactive = true,
  activeTabIndex,
  onTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<'remedios' | 'agua' | 'alongamento' | 'sos'>('remedios');
  const [isTaken, setIsTaken] = useState(false);
  const [waterCount, setWaterCount] = useState(1400);

  const tabIndexMap: Record<number, 'remedios' | 'agua' | 'alongamento' | 'sos'> = {
    0: 'remedios',
    1: 'agua',
    2: 'alongamento',
    3: 'sos',
  };

  const currentTab = activeTabIndex !== undefined ? tabIndexMap[activeTabIndex] || 'remedios' : internalTab;

  const handleTabSwitch = (tab: 'remedios' | 'agua' | 'alongamento' | 'sos', idx: number) => {
    if (!interactive) return;
    setInternalTab(tab);
    if (onTabChange) onTabChange(idx);
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient background glow adhering to warm and brand tones */}
      <div 
        className="absolute -inset-6 rounded-full bg-gradient-to-tr from-teal-500/20 via-emerald-400/15 to-amber-300/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Modern Smartphone Hardware Chassis */}
      <div 
        className="relative w-full max-w-[325px] rounded-[44px] bg-gradient-to-b from-neutral-900 via-neutral-950 to-black p-3.5 shadow-2xl border-4 border-neutral-800"
        style={{
          boxShadow: '0 25px 60px -15px rgba(2, 20, 15, 0.5), 0 10px 20px -5px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Dynamic Island / Speaker & Front Camera Bezel */}
        <div className="w-28 h-4.5 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center gap-2 border border-neutral-800/80">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-950 border border-neutral-700/60" />
          <div className="w-8 h-1 bg-neutral-800 rounded-full" />
        </div>

        {/* Smartphone Screen Inner Frame */}
        <div className="w-full rounded-[32px] bg-warm-50 overflow-hidden border border-warm-200 text-left flex flex-col justify-between min-h-[510px]">
          
          {/* Top Status Bar (Senior-friendly, high contrast) */}
          <div className="bg-brand-900 text-emerald-100 px-4 pt-2.5 pb-2 flex items-center justify-between text-[11px] font-semibold border-b border-brand-800">
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <Sparkles className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>Viva+60 Digital</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-emerald-200">
              <span className="font-mono">13:58</span>
              <span className="bg-brand-800 px-1.5 py-0.5 rounded text-[9px] font-bold text-amber-300">
                100%
              </span>
            </div>
          </div>

          {/* Warm Welcome Greeting Banner */}
          <div className="bg-gradient-to-r from-brand-950 via-brand-900 to-teal-950 text-white p-3.5 space-y-1">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] text-emerald-300 font-medium">Sexta-feira • Hoje</span>
                <h4 className="font-display text-sm font-bold text-warm-50 flex items-center gap-1.5">
                  Olá, Dona Maria!
                  <Heart className="w-3 h-3 text-red-400 fill-red-400 inline" />
                </h4>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-700/60 border border-amber-400/40 flex items-center justify-center text-amber-300 text-xs font-bold shadow-xs">
                M
              </div>
            </div>

            {/* Daily Status Pill */}
            <div className="pt-1 flex items-center justify-between text-[10px] text-emerald-200/90 bg-white/10 px-2.5 py-1 rounded-xl backdrop-blur-xs">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {isTaken ? '4 de 4 cuidados feitos' : '3 de 4 cuidados feitos'}
              </span>
              <span className="font-bold text-amber-300">
                {isTaken ? '100% Concluído!' : '75% Concluído'}
              </span>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-3 space-y-2.5 flex-1 overflow-y-auto">
            
            {/* 1. Primary Highlighted Reminder Card: 14:00 Medication */}
            <div className={`p-3.5 rounded-2xl border transition-all duration-300 shadow-sm space-y-2.5 ${
              isTaken 
                ? 'bg-emerald-50 border-emerald-300' 
                : 'bg-white border-amber-300 ring-2 ring-amber-400/20 shadow-md'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full whitespace-nowrap flex items-center gap-1 ${
                    isTaken 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-900 animate-pulse'
                  }`}>
                    <Clock className="w-3 h-3 text-amber-700" />
                    {isTaken ? 'Realizado' : 'Agora às 14:00'}
                  </span>
                </div>
                {!isTaken && <BellRing className="w-4 h-4 text-amber-600 animate-bounce" />}
                {isTaken && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
              </div>

              <div>
                <h5 className="font-display font-black text-xs sm:text-sm text-warm-950 leading-snug">
                  Losartana Potássica 50mg
                </h5>
                <p className="text-[11px] text-warm-600 mt-0.5 leading-tight">
                  1 comprimido • Tomar junto a um copo cheio de água
                </p>
              </div>

              {/* Action Button */}
              {interactive && (
                <button
                  type="button"
                  onClick={() => setIsTaken(!isTaken)}
                  className={`w-full py-2 px-3 rounded-xl font-bold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                    isTaken
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white shadow-emerald-700/20'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{isTaken ? '✓ Dose Registrada com Sucesso' : 'Confirmar Dose Tomada'}</span>
                </button>
              )}
            </div>

            {/* 2. Hydration Progress Card */}
            <div className={`p-3 rounded-2xl bg-white border transition-all duration-300 shadow-2xs space-y-2 ${
              currentTab === 'agua' ? 'border-teal-500 ring-2 ring-teal-400/30' : 'border-teal-200/90'
            }`}>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-warm-900">
                  <Droplets className="w-3.5 h-3.5 text-teal-600" />
                  <span>Meta de Água Hoje</span>
                </div>
                <span className="text-teal-800 font-extrabold text-[11px]">
                  {waterCount}ml / 2.000ml
                </span>
              </div>

              {/* Visual Water Gauge */}
              <div className="w-full h-2.5 bg-teal-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-500" 
                  style={{ width: `${Math.min(100, (waterCount / 2000) * 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px]">
                <span className="text-warm-500">Faltam {Math.max(0, 2000 - waterCount)}ml para a meta</span>
                {interactive && (
                  <button
                    type="button"
                    onClick={() => setWaterCount(prev => Math.min(2500, prev + 250))}
                    className="text-teal-700 hover:text-teal-900 font-bold bg-teal-50 px-2 py-0.5 rounded-lg border border-teal-200 cursor-pointer"
                  >
                    + 250ml
                  </button>
                )}
              </div>
            </div>

            {/* 3. Safe Stretch & Mobility Card */}
            <div className={`p-2.5 rounded-2xl bg-white/90 border transition-all duration-300 shadow-2xs flex items-center justify-between ${
              currentTab === 'alongamento' ? 'border-amber-500 ring-2 ring-amber-400/30' : 'border-warm-200/90'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-warm-900 block leading-tight">
                    Alongamento Sentado
                  </span>
                  <span className="text-[9px] text-warm-500">5 minutos para soltar ombros e coluna</span>
                </div>
              </div>
              <span className="text-[9px] bg-warm-100 text-warm-700 font-bold px-1.5 py-0.5 rounded">
                17:00
              </span>
            </div>

            {/* 4. SOS Família 1-Touch Emergency Banner */}
            <div className={`p-2.5 rounded-2xl bg-gradient-to-r from-teal-800 to-brand-900 text-white flex items-center justify-between shadow-xs transition-all duration-300 ${
              currentTab === 'sos' ? 'ring-2 ring-red-500 shadow-md' : ''
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-[11px] font-bold block leading-tight">Mariana (Filha)</span>
                  <span className="text-[9px] text-teal-200">SOS Família em 1 Toque</span>
                </div>
              </div>
              <span className="bg-red-600 text-white text-[9px] font-extrabold px-2.5 py-1 rounded-xl shadow-2xs">
                LIGAR
              </span>
            </div>

          </div>

          {/* Bottom Senior Accessible Navigation Bar */}
          <div className="bg-white border-t border-warm-200 px-3 py-2 flex items-center justify-around text-center">
            <button
              type="button"
              onClick={() => handleTabSwitch('remedios', 0)}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold transition-colors cursor-pointer ${
                currentTab === 'remedios' ? 'text-teal-800 font-black scale-105' : 'text-warm-500 hover:text-warm-800'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Remédios</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch('agua', 1)}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold transition-colors cursor-pointer ${
                currentTab === 'agua' ? 'text-teal-800 font-black scale-105' : 'text-warm-500 hover:text-warm-800'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>Água</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch('alongamento', 2)}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold transition-colors cursor-pointer ${
                currentTab === 'alongamento' ? 'text-teal-800 font-black scale-105' : 'text-warm-500 hover:text-warm-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>Alongar</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabSwitch('sos', 3)}
              className={`flex flex-col items-center gap-0.5 text-[9px] font-bold transition-colors cursor-pointer ${
                currentTab === 'sos' ? 'text-red-700 font-black scale-105' : 'text-warm-500 hover:text-warm-800'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              <span>SOS</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
