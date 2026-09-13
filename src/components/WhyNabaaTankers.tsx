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
  const cardStyles = [
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:shadow-lg dark:shadow-cyan-950/40',
      darkIcon: 'dark:bg-cyan-500/20 dark:border-cyan-400/40 dark:text-cyan-300',
      darkBadge: 'dark:bg-cyan-950/80 dark:border-cyan-500/40 dark:text-cyan-300',
      darkCheck: 'dark:text-cyan-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0c2045] dark:to-[#061025] dark:border-blue-500/40 hover:dark:border-blue-300 dark:shadow-lg dark:shadow-blue-950/40',
      darkIcon: 'dark:bg-blue-500/20 dark:border-blue-400/40 dark:text-blue-300',
      darkBadge: 'dark:bg-blue-950/80 dark:border-blue-500/40 dark:text-blue-300',
      darkCheck: 'dark:text-blue-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#09262f] dark:to-[#04141a] dark:border-teal-500/40 hover:dark:border-teal-300 dark:shadow-lg dark:shadow-teal-950/40',
      darkIcon: 'dark:bg-teal-500/20 dark:border-teal-400/40 dark:text-teal-300',
      darkBadge: 'dark:bg-teal-950/80 dark:border-teal-500/40 dark:text-teal-300',
      darkCheck: 'dark:text-teal-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#1b1642] dark:to-[#0e0c24] dark:border-indigo-500/40 hover:dark:border-indigo-300 dark:shadow-lg dark:shadow-indigo-950/40',
      darkIcon: 'dark:bg-indigo-500/20 dark:border-indigo-400/40 dark:text-indigo-300',
      darkBadge: 'dark:bg-indigo-950/80 dark:border-indigo-500/40 dark:text-indigo-300',
      darkCheck: 'dark:text-indigo-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#2b0f42] dark:to-[#150621] dark:border-purple-500/40 hover:dark:border-purple-300 dark:shadow-lg dark:shadow-purple-950/40',
      darkIcon: 'dark:bg-purple-500/20 dark:border-purple-400/40 dark:text-purple-300',
      darkBadge: 'dark:bg-purple-950/80 dark:border-purple-500/40 dark:text-purple-300',
      darkCheck: 'dark:text-purple-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#2d1b09] dark:to-[#170e04] dark:border-amber-500/40 hover:dark:border-amber-300 dark:shadow-lg dark:shadow-amber-950/40',
      darkIcon: 'dark:bg-amber-500/20 dark:border-amber-400/40 dark:text-amber-300',
      darkBadge: 'dark:bg-amber-950/80 dark:border-amber-500/40 dark:text-amber-300',
      darkCheck: 'dark:text-amber-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0a291b] dark:to-[#05150d] dark:border-emerald-500/40 hover:dark:border-emerald-300 dark:shadow-lg dark:shadow-emerald-950/40',
      darkIcon: 'dark:bg-emerald-500/20 dark:border-emerald-400/40 dark:text-emerald-300',
      darkBadge: 'dark:bg-emerald-950/80 dark:border-emerald-500/40 dark:text-emerald-300',
      darkCheck: 'dark:text-emerald-400'
    },
    {
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0e223d] dark:to-[#071322] dark:border-sky-500/40 hover:dark:border-sky-300 dark:shadow-lg dark:shadow-sky-950/40',
      darkIcon: 'dark:bg-sky-500/20 dark:border-sky-400/40 dark:text-sky-300',
      darkBadge: 'dark:bg-sky-950/80 dark:border-sky-500/40 dark:text-sky-300',
      darkCheck: 'dark:text-sky-400'
    }
  ];

  const cards = t.whyNabaa.cards.map((c, i) => ({
    ...c,
    icon: cardIcons[i] || Layers,
    ...cardStyles[i]
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
