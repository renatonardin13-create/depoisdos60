import React, { useState } from 'react';
import { useCountdown } from '../context/CountdownContext';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  CheckCircle2, 
  QrCode, 
  CreditCard, 
  ArrowRight,
  Sparkles,
  BadgeCheck,
  KeyRound,
  ExternalLink,
  RotateCcw,
  Clock
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { formattedTime } = useCountdown();
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'creditCard'>('pix');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccessStep, setIsSuccessStep] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  if (!isOpen) return null;

  // Format Brazilian phone mask on typing: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const digits = raw.replace(/\D/g, '').slice(0, 11);
    let formatted = '';

    if (digits.length === 0) {
      formatted = '';
    } else if (digits.length <= 2) {
      formatted = `(${digits}`;
    } else if (digits.length <= 6) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 10) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }

    setPhone(formatted);
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    } else if (name.trim().split(' ').length < 2) {
      newErrors.name = 'Digite seu nome e sobrenome.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail para receber o acesso.';
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Digite um e-mail válido (ex: seuemail@gmail.com).';
    }

    const cleanDigits = phone.replace(/\D/g, '');
    if (cleanDigits && cleanDigits.length < 10) {
      newErrors.phone = 'Informe um telefone com DDD válido (ex: 11999999999).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildCheckoutUrl = () => {
    const baseUrl = 'https://go.perfectpay.com.br/PPU38CQFTDE';
    const url = new URL(baseUrl);

    // Retain any incoming UTM or tracking parameters from the current URL
    if (typeof window !== 'undefined' && window.location.search) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.forEach((val, key) => {
        url.searchParams.set(key, val);
      });
    }

    // Set customer prefilled data
    if (name.trim()) {
      url.searchParams.set('name', name.trim());
      url.searchParams.set('customer_name', name.trim());
    }
    if (email.trim()) {
      url.searchParams.set('email', email.trim());
      url.searchParams.set('customer_email', email.trim());
    }
    const cleanDigits = phone.replace(/\D/g, '');
    if (cleanDigits) {
      url.searchParams.set('phone', cleanDigits);
      url.searchParams.set('customer_phone', cleanDigits);
    }

    return url.toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const targetUrl = buildCheckoutUrl();
    setCheckoutUrl(targetUrl);

    // Detect if running inside an iframe (e.g. preview environment)
    const isIframe = typeof window !== 'undefined' && window.self !== window.top;

    // Immediately attempt to open checkout in a new browser tab during user gesture
    let openedNewTab = false;
    try {
      const newTab = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (newTab) {
        openedNewTab = true;
      }
    } catch (err) {
      console.warn('Popup window was blocked by browser or restricted in iframe:', err);
    }

    // If standalone site (not in iframe) and popup did not open, redirect current page
    if (!isIframe && !openedNewTab) {
      window.location.assign(targetUrl);
      return;
    }

    // When inside iframe or tab opened, display the confirmation state
    // NEVER do window.location.href = targetUrl inside an iframe because checkouts often enforce X-Frame-Options: SAMEORIGIN
    setIsSuccessStep(true);
  };

  const handleClose = () => {
    setIsSuccessStep(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-warm-950/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl border border-warm-200 relative my-6 space-y-5 max-h-[94vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full hover:bg-warm-100 text-warm-500 hover:text-warm-900 transition cursor-pointer shrink-0"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccessStep ? (
          <>
            {/* Modal Header with Security Badges */}
            <div className="space-y-2 text-left pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-300 shadow-2xs whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Compra Segura</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-900 text-xs font-bold border border-brand-300 shadow-2xs whitespace-nowrap">
                  <Lock className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                  <span>Ambiente Criptografado SSL 256-bit</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-300 shadow-2xs whitespace-nowrap animate-pulse">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Oferta Expira em: <span className="font-mono">{formattedTime}</span></span>
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-warm-950">
                Finalizar Acesso ao Ebook Digital
              </h3>
              <p className="text-xs sm:text-sm text-warm-600">
                Preencha seus dados para receber o acesso à Área de Membros e ao bônus.
              </p>
            </div>

            {/* Visual Security Seals Highlight Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-teal-50/60 to-brand-50/90 border border-emerald-200/90 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <BadgeCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-xs text-emerald-950 block leading-tight">
                    Selo de Compra Segura
                  </span>
                  <span className="text-[11px] text-emerald-800 leading-tight block">
                    Transação direta e protegida
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-700 text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <KeyRound className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-xs text-brand-950 block leading-tight">
                    Criptografia de Ponta a Ponta
                  </span>
                  <span className="text-[11px] text-brand-800 leading-tight block">
                    Privacidade total dos seus dados
                  </span>
                </div>
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="bg-[#FAF8F4] p-4 rounded-2xl border border-warm-200 space-y-2 text-left">
              <div className="flex items-center justify-between text-sm font-bold text-warm-950">
                <span className="truncate mr-2">Depois dos 60: 50 Cuidados (Ebook PDF)</span>
                <span className="text-emerald-900 whitespace-nowrap font-display text-base font-extrabold">R$ 37,00</span>
              </div>
              <div className="flex items-center justify-between text-xs text-warm-600 border-t border-warm-200/80 pt-2">
                <span>+ Bônus App Viva+60 (7 dias gratuitos)</span>
                <span className="text-emerald-700 font-bold whitespace-nowrap">Incluso Grátis</span>
              </div>
            </div>

            {/* Visual Guarantee Badge */}
            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/50 text-left">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center border-2 border-amber-200 shadow-xs">
                  <RotateCcw className="w-7 h-7 text-amber-700" />
                </div>
                <div className="absolute -top-1 -right-1 bg-amber-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border border-white shadow-xs uppercase">
                  7 Dias
                </div>
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-amber-950 leading-tight flex items-center gap-1.5">
                  Selo de Satisfação Garantida
                </h4>
                <p className="text-[11px] text-amber-800/90 leading-normal mt-0.5">
                  Sua compra está 100% protegida. Experimente o conteúdo e o app por 7 dias. Se não ficar satisfeito, devolvemos seu dinheiro sem burocracia.
                </p>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Payment Method Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-warm-800 uppercase tracking-wider block whitespace-nowrap">
                  Forma de pagamento:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer whitespace-nowrap ${
                      paymentMethod === 'pix'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs ring-1 ring-emerald-500/20'
                        : 'border-warm-200 bg-white text-warm-700 hover:bg-warm-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>PIX (Liberação Imediata)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('creditCard')}
                    className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition cursor-pointer whitespace-nowrap ${
                      paymentMethod === 'creditCard'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-xs ring-1 ring-emerald-500/20'
                        : 'border-warm-200 bg-white text-warm-700 hover:bg-warm-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-3 pt-1">
                <div>
                  <label htmlFor="input-name" className="text-xs font-bold text-warm-700 block mb-1 whitespace-nowrap">
                    Seu Nome Completo:
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="Ex: Mariana Silva"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-warm-900 bg-white focus:outline-none focus:ring-2 ${
                      errors.name 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-warm-300 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="input-email" className="text-xs font-bold text-warm-700 block mb-1 whitespace-nowrap">
                    Seu Melhor E-mail (para acesso à Área de Membros):
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-warm-900 bg-white focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-warm-300 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="input-phone" className="text-xs font-bold text-warm-700 block mb-1 whitespace-nowrap">
                    WhatsApp / Celular (para suporte):
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-warm-900 bg-white focus:outline-none focus:ring-2 ${
                      errors.phone 
                        ? 'border-red-400 focus:ring-red-400 focus:border-red-500' 
                        : 'border-warm-300 focus:ring-emerald-500 focus:border-emerald-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base py-3.5 rounded-2xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer mt-4 whitespace-nowrap transform active:scale-[0.99]"
              >
                <Lock className="w-4 h-4 shrink-0" />
                <span>Confirmar e Liberar Acesso (R$ 37,00)</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              {/* Trust Footer Seals */}
              <div className="pt-2 border-t border-warm-200/80 space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-warm-600 font-medium">
                  <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Compra 100% Segura
                  </span>
                  <span className="text-warm-300">•</span>
                  <span className="flex items-center gap-1 text-brand-900 font-semibold">
                    <Lock className="w-3.5 h-3.5 text-brand-600" />
                    SSL 256-bit Certificado
                  </span>
                  <span className="text-warm-300">•</span>
                  <span className="flex items-center gap-1 text-warm-700 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Garantia 7 Dias
                  </span>
                </div>
                <p className="text-[10px] text-warm-400 text-center leading-tight">
                  Seus dados financeiros não são armazenados. Pagamento processado pela Perfect Pay com criptografia bancária.
                </p>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen with Safe External Link to Perfect Pay */
          <div className="space-y-5 text-center animate-fadeIn py-2">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-col items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 whitespace-nowrap">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  Dados Prontos para o Pagamento
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-[10px] sm:text-xs font-bold border border-amber-300 shadow-2xs whitespace-nowrap animate-pulse">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Conclua em: <span className="font-mono">{formattedTime}</span></span>
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-warm-950">
                Quase lá, {name.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-warm-600 max-w-md mx-auto">
                Seu pedido foi registrado com sucesso. Clique no botão abaixo para concluir o pagamento no checkout seguro da <strong>Perfect Pay</strong>:
              </p>
            </div>

            {/* Confirmation details summary */}
            <div className="p-4 rounded-2xl bg-warm-50 border border-warm-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between py-1 border-b border-warm-200/70">
                <span className="text-warm-500">Nome do Titular:</span>
                <span className="font-semibold text-warm-900">{name}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-warm-200/70">
                <span className="text-warm-500">E-mail de Acesso:</span>
                <span className="font-semibold text-warm-900">{email}</span>
              </div>
              {phone && (
                <div className="flex justify-between py-1 border-b border-warm-200/70">
                  <span className="text-warm-500">WhatsApp / Celular:</span>
                  <span className="font-semibold text-warm-900">{phone}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-warm-200/70">
                <span className="text-warm-500">Método Escolhido:</span>
                <span className="font-semibold text-warm-900 capitalize">
                  {paymentMethod === 'pix' ? 'PIX (Acesso Imediato)' : 'Cartão de Crédito'}
                </span>
              </div>
              <div className="flex justify-between py-1.5 text-emerald-950 font-bold text-sm">
                <span>Valor Final:</span>
                <span>R$ 37,00</span>
              </div>
            </div>

            {/* Direct unblockable target="_blank" link */}
            <div className="space-y-3 pt-2 max-w-md mx-auto">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 px-6 rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2.5 transition shadow-lg shadow-emerald-700/25 block text-center cursor-pointer whitespace-nowrap active:scale-[0.99]"
              >
                <Lock className="w-5 h-5 shrink-0" />
                <span>Pagar Agora na Perfect Pay (R$ 37,00)</span>
                <ExternalLink className="w-5 h-5 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => setIsSuccessStep(false)}
                className="inline-flex items-center gap-1.5 text-xs text-warm-600 hover:text-warm-900 underline font-medium cursor-pointer transition pt-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Corrigir nome, e-mail ou telefone</span>
              </button>

              <p className="text-[11px] text-warm-400">
                Seus dados serão enviados já preenchidos para garantir agilidade e proteção.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
