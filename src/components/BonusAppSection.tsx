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
  ShieldCheck
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
          
          {/* Bonus 1 */}
          <div className="bg-white rounded-3xl p-5 border-2 border-emerald-300/80 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
              GRÁTIS
            </div>
            
            <div className="space-y-3">
              {/* Soft-lighting Authentic Visual */}
              <div className="h-32 rounded-2xl overflow-hidden relative shadow-inner bg-warm-100">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" 
                  alt="Banheiro e ambientes residenciais adaptados contra quedas com piso seguro e boa iluminação"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-2.5">
                  <div className="flex items-center gap-1.5 text-white text-xs font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Banheiros & Cômodos Sem Riscos</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider block">
                  BÔNUS #1 • GUIA VISUAL ILUSTRADO
                </span>
                <h3 className="font-display font-bold text-lg text-warm-950 leading-snug">
                  Checklist Ilustrado de Casa Segura & Anti-Quedas
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  Inspeção cômodo por cômodo para blindar banheiros, corredores e quartos contra acidentes sem reformas caras.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-warm-100 flex items-baseline justify-between text-xs">
              <span className="text-warm-400 line-through">De R$ 47,00</span>
              <span className="text-emerald-700 font-extrabold text-sm">HOJE: R$ 0,00</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-white rounded-3xl p-5 border-2 border-emerald-300/80 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="absolute top-4 right-4 z-10 bg-emerald-600 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
              GRÁTIS
            </div>

            <div className="space-y-3">
              {/* Soft-lighting Authentic Visual */}
              <div className="h-32 rounded-2xl overflow-hidden relative shadow-inner bg-warm-100">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=80" 
                  alt="Ficha de rotina, contatos e informações médicas organizada"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-2.5">
                  <span className="text-white text-xs font-bold">Pronto para Imprimir e Fixar</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider block">
                  BÔNUS #2 • MODELO PRONTO
                </span>
                <h3 className="font-display font-bold text-lg text-warm-950 leading-snug">
                  Ficha Médica de Emergência para Geladeira
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  Ficha rápida pronta para imprimir e fixar na porta, com contatos de emergência, remédios em uso e tipo sanguíneo.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-warm-100 flex items-baseline justify-between text-xs">
              <span className="text-warm-400 line-through">De R$ 29,90</span>
              <span className="text-emerald-700 font-extrabold text-sm">HOJE: R$ 0,00</span>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bg-white rounded-3xl p-5 border-2 border-teal-400 shadow-md relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all ring-2 ring-teal-500/20 group">
            <div className="absolute top-4 right-4 z-10 bg-teal-700 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
              GRÁTIS
            </div>

            <div className="space-y-3">
              {/* Soft-lighting Authentic Visual */}
              <div className="h-32 rounded-2xl overflow-hidden relative shadow-inner bg-warm-100">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=500&q=80" 
                  alt="Idosa e filha conectadas com afeto e tecnologia intuitiva em luz ambiente serena"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-2.5">
                  <span className="text-white text-xs font-bold">Tecnologia Amigável e Acolhedora</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-teal-800 uppercase tracking-wider block">
                  BÔNUS #3 • APLICATIVO EXCLUSIVO
                </span>
                <h3 className="font-display font-bold text-lg text-warm-950 leading-snug">
                  7 Dias de Acesso ao App Viva+60 no Celular
                </h3>
                <p className="text-xs sm:text-sm text-warm-600 leading-relaxed">
                  Lembretes inteligentes sonoros de remédios, controle de água diária e alerta SOS família em um toque.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-warm-100 flex items-baseline justify-between text-xs">
              <span className="text-warm-400 line-through">De R$ 35,00</span>
              <span className="text-teal-800 font-extrabold text-sm">7 DIAS GRÁTIS</span>
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
              <span className="text-xs font-bold text-teal-900 bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-teal-200/80 shadow-xs">
                📱 Interface Intuitiva com Letras Grandes & Alertas Sonoros
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
