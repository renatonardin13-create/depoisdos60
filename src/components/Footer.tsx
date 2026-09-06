import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Mail, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);

  const openTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Termos de Uso',
      text: 'O ebook "Depois dos 60: 50 Cuidados" é um produto digital protegido pela legislação de direitos autorais. O acesso é pessoal e intransferível para uso educativo individual e familiar. É proibida a reprodução, cópia, distribuição ou comercialização não autorizada deste material.'
    });
  };

  const openPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Política de Privacidade',
      text: 'Seus dados (nome, e-mail e telefone) são utilizados única e exclusivamente para a entrega do seu produto digital e comunicações essenciais sobre o seu pedido. Nós respeitamos a LGPD: seus dados são mantidos em sigilo e jamais serão comercializados ou compartilhados com terceiros.'
    });
  };

  const openContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalContent({
      title: 'Atendimento ao Leitor',
      text: 'Nosso time de suporte está à disposição de segunda a sexta-feira, das 08h às 18h. Se você tiver qualquer dúvida sobre o acesso ao ebook ou aplicativo bônus, envie uma mensagem para suporte@depoisdos60.com.br e responderemos prontamente.'
    });
  };

  return (
    <footer className="bg-warm-900 text-warm-300 py-12 sm:py-16 border-t border-warm-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Footer: Brand & Mission */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-warm-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-white block">
                Depois dos 60: 50 Cuidados
              </span>
              <span className="text-xs text-warm-400">
                Guia prático para rotina, segurança e autonomia na terceira idade
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-warm-400">
            <span className="flex items-center gap-1.5 text-warm-300">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              Ambiente de Compra Segura
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-warm-300">
              <Mail className="w-4 h-4 text-brand-400" />
              suporte@depoisdos60.com.br
            </span>
          </div>
        </div>

        {/* Ethical Medical & Educational Disclaimer */}
        <div className="space-y-3 bg-warm-950/60 p-5 rounded-2xl border border-warm-800/80 text-warm-400 text-xs leading-relaxed">
          <p className="font-bold text-warm-300 uppercase tracking-wider text-[11px]">
            Aviso Informativo e Ético:
          </p>
          <p>
            O ebook “Depois dos 60: 50 Cuidados que Todo Idoso e Sua Família Precisam Conhecer” é um guia de orientações práticas voltado à organização doméstica, hábitos preventivos e qualidade de vida. Este material possui caráter estritamente educativo e <strong>não substitui</strong> consultas médicas, diagnósticos clínicos, prescrições de medicamentos ou o acompanhamento individualizado de médicos, enfermeiros, fisioterapeutas ou nutricionistas.
          </p>
          <p>
            Sobre o bônus do aplicativo Viva+60: os 7 dias de acesso gratuito são concedidos para teste sem custo inicial. O cancelamento pode ser feito livremente durante o período de teste. Caso não seja cancelado, a assinatura mensal de R$ 47,90 será iniciada automaticamente. A partir da renovação seguinte, o plano passa a ser cobrado no valor anual de R$ 97,00.
          </p>
        </div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-500 pt-2">
          <p>
            © {new Date().getFullYear()} Depois dos 60. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <button 
              type="button" 
              onClick={openTerms} 
              className="hover:text-warm-300 transition cursor-pointer"
            >
              Termos de Uso
            </button>
            <button 
              type="button" 
              onClick={openPrivacy} 
              className="hover:text-warm-300 transition cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button 
              type="button" 
              onClick={openContact} 
              className="hover:text-warm-300 transition cursor-pointer"
            >
              Atendimento ao Leitor
            </button>
          </div>
        </div>

      </div>

      {/* Info Modal for legal / support without alert() */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-950/75 backdrop-blur-xs">
          <div className="bg-white text-warm-900 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
            <div className="flex items-center justify-between border-b border-warm-200 pb-3">
              <h4 className="font-display font-bold text-lg text-warm-950">
                {modalContent.title}
              </h4>
              <button
                type="button"
                onClick={() => setModalContent(null)}
                className="p-1.5 rounded-full hover:bg-warm-100 text-warm-500 transition cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-warm-700 leading-relaxed">
              {modalContent.text}
            </p>
            <button
              type="button"
              onClick={() => setModalContent(null)}
              className="w-full py-2.5 rounded-xl bg-warm-900 hover:bg-warm-800 text-white font-bold text-sm transition cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
