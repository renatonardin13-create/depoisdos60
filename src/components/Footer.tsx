import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  X, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Headphones, 
  Clock, 
  HelpCircle,
  FileText
} from 'lucide-react';
import logoWhiteImage from '../assets/logo-white.png';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  
  // Support form state
  const [supportName, setSupportName] = useState('');
  const [supportContact, setSupportContact] = useState('');
  const [supportSubject, setSupportSubject] = useState('Dúvida sobre o Ebook');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSent, setSupportSent] = useState(false);
  const [supportLoading, setSupportLoading] = useState(false);

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

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportName.trim() || !supportContact.trim() || !supportMessage.trim()) return;

    setSupportLoading(true);
    // Simulate sending support request
    setTimeout(() => {
      setSupportLoading(false);
      setSupportSent(true);
    }, 600);
  };

  const resetSupportForm = () => {
    setSupportName('');
    setSupportContact('');
    setSupportMessage('');
    setSupportSent(false);
    setIsSupportOpen(false);
  };

  // WhatsApp Support redirect
  const openWhatsAppSupport = () => {
    const message = encodeURIComponent("Olá! Preciso de ajuda com o ebook Depois dos 60: 50 Cuidados Práticos.");
    // Link to WhatsApp with preset message
    window.open(`https://api.whatsapp.com/send?phone=5511999999999&text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer 
      id="page-footer"
      className="bg-warm-900 text-warm-300 pt-12 sm:pt-16 pb-28 sm:pb-36 border-t border-warm-800 text-xs sm:text-sm relative z-30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Footer: Brand with high-contrast white logo on dark background & Support Actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-warm-800/80">
          <div className="flex items-center">
            <img 
              src={logoWhiteImage} 
              alt="Depois dos 60 — Guia Prático de Prevenção & Autonomia" 
              className="w-[210px] sm:w-[260px] h-auto drop-shadow-md"
              style={{ width: '260px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            {/* Ambiente Seguro */}
            <span className="flex items-center gap-1.5 text-warm-400 bg-warm-950/50 px-3 py-1.5 rounded-lg border border-warm-800">
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
              <span>Ambiente de Compra Segura</span>
            </span>

            {/* Central de Suporte Interativa (Substitui o e-mail não existente) */}
            <button
              id="footer-support-btn"
              type="button"
              onClick={() => setIsSupportOpen(true)}
              className="flex items-center gap-2 text-white bg-brand-700 hover:bg-brand-600 px-3.5 py-1.5 rounded-lg font-medium transition cursor-pointer shadow-sm hover:shadow group"
              title="Abrir Central de Atendimento ao Leitor"
            >
              <Headphones className="w-4 h-4 text-brand-200 group-hover:scale-110 transition-transform" />
              <span>Central de Suporte &amp; Ajuda</span>
              <span className="text-[10px] bg-brand-900/80 text-brand-200 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                Ativo
              </span>
            </button>
          </div>
        </div>

        {/* Ethical Medical & Educational Disclaimer */}
        <div className="space-y-3 bg-warm-950/60 p-5 rounded-2xl border border-warm-800/80 text-warm-400 text-xs leading-relaxed">
          <p className="font-bold text-warm-300 uppercase tracking-wider text-[11px] flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-brand-400" />
            Aviso Informativo e Ético:
          </p>
          <p>
            O ebook “Depois dos 60: 50 Cuidados que Todo Idoso e Sua Família Precisam Conhecer” é um guia de orientações práticas voltado à organização doméstica, hábitos preventivos e qualidade de vida. Este material possui caráter estritamente educativo e <strong>não substitui</strong> consultas médicas, diagnósticos clínicos, prescrições de medicamentos ou o acompanhamento individualizado de médicos, enfermeiros, fisioterapeutas ou nutricionistas.
          </p>
          <p>
            Sobre o bônus do aplicativo web Viva+60: os 7 dias de acesso gratuito são concedidos para teste sem custo inicial. O cancelamento pode ser feito livremente durante o período de teste. Caso decida continuar com a assinatura: se escolher o plano mensal, o primeiro mês é promocional por R$ 29,90 (depois R$ 47,90/mês); e se escolher o plano anual, são 7 dias grátis e depois R$ 97,00/ano.
          </p>
        </div>

        {/* Bottom copyright & links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-warm-400 pt-2 border-t border-warm-800/40">
          <p>
            © {new Date().getFullYear()} Depois dos 60. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <button 
              type="button" 
              onClick={openTerms} 
              className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
            >
              Termos de Uso
            </button>
            <button 
              type="button" 
              onClick={openPrivacy} 
              className="hover:text-white transition cursor-pointer underline-offset-4 hover:underline"
            >
              Política de Privacidade
            </button>
            <button 
              type="button" 
              onClick={() => setIsSupportOpen(true)} 
              className="hover:text-brand-400 font-medium transition cursor-pointer underline-offset-4 hover:underline flex items-center gap-1"
            >
              <Headphones className="w-3.5 h-3.5 text-brand-400" />
              Atendimento ao Leitor
            </button>
          </div>
        </div>

      </div>

      {/* Central de Atendimento & Suporte Modal */}
      {isSupportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white text-warm-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-5 border border-warm-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-warm-100 pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-brand-700" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-warm-950 leading-tight">
                    Central de Atendimento ao Leitor
                  </h4>
                  <p className="text-xs text-warm-500">
                    Estamos prontos para te ajudar com qualquer dúvida
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={resetSupportForm}
                className="p-2 rounded-full hover:bg-warm-100 text-warm-400 hover:text-warm-700 transition cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            {!supportSent ? (
              <div className="space-y-4">
                {/* Opção Rápida WhatsApp */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-sm">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Atendimento Direto no WhatsApp</span>
                    </div>
                    <p className="text-xs text-emerald-700">
                      Tire dúvidas sobre pagamento, acesso ou suporte técnico.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={openWhatsAppSupport}
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition shadow-xs flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chamar no WhatsApp</span>
                  </button>
                </div>

                {/* Divisor */}
                <div className="flex items-center gap-3 text-warm-400 text-xs my-2">
                  <div className="flex-1 h-px bg-warm-200"></div>
                  <span className="uppercase tracking-wider font-semibold text-[11px] text-warm-500">
                    ou envie uma mensagem rápida
                  </span>
                  <div className="flex-1 h-px bg-warm-200"></div>
                </div>

                {/* Formulário de Contato Direto */}
                <form onSubmit={handleSupportSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-warm-700 mb-1">
                        Seu Nome Completo:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Maria da Silva"
                        value={supportName}
                        onChange={(e) => setSupportName(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-warm-700 mb-1">
                        WhatsApp ou E-mail para retorno:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: (11) 99999-9999 ou email"
                        value={supportContact}
                        onChange={(e) => setSupportContact(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-warm-700 mb-1">
                      Assunto:
                    </label>
                    <select
                      value={supportSubject}
                      onChange={(e) => setSupportSubject(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                    >
                      <option value="Dúvida sobre o Ebook">Dúvida sobre o Ebook Depois dos 60</option>
                      <option value="Acesso à Área de Membros">Ajuda para Acessar o Material</option>
                      <option value="Dúvida sobre o App Web Viva+60">Dúvida sobre o App Web Viva+60</option>
                      <option value="Formas de Pagamento">Formas de Pagamento (PIX / Cartão)</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-warm-700 mb-1">
                      Como podemos te ajudar?
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Descreva sua dúvida com clareza..."
                      value={supportMessage}
                      onChange={(e) => setSupportMessage(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-warm-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-xs text-warm-500">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>Atendimento Seg a Sex, 08h às 18h</span>
                    </div>
                    <button
                      type="submit"
                      disabled={supportLoading}
                      className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl transition shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      {supportLoading ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-display font-bold text-lg text-warm-950">
                    Mensagem Enviada com Sucesso!
                  </h5>
                  <p className="text-sm text-warm-600 max-w-sm mx-auto leading-relaxed">
                    Obrigado, <strong>{supportName}</strong>! Nosso time de atendimento entrará em contato pelo telefone/e-mail <strong>{supportContact}</strong> em até 24 horas úteis.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetSupportForm}
                  className="px-6 py-2.5 bg-warm-900 hover:bg-warm-800 text-white font-bold text-xs rounded-xl transition cursor-pointer"
                >
                  Concluir
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* Info Modal for legal text without alert() */}
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

