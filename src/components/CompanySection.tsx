import React from 'react';
import { 
  Building2, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../i18n';

export const CompanySection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="company-section" className="py-24 relative bg-slate-50 dark:bg-gradient-to-b dark:from-[#060c18] dark:to-[#03070f] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300">
              <Building2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              {t.company.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              {t.company.heading}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
              {t.company.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {t.company.paragraph2}
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#071324] border border-slate-200 dark:border-cyan-500/30 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 flex items-center justify-center mb-2">
                  <Target className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.company.pillar1Title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-300 mt-1">{t.company.pillar1Desc}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#081329] border border-slate-200 dark:border-blue-500/30 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-2">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.company.pillar2Title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-300 mt-1">{t.company.pillar2Desc}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#140b24] border border-slate-200 dark:border-purple-500/30 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">{t.company.pillar3Title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-300 mt-1">{t.company.pillar3Desc}</div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 text-start">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/40 relative space-y-6 bg-white/90 dark:bg-gradient-to-b dark:from-[#091e33] dark:to-[#040e1a] shadow-md dark:shadow-xl dark:shadow-cyan-950/40">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-slate-950 font-black font-mono text-xl shadow-md shrink-0">
                  N
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'ar' ? 'مختبرات Neo Tech Era' : 'Neo Tech Era Labs'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-300">
                    {language === 'ar' ? 'تأسست لتطوير حلول برمجية قابلة للنمو السريع' : 'Founded to engineer solutions that scale'}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-700 dark:text-slate-200">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#060e1b] border border-slate-200 dark:border-cyan-500/30 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-300">
                    {language === 'ar' ? 'لوجستيات صهاريج المياه:' : 'Flagship Logistics:'}
                  </span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">The Nabaa Tankers</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#060e1b] border border-slate-200 dark:border-blue-500/30 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-300">
                    {language === 'ar' ? 'حماية المحتوى البصري:' : 'Content Protection:'}
                  </span>
                  <span className="font-bold text-blue-700 dark:text-blue-300">Pix Shield Suite</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#060e1b] border border-slate-200 dark:border-purple-500/30 flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-300">
                    {language === 'ar' ? 'تسويق التجارة الإلكترونية:' : 'Social Commerce:'}
                  </span>
                  <span className="font-bold text-purple-700 dark:text-purple-300">Price Pulser & Post Builder</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 dark:text-slate-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>
                  {language === 'ar' ? 'هندسة برمجية مستمرة، ودعم عملاء مسبق وفعال.' : 'Continuous engineering, proactive customer support.'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
