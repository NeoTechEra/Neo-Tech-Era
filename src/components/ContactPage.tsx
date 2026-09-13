import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Calendar, 
  User, 
  Phone, 
  Copy, 
  Check, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Droplets,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { Breadcrumb } from './Breadcrumb';
import { PageView } from '../types';

interface ContactPageProps {
  onNavigate: (view: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { language, isRTL, t } = useLanguage();

  const productOptions = [
    'The Nabaa Tankers',
    'Pix Shield',
    'Price Post Pulser',
    'E-Commerce Post Builder',
    language === 'ar' ? 'استفسار عام وشراكات تقنية' : 'General & Enterprise Partnership',
    language === 'ar' ? 'طلب عرض توضيحي مؤسسي (Live Demo)' : 'Enterprise Demo Request'
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(productOptions[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('techeraneo@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const selectNabaaDemo = () => {
    setProduct('The Nabaa Tankers');
    setMessage(language === 'ar' 
      ? 'أرغب في حجز عرض توضيحي حي لمنصة The Nabaa Tankers لأسطولنا.' 
      : 'I would like to schedule an enterprise walkthrough of The Nabaa Tankers for our fleet operations.');
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="contact-us-page" className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Breadcrumb */}
      <Breadcrumb currentView="contact" onNavigateHome={() => onNavigate('home')} />

      {/* Header Section */}
      <header className="relative rounded-3xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm overflow-hidden text-start">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contactPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-display">
            {t.contactPage.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.contactPage.subtitle}
          </p>
        </div>

        {/* AEO Direct Answer Box */}
        <div className="relative z-10 mt-8 p-5 rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/60 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-cyan-950 dark:text-cyan-200 block mb-1">
                {language === 'ar' ? 'معلومات التواصل المباشرة (AEO)' : 'Direct Contact & Response Protocol (AEO)'}
              </strong>
              <p className="text-slate-700 dark:text-slate-300">
                {t.contactPage.quickAnswer}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Form & Contact Info Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-start">
        {/* Left Form Column */}
        <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              {t.contactPage.formTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t.contactPage.formSubtitle}
            </p>
          </div>

          {!submitted ? (
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">
                  {t.contactModal.fullNameLabel} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contactModal.fullNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-colors"
                  />
                  <User className={`w-4 h-4 text-slate-400 dark:text-slate-500 absolute ${isRTL ? 'left-3.5' : 'right-3.5'} top-3.5`} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">
                    {t.contactModal.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contactModal.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">
                    {t.contactModal.phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contactModal.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-colors text-left"
                      dir="ltr"
                    />
                    <Phone className={`w-4 h-4 text-slate-400 dark:text-slate-500 absolute ${isRTL ? 'left-3.5' : 'right-3.5'} top-3.5`} />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">
                  {t.contactModal.productSelectLabel}
                </label>
                <select
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-colors"
                >
                  {productOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">
                  {t.contactModal.messageLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contactModal.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:bg-white dark:focus:bg-slate-950 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all active:scale-98"
                >
                  <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  <span>{t.contactModal.submitBtn}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-600 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                {t.contactModal.successTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                {t.contactModal.successDesc}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                <span>{language === 'ar' ? 'رقم التذكرة:' : 'Reference ID:'}</span> <strong className="text-cyan-600 dark:text-cyan-400">NTE-INQ-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  {t.common.sendAnother}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Direct Channel */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                  {t.contactPage.emailLabel}
                </span>
                <a 
                  href="mailto:techeraneo@gmail.com" 
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 font-mono transition-colors"
                  dir="ltr"
                >
                  techeraneo@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'ar' ? 'تم نسخ البريد!' : 'Email Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{language === 'ar' ? 'نسخ عنوان البريد الإلكتروني' : 'Copy Email Address'}</span>
                </>
              )}
            </button>
          </div>

          {/* Response & Operational Metrics */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  {t.contactPage.responseTimeLabel}
                </span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {t.contactPage.responseTimeVal}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  {t.contactPage.hoursLabel}
                </span>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {t.contactPage.hoursVal}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 dark:border-slate-800 pt-3 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  {t.contactPage.headquartersLabel}
                </span>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {t.contactPage.headquartersVal}
                </p>
              </div>
            </div>
          </div>

          {/* Direct Flagship Demo CTA Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent dark:from-cyan-950/40 border-2 border-cyan-500/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-300">
              <Droplets className="w-4 h-4" />
              <span>The Nabaa Tankers Walkthrough</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {language === 'ar'
                ? 'هل تريد استعراضاً حياً للوحة تحكم التوزيع وتطبيقات السائقين والعملاء؟ انقر للطلب المباشر.'
                : 'Looking for a live interactive demo of the Admin Dispatch, Driver apps, and Customer experience?'}
            </p>
            <button
              onClick={selectNabaaDemo}
              className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
            >
              {language === 'ar' ? 'تحديد موعد عرض تجريبي لمنصة النبع' : 'Schedule The Nabaa Demo'}
            </button>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="space-y-6 text-start">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.contactPage.faqHeading}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            {language === 'ar' ? 'الأسئلة المتكررة حول التواصل والاستشارات' : 'Frequently Asked Inquiries & Support'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.contactPage.faqSubheading}
          </p>
        </div>

        <div className="space-y-3">
          {t.contactPage.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 flex items-center justify-between text-start font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="pe-4">{faq.q}</span>
                  <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
