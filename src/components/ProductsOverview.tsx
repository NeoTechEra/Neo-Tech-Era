import React from 'react';
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';
import { useLanguage } from '../i18n';

interface ProductsOverviewProps {
  onNavigate?: (view: PageView) => void;
  onOpenProductModal?: (productId: string) => void;
  onSelectNabaa?: () => void;
}

export const ProductsOverview: React.FC<ProductsOverviewProps> = ({ onNavigate, onSelectNabaa }) => {
  const { language, isRTL, t } = useLanguage();

  const handleNav = (view: PageView) => {
    if (view === 'nabaa-detail' && onSelectNabaa) {
      onSelectNabaa();
      return;
    }
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <section id="products-overview" className="py-24 relative">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-cyan-950/80 border border-slate-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {t.productsOverview.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.productsOverview.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            {t.productsOverview.subheading}
          </p>
        </div>

        {/* Products Grid with The Nabaa Tankers as prominent flagship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ⭐ THE NABAA TANKERS (Flagship & Significantly more prominent) */}
          <div className="lg:col-span-12">
            <div className="relative rounded-3xl p-[1px] bg-slate-200 dark:bg-slate-800 border-2 border-cyan-500/30 dark:border-cyan-400/50 shadow-xl shadow-cyan-500/5 dark:shadow-2xl dark:shadow-cyan-950/90">
              <div className="bg-white dark:bg-gradient-to-br dark:from-[#091e33] dark:to-[#030e1a] backdrop-blur-2xl rounded-[22px] p-6 sm:p-10 relative overflow-hidden border border-slate-100 dark:border-cyan-500/20 text-start">
                
                {/* Visual Water Glow Caustics in background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left Column: Flagship Highlights */}
                  <div className="lg:col-span-7 space-y-5">
                    
                    {/* Flagship Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" />
                        ⭐ {t.productsOverview.flagshipCard.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-cyan-800 dark:text-cyan-300 text-xs font-semibold">
                        {t.productsOverview.flagshipCard.tagline}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight flex items-center gap-3">
                        The Nabaa Tankers
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                        {language === 'ar' ? 'منظومة واحدة متكاملة. 3 تطبيقات متصلة.' : 'One Business. Three Connected Applications.'}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                      {t.productsOverview.flagshipCard.description}
                    </p>

                    {/* Capabilities Check-list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {t.productsOverview.flagshipCard.pills.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                          <div className="w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-400/40 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-cyan-700 dark:text-cyan-300 stroke-[3]" />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        id="overview-explore-nabaa-btn"
                        href={getViewCanonicalPath('nabaa-detail', language)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNav('nabaa-detail');
                        }}
                        className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2.5 group active:scale-95"
                      >
                        <Droplets className="w-5 h-5 text-slate-950 fill-slate-950" />
                        <span>{t.productsOverview.flagshipCard.exploreButton}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </a>

                      <span className="text-xs text-slate-500 dark:text-slate-300 font-mono">
                        {language === 'ar' ? 'يشمل تطبيقات الإدارة والعميل والسائق' : 'Includes Admin, Customer & Driver apps'}
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Architectural preview card */}
                  <div className="lg:col-span-5">
                    <div className="bg-slate-50 dark:bg-[#050d18] rounded-2xl p-6 border border-slate-200 dark:border-cyan-500/40 shadow-lg relative">
                      <div className="text-xs font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-300 mb-4 flex items-center justify-between font-bold">
                        <span>{language === 'ar' ? 'الهيكلية المتصلة' : 'Connected Architecture'}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                      </div>

                      {/* 3 App Visual Representation */}
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white dark:bg-[#081526] border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-sm">
                              01
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">
                                {language === 'ar' ? 'لوحة تحكم الإدارة ويب' : 'Admin Web Dashboard'}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-300">
                                {language === 'ar' ? 'الأسطول، السائقين، الصهاريج، الطلبات، المالية' : 'Fleet, Drivers, Tankers, Orders, Finance'}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-slate-700 dark:text-cyan-300 bg-slate-100 dark:bg-cyan-950/80 px-2 py-0.5 rounded border border-slate-200 dark:border-cyan-500/30 font-semibold">
                            Web
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-cyan-50/80 dark:bg-blue-950/80 border border-cyan-300/80 dark:border-cyan-400/50 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-cyan-200/80 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 flex items-center justify-center font-bold text-sm">
                              02
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">
                                {language === 'ar' ? 'تطبيق جوال العميل' : 'Customer Mobile App'}
                              </div>
                              <div className="text-xs text-cyan-800 dark:text-cyan-200">
                                {language === 'ar' ? 'تسجيل رقم الجوال، اختيار الصهريج، الدفع والطلب' : 'Mobile Auth, Tanker Selection, Checkout'}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-cyan-800 dark:text-cyan-200 bg-cyan-100 dark:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-400/50 font-semibold">
                            iOS & Android
                          </span>
                        </div>

                        <div className="p-3 rounded-xl bg-white dark:bg-[#081526] border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between shadow-xs">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-sm">
                              03
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 dark:text-white">
                                {language === 'ar' ? 'تطبيق جوال السائق' : 'Driver Mobile App'}
                              </div>
                              <div className="text-xs text-slate-500 dark:text-slate-300">
                                {language === 'ar' ? 'استقبال الطلبات، ملاحة GPS، المحفظة والعمولات' : 'Requests, GPS Routes, Wallet & Commissions'}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/30 font-semibold">
                            Driver App
                          </span>
                        </div>
                      </div>

                      {/* Live Simulated System Status */}
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                        <span className="text-cyan-700 dark:text-cyan-300 font-mono text-[11px] font-semibold">
                          {language === 'ar' ? 'حالة المنظومة: جاهزة للعمليات الميدانية' : 'System Status: Ready for Operations'}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">
                          {language === 'ar' ? 'مزامنة سحابية لحظية' : 'Cloud Realtime Sync'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* PIX SHIELD */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] transition-all duration-300 flex flex-col justify-between h-full group shadow-lg dark:shadow-cyan-950/50 text-start">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 px-2.5 py-1 rounded-full font-bold">
                    {t.otherProducts.pixShield.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  Pix Shield
                </h3>
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                  {t.otherProducts.pixShield.tagline}
                </p>
                <p className="text-slate-600 dark:text-slate-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  {t.otherProducts.pixShield.description}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    {isRTL ? 'القدرات الجوهرية:' : 'Core Capabilities:'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                    {t.otherProducts.pixShield.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  id="overview-pix-shield-btn"
                  href={getViewCanonicalPath('pix-shield-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('pix-shield-detail');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-xs sm:text-sm border border-slate-700/80 dark:border-cyan-500/40 hover:dark:border-cyan-400 dark:bg-[#071727] dark:hover:bg-[#0b243d] transition-all flex items-center justify-center gap-2 group-hover:text-cyan-300"
                >
                  <span>{t.common.viewDetails}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
              </div>
            </div>
          </div>

          {/* PRICE POST PULSER */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-purple-500/40 hover:dark:border-purple-300 dark:bg-gradient-to-b dark:from-[#2a0e40] dark:to-[#140620] transition-all duration-300 flex flex-col justify-between h-full group shadow-lg dark:shadow-purple-950/50 text-start">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-400/40 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 px-2.5 py-1 rounded-full font-bold">
                    {t.otherProducts.pricePulser.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Price Post Pulser
                </h3>
                <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-1">
                  {t.otherProducts.pricePulser.tagline}
                </p>
                <p className="text-slate-600 dark:text-slate-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  {t.otherProducts.pricePulser.description}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    {isRTL ? 'القدرات الجوهرية:' : 'Core Capabilities:'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                    {t.otherProducts.pricePulser.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  id="overview-price-pulser-btn"
                  href={getViewCanonicalPath('price-pulser-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('price-pulser-detail');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-xs sm:text-sm border border-slate-700/80 dark:border-purple-500/40 hover:dark:border-purple-400 dark:bg-[#1a082b] dark:hover:bg-[#280d42] transition-all flex items-center justify-center gap-2 group-hover:text-purple-300"
                >
                  <span>{t.common.viewDetails}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
              </div>
            </div>
          </div>

          {/* E-COMMERCE POST BUILDER */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-emerald-500/40 hover:dark:border-emerald-300 dark:bg-gradient-to-b dark:from-[#0a291b] dark:to-[#05150d] transition-all duration-300 flex flex-col justify-between h-full group shadow-lg dark:shadow-emerald-950/50 text-start">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-400/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 px-2.5 py-1 rounded-full font-bold">
                    {t.otherProducts.ecommerceBuilder.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  E-Commerce Post Builder
                </h3>
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mt-1">
                  {t.otherProducts.ecommerceBuilder.tagline}
                </p>
                <p className="text-slate-600 dark:text-slate-200 text-xs sm:text-sm mt-3 leading-relaxed">
                  {t.otherProducts.ecommerceBuilder.description}
                </p>

                <div className="mt-5 space-y-2 pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">
                    {isRTL ? 'القدرات الجوهرية:' : 'Core Capabilities:'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
                    {t.otherProducts.ecommerceBuilder.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  id="overview-ecommerce-builder-btn"
                  href={getViewCanonicalPath('ecommerce-builder-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('ecommerce-builder-detail');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-semibold text-xs sm:text-sm border border-slate-700/80 dark:border-emerald-500/40 hover:dark:border-emerald-400 dark:bg-[#071c12] dark:hover:bg-[#0d2d1d] transition-all flex items-center justify-center gap-2 group-hover:text-emerald-300"
                >
                  <span>{t.common.viewDetails}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
