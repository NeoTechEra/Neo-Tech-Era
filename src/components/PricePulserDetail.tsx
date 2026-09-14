import React, { useState } from 'react';
import { 
  Zap, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Download, 
  Palette, 
  Tag, 
  Share2,
  Copy,
  DollarSign
} from 'lucide-react';
import { PageView } from '../types';
import { Breadcrumb } from './Breadcrumb';
import { useLanguage } from '../i18n';

interface PricePulserDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const PricePulserDetail: React.FC<PricePulserDetailProps> = ({ onBack, onOpenContact }) => {
  const { t, isRTL, language } = useLanguage();

  // Live Price Post Generator State
  const [productTitle, setProductTitle] = useState<string>(
    language === 'ar' ? 'سماعة ألعاب احترافية لاسلكية' : 'Ultra Gaming Headset Pro'
  );
  const [regularPrice, setRegularPrice] = useState<number>(399);
  const [dealPrice, setDealPrice] = useState<number>(249);
  const [discountBadge, setDiscountBadge] = useState<string>(
    language === 'ar' ? 'خصم خاص 38%' : '38% OFF SPECIAL'
  );
  const [themeStyle, setThemeStyle] = useState<'cyan-neon' | 'pure-light' | 'deep-cyber'>('cyan-neon');

  const capabilities = isRTL ? [
    'تصميم منشورات أسعار احترافية بدون أي خبرة سابقة في التصميم',
    'قوالب عصرية جاهزة مصممة خصيصاً لمنصات إنستغرام وتويتر/إكس',
    'تخصيص متقدم ودقيق لبيانات المنتجات، العملات، وأكواد التخفيض',
    'تسريع وتيرة الحملات الإعلانية ومواكبة العروض اللحظية'
  ] : [
    'Create pricing posts quickly with zero design experience',
    'Professional ready-made layouts tuned for Instagram & X',
    'Deep product and price customization',
    'Designed for social media and rapid marketing campaigns'
  ];

