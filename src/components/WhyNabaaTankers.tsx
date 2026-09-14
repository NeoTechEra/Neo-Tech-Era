import React from 'react';
import { 
  Layers, 
  Clock, 
  Truck, 
  Cpu, 
  Tag, 
  Smartphone, 
  Wallet, 
  Monitor,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n';

export const WhyNabaaTankers: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const cardIcons = [Layers, Clock, Truck, Cpu, Tag, Smartphone, Wallet, Monitor];
  const unifiedCardStyle = {
    darkCardBg: 'dark:bg-[#071322] dark:border-cyan-500/30 hover:dark:border-cyan-400 dark:shadow-lg dark:shadow-cyan-950/40',
    darkIcon: 'dark:bg-cyan-500/20 dark:border-cyan-400/40 dark:text-cyan-300',
    darkBadge: 'dark:bg-cyan-950/80 dark:border-cyan-500/40 dark:text-cyan-300',
    darkCheck: 'dark:text-cyan-400'
  };

  const cards = t.whyNabaa.cards.map((c, i) => ({
    ...c,
    icon: cardIcons[i] || Layers,
    ...unifiedCardStyle
  }));

  return (
    <section id="why-nabaa-tankers" className="py-24 relative bg-slate-50 dark:bg-[#060b16] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-700/60 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {t.whyNabaa.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.whyNabaa.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            {t.whyNabaa.subheading}
          </p>
        </div>

        {/* 8 Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-start">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border border-slate-200 bg-white/90 transition-all duration-300 group flex flex-col justify-between ${card.darkCardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform ${card.darkIcon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono text-cyan-800 px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 font-semibold ${card.darkBadge}`}>
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-100 mt-2 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                  <CheckCircle2 className={`w-3.5 h-3.5 text-cyan-600 ${card.darkCheck}`} />
                  <span className="font-medium">{isRTL ? 'جاهز للمؤسسات الكبرى' : 'Enterprise Ready'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
