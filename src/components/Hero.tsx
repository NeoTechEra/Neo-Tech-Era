import React from 'react';
import { 
  ArrowRight, 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  Sparkles, 
  Layers,
  Activity,
  CheckCircle2,
  TrendingUp,
  Truck
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';
import { useLanguage } from '../i18n';

interface HeroProps {
  onNavigate?: (view: PageView) => void;
  onExploreProducts?: () => void;
  onExploreNabaa?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onExploreProducts, onExploreNabaa }) => {
  const { language, isRTL, t } = useLanguage();

  const navigateTo = (view: PageView) => {
    if (view === 'nabaa-detail' && onExploreNabaa) {
      onExploreNabaa();
      return;
    }
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Ambient background glows and water caustic simulation */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-blue-700/20 to-indigo-900/10 rounded-full blur-[120px] animate-water-glow" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[90px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Announcement Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 backdrop-blur-md shadow-lg shadow-cyan-950/20 text-xs text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white tracking-wide">
              {language === 'ar' ? 'منظومة Neo Tech Era' : 'Neo Tech Era Portfolio'}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-cyan-400 font-medium flex items-center gap-1">
              <Droplets className="w-3.5 h-3.5" />
              {language === 'ar' ? 'إطلاق منصة The Nabaa Tankers الرائدة' : 'The Nabaa Tankers Flagship Launch'}
            </span>
          </div>
        </div>

        {/* Main Headline & Supporting text */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] font-display">
            {t.hero.titleLine1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {t.hero.description}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary Flagship CTA */}
            <a
              id="hero-nabaa-cta-btn"
              href={getViewCanonicalPath('nabaa-detail', language)}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('nabaa-detail');
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-3 group active:scale-95"
            >
              <Droplets className="w-5 h-5 text-slate-950 fill-slate-950/20" />
              <span>{language === 'ar' ? 'استكشف The Nabaa Tankers' : 'View The Nabaa Tankers'}</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-950/15 text-slate-950 text-xs font-black uppercase tracking-wider">
                {t.finalCta.flagshipBadge}
              </span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>

            {/* Explore Products Button */}
            <a
              id="hero-explore-products-btn"
              href={`/${language}/#products`}
              onClick={(e) => {
                e.preventDefault();
                if (onExploreProducts) {
                  onExploreProducts();
                }
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-100 font-semibold text-base border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-95"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>{t.common.exploreProducts}</span>
            </a>
          </div>
        </div>

        {/* Connected Products Floating Glass Visual */}
        <div className="relative max-w-5xl mx-auto mt-4">
          
          {/* Subtle Connection Lines in background */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none -z-0 opacity-40"
            viewBox="0 0 1000 480"
            fill="none"
          >
            <path 
              d="M 220 240 Q 500 120 500 240" 
              stroke="url(#lineGrad1)" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M 780 240 Q 500 120 500 240" 
              stroke="url(#lineGrad1)" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <path 
              d="M 500 240 L 500 420" 
              stroke="url(#lineGrad2)" 
              strokeWidth="2" 
              strokeDasharray="6 6" 
            />
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left Column: Pix Shield Floating Card */}
            <div className="md:col-span-3 order-2 md:order-1 space-y-4">
              <div 
                onClick={() => navigateTo('pix-shield-detail')}
                className="glass-panel p-4 sm:p-5 rounded-2xl cursor-pointer border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] transition-all duration-300 group shadow-lg dark:shadow-cyan-950/40 text-start"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                    {t.otherProducts.pixShield.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Pix Shield
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-200 mt-1 line-clamp-2">
                  {t.otherProducts.pixShield.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                  <span className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyan-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {language === 'ar' ? 'حماية وعلامات 4K' : '4K Batch Watermark'}
                  </span>
                  <span className={`text-slate-400 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-all ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>→</span>
                </div>
              </div>

              {/* Price Post Pulser */}
              <div 
                onClick={() => navigateTo('price-pulser-detail')}
                className="glass-panel p-4 sm:p-5 rounded-2xl cursor-pointer border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] transition-all duration-300 group shadow-lg dark:shadow-cyan-950/40 text-start"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                    {t.otherProducts.pricePulser.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Price Post Pulser
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-200 mt-1 line-clamp-2">
                  {t.otherProducts.pricePulser.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                  <span className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyan-300 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {language === 'ar' ? 'جاهز لشبكات التواصل' : 'Ready for Social Media'}
                  </span>
                  <span className={`text-slate-400 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-all ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>→</span>
                </div>
              </div>
            </div>

            {/* Center: THE NABAA TANKERS (Visually Dominant Flagship Hero Card) */}
            <div className="md:col-span-6 order-1 md:order-2">
              <div 
                onClick={() => navigateTo('nabaa-detail')}
                className="relative rounded-3xl p-1 bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-400/30 dark:border-cyan-400/50 shadow-xl shadow-cyan-500/10 dark:shadow-2xl dark:shadow-cyan-950/60 group cursor-pointer transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="glass-panel-water rounded-[23px] p-6 sm:p-8 text-start relative overflow-hidden dark:bg-gradient-to-br dark:from-[#091b2e] dark:to-[#040e1a]">
                  
                  {/* Subtle water ripple background pattern */}
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Top Flagship Ribbon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 dark:bg-cyan-500/25 border border-cyan-400/40 text-cyan-700 dark:text-cyan-200 text-xs font-extrabold tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300" />
                      ⭐ {t.productsOverview.flagshipCard.badge}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-cyan-200 bg-slate-100 dark:bg-[#071324] px-2.5 py-1 rounded-full border border-slate-200 dark:border-cyan-500/30">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                      {language === 'ar' ? 'منظومة حية متصلة' : 'Live Ecosystem'}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shadow-inner shrink-0">
                        <Droplets className="w-7 h-7 text-cyan-600 dark:text-cyan-300" />
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                          The Nabaa Tankers
                        </h2>
                        <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                          {t.productsOverview.flagshipCard.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-200 mt-3 leading-relaxed font-normal">
                      {t.productsOverview.flagshipCard.description}
                    </p>
                  </div>

                  {/* 3 Connected Apps Preview Graphic */}
                  <div className="bg-slate-50 dark:bg-[#060e1b] rounded-2xl border border-slate-200 dark:border-cyan-500/30 p-4 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between text-xs border-b border-slate-200 dark:border-white/10 pb-2">
                      <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">{t.nabaaPlatform.sectionHeading}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-300">
                        {language === 'ar' ? 'الإدارة ↔ السائق ↔ العميل' : 'Admin ↔ Driver ↔ Customer'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-white dark:bg-[#091526] border border-slate-200 dark:border-cyan-500/30 shadow-xs">
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">{t.featuredNabaa.adminTab.badge}</div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                          {language === 'ar' ? 'لوحة الويب' : 'Admin Web'}
                        </div>
                        <div className="text-[10px] text-cyan-700 dark:text-cyan-300 mt-1 font-medium">
                          {language === 'ar' ? 'الأسطول والطلبات' : 'Fleet & Orders'}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-cyan-50 dark:bg-blue-950/80 border border-cyan-300 dark:border-cyan-400/50 shadow-xs">
                        <div className="text-[10px] text-cyan-700 dark:text-cyan-300 uppercase font-mono font-semibold">{t.featuredNabaa.customerTab.badge}</div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                          {language === 'ar' ? 'تطبيق العميل' : 'Customer App'}
                        </div>
                        <div className="text-[10px] text-cyan-700 dark:text-cyan-200 mt-1 font-medium">
                          {language === 'ar' ? 'طلب بلمسة واحدة' : '1-Tap Booking'}
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-white dark:bg-[#091526] border border-slate-200 dark:border-cyan-500/30 shadow-xs">
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">{t.featuredNabaa.driverTab.badge}</div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                          {language === 'ar' ? 'تطبيق السائق' : 'Driver App'}
                        </div>
                        <div className="text-[10px] text-cyan-700 dark:text-cyan-400 mt-1 font-medium">
                          {language === 'ar' ? 'GPS والمحفظة' : 'GPS & Wallet'}
                        </div>
                      </div>
                    </div>

                    {/* Live simulated ticker */}
                    <div className="flex items-center justify-between bg-cyan-50 dark:bg-cyan-950/70 rounded-xl px-3 py-2 border border-cyan-200 dark:border-cyan-500/30 text-xs">
                      <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                        <Truck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        <span>
                          {language === 'ar' ? 'توجيه: صهريج #402 (19 طن)' : 'Dispatch: Tanker #402 (19 Tons)'}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300">
                        {language === 'ar' ? 'في الطريق (الوصول خلال 18 د)' : 'En Route (ETA 18m)'}
                      </span>
                    </div>
                  </div>

                  {/* Explore button */}
                  <div className="mt-5 flex items-center justify-between pt-2">
                    <span className="text-xs text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 font-medium">
                      <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {language === 'ar' ? 'أتمتة الأسطول لحظياً' : 'Real-time Fleet Automation'}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {t.productsOverview.flagshipCard.exploreButton}
                      <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: E-Commerce Post Builder & Quick Ecosystem Stats */}
            <div className="md:col-span-3 order-3 space-y-4">
              {/* E-Commerce Post Builder Card */}
              <div 
                onClick={() => navigateTo('ecommerce-builder-detail')}
                className="glass-panel p-4 sm:p-5 rounded-2xl cursor-pointer border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] transition-all duration-300 group shadow-lg dark:shadow-cyan-950/40 text-start"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                    {t.otherProducts.ecommerceBuilder.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  E-Commerce Post Builder
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-200 mt-1 line-clamp-2">
                  {t.otherProducts.ecommerceBuilder.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-700 dark:text-slate-200">
                  <span className="flex items-center gap-1 text-[11px] text-cyan-700 dark:text-cyan-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {language === 'ar' ? 'بطاقات وشارات ترويجية' : 'Promo Cards & Badges'}
                  </span>
                  <span className={`text-slate-400 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-all ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>→</span>
                </div>
              </div>

              {/* Neo Tech Era Architectural Value Pill */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200 dark:border-cyan-500/30 dark:bg-[#071324] text-slate-700 dark:text-slate-200 text-start">
                <div className="text-[11px] uppercase font-mono text-cyan-700 dark:text-cyan-300 mb-1 font-bold">
                  {t.company.badge}
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {t.company.pillar1Title}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                  {t.company.paragraph1}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
