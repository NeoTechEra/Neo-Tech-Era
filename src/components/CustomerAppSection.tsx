import React, { useState } from 'react';
import { 
  Smartphone, 
  MapPin, 
  Truck, 
  Calendar, 
  CreditCard, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Ticket, 
  Clock, 
  User, 
  Search, 
  Phone,
  Shield,
  RotateCcw,
  Check,
  AlertCircle
} from 'lucide-react';
import { NABAA_TANKER_SIZES, VALID_PROMO_CODES, SAMPLE_DRIVERS } from '../data/products';
import { useLanguage } from '../i18n';

export const CustomerAppSection: React.FC = () => {
  const { t, isRTL, language } = useLanguage();

  // Interactive Ordering Simulator State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedAddress, setSelectedAddress] = useState<string>(
    language === 'ar' ? 'فيلا 42، حي النخيل، الرياض' : 'Villa 42, Al-Nakheel, Riyadh'
  );
  const [selectedSizeId, setSelectedSizeId] = useState<string>('medium');
  const [deliveryType, setDeliveryType] = useState<'now' | 'scheduled'>('now');
  const [scheduledDate, setScheduledDate] = useState<string>(
    language === 'ar' ? 'غداً، 10:00 صباحاً' : 'Tomorrow, 10:00 AM'
  );
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'google_pay'>('card');
  
  // Promo code testing
  const [promoInput, setPromoInput] = useState<string>('NEO20');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountSAR: number } | null>(null);
  const [promoError, setPromoError] = useState<string>('');

  // Driver search simulated status
  const [driverSearchState, setDriverSearchState] = useState<'searching' | 'found' | 'completed'>('searching');

  // Pricing calculations
  const selectedTanker = NABAA_TANKER_SIZES.find((s) => s.id === selectedSizeId) || NABAA_TANKER_SIZES[1];
  const basePrice = selectedTanker.priceSAR;
  // Ramadan Offer: 15% off up to 30 SAR
  const promotionDiscount = Math.min(Math.round(basePrice * 0.15), 30);
  const promoCodeDiscount = appliedPromo ? appliedPromo.discountSAR : 0;
  const finalTotal = Math.max(basePrice - promotionDiscount - promoCodeDiscount, 0);

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (VALID_PROMO_CODES[code]) {
      setAppliedPromo({ code, discountSAR: VALID_PROMO_CODES[code].discountSAR });
      setPromoError('');
    } else {
      setPromoError(isRTL ? 'كود غير صالح. جرّب "NEO20" أو "WATERFAST"' : 'Invalid code. Try "NEO20" or "WATERFAST"');
    }
  };

  const handleStartDriverSearch = () => {
    setCurrentStep(6);
    setDriverSearchState('searching');
    setTimeout(() => {
      setDriverSearchState('found');
      setTimeout(() => {
        setDriverSearchState('completed');
      }, 2500);
    }, 2000);
  };

  const handleResetSimulator = () => {
    setCurrentStep(1);
    setDriverSearchState('searching');
  };

  const sampleAddresses = isRTL ? [
    'فيلا 42، حي النخيل، الرياض',
    'مزرعة العائلة، طريق الخرج',
    'موقع تجاري، برج العليا'
  ] : [
    'Villa 42, Al-Nakheel, Riyadh',
    'Family Farm, Al-Kharj Highway',
    'Commercial Site, Olaya Tower'
  ];

  return (
    <section id="customer-app-section" className="py-28 relative overflow-hidden bg-slate-100/70 dark:bg-[#050914] border-t border-slate-200 dark:border-slate-800/80">
      {/* Water caustics backdrop */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {t.customerApp.sectionBadge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.customerApp.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            {t.customerApp.subheading}
          </p>
        </div>

        {/* Mobile Number Account Experience Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-[#0a1e35] dark:via-[#09182b] dark:to-[#081523] border border-slate-200 dark:border-cyan-500/40 shadow-md dark:shadow-xl dark:shadow-cyan-950/40 flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
          <div className="space-y-2 text-start">
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 uppercase font-bold tracking-wider">
              {isRTL ? 'تسجيل دخول فوري وسلس' : 'Instant Frictionless Onboarding'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {isRTL ? 'حساب العميل برقم الجوال' : 'Mobile Number Account'}
            </h3>
            <p className="text-slate-600 dark:text-slate-100 text-sm max-w-xl font-normal leading-relaxed">
              {isRTL
                ? 'يؤكد العملاء هويتهم عبر رمز تحقق سريع (SMS OTP). فور الدخول يمكنهم حفظ عناوين التوصيل، جدولة التعبئة الدورية، الاستفادة من العروض الفعالة، والاطلاع على الفواتير السابقة.'
                : 'Customers verify identity via quick SMS OTP. Once signed in, they effortlessly manage delivery addresses, recurring tank schedules, active promotions, and past invoices.'}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#060e1a] p-2 rounded-2xl border border-slate-200 dark:border-cyan-500/30 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
              1. {isRTL ? 'رقم الجوال' : 'Mobile Number'}
            </span>
            <span className="text-slate-400 dark:text-slate-400">{isRTL ? '←' : '→'}</span>
            <span className="px-3 py-1.5 rounded-xl bg-cyan-100 dark:bg-cyan-950/90 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/50 font-bold">
              2. {isRTL ? 'رمز التحقق' : 'Verification'}
            </span>
            <span className="text-slate-400 dark:text-slate-400">{isRTL ? '←' : '→'}</span>
            <span className="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/90 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/50 font-bold">
              3. {isRTL ? 'دخول فوري' : 'Instant Access'}
            </span>
          </div>
        </div>

        {/* Step-by-step Interactive Ordering Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Right Column: Interactive Phone Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[42px] p-3 bg-slate-300 dark:bg-gradient-to-b dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-2xl border border-slate-300 dark:border-slate-700/80 relative transition-all">
              
              {/* Phone Inner Bezel & Screen */}
              <div className="bg-white dark:bg-slate-950 rounded-[34px] p-4 text-start border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col justify-between overflow-hidden relative shadow-inner transition-all">
                
                {/* Dynamic Island / Speaker notch */}
                <div className="w-28 h-4 bg-slate-200 dark:bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-950" />
                </div>

                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 flex items-center justify-center font-bold text-xs">
                      {isRTL ? 'ن' : 'NT'}
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white font-display">
                        {isRTL ? 'صهاريج نبع' : 'The Nabaa'}
                      </div>
                      <div className="text-[10px] text-cyan-600 dark:text-cyan-300 font-semibold">
                        {isRTL ? 'تطبيق العميل' : 'Customer App'}
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {isRTL ? `الخطوة ${currentStep} من 6` : `Step ${currentStep} of 6`}
                  </div>
                </div>

                {/* Interactive Screen Body based on currentStep */}
                <div className="flex-1 py-4 space-y-4">
                  
                  {/* STEP 1: Select Delivery Address */}
                  {currentStep === 1 && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'الخطوة 1: حدد موقع توصيل المياه' : 'Step 1: Select Delivery Address'}
                      </div>

                      <div className="space-y-2">
                        {sampleAddresses.map((addr, idx) => (
                          <div
                            key={idx}
                            onClick={() => setSelectedAddress(addr)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                              selectedAddress === addr 
                                ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm ring-1 ring-cyan-500/30' 
                                : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${selectedAddress === addr ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">{addr}</div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">
                                {isRTL ? 'عنوان محفوظ' : 'Saved Address'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setCurrentStep(2)}
                        className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 mt-4 shadow-md active:scale-95 transition-all"
                      >
                        {isRTL ? 'التالي: اختيار سعة الصهريج' : 'Next: Select Tanker Size'}{' '}
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )}

                  {/* STEP 2: Select Tanker Size */}
                  {currentStep === 2 && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'الخطوة 2: اختر حجم وسعة الصهريج' : 'Step 2: Select Tanker Size'}
                      </div>

                      <div className="space-y-2">
                        {NABAA_TANKER_SIZES.map((tanker) => (
                          <div
                            key={tanker.id}
                            onClick={() => setSelectedSizeId(tanker.id)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                              selectedSizeId === tanker.id
                                ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm ring-1 ring-cyan-500/30'
                                : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`p-2 rounded-lg ${selectedSizeId === tanker.id ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                                <Truck className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {isRTL 
                                    ? (tanker.id === 'small' ? 'صهريج صغير' : tanker.id === 'medium' ? 'صهريج متوسط' : 'صهريج كبير جامبو')
                                    : tanker.name}
                                </div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400">{tanker.capacity} • {tanker.liters}</div>
                              </div>
                            </div>
                            <div className="text-end">
                              <div className="font-mono font-bold text-cyan-700 dark:text-cyan-300">{tanker.priceSAR} {t.common.sar}</div>
                              {tanker.popular && (
                                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 uppercase border border-amber-300 dark:border-amber-600/40">
                                  {isRTL ? 'الأكثر طلباً' : 'Most Popular'}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => setCurrentStep(1)}
                          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold"
                        >
                          {isRTL ? 'رجوع' : 'Back'}
                        </button>
                        <button
                          onClick={() => setCurrentStep(3)}
                          className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 shadow-md active:scale-95 transition-all"
                        >
                          {isRTL ? 'التالي: نوع التوصيل' : 'Next: Delivery Type'}{' '}
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Choose Delivery Type */}
                  {currentStep === 3 && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'الخطوة 3: اختر موعد التوصيل' : 'Step 3: Choose Delivery Type'}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div
                          onClick={() => setDeliveryType('now')}
                          className={`p-3 rounded-xl border text-xs cursor-pointer text-center transition-all ${
                            deliveryType === 'now'
                              ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm ring-1 ring-cyan-500/30'
                              : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <Clock className={`w-5 h-5 mx-auto mb-1 ${deliveryType === 'now' ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                          <div className="font-bold text-slate-900 dark:text-white">
                            {isRTL ? 'طلب فوري الآن' : 'Order Now'}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {isRTL ? 'توجيه فوري (15-30 دقيقة)' : 'Immediate Dispatch (15-30m)'}
                          </div>
                        </div>

                        <div
                          onClick={() => setDeliveryType('scheduled')}
                          className={`p-3 rounded-xl border text-xs cursor-pointer text-center transition-all ${
                            deliveryType === 'scheduled'
                              ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm ring-1 ring-cyan-500/30'
                              : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <Calendar className={`w-5 h-5 mx-auto mb-1 ${deliveryType === 'scheduled' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                          <div className="font-bold text-slate-900 dark:text-white">
                            {isRTL ? 'جدولة موعد مسبق' : 'Schedule Order'}
                          </div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {isRTL ? 'تحديد يوم وساعة لاحقة' : 'Choose future date'}
                          </div>
                        </div>
                      </div>

                      {deliveryType === 'scheduled' && (
                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                          <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase">
                            {isRTL ? 'الموعد المختار:' : 'Selected Schedule:'}
                          </span>
                          <select 
                            value={scheduledDate}
                            onChange={(e) => setScheduledDate(e.target.value)}
                            className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg p-2 text-xs text-slate-900 dark:text-white"
                          >
                            <option value={isRTL ? 'غداً، 09:00 صباحاً' : 'Tomorrow, 09:00 AM'}>{isRTL ? 'غداً، 09:00 صباحاً' : 'Tomorrow, 09:00 AM'}</option>
                            <option value={isRTL ? 'غداً، 02:00 ظهراً' : 'Tomorrow, 02:00 PM'}>{isRTL ? 'غداً، 02:00 ظهراً' : 'Tomorrow, 02:00 PM'}</option>
                            <option value={isRTL ? 'الجمعة، 08:00 صباحاً (تعبئة نهاية الأسبوع)' : 'Friday, 08:00 AM (Weekend Refill)'}>{isRTL ? 'الجمعة، 08:00 صباحاً (تعبئة نهاية الأسبوع)' : 'Friday, 08:00 AM (Weekend Refill)'}</option>
                            <option value={isRTL ? 'الأحد، 11:00 صباحاً' : 'Sunday, 11:00 AM'}>{isRTL ? 'الأحد، 11:00 صباحاً' : 'Sunday, 11:00 AM'}</option>
                          </select>
                        </div>
                      )}

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => setCurrentStep(2)}
                          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold"
                        >
                          {isRTL ? 'رجوع' : 'Back'}
                        </button>
                        <button
                          onClick={() => setCurrentStep(4)}
                          className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 shadow-md active:scale-95 transition-all"
                        >
                          {isRTL ? 'التالي: طريقة الدفع' : 'Next: Payment'}{' '}
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Select Payment Method */}
                  {currentStep === 4 && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'الخطوة 4: اختر وسيلة الدفع' : 'Step 4: Select Payment Method'}
                      </div>

                      <div className="space-y-2">
                        {[
                          { 
                            id: 'card', 
                            label: isRTL ? 'بطاقات مدى / فيزا وماستركارد' : 'Credit / Mada Card', 
                            sub: isRTL ? 'دفع إلكتروني آمن ومشفر' : 'Instant & Secure Tokenization', 
                            icon: CreditCard 
                          },
                          { 
                            id: 'cash', 
                            label: isRTL ? 'الدفع نقداً عند الاستلام' : 'Cash on Delivery', 
                            sub: isRTL ? 'الدفع للسائق مباشرة بعد التفريغ' : 'Pay driver directly upon water delivery', 
                            icon: MapPin 
                          },
                          { 
                            id: 'google_pay', 
                            label: isRTL ? 'Apple Pay / Google Pay' : 'Apple Pay / Google Pay', 
                            sub: isRTL ? 'محفظة رقمية بلمسة واحدة' : '1-touch digital wallet', 
                            icon: Smartphone 
                          }
                        ].map((m) => (
                          <div
                            key={m.id}
                            onClick={() => setPaymentMethod(m.id as any)}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center gap-3 ${
                              paymentMethod === m.id
                                ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 dark:border-cyan-400 text-cyan-950 dark:text-white shadow-sm ring-1 ring-cyan-500/30'
                                : 'bg-slate-50 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <m.icon className={`w-4 h-4 ${paymentMethod === m.id ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">{m.label}</div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">{m.sub}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => setCurrentStep(3)}
                          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold"
                        >
                          {isRTL ? 'رجوع' : 'Back'}
                        </button>
                        <button
                          onClick={() => setCurrentStep(5)}
                          className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1 shadow-md active:scale-95 transition-all"
                        >
                          {isRTL ? 'مراجعة الطلب' : 'Review Order'}{' '}
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Review Order */}
                  {currentStep === 5 && (
                    <div className="space-y-2.5 animate-in fade-in duration-150 text-xs">
                      <div className="font-bold text-slate-800 dark:text-slate-200">
                        {isRTL ? 'الخطوة 5: مراجعة الطلب والخصومات' : 'Step 5: Review Order & Savings'}
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1.5">
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'العنوان:' : 'Address:'}</span>
                          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[150px]">{selectedAddress}</span>
                        </div>
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الصهريج:' : 'Tanker:'}</span>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {isRTL
                              ? (selectedTanker.id === 'small' ? 'صهريج صغير' : selectedTanker.id === 'medium' ? 'صهريج متوسط' : 'صهريج كبير')
                              : selectedTanker.name} ({selectedTanker.capacity})
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الموعد:' : 'Delivery:'}</span>
                          <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                            {deliveryType === 'now' ? (isRTL ? 'طلب فوري الآن' : 'Order Now (Immediate)') : scheduledDate}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'وسيلة الدفع:' : 'Payment:'}</span>
                          <span className="font-semibold uppercase text-slate-900 dark:text-white">{paymentMethod.replace('_', ' ')}</span>
                        </div>
                      </div>

                      {/* Promo Code Entry inside Review */}
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            value={promoInput}
                            onChange={(e) => setPromoInput(e.target.value)}
                            placeholder={isRTL ? 'أدخل كود الخصم' : 'Enter Promo Code'}
                            className="flex-1 px-2.5 py-1.5 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white font-mono uppercase"
                          />
                          <button
                            onClick={handleApplyPromo}
                            className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px]"
                          >
                            {isRTL ? 'تطبيق' : 'Apply'}
                          </button>
                        </div>
                        {appliedPromo && (
                          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 font-mono font-semibold">
                            <Check className="w-3 h-3" /> {isRTL ? `تم تطبيق الكود: -${appliedPromo.discountSAR} ر.س` : `Promo Code Applied: -${appliedPromo.discountSAR} SAR`}
                          </div>
                        )}
                        {promoError && (
                          <div className="text-[10px] text-rose-600 dark:text-rose-400 mt-1 font-semibold">{promoError}</div>
                        )}
                      </div>

                      {/* Price Calculation Breakdown */}
                      <div className="p-3 rounded-xl bg-cyan-50/80 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 space-y-1 font-mono text-[11px]">
                        <div className="flex justify-between text-slate-700 dark:text-slate-300">
                          <span>{isRTL ? 'سعر الصهريج الأساسي:' : 'Base Water Order:'}</span>
                          <span className="font-semibold">{basePrice} {t.common.sar}</span>
                        </div>
                        <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                          <span>{isRTL ? 'عرض رمضان (15%):' : 'Ramadan Offer (15%):'}</span>
                          <span>-{promotionDiscount} {t.common.sar}</span>
                        </div>
                        {appliedPromo && (
                          <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                            <span>{isRTL ? `كوبون (${appliedPromo.code}):` : `Promo Code (${appliedPromo.code}):`}</span>
                            <span>-{promoCodeDiscount} {t.common.sar}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-slate-900 dark:text-white font-bold pt-1.5 border-t border-cyan-300 dark:border-cyan-500/20 text-xs">
                          <span>{isRTL ? 'الإجمالي النهائي المطلوب:' : 'Final Total:'}</span>
                          <span className="text-cyan-700 dark:text-cyan-300 font-extrabold">{finalTotal} {t.common.sar}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 pt-1">
                        <button
                          onClick={() => setCurrentStep(4)}
                          className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-semibold"
                        >
                          {isRTL ? 'رجوع' : 'Back'}
                        </button>
                        <button
                          onClick={handleStartDriverSearch}
                          className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
                        >
                          <span>{isRTL ? 'تأكيد والبحث عن سائق صهريج' : 'Confirm & Find Driver'}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 6: Driver Search & Order Confirmation */}
                  {currentStep === 6 && (
                    <div className="space-y-3 animate-in fade-in duration-150 text-center py-4">
                      {driverSearchState === 'searching' && (
                        <div className="space-y-4">
                          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                            <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-500 dark:border-cyan-400 flex items-center justify-center text-cyan-600 dark:text-cyan-300">
                              <Search className="w-8 h-8 animate-pulse" />
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                              {isRTL ? 'جاري البحث عن أقرب صهريج متاح...' : 'Finding an Available Driver...'}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              {isRTL 
                                ? `إرسال إشعار لأقرب سائقي صهاريج في قطاع حي النخيل.`
                                : `Pinging closest ${selectedTanker.name} drivers in Al-Nakheel sector.`}
                            </p>
                          </div>
                        </div>
                      )}

                      {driverSearchState === 'found' && (
                        <div className="space-y-3">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-400 mx-auto flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                              {isRTL ? 'تم العثور على سائق وقبول الطلب!' : 'Driver Found!'}
                            </div>
                            <div className="text-xs text-cyan-700 dark:text-cyan-300 font-mono font-semibold">
                              {isRTL ? 'قبل طارق المنصور توصيل صهريجك' : 'Tariq Al-Mansoor accepted order'}
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-start text-xs space-y-1">
                            <div className="flex justify-between">
                              <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'السائق:' : 'Driver:'}</span>
                              <span className="font-semibold text-slate-900 dark:text-white">
                                {isRTL ? 'طارق المنصور (★ 4.9)' : 'Tariq Al-Mansoor (★ 4.9)'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'لوحة الشاحنة:' : 'Vehicle:'}</span>
                              <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                                {isRTL ? 'أ ب ح 4821' : 'KSA 4821-B'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-500 dark:text-slate-400">{isRTL ? 'الوقت المتوقع للوصول:' : 'Estimated Arrival:'}</span>
                              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                                {isRTL ? '18 دقيقة' : '18 Minutes'}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {driverSearchState === 'completed' && (
                        <div className="space-y-3">
                          <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-500/20 border-2 border-cyan-500 dark:border-cyan-400 mx-auto flex items-center justify-center text-cyan-600 dark:text-cyan-300 shadow-lg shadow-cyan-500/20">
                            <Truck className="w-7 h-7" />
                          </div>
                          <div>
                            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                              {isRTL ? 'تم تأكيد وحجز الطلب بنجاح!' : 'Order Placed Successfully!'}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                              {isRTL
                                ? `تم اعتماد الدفع (${finalTotal} ر.س). الصهريج في طريقه إليك لتفريغ المياه.`
                                : `Payment authorized (${finalTotal} SAR). Driver is on the way with your water delivery.`}
                            </p>
                          </div>

                          <button
                            onClick={handleResetSimulator}
                            className="mt-4 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 text-xs font-semibold border border-slate-300 dark:border-slate-700 inline-flex items-center gap-1.5 transition-all"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            {isRTL ? 'إعادة تجربة الطلب' : 'Restart Order Demo'}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Bar */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">● {isRTL ? 'طلب' : 'Order'}</span>
                  <span>{isRTL ? 'المواعيد' : 'Schedules'}</span>
                  <span>{isRTL ? 'العروض' : 'Offers'}</span>
                  <span>{isRTL ? 'حسابي' : 'Account'}</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Key Feature Highlights (Schedule a Delivery & Offers vs Promo Codes) */}
          <div className="lg:col-span-6 space-y-8 text-start">
            
            {/* SCHEDULE A DELIVERY */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-blue-500/40 relative bg-white/90 dark:bg-gradient-to-br dark:from-[#0b1f3b] dark:to-[#061122] shadow-sm dark:shadow-xl dark:shadow-blue-950/50 transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/40 text-xs font-mono text-blue-800 dark:text-blue-300 mb-4 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                {isRTL ? 'نظام جدولة التوصيل المسبق' : 'Scheduled Delivery System'}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                {isRTL ? 'المياه.. متى ما احتجت إليها بدقة.' : 'Water, When You Need It.'}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                {isRTL
                  ? 'لا يحتاج العملاء دائماً إلى صهريج فوري. تتيح المنظومة جدولة مواعيد مستقبلية منتظمة لإعادة تعبئة خزانات الفلل، خلطات الخرسانة الإنشائية، أو مناسبات عطلة نهاية الأسبوع.'
                  : 'Customers do not always need immediate water. They can schedule deliveries ahead of time for recurring villa refills, construction concrete mixing, or weekend events.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                {(isRTL ? [
                  'تحديد أي تاريخ ووقت توصيل مستقبلي',
                  'اختيار سعة الصهريج المناسبة (10، 19، 32 طن)',
                  'تثبيت موقع الخزان على الخريطة الجغرافية',
                  'متابعة جدول المواعيد في الحساب الشخصي',
                  'إشعارات وتنبيهات تذكير آلية قبل الموعد'
                ] : [
                  'Select any future delivery date',
                  'Choose required tanker size (10T, 19T, 32T)',
                  'Pin delivery address or storage tank',
                  'Review scheduled timeline in account',
                  'Automated dispatch reminder notifications'
                ]).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OFFERS & PROMOTIONS (Clear distinction between Promotions vs Promo Codes) */}
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-500/40 relative bg-white/90 dark:bg-gradient-to-br dark:from-[#082236] dark:to-[#05131f] shadow-sm dark:shadow-xl dark:shadow-cyan-950/50 transition-all">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-4 shadow-sm">
                <Tag className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                {isRTL ? 'محركان متمايزان للتوفير والخصومات' : 'Two Distinct Savings Engines'}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                {isRTL ? 'وفّر أكثر مع كل قطرة مياه.' : 'Save More With Every Drop.'}
              </h3>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-2 leading-relaxed font-normal">
                {isRTL
                  ? 'يفصل محرك صهاريج نبع بين العروض التلقائية وكوبونات الخصم لضمان أعلى مستويات الشفافية للعميل والوضوح المحاسبي للإدارة.'
                  : 'The Nabaa Tankers engine separates automated promotions from voucher promo codes for clear customer transparency and streamlined accounting.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                
                {/* Offers Card */}
                <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-gradient-to-br dark:from-cyan-950/90 dark:to-[#062030] border border-cyan-200 dark:border-cyan-400/50 dark:shadow-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase font-mono">
                    <Sparkles className="w-4 h-4" /> {isRTL ? 'العروض التلقائية' : 'Automated Offers'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {isRTL ? 'عرض مياه رمضان' : 'Ramadan Water Offer'}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-100 mt-1 font-normal leading-relaxed">
                    {isRTL
                      ? 'خصم 15% (حتى 30 ر.س) يطبّق تلقائياً في السلة دون الحاجة لإدخال أي رمز.'
                      : 'Save 15% (up to 30 SAR) applied automatically at checkout without entering codes.'}
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-cyan-700 dark:text-cyan-300 font-bold">
                    {isRTL ? 'طلب 200 ر.س ← خصم 30 ر.س = 170 ر.س' : 'Order 200 SAR → -30 SAR = 170 SAR'}
                  </div>
                </div>

                {/* Promo Codes Card */}
                <div className="p-4 rounded-2xl bg-purple-50 dark:bg-gradient-to-br dark:from-purple-950/90 dark:to-[#220935] border border-purple-200 dark:border-purple-400/50 dark:shadow-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-800 dark:text-purple-300 uppercase font-mono">
                    <Ticket className="w-4 h-4" /> {isRTL ? 'قسائم أكواد الخصم' : 'Promo Code Vouchers'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                    {isRTL ? 'الكود: NEO20' : 'Code: NEO20'}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-100 mt-1 font-normal leading-relaxed">
                    {isRTL
                      ? 'يكتب العميل الكود في خانة الدفع. يتحقق النظام فورياً من الصلاحية وحد الاستخدام.'
                      : 'Customers type valid codes in checkout. System instantly validates expiration and usage limits.'}
                  </div>
                  <div className="mt-3 text-[11px] font-mono text-purple-700 dark:text-purple-300 font-bold">
                    {isRTL ? 'الحالة: تم تطبيق كود الخصم بنجاح' : 'Status: Promo Code Applied Successfully'}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  id="customer-features-explore-btn"
                  onClick={() => setCurrentStep(1)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 text-cyan-700 dark:text-cyan-200 text-xs sm:text-sm font-bold border border-slate-200 dark:border-cyan-500/40 transition-all inline-flex items-center gap-2 active:scale-95"
                >
                  <span>{isRTL ? 'جرّب مميزات العميل في شاشة المحاكاة' : 'Explore Customer Features in Simulator'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
