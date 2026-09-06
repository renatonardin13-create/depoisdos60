import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainBlockSection } from './components/PainBlockSection';
import { SolutionTurnSection } from './components/SolutionTurnSection';
import { ChaptersSection } from './components/ChaptersSection';
import { SelfAssessmentQuiz } from './components/SelfAssessmentQuiz';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BonusAppSection } from './components/BonusAppSection';
import { ValueProofSection } from './components/ValueProofSection';
import { FaqSection } from './components/FaqSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { ScrollToTop } from './components/ScrollToTop';
import { CountdownProvider } from './context/CountdownContext';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-[17px]';
      case 'xlarge':
        return 'text-[19px]';
      default:
        return 'text-[16px]';
    }
  };

  const scrollToChapters = () => {
    const el = document.getElementById('capitulos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CountdownProvider>
      <div className={`min-h-screen bg-warm-50 text-warm-900 font-sans selection:bg-brand-200 selection:text-brand-950 ${getFontSizeClass()}`}>
        {/* Top Accessible Header with Nav and Font Size Controls */}
        <Header 
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          fontSize={fontSize}
          setFontSize={setFontSize}
        />

        <main>
          {/* 1. Headline & Hero Section with 3D Ebook Mockup */}
          <HeroSection 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
            onExploreChapters={scrollToChapters}
          />

          {/* 2. Bloco de Dor (Situações Reais da Família) */}
          <PainBlockSection />

          {/* 3. Virada / Solução (Cuidado Inteligente e Respeitoso) */}
          <SolutionTurnSection 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* 4. O Que Você Vai Encontrar (8 Capítulos & 50 Cuidados Práticos com Filtros) */}
          <ChaptersSection 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* Autoavaliação Interativa de Prevenção de 1 Minuto */}
          <SelfAssessmentQuiz 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* 5. Para Quem É (Filhos, Idosos Independentes, Cuidadores) */}
          <TargetAudienceSection />

          {/* Depoimentos Reais & Histórias de Famílias */}
          <TestimonialsSection />

          {/* 6. Bônus App Viva+60 (Simulador Interativo do Celular & Termos Claros) */}
          <BonusAppSection />

          {/* 7. Prova de Valor (Comparação Racional Sem Alarmismo) */}
          <ValueProofSection 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />

          {/* 8. FAQ (Perguntas Reais Respondidas com Clareza) */}
          <FaqSection />

          {/* 9. Bloco de Garantia Incondicional de 7 Dias */}
          <GuaranteeSection />

          {/* 10. CTA Final de Alta Conversão & Chamada Emocional */}
          <FinalCtaSection 
            onOpenCheckout={() => setIsCheckoutOpen(true)}
          />
        </main>

        {/* Footer com avisos éticos e legais */}
        <Footer />

        {/* Barra fixa de conversão inferior */}
        <StickyBottomBar 
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Modal de Finalização / Checkout Seguro com PIX & Cartão */}
        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />

        {/* Botão flutuante para voltar ao topo */}
        <ScrollToTop />
      </div>
    </CountdownProvider>
  );
}
