import React from 'react';
import { 
  Droplets, 
  Layers, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { PageView } from '../types';
import { useLanguage } from '../i18n';

interface FinalCTAProps {
  onNavigate?: (view: PageView) => void;
  onExploreProducts?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate, onExploreProducts }) => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="final-cta" className="py-28 relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#050b16] dark:to-[#02060c] border-t border-slate-200 dark:border-slate-800">
      
      {/* Background glow radiant sphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-600/10 dark:from-cyan-500/25 dark:via-blue-600/20 dark:to-indigo-600/20 rounded-full blur-[130px] animate-water-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl p-[1px] bg-slate-200 dark:bg-slate-800 border-2 border-cyan-500/30 dark:border-cyan-400/50 shadow-xl shadow-cyan-500/5 dark:shadow-2xl dark:shadow-cyan-950/90">
          <div className="bg-white dark:bg-gradient-to-b dark:from-[#08182b] dark:to-[#040e1a] backdrop-blur-3xl rounded-[23px] px-6 py-16 sm:px-16 text-center border border-slate-100 dark:border-cyan-500/20">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-400/40 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              {t.finalCta.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display max-w-3xl mx-auto">
              {t.finalCta.heading}
            </h2>

            <p className="mt-5 text-base sm:text-xl text-slate-600 dark:text-slate-200 max-w-2xl mx-auto font-normal">
              {t.finalCta.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              {/* Primary Flagship Button */}
              <button
                id="final-cta-nabaa-btn"
                onClick={() => onNavigate?.('nabaa-detail')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-3 group active:scale-95"
              >
                <Droplets className="w-5 h-5 text-slate-950 fill-slate-950" />
                <span>{t.finalCta.exploreNabaa}</span>
                <span className="px-2 py-0.5 rounded bg-slate-950/15 text-slate-950 text-xs font-black uppercase">
                  {t.finalCta.flagshipBadge}
                </span>
                <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
              </button>

              {/* View All Products Button */}
              <button
                id="final-cta-all-products-btn"
                onClick={() => onExploreProducts?.()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-white font-bold text-base border border-slate-200 dark:border-cyan-500/40 hover:border-slate-300 dark:hover:border-cyan-400 transition-all flex items-center justify-center gap-2.5 active:scale-95 shadow-md"
              >
                <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.finalCta.viewAllProducts}</span>
              </button>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 max-w-xl mx-auto flex items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-300">
              <span>● {isRTL ? 'بنية نظام متكاملة' : 'Unified Architecture'}</span>
              <span>● {isRTL ? 'لوجستيات الأسطول الحية' : 'Fleet Telematics'}</span>
              <span>● {isRTL ? 'تطبيقات متصلة' : 'Synchronized Apps'}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
