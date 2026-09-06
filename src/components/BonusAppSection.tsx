import React, { useState } from 'react';
import { salesContent } from '../data/salesContent';
import { 
  Gift, 
  Smartphone, 
  BellRing, 
  Droplets, 
  Activity, 
  PhoneCall, 
  CheckCircle, 
  Info, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  Home,
  ShieldAlert,
  Settings,
  Printer,
  PenLine,
  Siren,
  Droplet,
  Users,
  MonitorSmartphone,
  Bell,
  Heart
} from 'lucide-react';
import { Viva60AppGraphic } from './illustrations/Viva60AppGraphic';

export const BonusAppSection: React.FC = () => {
  const { bonus } = salesContent;
  const [activeTab, setActiveTab] = useState<number>(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const featureIcons = [
    <BellRing className="w-5 h-5 text-teal-700" />,
    <Droplets className="w-5 h-5 text-teal-700" />,
    <Activity className="w-5 h-5 text-teal-700" />,
    <PhoneCall className="w-5 h-5 text-teal-700" />,
  ];

  const featureImages = [
    {
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80',
      alt: 'Prescrições e remédios organizados com segurança e clareza',
      label: 'Rotina de Remédios',
    },
    {
      url: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=400&q=80',
      alt: 'Copo com água fresca e pura com iluminação suave',
      label: 'Metas de Água',
    },
    {
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
      alt: 'Alongamento suave sentado com postura confortável',
      label: 'Alongamento Leve',
    },
    {
      url: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=400&q=80',
      alt: 'Idosa em chamada telefônica carinhosa com familiares pelo celular',
      label: 'Rede SOS Família',
    },
  ];

  return (
    <section id="bonus" className="py-16 md:py-24 bg-gradient-to-b from-warm-50 via-teal-50/30 to-white border-t border-warm-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-teal-950 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-300 whitespace-nowrap">
            <Gift className="w-3.5 h-3.5 text-teal-700 shrink-0" />
            3 Bônus Exclusivos Inclusos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-warm-950">
            Você Leva Mais 3 Presentes Sem Pagar Nada a Mais
          </h2>
          <p className="text-base sm:text-lg text-warm-700 max-w-2xl mx-auto">
            Além do guia principal “Depois dos 60”, você recebe 3 materiais complementares para aplicar a segurança no mesmo dia:
          </p>
        </div>

        {/* 3 Bonus Showcase Cards (with authentic soft-lighting imagery) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left">
          
          {/* Bonus 1 - High Converting Visual Showcase Card (Image 1) */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-[3px] border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.3)] relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_32px_rgba(16,185,129,0.45)] transition-all group">
            
            <div className="space-y-3.5">
              {/* Photo Banner with Badges */}
              <div className="h-44 sm:h-48 rounded-2xl overflow-hidden relative shadow-md bg-warm-100">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=80" 
                  alt="Banheiro e ambientes residenciais adaptados contra quedas com piso seguro e boa iluminação"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Top-Left Pill: BÔNUS #1 */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 text-white font-extrabold text-xs sm:text-[13px] px-3.5 py-1.5 rounded-full border border-emerald-400/60 shadow-lg flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>BÔNUS #1</span>
                </div>

                {/* Top-Right Pill: GRÁTIS */}
                <div className="absolute top-2.5 right-2.5 z-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[11px] sm:text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-lg border border-emerald-300/40 tracking-wider">
                  GRÁTIS
                </div>

                {/* Bottom Overlay with Room Tag and Handwritten Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end justify-between p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5 bg-emerald-950/85 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-500/40 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Banheiros & Cômodos Sem Riscos</span>
                  </div>

                  <span className="text-white font-serif italic text-xs sm:text-[13px] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-right leading-tight hidden xs:block">
                    Mais segurança<br />no seu dia a dia!
                  </span>
                </div>
              </div>

              {/* Title & Category with vertical accent bar */}
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-extrabold text-emerald-700 uppercase tracking-wider block">
                  BÔNUS #1 • GUIA VISUAL ILUSTRADO
                </span>
                
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-11 bg-emerald-500 rounded-full shrink-0 mt-1"></div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                    Checklist Ilustrado de Casa Segura &amp; Anti-Quedas
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pl-4">
                  Inspeção cômodo por cômodo para blindar banheiros, corredores e quartos contra acidentes sem reformas caras.
                </p>
              </div>

              {/* 4 Feature Badges (matching Image 1) */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Home className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Inspeção cômodo a cômodo
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Dicas práticas e fáceis de aplicar
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <ShieldAlert className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Prevenção de acidentes
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Settings className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Soluções simples e econômicas
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Strikethrough Price in Red + Glowing HOJE: GRÁTIS Button */}
            <div className="pt-4 mt-3 border-t border-emerald-100/80 flex items-center justify-between gap-2">
              <div>
                <span className="text-sm sm:text-base text-stone-400 font-semibold relative inline-block">
                  De R$ 47,00
                  <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-red-500 transform -rotate-6"></span>
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-[0_0_18px_rgba(16,185,129,0.5)] border border-emerald-400/80 tracking-wide">
                <Gift className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
                <span>HOJE: <strong className="text-amber-300 font-black">GRÁTIS</strong></span>
              </div>
            </div>
          </div>

          {/* Bonus 2 - High Converting Visual Showcase Card (Image 1) */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-[3px] border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.3)] relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_32px_rgba(16,185,129,0.45)] transition-all group">
            
            <div className="space-y-3.5">
              {/* Photo Banner with Badges */}
              <div className="h-44 sm:h-48 rounded-2xl overflow-hidden relative shadow-md bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80" 
                  alt="Ficha médica de emergência pronta para imprimir e preencher na prancheta com caneta e computador"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Styled Clipboard Medical Sheet Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/35 to-black/10 flex items-center justify-start p-3 pointer-events-none">
                  <div className="w-36 bg-white/95 backdrop-blur-xs rounded-lg p-2 shadow-xl border border-stone-200 transform -rotate-3 transition-transform group-hover:rotate-0 duration-300">
                    <div className="flex items-center gap-1.5 border-b border-stone-200 pb-1 mb-1.5">
                      <div className="w-4 h-4 rounded-full bg-red-600 text-white font-black text-[10px] flex items-center justify-center leading-none">
                        +
                      </div>
                      <span className="text-[7.5px] font-black tracking-tight text-stone-900 uppercase">
                        Ficha Médica Emergência
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-stone-200 rounded w-full"></div>
                      <div className="h-1.5 bg-stone-200 rounded w-4/5"></div>
                      <div className="h-1.5 bg-stone-200 rounded w-5/6"></div>
                      <div className="h-1.5 bg-red-100 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Top-Left Pill: BÔNUS #2 */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 text-white font-extrabold text-xs sm:text-[13px] px-3.5 py-1.5 rounded-full border border-emerald-400/60 shadow-lg flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>BÔNUS #2</span>
                </div>

                {/* Top-Right Pill: GRÁTIS */}
                <div className="absolute top-2.5 right-2.5 z-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[11px] sm:text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-lg border border-emerald-300/40 tracking-wider">
                  GRÁTIS
                </div>

                {/* Bottom Overlay with Room Tag and Handwritten Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end justify-between p-2.5 sm:p-3 pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-emerald-950/85 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-500/40 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Pronto para Imprimir e Fixar</span>
                  </div>

                  <div className="text-right leading-tight hidden xs:block">
                    <span className="text-white font-serif italic text-xs sm:text-[13px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] block text-emerald-100">
                      Imprima, preencha<br />e deixe sempre à mão!
                    </span>
                    <div className="h-0.5 w-16 bg-amber-400/90 rounded-full ml-auto mt-0.5 shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Title & Category with vertical accent bar */}
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-extrabold text-emerald-700 uppercase tracking-wider block">
                  BÔNUS #2 • MODELO PRONTO
                </span>
                
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-11 bg-emerald-500 rounded-full shrink-0 mt-1"></div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                    Ficha Médica de Emergência para Geladeira
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pl-4">
                  Ficha rápida pronta para imprimir e fixar na porta, com contatos de emergência, remédios em uso e tipo sanguíneo.
                </p>
              </div>

              {/* 4 Feature Badges (matching Image 1) */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Printer className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Modelo pronto para imprimir
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <PenLine className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Fácil de preencher
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Siren className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Contatos de emergência
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Droplet className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Tipo sanguíneo e medicamentos
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Strikethrough Price in Red + Glowing HOJE: GRÁTIS Button */}
            <div className="pt-4 mt-3 border-t border-emerald-100/80 flex items-center justify-between gap-2">
              <div>
                <span className="text-sm sm:text-base text-stone-400 font-semibold relative inline-block">
                  De R$ 29,90
                  <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-red-500 transform -rotate-6"></span>
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-[0_0_18px_rgba(16,185,129,0.5)] border border-emerald-400/80 tracking-wide">
                <Gift className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
                <span>HOJE: <strong className="text-amber-300 font-black">GRÁTIS</strong></span>
              </div>
            </div>
          </div>

          {/* Bonus 3 - High Converting Visual Showcase Card (Image 1) */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border-[3px] border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.3)] relative overflow-hidden flex flex-col justify-between hover:shadow-[0_0_32px_rgba(16,185,129,0.45)] transition-all group">
            
            <div className="space-y-3.5">
              {/* Photo Banner with Badges */}
              <div className="h-44 sm:h-48 rounded-2xl overflow-hidden relative shadow-md bg-stone-100">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80" 
                  alt="Idosa e filha conectadas com afeto e tecnologia web intuitiva em luz ambiente serena"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Styled Laptop & Smartphone Web App Mockup Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/35 to-black/10 flex items-center justify-end p-2 sm:p-3 pointer-events-none">
                  <div className="w-36 bg-white/95 backdrop-blur-xs rounded-lg p-2 shadow-xl border border-stone-200 transform rotate-1 hidden xs:block">
                    <div className="flex items-center gap-1 border-b border-stone-200 pb-1 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 flex items-center justify-center text-[7px] text-white">✓</div>
                      <span className="text-[7.5px] font-black text-stone-900 uppercase">Depois dos 60</span>
                    </div>
                    <div className="grid grid-cols-4 gap-0.5 text-[5px] text-center font-bold text-stone-700">
                      <div className="bg-emerald-50 rounded p-0.5">🔔 Remédios</div>
                      <div className="bg-sky-50 rounded p-0.5">💧 Água</div>
                      <div className="bg-red-50 rounded p-0.5">➕ SOS</div>
                      <div className="bg-teal-50 rounded p-0.5">👥 Família</div>
                    </div>
                  </div>
                </div>

                {/* Top-Left Pill: BÔNUS #3 */}
                <div className="absolute top-2.5 left-2.5 z-10 bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-800 text-white font-extrabold text-xs sm:text-[13px] px-3.5 py-1.5 rounded-full border border-emerald-400/60 shadow-lg flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>BÔNUS #3</span>
                </div>

                {/* Top-Right Pill: 7 DIAS GRÁTIS */}
                <div className="absolute top-2.5 right-2.5 z-10 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[11px] sm:text-xs font-black uppercase px-3.5 py-1 rounded-full shadow-lg border border-emerald-300/40 tracking-wider">
                  7 DIAS GRÁTIS
                </div>

                {/* Bottom Overlay with 100% Web Tag and Handwritten Quote */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end justify-between p-2.5 sm:p-3 pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-emerald-950/85 backdrop-blur-xs text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-lg border border-emerald-500/40 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                    <span>100% Web • Direto no Navegador</span>
                  </div>

                  <div className="text-right leading-tight hidden xs:flex flex-col items-end">
                    <span className="text-white font-serif italic text-xs sm:text-[13px] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] block leading-snug text-emerald-100">
                      Cuidado<br />que conecta<br />sua família!
                    </span>
                    <Heart className="w-3.5 h-3.5 text-emerald-300 fill-transparent stroke-[2.5] mt-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Category with vertical accent bar */}
              <div className="space-y-1.5">
                <span className="text-[11px] sm:text-xs font-extrabold text-emerald-700 uppercase tracking-wider block">
                  BÔNUS #3 • APLICATIVO WEB EXCLUSIVO
                </span>
                
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-11 bg-emerald-500 rounded-full shrink-0 mt-1"></div>
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                    7 Dias Grátis no App Web Viva+60
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed pl-4">
                  Acesso web imediato pelo celular ou computador sem instalar nada e sem ocupar memória. Lembretes sonoros de remédios, água diária e SOS família.
                </p>
              </div>

              {/* 4 Feature Badges (matching Image 1) */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Bell className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Lembretes de medicamentos
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Droplet className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Controle de água diária
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Users className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    SOS para a família
                  </span>
                </div>

                <div className="bg-emerald-50/70 border border-emerald-100/90 rounded-xl p-2 flex flex-col items-center text-center gap-1">
                  <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <MonitorSmartphone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-stone-800 leading-tight">
                    Acesso pelo celular ou computador
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar: After 7 days pricing + Glowing 7 DIAS GRÁTIS button with subtext */}
            <div className="pt-4 mt-3 border-t border-emerald-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex flex-col text-left space-y-0.5">
                <span className="text-[10.5px] text-stone-900 uppercase font-black tracking-wider">
                  APÓS OS 7 DIAS GRÁTIS:
                </span>
                <span className="text-xs text-stone-700 leading-snug">
                  Mensal: <strong className="text-stone-950 font-bold">R$ 29,90</strong> 1º mês (depois R$ 47,90) <br />
                  ou Anual: <strong className="text-stone-950 font-bold">R$ 97,00/ano</strong>
                </span>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0">
                <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-800 text-white font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl shadow-[0_0_18px_rgba(16,185,129,0.5)] border border-emerald-400/80 tracking-wide hover:brightness-105 cursor-pointer">
                  <Gift className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
                  <span>7 DIAS <strong className="text-amber-300 font-black">GRÁTIS</strong></span>
                  <ChevronRight className="w-4 h-4 text-white shrink-0" />
                </div>
                <span className="text-[9.5px] text-stone-500 font-medium">
                  Sem compromisso. Cancele quando quiser.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Content Container: Interactive Features + Live Smartphone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Features Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-3">
              {bonus.features.map((feature, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer flex items-center gap-3.5 sm:gap-4 ${
                      activeTab === idx
                        ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/20'
                        : 'bg-white/80 border-warm-200/90 hover:border-teal-300 hover:bg-white'
                    }`}
                  >
                    {/* Feature Authentic Photographic Thumbnail with Graceful Fallback */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-warm-200/90 shadow-2xs relative group bg-gradient-to-br from-teal-50 to-warm-100 flex items-center justify-center">
                      {!imgError[idx] ? (
                        <>
                          <img 
                            src={featureImages[idx].url} 
                            alt={featureImages[idx].alt}
                            onError={() => setImgError((prev) => ({ ...prev, [idx]: true }))}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs border border-white/80">
                            {React.cloneElement(featureIcons[idx], { className: 'w-3 h-3 text-teal-800' })}
                          </div>
                        </>
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center transition-colors ${
                          activeTab === idx 
                            ? 'bg-gradient-to-br from-teal-600 to-emerald-700 text-white' 
                            : 'bg-teal-50 text-teal-800'
                        }`}>
                          {React.cloneElement(featureIcons[idx], { className: 'w-7 h-7' })}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1 text-left flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-base sm:text-lg text-warm-950 truncate">
                          {feature.title}
                        </h3>
                        {activeTab === idx && (
                          <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                            Ativo na tela →
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-warm-600 leading-relaxed line-clamp-2">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ethical Transparency Notice Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/90 border border-teal-300 text-teal-950 text-xs sm:text-sm leading-relaxed space-y-2 text-left shadow-xs">
              <div className="flex items-center gap-2 font-bold text-teal-950">
                <Info className="w-4 h-4 text-teal-700 shrink-0" />
                <span className="whitespace-nowrap">Transparência e Condições do Bônus:</span>
              </div>
              <p className="text-teal-900/90">
                {bonus.transparencyNote}
              </p>
            </div>

          </div>

          {/* Right Smartphone Graphic: Intuitive Viva+60 Reminders Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Viva60AppGraphic 
              activeTabIndex={activeTab}
              onTabChange={setActiveTab}
            />
            
            <div className="mt-4 flex items-center justify-center gap-2 text-center">
              <span className="text-xs font-bold text-teal-900 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-teal-200/80 shadow-xs flex items-center gap-1.5">
                <span>🌐 Sistema 100% Web • Celular &amp; Computador sem Instalar Nada</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
