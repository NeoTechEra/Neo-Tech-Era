import React, { useState } from 'react';
import { 
  Building2, 
  Target, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cpu, 
  Droplets, 
  Image as ImageIcon, 
  Tag, 
  ShoppingBag, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Send,
  CheckCircle2,
  Server,
  Radio,
  Lock
} from 'lucide-react';
import { useLanguage } from '../i18n';
import { Breadcrumb } from './Breadcrumb';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';

interface AboutPageProps {
  onNavigate: (view: PageView) => void;
  onOpenContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  const { language, isRTL, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const principleIcons = [
    <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" key="0" />,
    <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" key="1" />,
    <Layers className="w-5 h-5 text-blue-500 dark:text-blue-400" key="2" />,
    <Lock className="w-5 h-5 text-emerald-500 dark:text-emerald-400" key="3" />
  ];

  const stackIcons = [
    <Radio className="w-5 h-5 text-cyan-600 dark:text-cyan-400" key="s0" />,
    <Server className="w-5 h-5 text-blue-500 dark:text-blue-400" key="s1" />,
    <Cpu className="w-5 h-5 text-purple-500 dark:text-purple-400" key="s2" />,
    <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400" key="s3" />
  ];

  return (
    <div id="about-us-page" className="w-full py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Breadcrumb */}
      <Breadcrumb currentView="about" onNavigateHome={() => onNavigate('home')} />

      {/* Hero Header Section */}
      <header className="relative rounded-3xl bg-gradient-to-b from-slate-100 to-white dark:from-slate-900/90 dark:to-slate-950/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-sm overflow-hidden text-start">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-500/30 text-cyan-900 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.aboutPage.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-display">
            {t.aboutPage.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.aboutPage.subtitle}
          </p>
        </div>

        {/* AEO Direct Answer Summary Box */}
        <div className="relative z-10 mt-8 p-5 rounded-2xl bg-cyan-50/80 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/60 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold text-cyan-950 dark:text-cyan-200 block mb-1">
                {language === 'ar' ? 'ملخص تنفيذي (AEO): من هي مؤسسة Neo Tech Era؟' : 'Executive Summary (AEO): Who is Neo Tech Era?'}
              </strong>
              <p className="text-slate-700 dark:text-slate-300">
                {t.aboutPage.quickAnswer}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
            {t.aboutPage.missionTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.aboutPage.missionText}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display">
            {t.aboutPage.visionTitle}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.aboutPage.visionText}
          </p>
        </div>
      </section>

      {/* Core Engineering Principles */}
      <section className="space-y-6 text-start">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold mb-1">
            {language === 'ar' ? 'معايير الهندسة والإنتاج' : 'Engineering Benchmarks'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            {t.aboutPage.principlesHeading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.aboutPage.principlesSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.aboutPage.principles.map((p, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {principleIcons[idx % principleIcons.length]}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology & Architecture Stack */}
      <section className="space-y-6 text-start">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold mb-1">
            {language === 'ar' ? 'البنية المؤسسية' : 'Enterprise Stack'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            {t.aboutPage.stackHeading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.aboutPage.stackSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.aboutPage.stackItems.map((s, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                {stackIcons[idx % stackIcons.length]}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {s.category}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="space-y-6 text-start">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold mb-1">
            {language === 'ar' ? 'المنتجات والمنظومات' : 'Ecosystem Products'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            {t.aboutPage.portfolioHeading}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.aboutPage.portfolioSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flagship: The Nabaa Tankers */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent dark:from-cyan-950/40 border-2 border-cyan-500/30 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-400/20 text-cyan-900 dark:text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                <Droplets className="w-3 h-3" />
                {t.finalCta.flagshipBadge}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                The Nabaa Tankers
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'المنظومة الرقمية الشاملة لتوصيل صهاريج المياه وإدارة أساطيل النقل. تربط الإدارة المركزية، وملاحة السائقين، وطلب العملاء السلس مع رادار التتبع المباشر.'
                  : 'Comprehensive on-demand water delivery and fleet logistics ecosystem connecting central dispatch, driver mobile apps, and customer ordering with live radar tracking.'}
              </p>
            </div>
            <div>
              <a
                href={getViewCanonicalPath('nabaa-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('nabaa-detail');
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-cyan-100 group"
              >
                <span>{language === 'ar' ? 'استكشف المنصة بالكامل' : 'Explore Full Dedicated Page'}</span>
                <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>

          {/* Pix Shield */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                <ImageIcon className="w-3 h-3" />
                <span>{t.common.productBadge}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Pix Shield
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'أداة ذكية لحماية الصور وإضافة العلامات المائية الآلية وتأمين الملكية الفكرية للمصورين والمصممين والوكالات الرقمية.'
                  : 'Smart image copyright protection, batch watermarking studio, and cryptographic metadata embedding for creators and commercial studios.'}
              </p>
            </div>
            <div>
              <a
                href={getViewCanonicalPath('pix-shield-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('pix-shield-detail');
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline group"
              >
                <span>{language === 'ar' ? 'تفاصيل المنتج' : 'View Product Details'}</span>
                <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>

          {/* Price Post Pulser */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider">
                <Tag className="w-3 h-3" />
                <span>{t.common.productBadge}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Price Post Pulser
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تحويل بيانات التسعير والخصومات إلى تصاميم تسويقية احترافية جاهزة لمنصات التواصل الاجتماعي خلال ثوانٍ.'
                  : 'Generate dynamic pricing graphics, discount flyers, and conversion-focused cards for Instagram, X, and social channels.'}
              </p>
            </div>
            <div>
              <a
                href={getViewCanonicalPath('price-pulser-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('price-pulser-detail');
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline group"
              >
                <span>{language === 'ar' ? 'تفاصيل المنتج' : 'View Product Details'}</span>
                <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>

          {/* E-Commerce Post Builder */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                <ShoppingBag className="w-3 h-3" />
                <span>{t.common.productBadge}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                E-Commerce Post Builder
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'إنشاء تصاميم منتجات وبانرات إعلانية ترويجية متوافقة مع الهوية البصرية للمتاجر الإلكترونية والعلامات التجارية.'
                  : 'Create polished e-commerce product graphics, promotional banners, and social shopping assets for retail merchants.'}
              </p>
            </div>
            <div>
              <a
                href={getViewCanonicalPath('ecommerce-builder-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('ecommerce-builder-detail');
                }}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline group"
              >
                <span>{language === 'ar' ? 'تفاصيل المنتج' : 'View Product Details'}</span>
                <ArrowRight className={`w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="space-y-6 text-start">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-bold mb-1">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.aboutPage.faqHeading}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
            {language === 'ar' ? 'إجابات مباشرة وموثقة' : 'Direct Answers & Search Verification'}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {t.aboutPage.faqSubheading}
          </p>
        </div>

        <div className="space-y-3">
          {t.aboutPage.faqs.map((faq, idx) => {
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

      {/* Contact CTA Section */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden border border-slate-800 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            {t.aboutPage.contactCtaTitle}
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t.aboutPage.contactCtaSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href={getViewCanonicalPath('contact', language)}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <Send className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span>{t.aboutPage.contactCtaBtn}</span>
            </a>
            <a
              href={`mailto:techeraneo@gmail.com`}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm inline-flex items-center gap-2 border border-slate-700 transition-colors font-mono"
              dir="ltr"
            >
              techeraneo@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
