import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Sparkles, 
  ArrowRight, 
  Smartphone, 
  Monitor, 
  Truck, 
  MapPin, 
  Radio
} from 'lucide-react';
import { PageView } from '../types';
import { useLanguage } from '../i18n';

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
  const [activeFlowStep, setActiveFlowStep] = useState<0 | 1 | 2>(0);

  const handleExplore = () => {
    if (onExplorePlatform) {
      onExplorePlatform();
    } else if (onExploreFullPlatform) {
      onExploreFullPlatform();
    } else if (onNavigate) {
      onNavigate('nabaa-detail');
    }
  };

  // Auto-cycle through Admin -> Driver -> Customer to show live data flow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlowStep((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="featured-nabaa-section"
      className="py-28 relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800"
    >
      {/* Water Caustics and Glow Radiance */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-cyan-600/10 dark:bg-cyan-600/15 rounded-full blur-[140px] animate-water-glow" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-400/40 text-cyan-700 dark:text-cyan-300 text-xs font-black uppercase tracking-widest mb-5 shadow-md shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-300" />
            {t.featuredNabaa.badge}
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-[1.15]">
            {t.featuredNabaa.headingLine1} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-300 dark:via-sky-200 dark:to-blue-400 bg-clip-text text-transparent">
              {t.featuredNabaa.headingLine2}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {t.featuredNabaa.description}
          </p>

          {/* Interactive Flow Indicator */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 backdrop-blur-md shadow-sm">
            <button 
              onClick={() => setActiveFlowStep(0)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeFlowStep === 0 
                  ? 'bg-cyan-500 text-slate-950 shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {t.featuredNabaa.flowStep0}
            </button>
            <span className={`text-slate-400 dark:text-slate-600 text-xs ${isRTL ? 'rotate-180' : ''}`}>→</span>
            <button 
              onClick={() => setActiveFlowStep(1)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeFlowStep === 1 
                  ? 'bg-cyan-500 text-slate-950 shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {t.featuredNabaa.flowStep1}
            </button>
            <span className={`text-slate-400 dark:text-slate-600 text-xs ${isRTL ? 'rotate-180' : ''}`}>→</span>
            <button 
              onClick={() => setActiveFlowStep(2)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all ${
                activeFlowStep === 2 
                  ? 'bg-cyan-500 text-slate-950 shadow-md' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {t.featuredNabaa.flowStep2}
            </button>
          </div>
        </div>

        {/* 3 Connected Premium Glass Cards */}
        <div className="relative">
          
          {/* Animated Connecting Flow Beam */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent -translate-y-1/2 -z-0">
            <div 
              className="h-full bg-cyan-400 shadow-lg shadow-cyan-400 transition-all duration-700 ease-out"
              style={{
                width: '33%',
                transform: `translateX(${isRTL ? -(activeFlowStep * 100) : (activeFlowStep * 100)}%)`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative z-10 text-start">
            
            {/* Card 1: Admin Web Dashboard */}
            <div 
              className={`rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between border ${
                activeFlowStep === 0 
                  ? 'border-cyan-500 shadow-xl shadow-cyan-500/20 scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-[#0b243b] dark:to-[#051424] dark:border-cyan-400 dark:shadow-cyan-950/70' 
                  : 'border-slate-200 dark:border-cyan-500/30 hover:border-cyan-500/50 bg-white/80 dark:bg-gradient-to-br dark:from-[#08182b] dark:to-[#040d17]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-400/40 text-cyan-700 dark:text-cyan-300">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    01 • {language === 'ar' ? 'مركز التحكم والعمليات' : 'CONTROL CENTER'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {t.featuredNabaa.adminTab.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                  {t.featuredNabaa.adminTab.badge}
                </p>

                <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                  {t.featuredNabaa.adminTab.description}
                </p>

                {/* Dashboard Micro-Mockup */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#060e1a] border border-slate-200 dark:border-cyan-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-300 font-mono text-[11px] pb-1 border-b border-slate-200 dark:border-cyan-500/20">
                    <span>{language === 'ar' ? 'العمليات اللحظية' : 'Live Operations'}</span>
                    <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                      {language === 'ar' ? '18 صهريج نشط' : '18 Tankers Active'}
                    </span>
                  </div>

                  <div className="flex justify-between py-1 text-slate-600 dark:text-slate-200">
                    <span>{language === 'ar' ? 'الطلبات الجارية:' : 'Active Orders:'}</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {language === 'ar' ? '42 طلباً' : '42 Orders'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-600 dark:text-slate-200">
                    <span>{language === 'ar' ? 'تسليمات اليوم:' : "Today's Deliveries:"}</span>
                    <span className="font-bold text-cyan-700 dark:text-cyan-300">
                      {language === 'ar' ? '380,000 لتر' : '380,000 Liters'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-600 dark:text-slate-200">
                    <span>{language === 'ar' ? 'حساب العمولات:' : 'Commission Payout:'}</span>
                    <span className="font-bold text-slate-800 dark:text-cyan-200">
                      {language === 'ar' ? '15% مؤتمتة' : '15% Automated'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs text-cyan-700 dark:text-cyan-300 font-mono">
                  <Radio className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
                  <span>
                    {language === 'ar' ? 'تدفق البيانات: الإدارة ← السائق' : 'Information Flow: Admin → Driver'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Driver Mobile App */}
            <div 
              className={`rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between border ${
                activeFlowStep === 1 
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-[#0d1e45] dark:to-[#060f24] dark:border-blue-400 dark:shadow-blue-950/70' 
                  : 'border-slate-200 dark:border-blue-500/30 hover:border-blue-500/50 bg-white/80 dark:bg-gradient-to-br dark:from-[#091530] dark:to-[#040a18]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-400/40 text-blue-700 dark:text-blue-300">
                    <Truck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    02 • {language === 'ar' ? 'أثناء الحركة والميدان' : 'ON THE MOVE'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {t.featuredNabaa.driverTab.title}
                </h3>
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mt-1">
                  {t.featuredNabaa.driverTab.badge}
                </p>

                <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                  {t.featuredNabaa.driverTab.description}
                </p>

                {/* Driver App Micro-Mockup */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#060d1d] border border-slate-200 dark:border-blue-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-300 font-mono text-[11px] pb-1 border-b border-slate-200 dark:border-blue-500/20">
                    <span>{language === 'ar' ? 'طلب جديد وارد' : 'Incoming Request'}</span>
                    <span className="text-blue-700 dark:text-blue-300 font-bold">
                      {language === 'ar' ? 'على بعد 2.4 كم' : '2.4 km away'}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/40 text-slate-700 dark:text-slate-200">
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {language === 'ar' ? 'صهريج متوسط (19 طن)' : 'Medium Tanker (19 Tons)'}
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-200 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>{language === 'ar' ? 'حي النخيل، فيلا 18' : 'Al-Nakheel District, Villa 18'}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-slate-600 dark:text-slate-200">
                    <span>{language === 'ar' ? 'أرباح السائق:' : 'Driver Earnings:'}</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">
                      {language === 'ar' ? '+35 ر.س مضمونة' : '+35 SAR Guaranteed'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs text-blue-700 dark:text-blue-300 font-mono">
                  <Radio className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <span>
                    {language === 'ar' ? 'تدفق البيانات: السائق ← العميل' : 'Information Flow: Driver → Customer'}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Customer Mobile App */}
            <div 
              className={`rounded-3xl p-7 transition-all duration-500 flex flex-col justify-between border ${
                activeFlowStep === 2 
                  ? 'border-indigo-500 shadow-xl shadow-indigo-500/20 scale-[1.02] bg-white dark:bg-gradient-to-br dark:from-[#191542] dark:to-[#0c0a24] dark:border-indigo-400 dark:shadow-indigo-950/70' 
                  : 'border-slate-200 dark:border-indigo-500/30 hover:border-indigo-500/50 bg-white/80 dark:bg-gradient-to-br dark:from-[#110e2e] dark:to-[#080717]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 border border-indigo-300 dark:border-indigo-400/40 text-indigo-700 dark:text-indigo-300">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    03 • {language === 'ar' ? 'طلب سلس بضغطة واحدة' : 'SEAMLESS ORDERING'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {t.featuredNabaa.customerTab.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mt-1">
                  {t.featuredNabaa.customerTab.badge}
                </p>

                <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                  {t.featuredNabaa.customerTab.description}
                </p>

                {/* Customer App Micro-Mockup */}
                <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#0b091e] border border-slate-200 dark:border-indigo-500/30 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-300 font-mono text-[11px] pb-1 border-b border-slate-200 dark:border-indigo-500/20">
                    <span>{language === 'ar' ? 'التتبع الحي' : 'Live Tracking'}</span>
                    <span className="text-indigo-700 dark:text-indigo-300 font-bold">
                      {language === 'ar' ? 'الوصول خلال 14 دقيقة' : 'Arriving in 14 min'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 py-1">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-500/30 text-indigo-700 dark:text-indigo-200 flex items-center justify-center font-bold text-xs">
                      TM
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {language === 'ar' ? 'طارق المنصور' : 'Tariq Al-Mansoor'}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-300">
                        {language === 'ar' ? 'صهريج #402 • ★ 4.9 (1,420 رحلة)' : 'Tanker #402 • ★ 4.9 (1,420 trips)'}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-1 text-slate-600 dark:text-slate-200 border-t border-slate-200 dark:border-indigo-500/20">
                    <span>{language === 'ar' ? 'تم تطبيق كود الخصم:' : 'Ramadan Offer Applied:'}</span>
                    <span className="font-bold text-emerald-700 dark:text-emerald-300">
                      {language === 'ar' ? '-30 ر.س' : '-30 SAR'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs text-indigo-700 dark:text-indigo-300 font-mono">
                  <Radio className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                  <span>
                    {language === 'ar' ? 'تدفق البيانات: العميل ← حالة الطلب للإدارة' : 'Information Flow: Customer → Admin Status'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Central Call To Action Button */}
          <div className="mt-14 text-center">
            <button
              id="featured-explore-platform-btn"
              onClick={handleExplore}
              className="px-9 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-base shadow-lg shadow-cyan-500/25 transition-all inline-flex items-center gap-3 group active:scale-95"
            >
              <Droplets className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>{t.featuredNabaa.explorePlatformBtn}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1.5' : 'group-hover:translate-x-1.5'}`} />
            </button>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
              {isRTL ? 'المنظومة الرقمية الشاملة لخدمات صهاريج المياه والأسطول' : 'Comprehensive on-demand water fleet telematics ecosystem'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
