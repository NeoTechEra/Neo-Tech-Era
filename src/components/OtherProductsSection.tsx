import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';
import { useLanguage } from '../i18n';

interface OtherProductsProps {
  onNavigate?: (view: PageView) => void;
}

export const OtherProductsSection: React.FC<OtherProductsProps> = ({ onNavigate }) => {
  const { language, isRTL, t } = useLanguage();

  const handleNav = (view: PageView) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <section id="other-products" className="py-24 relative bg-slate-100/70 dark:bg-[#060b16] border-t border-slate-200 dark:border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {t.otherProducts.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.otherProducts.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            {t.otherProducts.subheading}
          </p>
        </div>

        {/* Clean, Concise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
          
          {/* PIX SHIELD */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] shadow-sm dark:shadow-xl dark:shadow-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                  {t.otherProducts.pixShield.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display">
                Pix Shield
              </h3>
              
              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                {t.otherProducts.pixShield.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                {t.otherProducts.pixShield.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {t.otherProducts.pixShield.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                id="other-products-pix-shield-btn"
                href={getViewCanonicalPath('pix-shield-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('pix-shield-detail');
                }}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-cyan-500/20 hover:bg-slate-100 dark:hover:bg-cyan-500/30 text-slate-800 dark:text-cyan-200 font-bold text-sm border border-slate-200 dark:border-cyan-500/40 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 shadow-sm active:scale-95"
              >
                <span>{t.common.viewDetails}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </div>

          {/* PRICE POST PULSER */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] shadow-sm dark:shadow-xl dark:shadow-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                  {t.otherProducts.pricePulser.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display">
                Price Post Pulser
              </h3>

              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                {t.otherProducts.pricePulser.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                {t.otherProducts.pricePulser.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {t.otherProducts.pricePulser.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                id="other-products-price-pulser-btn"
                href={getViewCanonicalPath('price-pulser-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('price-pulser-detail');
                }}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-cyan-500/20 hover:bg-slate-100 dark:hover:bg-cyan-500/30 text-slate-800 dark:text-cyan-200 font-bold text-sm border border-slate-200 dark:border-cyan-500/40 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 shadow-sm active:scale-95"
              >
                <span>{t.common.viewDetails}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </div>

          {/* E-COMMERCE POST BUILDER */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] shadow-sm dark:shadow-xl dark:shadow-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                  {t.otherProducts.ecommerceBuilder.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display">
                E-Commerce Post Builder
              </h3>

              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                {t.otherProducts.ecommerceBuilder.tagline}
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                {t.otherProducts.ecommerceBuilder.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {t.otherProducts.ecommerceBuilder.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                id="other-products-ecommerce-builder-btn"
                href={getViewCanonicalPath('ecommerce-builder-detail', language)}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('ecommerce-builder-detail');
                }}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-cyan-500/20 hover:bg-slate-100 dark:hover:bg-cyan-500/30 text-slate-800 dark:text-cyan-200 font-bold text-sm border border-slate-200 dark:border-cyan-500/40 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 shadow-sm active:scale-95"
              >
                <span>{t.common.viewDetails}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