  const themes = isRTL ? [
    { id: 'cyan-neon', label: 'نيون سيان' },
    { id: 'pure-light', label: 'أبيض ناصع' },
    { id: 'deep-cyber', label: 'سيبراني داكن' }
  ] : [
    { id: 'cyan-neon', label: 'Cyan Neon' },
    { id: 'pure-light', label: 'Ultra Clean' },
    { id: 'deep-cyber', label: 'Deep Cyber' }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Breadcrumb currentView="price-pulser-detail" onNavigateHome={onBack} />
          <a
            href={language === 'ar' ? '/ar' : '/en'}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold group"
          >
            <ArrowLeft className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            {t.pricePulserDetail.backToOverview}
          </a>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 text-xs font-mono text-cyan-800 dark:text-cyan-300">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              {t.pricePulserDetail.badge}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              {t.pricePulserDetail.title}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-400">
              {t.pricePulserDetail.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.pricePulserDetail.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
              >
                {t.pricePulserDetail.inquireBtn}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-500/30 space-y-4 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 uppercase font-bold flex justify-between">
                <span>{isRTL ? 'المواصفات الفنية للمنتج' : 'Product Specifications'}</span>
                <span>v1.8 Cloud</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'أبعاد التصدير:' : 'Export Aspect Ratios:'}</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">1:1 (Feed), 9:16 (Story), 16:9 (X/Banner)</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'العملات المدعومة:' : 'Currencies Supported:'}</span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 font-semibold">{isRTL ? 'ريال سعودي، درهم، دولار، يورو + 40 عملة' : 'SAR, AED, USD, EUR, KWD + 40 more'}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'حزم الألوان الجاهزة:' : 'Color Palette Presets:'}</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">{isRTL ? '24 قالباً بصرياً عالي التباين' : '24 Curated High-Contrast Themes'}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'استيراد جماعي CSV:' : 'Bulk CSV Importer:'}</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">{isRTL ? 'مدعوم (حتى 1,000 صنف)' : 'Supported (Up to 1,000 SKUs)'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Pricing Post Generator Simulator */}
        <div className="mt-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-md">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                {t.pricePulserDetail.generatorTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t.pricePulserDetail.generatorSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300">
              {isRTL ? 'منصة تفاعلية' : 'Live Sandbox'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'اسم المنتج أو الخدمة:' : 'Product / Service Title:'}
                </label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    {isRTL ? 'السعر الأصلي (ر.س):' : 'Regular Price (SAR):'}
                  </label>
                  <input
                    type="number"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-mono focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    {isRTL ? 'سعر العرض (ر.س):' : 'Promo Price (SAR):'}
                  </label>
                  <input
                    type="number"
                    value={dealPrice}
                    onChange={(e) => setDealPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-cyan-700 dark:text-cyan-300 font-mono font-bold focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'شارة الخصم البارزة:' : 'Discount Pill Text:'}
                </label>
                <input
                  type="text"
                  value={discountBadge}
                  onChange={(e) => setDiscountBadge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'سمة التصميم البصرية:' : 'Visual Layout Theme:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setThemeStyle(t.id as any)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        themeStyle === t.id
                          ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-400 font-bold'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  onClick={() => alert(isRTL ? 'تم تصدير المنشور ونسخه للحافظة بصيغة PNG عالية الدقة.' : 'Visual rendered and copied to clipboard as high-res PNG.')}
                  className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Download className="w-4 h-4" /> {isRTL ? 'تحميل تصميم المنشور' : 'Download Post Visual'}
                </button>
              </div>
            </div>

            {/* Rendered Social Post Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                className={`w-full max-w-md aspect-square rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all ${
                  themeStyle === 'cyan-neon' 
                    ? 'asset-canvas bg-gradient-to-br from-[#061524] via-[#0b2438] to-[#040e18] border-cyan-500/40 shadow-cyan-950/70' 
                    : themeStyle === 'pure-light'
                    ? 'bg-gradient-to-br from-white via-slate-50 to-cyan-50/20 border-slate-200 shadow-slate-300/50 text-slate-900'
                    : 'asset-canvas bg-gradient-to-br from-[#04111c] via-[#081e30] to-[#030d17] border-cyan-500/30 shadow-cyan-950/60'
                }`}
              >
                
                {/* Visual Top Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs font-mono ${
                      themeStyle === 'pure-light'
                        ? 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                        : 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/30'
                    }`}>
                      PPP
                    </span>
                    <span className={`text-xs font-bold font-display uppercase tracking-wider ${
                      themeStyle === 'pure-light'
                        ? 'text-slate-900'
                        : 'text-cyan-200'
                    }`}>
                      {isRTL ? 'عرض خاص محدود' : 'SPECIAL FLASH SALE'}
                    </span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-black uppercase shadow-md ${
                    themeStyle === 'pure-light' 
                      ? 'bg-cyan-600 text-white' 
                      : 'bg-cyan-500 text-slate-950 shadow-cyan-500/30'
                  }`}>
                    {discountBadge}
                  </span>
                </div>

                {/* Central Focus */}
                <div className="my-auto text-center space-y-3">
                  <h3 
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-display ${
                      themeStyle === 'pure-light' ? 'text-slate-900' : 'text-white drop-shadow'
                    }`}
                    style={themeStyle !== 'pure-light' ? { color: '#ffffff' } : undefined}
                  >
                    {productTitle}
                  </h3>

                  {/* Price Tag Box */}
                  <div className={`inline-flex items-baseline gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-md border ${
                    themeStyle === 'pure-light'
                      ? 'bg-white border-slate-200 shadow-md'
                      : 'bg-cyan-950/70 border-cyan-400/30 shadow-lg shadow-cyan-950/50'
                  }`}>
                    <span className={`text-sm line-through font-mono ${
                      themeStyle === 'pure-light'
                        ? 'text-slate-400'
                        : 'text-cyan-300/70'
                    }`}>
                      {regularPrice} {t.common.sar}
                    </span>
                    <span className={`text-3xl sm:text-4xl font-black font-mono ${
                      themeStyle === 'pure-light'
                        ? 'text-cyan-600'
                        : 'text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    }`}>
                      {dealPrice} {t.common.sar}
                    </span>
                  </div>
                  
                  <div className={`text-xs font-mono font-medium ${
                    themeStyle === 'pure-light'
                      ? 'text-slate-600'
                      : 'text-cyan-200/90'
                  }`}>
                    {isRTL 
                      ? `وفّر ${Math.max(regularPrice - dealPrice, 0)} ر.س باستخدام الكود ` 
                      : `Save ${Math.max(regularPrice - dealPrice, 0)} SAR with code `}
                    <span className="font-bold underline text-cyan-600 dark:text-cyan-400">PULSE</span>
                  </div>
                </div>

                {/* Visual Bottom Footer */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                  themeStyle === 'pure-light'
                    ? 'border-slate-200 text-slate-500'
                    : 'border-cyan-500/20 text-cyan-200/80'
                }`}>
                  <span>{isRTL ? 'كمية محدودة • شحن سريع خلال 24 ساعة' : 'Limited Availability • Ships in 24h'}</span>
                  <span className={`font-mono font-bold ${
                    themeStyle === 'pure-light'
                      ? 'text-cyan-700'
                      : 'text-cyan-200'
                  }`}>@neotechtankers</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
