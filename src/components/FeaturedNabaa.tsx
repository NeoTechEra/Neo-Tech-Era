import React from 'react';
import { 
  Droplets, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  Truck, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { PageView } from '../types';
import { useLanguage } from '../i18n';
import { getViewCanonicalPath } from '../utils/seoRouter';

interface FeaturedNabaaProps {
  onExplorePlatform?: () => void;
  onExploreFullPlatform?: () => void;
  onNavigate?: (view: PageView) => void;
}

export const FeaturedNabaa: React.FC<FeaturedNabaaProps> = ({ 
  onExplorePlatform, 
  onExploreFullPlatform, 
  onNavigate 
}) => {
  const { language, isRTL, t } = useLanguage();

  const handleExplore = () => {
    if (onExplorePlatform) {
      onExplorePlatform();
    } else if (onExploreFullPlatform) {
      onExploreFullPlatform();
    } else if (onNavigate) {
      onNavigate('nabaa-detail');
    }
  };

  const platforms = [
    {
      id: 'customer',
      title: t.featuredNabaa.customerTab.title,
      tagline: isRTL ? 'طلب وإدارة توصيل المياه بسهولة.' : 'Order and manage water deliveries.',
      icon: Smartphone,
      accent: 'cyan',
      badgeBg: 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-400/40',
      cardBorder: 'border-slate-200 dark:border-cyan-500/30 hover:border-cyan-500/60 dark:hover:border-cyan-400',
      gradient: 'dark:from-[#091f33] dark:to-[#05121e]',
      iconColor: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      id: 'driver',
      title: t.featuredNabaa.driverTab.title,
      tagline: isRTL ? 'استقبال وإدارة طلبات التوصيل.' : 'Receive and manage delivery requests.',
      icon: Truck,
      accent: 'blue',
      badgeBg: 'bg-blue-50 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-400/40',
      cardBorder: 'border-slate-200 dark:border-blue-500/30 hover:border-blue-500/60 dark:hover:border-blue-400',
      gradient: 'dark:from-[#0c1f40] dark:to-[#061022]',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 'admin',
      title: t.featuredNabaa.adminTab.title,
      tagline: isRTL ? 'إدارة كامل العمليات التشغيلية.' : 'Manage the complete delivery operation.',
      icon: Monitor,
      accent: 'indigo',
      badgeBg: 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-400/40',
      cardBorder: 'border-slate-200 dark:border-indigo-500/30 hover:border-indigo-500/60 dark:hover:border-indigo-400',
      gradient: 'dark:from-[#17143b] dark:to-[#0c0a21]',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    }
  ];

  return (
    <section 
      id="featured-nabaa-section"
      className="py-20 relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800"
    >
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-600/10 dark:bg-cyan-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header: Flagship Badge, Name, Tagline, Short Description */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-400/40 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300" />
            {t.featuredNabaa.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.featuredNabaa.headingLine1}
          </h2>

          <p className="mt-2 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-300 dark:via-sky-200 dark:to-blue-400 bg-clip-text text-transparent">
            {t.featuredNabaa.tagline || t.featuredNabaa.headingLine2}
          </p>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {t.featuredNabaa.description}
          </p>
        </div>

        {/* 3 Connected Platforms - Concise Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, idx) => {
            const Icon = platform.icon;
            return (
              <div 
                key={platform.id}
                onClick={handleExplore}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border bg-white dark:bg-gradient-to-br ${platform.gradient} ${platform.cardBorder} shadow-sm hover:shadow-lg dark:shadow-none hover:-translate-y-1 group text-start flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${platform.badgeBg}`}>
                      <Icon className={`w-5 h-5 ${platform.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {platform.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 font-normal leading-relaxed">
                    {platform.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500">
                  <span>{isRTL ? 'اكتشف المزيد' : 'Learn more'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary & Secondary CTA */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="featured-explore-nabaa-btn"
            href={getViewCanonicalPath('nabaa-detail', language)}
            onClick={(e) => {
              e.preventDefault();
              handleExplore();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/20 transition-all inline-flex items-center justify-center gap-2 group active:scale-95"
          >
            <Droplets className="w-4 h-4 text-slate-950 fill-slate-950" />
            <span>{t.featuredNabaa.explorePlatformBtn}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>

          <a
            id="featured-view-details-btn"
            href={getViewCanonicalPath('nabaa-detail', language)}
            onClick={(e) => {
              e.preventDefault();
              handleExplore();
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
          >
            <span>{t.featuredNabaa.viewDetailsBtn || (isRTL ? 'عرض تفاصيل المنتج' : 'View Product Details')}</span>
            <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>

      </div>
    </section>
  );
};
