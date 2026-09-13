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
  ArrowRight,
  PhoneCall,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { NABAA_TANKER_SIZES, NABAA_PROMOTIONS, VALID_PROMO_CODES, SAMPLE_DRIVERS } from '../data/products';
import { Breadcrumb } from './Breadcrumb';
import { CustomerAppSection } from './CustomerAppSection';
import { DriverAppSection } from './DriverAppSection';
import { NabaaPlatformOverview } from './NabaaPlatformOverview';
import { ConnectedOrderJourney } from './ConnectedOrderJourney';
import { WhyNabaaTankers } from './WhyNabaaTankers';
import { useLanguage } from '../i18n';
import { getViewCanonicalPath } from '../utils/seoRouter';

interface NabaaDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const NabaaDetail: React.FC<NabaaDetailProps> = ({ onBack, onOpenContact }) => {
  const { t, isRTL, language } = useLanguage();
  const [activeQuickNav, setActiveQuickNav] = useState<string>('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveQuickNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickNavLinks = [
    { id: 'platform-overview', label: isRTL ? 'نظرة عامة على المنظومة' : 'Platform Overview', icon: Layers },
    { id: 'customer-app-section', label: isRTL ? 'تطبيق العميل' : 'Customer App', icon: Smartphone },
    { id: 'driver-app-section', label: isRTL ? 'تطبيق السائق' : 'Driver App', icon: Truck },
    { id: 'nabaa-platform-overview', label: isRTL ? 'لوحة تحكم الإدارة' : 'Admin Dashboard', icon: Monitor },
    { id: 'connected-journey-section', label: isRTL ? 'مسار الطلب المتكامل' : 'Ecosystem Journey', icon: Clock },
    { id: 'tanker-specs-section', label: isRTL ? 'مواصفات الأسطول' : 'Fleet Tankers', icon: Droplets },
    { id: 'why-nabaa-section', label: isRTL ? 'لماذا صهاريج نبع' : 'Why The Nabaa', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden text-start">
      
      {/* Background Ambient Radiance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Return to Home Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Breadcrumb currentView="nabaa-detail" onNavigateHome={onBack} />
          <a
            href={getViewCanonicalPath('home', language)}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold group"
          >
            <ArrowLeft className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
          </a>
        </div>

        {/* 1. HERO SECTION */}
        <section id="hero" className="mb-14">
          <div className="rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-cyan-500/30 bg-white/95 dark:bg-gradient-to-br dark:from-[#061426] dark:via-[#091b35] dark:to-[#040c17] backdrop-blur-xl shadow-xl dark:shadow-2xl dark:shadow-cyan-950/40">
            <div className="max-w-4xl">
              
              {/* Flagship Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-700 dark:text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {isRTL ? 'المنظومة الرقمية الرائدة' : 'Flagship Product'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/40 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold tracking-wider uppercase">
                  <Droplets className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {isRTL ? 'تقنيات إدارة أساطيل صهاريج المياه' : 'Water Telematics & Logistics'}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-[1.1]">
                {t.nabaaDetail.title}
              </h1>
              
              <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 dark:from-cyan-300 dark:via-sky-200 dark:to-blue-400 bg-clip-text text-transparent">
                {t.featuredNabaa.tagline || (isRTL ? 'إعادة ابتكار قطاع توصيل صهاريج المياه.' : 'Water Delivery, Reimagined.')}
              </p>

              {/* Subheading & Description */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-200 leading-relaxed font-normal">
                {t.nabaaDetail.subtitle}
              </p>

              {/* Primary & Secondary Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  id="nabaa-schedule-demo-btn"
                  onClick={onOpenContact}
                  className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 transition-all inline-flex items-center gap-2 group active:scale-95"
                >
                  <Building className="w-4 h-4 text-slate-950" />
                  <span>{t.nabaaDetail.scheduleDemoBtn}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </button>

                <button
                  id="nabaa-download-specs-btn"
                  onClick={() => scrollToSection('tanker-specs-section')}
                  className="px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{isRTL ? 'عرض مواصفات الأسطول' : 'View Fleet Specifications'}</span>
                </button>
              </div>

              {/* Key Platform Metrics Pill Bar */}
              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-start">
                <div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">3</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {isRTL ? 'تطبيقات مترابطة سحابياً' : 'Connected Applications'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">10T / 19T / 32T</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {isRTL ? 'سعات صهاريج معتمدة' : 'Certified Tanker Sizes'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">100%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {isRTL ? 'تتبع فوري ومحفظة لحظية' : 'Live Radar Telematics'}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">SAR / %</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {isRTL ? 'محرك عمولات مرن' : 'Dual Commission Engine'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* QUICK JUMP STICKY NAVIGATION */}
        <div className="sticky top-20 z-40 mb-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-2 shadow-md">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {quickNavLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeQuickNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. PLATFORM OVERVIEW SECTION */}
        <section id="platform-overview" className="mb-20 scroll-mt-32">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
              <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              {isRTL ? 'الهندسة المعمارية للمنظومة' : 'Architectural Overview'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display">
              {isRTL ? 'عمل تجاري واحد. ثلاث ركائز مترابطة.' : 'One Business. Three Connected Pillars.'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
              {isRTL 
                ? 'تعمل المنظومة كوحدة متزامنة بالكامل في الزمن الحقيقي؛ حيث تنعكس حركة العميل فوراً في رادار السائق، وتظهر كافة العمليات اللوجستية والمالية بدقة على لوحة تحكم الإدارة.'
                : 'The Nabaa Tankers synchronizes three purpose-built digital products into a real-time water logistics loop: instant customer ordering, driver navigation & wallet crediting, and centralized administrative command.'}
            </p>
          </div>

          {/* 3 Pillars Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Pillar 1: Customer App */}
            <div className="p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/30 bg-white/95 dark:bg-gradient-to-b dark:from-[#081e30] dark:to-[#04101a] shadow-sm">
              <div className="p-3 w-fit rounded-2xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase">
                {isRTL ? 'الركيزة الأولى: تجربة العميل' : 'Pillar 01 • Customer Experience'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-3">
                {t.featuredNabaa.customerTab.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {isRTL 
                  ? 'طلب صهاريج المياه الفورية أو المجدولة، تحديد مواقع الخزانات على الخريطة، اختيار سعة الصهريج، الدفع الآمن وتتبع وصول السائق.'
                  : 'On-demand or scheduled water tanker ordering, saved tank locations, upfront capacity pricing, secure cashless checkout, and live driver radar tracking.'}
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{isRTL ? 'تسجيل دخول سريع برمز OTP للجوال' : 'Fast mobile OTP login without passwords'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{isRTL ? 'جدولة الطلبات الدورية وتعبئة المناسبات' : 'Recurring deliveries & scheduled event refills'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{isRTL ? 'تطبيق تلقائي للعروض وأكواد الخصم' : 'Automated seasonal discounts & promo coupons'}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Driver App */}
            <div className="p-7 rounded-3xl border border-slate-200 dark:border-blue-500/30 bg-white/95 dark:bg-gradient-to-b dark:from-[#0a1e3d] dark:to-[#051124] shadow-sm">
              <div className="p-3 w-fit rounded-2xl bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-500/40 mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 uppercase">
                {isRTL ? 'الركيزة الثانية: لوجستيات الميدان' : 'Pillar 02 • Field Logistics'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-3">
                {t.featuredNabaa.driverTab.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {isRTL 
                  ? 'استقبال تنبيهات الطلبات القريبة، قبول أو رفض بلمسة، ملاحة متقدمة لخزان العميل، محفظة رقمية وتفصيل فوري للعمولات.'
                  : 'Instant dispatch notifications, one-tap accept/decline, turn-by-turn tanker navigation, live delivery step reporting, and transparent driver wallet ledger.'}
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isRTL ? 'تنبيهات صوتية فورية بالمسافة وقيمة الرحلة' : 'Audible trip alerts with distance & payout'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isRTL ? 'ملاحة مدمجة وتعليمات بوابة العميل' : 'Turn-by-turn directions & gate instructions'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{isRTL ? 'إيداع فوري لأرباح الرحلة في محفظة السائق' : 'Instant per-trip wallet deposit upon delivery'}</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Admin Web Dashboard */}
            <div className="p-7 rounded-3xl border border-slate-200 dark:border-indigo-500/30 bg-white/95 dark:bg-gradient-to-b dark:from-[#17143b] dark:to-[#0c0922] shadow-sm">
              <div className="p-3 w-fit rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/40 mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase">
                {isRTL ? 'الركيزة الثالثة: مركز التحكم والإدارة' : 'Pillar 03 • Central Command'}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display mt-1 mb-3">
                {t.featuredNabaa.adminTab.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {isRTL 
                  ? 'رؤية تشغيلية مركزية للأسطول، توزيع الطلبات، تدقيق السائقين، ضبط العمولات، إدارة الحملات الترويجية وسجل تدقيق محاسبي موثق.'
                  : 'Centralized telemetry over fleet operations, automated driver dispatch, commission policy toggles, promotional campaign management, and audit logs.'}
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 border-t border-slate-100 dark:border-white/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{isRTL ? 'خريطة رادار حية لكافة صهاريج الأسطول' : 'Real-time telemetry map of active tankers'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{isRTL ? 'محرك عمولات ذكي (نسبة مئوية أو قيمة ثابتة)' : 'Dual commission engine (percentage or flat SAR)'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{isRTL ? 'تحليلات ذكية لساعات الذروة والأحياء الأكثر طلباً' : 'Peak-hour demand heatmaps & financial reports'}</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

      </div>

      {/* 3. DETAILED CUSTOMER APP & ORDERING SIMULATOR */}
      <div id="customer-app-section" className="scroll-mt-28">
        <CustomerAppSection />
      </div>

      {/* 4. DETAILED DRIVER APP & FIELD CONSOLE SIMULATOR */}
      <div id="driver-app-section" className="scroll-mt-28">
        <DriverAppSection />
      </div>

      {/* 5. DETAILED ADMIN WEB DASHBOARD & COMMAND SUBSYSTEMS */}
      <div id="nabaa-platform-overview" className="scroll-mt-28">
        <NabaaPlatformOverview />
      </div>

      {/* 6. COMPLETE CROSS-APP ECOSYSTEM WORKFLOW */}
      <div id="connected-journey-section" className="scroll-mt-28">
        <ConnectedOrderJourney />
      </div>

      {/* 7. FLEET TANKER SPECIFICATIONS & DELIVERY OPTIONS */}
      <section id="tanker-specs-section" className="py-24 relative bg-white dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
              <Droplets className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              {isRTL ? 'خيارات وسعات صهاريج المياه' : 'Fleet Tanker Capacities'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              {isRTL ? 'خيارات التوصيل ومواصفات الأسطول' : 'Delivery Options & Tanker Specifications'}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
              {isRTL 
                ? 'صهاريج مياه معتمدة ومطابقة للاشتراطات الصحية، مجهزة بمضخات عالية الضغط وخراطيم تفريغ طويلة تناسب جميع أنواع الخزانات السكنية والتجارية.'
                : 'Sanitation-certified water tankers equipped with high-pressure stainless delivery pumps and extended food-grade discharge hoses.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NABAA_TANKER_SIZES.map((tanker) => (
              <div 
                key={tanker.id}
                className={`p-8 rounded-3xl border transition-all ${
                  tanker.popular 
                    ? 'bg-slate-50/90 dark:bg-[#07172e] border-2 border-cyan-500 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-500/20' 
                    : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-wider">
                    {tanker.capacity}
                  </span>
                  {tanker.popular && (
                    <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-cyan-500 text-slate-950 uppercase tracking-tight">
                      {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  {isRTL 
                    ? (tanker.id === 'small' ? 'صهريج صغير (10 طن)' : tanker.id === 'medium' ? 'صهريج متوسط (19 طن)' : 'صهريج جامبو (32 طن)')
                    : tanker.name}
                </h3>

                <div className="text-3xl font-black text-slate-900 dark:text-white font-mono my-4">
                  {tanker.priceSAR} <span className="text-sm font-normal text-slate-500 dark:text-slate-400">{t.common.sar} / {isRTL ? 'مشوار' : 'trip'}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {isRTL 
                    ? (tanker.id === 'small' ? 'مثالي للفلل السكنية، المسابح الصغيرة وتعبئة خزانات المياه المنزلية العاجلة.' : tanker.id === 'medium' ? 'الحل القياسي الأكثر طلباً للمجمعات السكنية، العمائر وخزانات الفلل الكبيرة.' : 'الخيار الأفضل للمشاريع الإنشائية، المجمعات التجارية، والاحتياجات الصناعية الضخمة.')
                    : tanker.idealFor}
                </p>

                <div className="space-y-3 pt-5 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الحجم الإجمالي:' : 'Total Volume:'}</span>
                    <span className="font-mono text-slate-900 dark:text-white font-bold">{tanker.liters}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'مدى خراطيم الضخ:' : 'Typical Hose Reach:'}</span>
                    <span className="font-mono text-slate-900 dark:text-white font-bold">{isRTL ? '40 - 60 متر' : '40 - 60 meters'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'سرعة الضخ والتفريغ:' : 'Pumping Rate:'}</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{isRTL ? '1,200 لتر/دقيقة' : '1,200 L/min'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'شهادة التعقيم الصحي:' : 'Sanitation Audit:'}</span>
                    <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{isRTL ? 'مطابق للاشتراطات القياسية' : 'Standard Certified'}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                  <button
                    onClick={onOpenContact}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 text-slate-900 dark:text-slate-100 hover:text-cyan-700 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isRTL ? 'طلب تسعير أسطول' : 'Request Fleet Quote'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. WHY THE NABAA TANKERS: 8 FEATURE BENTO CARDS */}
      <div id="why-nabaa-section" className="scroll-mt-28">
        <WhyNabaaTankers />
      </div>

      {/* 9. FINAL ENTERPRISE CALL TO ACTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-3xl p-8 sm:p-14 border border-slate-200 dark:border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-slate-900/40 backdrop-blur-xl shadow-2xl text-center">
          <span className="px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-400/40 text-xs font-mono font-bold uppercase tracking-wider">
            {isRTL ? 'التحول الرقمي لأساطيل صهاريج المياه' : 'Enterprise Telematics & Modernization'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-4">
            {isRTL ? 'جاهز لرقمنة عمليات توزيع المياه الخاصة بك؟' : 'Ready to Transform Your Water Delivery Operations?'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {isRTL 
              ? 'تواصل مع فريق حلول الأعمال في نيو تك إيرا للحصول على عرض توضيحي مباشر وتخصيص منظومة صهاريج نبع لأسطولك.'
              : 'Connect with Neo Tech Era enterprise engineers to schedule a live operational walkthrough and deploy The Nabaa Tankers across your fleet.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 transition-all inline-flex items-center gap-2 group active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>{isRTL ? 'تواصل مع فريق الأعمال' : 'Talk to Solutions Team'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
            <a
              href={getViewCanonicalPath('home', language)}
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="px-6 py-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-all inline-flex items-center gap-2"
            >
              <span>{isRTL ? 'استكشف منتجات نيو تك إيرا الأخرى' : 'Explore Other Neo Tech Era Products'}</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
