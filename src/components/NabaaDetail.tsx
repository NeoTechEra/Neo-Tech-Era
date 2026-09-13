import React, { useState } from 'react';
import { 
  Droplets, 
  ArrowLeft, 
  Monitor, 
  Smartphone, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Sparkles, 
  Calendar,
  Wallet,
  Tag,
  Ticket,
  ChevronRight,
  Download,
  Building,
  ArrowRight
} from 'lucide-react';
import { NABAA_TANKER_SIZES, NABAA_PROMOTIONS, VALID_PROMO_CODES, SAMPLE_DRIVERS } from '../data/products';
import { Breadcrumb } from './Breadcrumb';
import { useLanguage } from '../i18n';

interface NabaaDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const NabaaDetail: React.FC<NabaaDetailProps> = ({ onBack, onOpenContact }) => {
  const { t, isRTL, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'admin' | 'customer' | 'driver' | 'tankers'>('admin');

  const tabs = [
    { id: 'admin', label: t.nabaaDetail.tabs.admin, icon: Monitor },
    { id: 'customer', label: t.nabaaDetail.tabs.customer, icon: Smartphone },
    { id: 'driver', label: t.nabaaDetail.tabs.driver, icon: Truck },
    { id: 'tankers', label: t.nabaaDetail.tabs.tankers, icon: Droplets }
  ];

  const adminSubsystems = [
    {
      title: isRTL ? 'إدارة العمليات والأنشطة' : 'Business Operations',
      desc: isRTL ? 'مراقبة فورية لمسارات التوصيل الحية، طلبات اليوم، إجمالي مبيعات المياه وحالات توجيه الأسطول.' : 'Real-time overview of active delivery routes, today orders, daily gross water sales, and fleet dispatch status.'
    },
    {
      title: isRTL ? 'إدارة السائقين والمناديب' : 'Driver Management',
      desc: isRTL ? 'سجل السائقين الشامل، تدقيق رخص القيادة، التحقق الجنائي، إحداثيات GPS المباشرة وحالة الاتصال.' : 'Complete driver roster, license verification, background checks, active GPS coordinates, and online/offline status.'
    },
    {
      title: isRTL ? 'التحكم بأسطول الصهاريج' : 'Tanker Fleet Controls',
      desc: isRTL ? 'إدارة سجلات المركبات، لوحات الشاحنات، تصنيفات السعة (10، 19، 32 طن) ومحاضر التعقيم.' : 'Manage vehicle records, license plates, water capacity ratings (10T, 19T, 32T), and sanitation inspections.'
    },
    {
      title: isRTL ? 'مركز التحكم بالطلبات' : 'Order Command Center',
      desc: isRTL ? 'فرز الطلبات الفورية والتعبئة المجدولة مستقبلاً، إعادة توجيه السائقين وتتبع المسارات الحية.' : 'Filter incoming immediate orders and scheduled future refills. Reassign drivers and track live GPS coordinates.'
    },
    {
      title: isRTL ? 'محرك العروض التلقائية' : 'Promotions Engine',
      desc: isRTL ? 'إنشاء خصومات موسمية أو مناطقية (مثل عرض رمضان 15%) بخصم آلي عند الدفع.' : 'Create regional or seasonal discounts (e.g. Ramadan Water Offer 15%) with automatic checkout deduction.'
    },
    {
      title: isRTL ? 'قسائم أكواد الخصم' : 'Voucher Promo Codes',
      desc: isRTL ? 'توليد أكواد تسويقية محددة بمدة صلاحية، حد أقصى للاستخدام وسجل محاسبي منفصل.' : 'Generate trackable marketing codes with expiration timestamps, usage caps, and dedicated ledger tracking.'
    },
    {
      title: isRTL ? 'التقارير وتحليلات الأعمال' : 'Business Insights',
      desc: isRTL ? 'تحليلات الإيرادات، ساعات الذروة، خرائط حرارية للأحياء الأكثر طلباً وتقارير كفاءة الأسطول.' : 'Revenue analytics, peak order hours, high-demand neighborhood heatmaps, and fleet efficiency reports.'
    },
    {
      title: isRTL ? 'نظام العمولات والمحافظ' : 'Commission System',
      desc: isRTL ? 'تخصيص قواعد عمولة السائق لكل رحلة: اعتماد النسبة المئوية أو القيمة الثابتة بالريال.' : 'Configure driver payout rules per trip: choose either percentage-based or flat SAR commission structure.'
    },
    {
      title: isRTL ? 'سجل التدقيق الآلي الموثق' : 'Automated Audit Trail',
      desc: isRTL ? 'تسجيل مالي غير قابل للتعديل للامتثال المحاسبي، شهادات جودة مصدر المياه والتقارير الضريبية.' : 'Immutable financial logging for billing compliance, water source quality certifications, and tax reporting.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden text-start">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Breadcrumb currentView="nabaa-detail" onNavigateHome={onBack} />
          <a
            href={language === 'ar' ? '/ar' : '/en'}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold group"
          >
            <ArrowLeft className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            {t.nabaaDetail.backToOverview}
          </a>
        </div>

        {/* Flagship Header */}
        <div className="max-w-4xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-950/90 border border-cyan-300 dark:border-cyan-400/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold uppercase tracking-wider shadow-sm">
            <Droplets className="w-3.5 h-3.5 fill-cyan-600 dark:fill-cyan-400 text-cyan-600 dark:text-cyan-400" />
            {t.nabaaDetail.badge}
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-display">
            {t.nabaaDetail.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {t.nabaaDetail.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 active:scale-95"
            >
              <span>{t.nabaaDetail.scheduleDemoBtn}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => alert(isRTL ? 'سيتم إرسال الورقة الفنية ووثائق الربط البرمجي لصهاريج نبع إلى بريدك الإلكتروني.' : 'The Nabaa Tankers Technical Whitepaper and API documentation will be sent to your email.')}
              className="px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              {t.nabaaDetail.downloadBriefBtn}
            </button>
          </div>
        </div>

        {/* Architecture Navigation Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-800 mb-12 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/80 dark:hover:bg-slate-800/60'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Admin Web Dashboard Deep Dive */}
        {activeTab === 'admin' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                    {t.nabaaDetail.adminSubsystemsHeading}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                    {t.nabaaDetail.adminSubsystemsSubheading}
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-800 text-xs font-mono text-cyan-800 dark:text-cyan-300">
                  {isRTL ? 'الدور: المدير العام / مسؤول التوجيه' : 'Role: Superadmin / Dispatcher'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {adminSubsystems.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Customer Mobile App Deep Dive */}
        {activeTab === 'customer' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                {t.nabaaDetail.customerAppHeading}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {t.nabaaDetail.customerAppSubheading}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                  <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-semibold">
                    {isRTL ? 'المزايا الجوهرية للعميل' : 'Core Customer Capabilities'}
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'الدخول برقم الجوال: ' : 'Mobile Number Auth: '}</strong>
                        {isRTL ? 'تسجيل دخول سهل وسريع برمز OTP دون الحاجة لحفظ كلمات مرور.' : 'Simple OTP access without memorizing passwords.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'دفتر عناوين متعدد: ' : 'Multi-Address Book: '}</strong>
                        {isRTL ? 'حفظ خزانات الفلل العلوية والأرضية، المزارع والمواقع التجارية.' : 'Save villa rooftop tanks, basement sumps, farm locations, or commercial facilities.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'الطلب الفوري المباشر: ' : 'Live Order Now Dispatch: '}</strong>
                        {isRTL ? 'رادار بحث فوري يحدد أقرب صهريج متاح في دقائق معدودة.' : 'Immediate radar search finds the closest tanker within minutes.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'جدولة التوصيل المسبق: ' : 'Future Date Scheduling: '}</strong>
                        {isRTL ? 'حجز تعبئة منتظمة أسبوعياً أو تحديد تاريخ وساعة مناسباتك مقدماً.' : 'Book weekly refills or event delivery dates in advance.'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                  <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">
                    {isRTL ? 'وسائل الدفع والشفافية في التوفير' : 'Payment & Savings Transparency'}
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'قنوات دفع متعددة: ' : 'Multiple Payment Channels: '}</strong>
                        {isRTL ? 'مدى، فيزا، ماستركارد، Apple Pay والدفع نقداً عند الاستلام.' : 'Mada, Visa, Mastercard, Apple Pay, and Cash on Delivery.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'تطبيق العروض تلقائياً: ' : 'Automatic Offer Application: '}</strong>
                        {isRTL ? 'احتساب الخصومات الموسمية مباشرة وتطبيقها في السلة قبل الدفع.' : 'Seasonal discounts calculate automatically before checkout.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'إدخال قسائم الخصم: ' : 'Voucher Code Input: '}</strong>
                        {isRTL ? 'تحقق لحظي من صلاحية الكوبون وخصم القيمة مباشرة من الحساب.' : 'Real-time validation checks eligibility and deducts promo credit instantly.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>{isRTL ? 'رادار تتبع السائق: ' : 'Driver Radar Pulse: '}</strong>
                        {isRTL ? 'عرض حي لحالة البحث والاقتران بأقرب صهريج مع خريطة الطريق.' : 'Real-time animated status while matching closest available driver.'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Driver Logistics App Deep Dive */}
        {activeTab === 'driver' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
                {t.nabaaDetail.driverAppHeading}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {t.nabaaDetail.driverAppSubheading}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isRTL ? 'استقبال طلبات الصهاريج' : 'Order Requests'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isRTL
                      ? 'تنبيهات صوتية فورية تعرض المسافة الدقيقة، سعة الصهريج المطلوبة، تعليمات بوابة العميل ومقدار ربح المشوار.'
                      : 'Audible incoming alerts display exact distance, requested tanker size, customer gate instructions, and trip payout.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isRTL ? 'تحديثات الحالة بلمسة واحدة' : 'Status Progression'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isRTL
                      ? 'أزرار واضحة وسريعة: قُبل ← في الطريق ← وصل الموقع ← تم التفريغ، مع تتبع GPS متزامن للعميل والإدارة.'
                      : 'Standardized single-tap updates: Accepted → On the Way → Arrived → Delivered, providing live tracking to customers and dispatch.'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isRTL ? 'محفظة السائق اللحظية' : 'Driver Wallet'}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {isRTL
                      ? 'إيداع فوري للرصيد فور اكتمال التوصيل. تفصيل شفاف للتعرفة الأساسية، العمولة، الإكراميات وسحب الرصيد البنكي.'
                      : 'Instant balance credit upon order completion. Transparent breakdown of base rates, commissions, tips, and direct bank payouts.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Fleet Tanker Specifications */}
        {activeTab === 'tankers' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {NABAA_TANKER_SIZES.map((tanker) => (
                <div 
                  key={tanker.id}
                  className={`p-7 rounded-3xl border transition-all ${
                    tanker.popular 
                      ? 'bg-white dark:bg-slate-900 border-2 border-cyan-500 shadow-xl shadow-cyan-500/15' 
                      : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold">
                      {tanker.capacity}
                    </span>
                    {tanker.popular && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 uppercase">
                        {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    {isRTL 
                      ? (tanker.id === 'small' ? 'صهريج صغير' : tanker.id === 'medium' ? 'صهريج متوسط' : 'صهريج كبير جامبو')
                      : tanker.name}
                  </h3>

                  <div className="text-3xl font-black text-slate-900 dark:text-white font-mono my-3">
                    {tanker.priceSAR} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{t.common.sar} / {isRTL ? 'مشوار' : 'trip'}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {isRTL 
                      ? (tanker.id === 'small' ? 'مثالي للفلل السكنية، المسابح الصغيرة وتعبئة خزانات المياه المنزلية العاجلة.' : tanker.id === 'medium' ? 'الحل القياسي الأكثر طلباً للمجمعات السكنية، العمائر وخزانات الفلل الكبيرة.' : 'الخيار الأفضل للمشاريع الإنشائية، المجمعات التجارية، والاحتياجات الصناعية الضخمة.')
                      : tanker.idealFor}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الحجم الإجمالي:' : 'Total Volume:'}</span>
                      <span className="font-mono text-slate-900 dark:text-white font-semibold">{tanker.liters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'مدى خراطيم الضخ:' : 'Typical Hose Reach:'}</span>
                      <span className="font-mono text-slate-900 dark:text-white font-semibold">{isRTL ? '40 - 60 متر' : '40 - 60 meters'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'سرعة الضخ والتفريغ:' : 'Pumping Rate:'}</span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{isRTL ? '1,200 لتر/دقيقة' : '1,200 L/min'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
