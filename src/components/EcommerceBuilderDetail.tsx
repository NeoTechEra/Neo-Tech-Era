import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Download, 
  Star, 
  Truck, 
  Flame,
  Layout,
  ExternalLink
} from 'lucide-react';
import { PageView } from '../types';
import { Breadcrumb } from './Breadcrumb';
import { useLanguage } from '../i18n';

interface EcommerceBuilderDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const EcommerceBuilderDetail: React.FC<EcommerceBuilderDetailProps> = ({ onBack, onOpenContact }) => {
  const { t, isRTL, language } = useLanguage();

  // Interactive E-Commerce Post Builder Sandbox
  const [storeName, setStoreName] = useState<string>(
    language === 'ar' ? 'متجر الجلود الفاخرة' : 'Artisan Leathercraft'
  );
  const [itemName, setItemName] = useState<string>(
    language === 'ar' ? 'محفظة جلدية إيطالية يدوية' : 'Handcrafted Italian Wallet'
  );
  const [itemPrice, setItemPrice] = useState<number>(185);
  const [highlightPill, setHighlightPill] = useState<string>(
    language === 'ar' ? 'توصيل سريع مجاني' : 'Free Express Delivery'
  );
  const [rating, setRating] = useState<number>(5);

  const capabilities = isRTL ? [
    'تصميم منشورات متخصصة للمنتجات بقوالب ذكية مصممة للتجارة',
    'إدراج صور المنتجات، المزايا التنافسية، وقوائم الفوائد بسلاسة',
    'أسعار تفاعلية وملصقات خصومات وعروض لافتة للأنظار',
    'توليد تصاميم إعلانية جذابة مخصصة لمنصات التواصل والتجارة الاجتماعية'
  ] : [
    'Product-focused post creation with smart layout templates',
    'Seamlessly insert product imagery, highlights, and bullet benefits',
    'Dynamic pricing and promotional discount stickers',
    'Generate attractive marketing visuals optimized for social commerce'
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Breadcrumb currentView="ecommerce-builder-detail" onNavigateHome={onBack} />
          <a
            href={language === 'ar' ? '/ar' : '/en'}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold group"
          >
            <ArrowLeft className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            {t.ecommerceBuilderDetail.backToOverview}
          </a>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-800 dark:text-emerald-300">
              <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              {t.ecommerceBuilderDetail.badge}
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              {t.ecommerceBuilderDetail.title}
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-emerald-700 dark:text-emerald-400">
              {t.ecommerceBuilderDetail.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {t.ecommerceBuilderDetail.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
              >
                {t.ecommerceBuilderDetail.inquireBtn}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/30 space-y-4 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-300 uppercase font-bold flex justify-between">
                <span>{isRTL ? 'التكامل والتصدير' : 'Compatibility & Exports'}</span>
                <span>v3.1 Store</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الربط مع المتاجر:' : 'Store Integrations:'}</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">Shopify, Salla, Zid, WooCommerce</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'مكتبة الملصقات:' : 'Sticker Library:'}</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{isRTL ? '+120 شارة تسويقية معتمدة' : '120+ Verified E-Commerce Badges'}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'شرائح المنتجات المتعددة:' : 'Multi-Product Carousels:'}</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">{isRTL ? 'توليد تلقائي لسلسلة من 5 شرائح' : 'Auto-Generates 5-Slide Sequences'}</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'النشر الاجتماعي المباشر:' : 'Direct Social Publishing:'}</span>
                  <span className="font-mono text-cyan-600 dark:text-cyan-300 font-semibold">{isRTL ? 'إنستغرام، تيك توك، كتالوج واتساب' : 'Instagram, TikTok, WhatsApp Catalog'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Post Builder Sandbox */}
        <div className="mt-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-md">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                {t.ecommerceBuilderDetail.creatorTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t.ecommerceBuilderDetail.creatorSubtitle}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
              {isRTL ? 'تجربة تفاعلية' : 'Live Interactive'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'اسم المتجر / العلامة التجارية:' : 'Online Brand Name:'}
                </label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'اسم المنتج:' : 'Product Name:'}
                </label>
                <input
                  type="text"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    {isRTL ? 'سعر البيع (ر.س):' : 'Store Price (SAR):'}
                  </label>
                  <input
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-mono focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    {isRTL ? 'شارة الميزة البارزة:' : 'Highlight Badge:'}
                  </label>
                  <input
                    type="text"
                    value={highlightPill}
                    onChange={(e) => setHighlightPill(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-emerald-700 dark:text-emerald-300 font-medium focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  {isRTL ? 'تقييم وتجارب العملاء:' : 'Customer Social Proof Rating:'}
                </label>
                <div className="flex gap-2">
                  {[5, 4.9, 4.8].map((stars) => (
                    <button
                      key={stars}
                      onClick={() => setRating(stars)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                        rating === stars 
                          ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-400 font-bold' 
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      ★ {stars} {isRTL ? 'نجوم' : 'Stars'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => alert(isRTL ? 'تم حفظ تصميم المنشور! جاري تصدير بطاقة إعلانية عالية الدقة 1080x1080.' : 'Post design saved! Exporting high-res 1080x1080 social card.')}
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <Download className="w-4 h-4" /> {isRTL ? 'تحميل منشور المتجر عالي الدقة' : 'Download High-Res Store Post'}
                </button>
              </div>
            </div>

            {/* Visual Store Card Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="asset-canvas w-full max-w-sm rounded-3xl bg-slate-900 border border-emerald-500/40 overflow-hidden shadow-2xl shadow-emerald-950/60 p-6 flex flex-col justify-between">
                
                {/* Store Branding Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/25 text-emerald-300 flex items-center justify-center font-bold text-xs">
                      {storeName.slice(0, 1)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white" style={{ color: '#ffffff' }}>
                      {storeName}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-700 text-[10px] font-mono text-emerald-300 font-semibold">
                    {isRTL ? 'تاجر معتمد' : 'Verified Seller'}
                  </span>
                </div>

                {/* Main Product Showcase Box */}
                <div className="my-6 p-6 rounded-2xl bg-slate-950/90 border border-slate-800 text-center relative overflow-hidden">
                  <div className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded-md border border-amber-700/60`}>
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {rating}
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500/15 to-teal-500/25 border border-emerald-500/30 mx-auto mb-4 flex items-center justify-center text-emerald-300 shadow-lg shadow-emerald-500/10">
                    <ShoppingBag className="w-10 h-10 text-emerald-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white" style={{ color: '#ffffff' }}>{itemName}</h3>
                  <div className="text-2xl font-black text-emerald-300 font-mono mt-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                    {itemPrice} {t.common.sar}
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-200 mt-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-700">
                    <Truck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{highlightPill}</span>
                  </div>
                </div>

                {/* Call to action footer */}
                <div className="space-y-2">
                  <button className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-md shadow-emerald-500/20 active:scale-95 transition-all">
                    {isRTL ? 'اطلب الآن • دفع إلكتروني فوري' : 'Shop Now • Instant Checkout'}
                  </button>
                  <div className="text-center text-[10px] text-slate-300 font-mono">
                    {isRTL ? 'انقر للطلب • عبر الواتساب والمتجر مباشرة' : 'Tap to order • Direct WhatsApp & Online Cart'}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
