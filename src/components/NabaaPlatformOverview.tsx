import React, { useState } from 'react';
import { 
  Monitor, 
  Users, 
  Truck, 
  Layers, 
  FileText, 
  Tag, 
  Ticket, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Percent,
  DollarSign,
  Calendar,
  AlertCircle,
  Clock,
  ShieldCheck,
  Fuel
} from 'lucide-react';
import { NABAA_PROMOTIONS, NABAA_TANKER_SIZES, SAMPLE_DRIVERS } from '../data/products';

export const NabaaPlatformOverview: React.FC = () => {
  const [activeAdminTab, setActiveAdminTab] = useState<
    'business' | 'drivers' | 'tankers' | 'orders' | 'promotions' | 'promocodes' | 'insights'
  >('business');

  const [simulatedPromoDiscount, setSimulatedPromoDiscount] = useState<number>(15);
  const [simulatedCommissionType, setSimulatedCommissionType] = useState<'percentage' | 'fixed'>('percentage');
  const [simulatedCommissionValue, setSimulatedCommissionValue] = useState<number>(15);

  return (
    <section id="nabaa-platform-overview" className="py-24 relative bg-slate-100/70 dark:bg-gradient-to-b dark:from-[#060b17] dark:via-[#09152b] dark:to-[#060b17] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Monitor className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Control Center Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            One Business. Three Connected Applications.
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-200 font-normal">
            The Nabaa Tankers is not just a customer ordering app. It is a complete, enterprise-grade water delivery management ecosystem engineered for logistics precision.
          </p>
        </div>

        {/* Section 1: ADMIN WEB DASHBOARD Showcase */}
        <div className="rounded-3xl border border-slate-200 dark:border-cyan-500/40 bg-white/95 dark:bg-[#071326]/90 backdrop-blur-xl p-6 sm:p-10 shadow-xl dark:shadow-2xl dark:shadow-cyan-950/50">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/10">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    1. ADMIN WEB DASHBOARD
                  </h3>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300 font-semibold">
                    The Control Center for the Complete Water Delivery Business
                  </p>
                </div>
              </div>
            </div>

            {/* Quick KPI stats */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#050c18] border border-slate-200 dark:border-cyan-500/30 text-left">
                <div className="text-[10px] text-slate-500 dark:text-slate-300 uppercase font-mono">Today's Fleet Capacity</div>
                <div className="text-lg font-extrabold text-slate-900 dark:text-white">420,000 L</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#050c18] border border-slate-200 dark:border-cyan-500/30 text-left">
                <div className="text-[10px] text-slate-500 dark:text-slate-300 uppercase font-mono">Avg Dispatch Time</div>
                <div className="text-lg font-extrabold text-cyan-600 dark:text-cyan-300 font-mono">4.2 min</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#050c18] border border-slate-200 dark:border-cyan-500/30 text-left">
                <div className="text-[10px] text-slate-500 dark:text-slate-300 uppercase font-mono">Order Success</div>
                <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-300 font-mono">99.4%</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation for Admin Sub-systems */}
          <div className="mt-8 flex flex-wrap gap-2 pb-4 border-b border-slate-200 dark:border-white/10">
            {[
              { id: 'business', label: 'Business Management', icon: Layers },
              { id: 'drivers', label: 'Driver Management', icon: Users },
              { id: 'tankers', label: 'Tanker Management', icon: Truck },
              { id: 'orders', label: 'Order Lifecycle', icon: Clock },
              { id: 'promotions', label: 'Promotions & Offers', icon: Tag },
              { id: 'promocodes', label: 'Promo Codes', icon: Ticket },
              { id: 'insights', label: 'Business Insights', icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeAdminTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`admin-tab-${tab.id}`}
                  onClick={() => setActiveAdminTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-bold'
                      : 'bg-slate-100 dark:bg-[#081324] text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#0d1d36] border border-slate-200 dark:border-cyan-500/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8">
            
            {/* 1. Business Management */}
            {activeAdminTab === 'business' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">Central Operations & Entity Directory</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    The business administrator oversees all vital business nodes in real-time. Control geographical service areas, customer accounts, fleet compliance, and active dispatch protocols.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Manage customers & profiles',
                      'Manage driver verification',
                      'Manage tanker vehicles & licenses',
                      'Manage tanker sizes & capacity',
                      'Manage live orders & status',
                      'Manage service zones & geofences',
                      'Manage delivery operations 24/7'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 border-b border-slate-800">
                      <span>Live Service Zones (Geofenced)</span>
                      <span className="text-cyan-400">4 Active Districts</span>
                    </div>

                    {[
                      { name: 'North District (Al-Malqa, Al-Sahafa)', tankers: 12, orders: 28, status: 'High Demand' },
                      { name: 'Central Commercial Area (Al-Olaya)', tankers: 8, orders: 14, status: 'Optimal' },
                      { name: 'East Residential (Al-Yarmouk)', tankers: 11, orders: 19, status: 'Optimal' },
                      { name: 'West Industrial & Construction', tankers: 9, orders: 8, status: 'Fast Dispatch' }
                    ].map((zone, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white">{zone.name}</div>
                          <div className="text-[11px] text-slate-400">{zone.tankers} Tankers assigned • {zone.orders} active deliveries</div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {zone.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. Driver Management */}
            {activeAdminTab === 'drivers' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">Driver Logistics & Commission Controls</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Administrators have flexible tools to onboard drivers, monitor real-time availability, assign emergency dispatches, and configure commission rules with precision.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                    <div className="text-xs font-mono text-cyan-300 uppercase font-bold">
                      Interactive Commission Engine
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => { setSimulatedCommissionType('percentage'); setSimulatedCommissionValue(15); }}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                          simulatedCommissionType === 'percentage'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Percentage (%)
                      </button>
                      <button
                        onClick={() => { setSimulatedCommissionType('fixed'); setSimulatedCommissionValue(30); }}
                        className={`flex-1 py-2 rounded-xl text-xs font-semibold border ${
                          simulatedCommissionType === 'fixed'
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400'
                            : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Fixed SAR Currency
                      </button>
                    </div>

                    <div className="text-xs text-slate-300">
                      Current setting: <strong className="text-white">{simulatedCommissionType === 'percentage' ? `${simulatedCommissionValue}% of order subtotal` : `${simulatedCommissionValue} SAR per completed order`}</strong>
                    </div>

                    <p className="text-[11px] text-slate-400">
                      Drivers can inspect their wallet balance, request payout, and view completed delivery history in real-time.
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Add and manage driver credentials & commercial licenses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Monitor driver availability status (Available, On Delivery, Offline)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Track driver wallet information and automated commission disbursements
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase">Registered Drivers Roster</div>
                  {SAMPLE_DRIVERS.map((driver) => (
                    <div key={driver.id} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-sm">
                          {driver.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-2">
                            {driver.name}
                            <span className="text-[11px] font-mono text-amber-300">★ {driver.rating}</span>
                          </div>
                          <div className="text-xs text-slate-400">
                            {driver.vehicleNo} • {driver.tankerSize}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs font-bold text-emerald-400 font-mono">
                          {driver.walletBalanceSAR} SAR
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Wallet Balance ({driver.commissionRate})
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Tanker Management */}
            {activeAdminTab === 'tankers' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">Fleet Capacity & Tanker Relationships</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Easily manage diverse water tanker vehicle configurations, sanitization records, water meter inspection certificates, and driver-tanker pairings.
                  </p>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Configure different tanker sizes (10 Ton, 19 Ton, 32 Ton)
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Real-time tanker availability status
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Driver-to-tanker assignment & shift swaps
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      Water quality check & tank sanitization logs
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {NABAA_TANKER_SIZES.map((tanker) => (
                    <div key={tanker.id} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center flex flex-col justify-between">
                      <div>
                        <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center mb-2">
                          <Truck className="w-5 h-5" />
                        </div>
                        <div className="text-sm font-bold text-white">{tanker.name}</div>
                        <div className="text-xs text-cyan-300 font-mono mt-0.5">{tanker.capacity}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{tanker.liters}</div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-800">
                        <div className="text-xs font-bold text-white">{tanker.priceSAR} SAR</div>
                        <div className="text-[10px] text-slate-400">Base Tariff</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Order Management & Lifecycle */}
            {activeAdminTab === 'orders' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="max-w-3xl">
                  <h4 className="text-xl font-bold text-white">End-to-End Order Lifecycle Flow</h4>
                  <p className="text-slate-300 text-sm mt-1">
                    Administrators view and manage orders throughout their complete lifecycle, with real-time audit logs and automatic driver dispatch failovers.
                  </p>
                </div>

                {/* Horizontal Flow Diagram */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
                  {[
                    { step: '01', title: 'Order Created', desc: 'Customer selects size, address & delivery type', badge: 'Trigger' },
                    { step: '02', title: 'Driver Search', desc: 'System pings nearest available tanker drivers', badge: 'Auto' },
                    { step: '03', title: 'Driver Assigned', desc: 'Driver accepts order; ETA & vehicle sent to user', badge: 'Matched' },
                    { step: '04', title: 'Delivery in Progress', desc: 'Real-time GPS en route, arrival at site & filling', badge: 'Live' },
                    { step: '05', title: 'Completed', desc: 'Delivery signed off, invoice issued, payout settled', badge: 'Archived' }
                  ].map((s, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 relative group hover:border-cyan-500/40 transition-all">
                      <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-2">
                        <span className="font-bold">{s.step}</span>
                        <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-[10px] border border-cyan-800">{s.badge}</span>
                      </div>
                      <div className="text-sm font-bold text-white">{s.title}</div>
                      <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Promotions & Offers */}
            {activeAdminTab === 'promotions' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                <div className="lg:col-span-6 space-y-4">
                  <h4 className="text-xl font-bold text-white">Automated Promotional Offers Engine</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Administrators create rich promotional rules tailored to seasonal demands, tanker capacities, and targeted customer segments without requiring manual code entry.
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Discount Mechanism</span>
                      <strong className="text-white">Percentage or Fixed SAR</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Capping Rule</span>
                      <strong className="text-white">Maximum Discount Limit</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Cart Threshold</span>
                      <strong className="text-white">Minimum Order Amount</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-slate-400 block text-[10px]">Target Audience</span>
                      <strong className="text-white">New, Existing, or All</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    Administrators configure whether the offer applies to the raw product price or the overall order subtotal.
                  </p>
                </div>

                {/* Example Promotional Card */}
                <div className="lg:col-span-6">
                  <div className="glass-panel-water p-6 rounded-2xl border border-cyan-400/40 relative shadow-xl">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 text-xs font-bold uppercase mb-3">
                      Example Promotion
                    </div>
                    <h5 className="text-2xl font-black text-white font-display">
                      Ramadan Water Offer
                    </h5>
                    <div className="text-base text-cyan-300 font-bold mt-1">
                      Save 15% • Maximum Discount: 30 SAR
                    </div>
                    <p className="text-xs text-slate-200 mt-2">
                      Applies automatically during checkout for all customers ordering any tanker size.
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between text-slate-300">
                        <span>Medium Tanker (19T):</span>
                        <span className="text-white">200 SAR</span>
                      </div>
                      <div className="flex justify-between text-emerald-400">
                        <span>15% Ramadan Offer Discount:</span>
                        <span>-30 SAR (Max Cap Reached)</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-1 border-t border-slate-800">
                        <span>Final Checkout:</span>
                        <span className="text-cyan-300">170 SAR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Promo Codes */}
            {activeAdminTab === 'promocodes' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-200">
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950 border border-purple-800 text-xs font-mono text-purple-300">
                    <Ticket className="w-3.5 h-3.5" />
                    Separate System from Promotions
                  </div>
                  <h4 className="text-xl font-bold text-white">Promo Codes Management</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Promo codes are managed independently from automated promotional offers. Customers manually enter specific voucher codes during checkout for partner campaigns, corporate accounts, or influencer deals.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Create unique alphanumeric promo codes (e.g. NEO20, WATERFAST)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Set percentage or fixed currency discounts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Define expiration dates and total redemption limits
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      Instant 1-click enable or disable switch
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-mono text-slate-400 uppercase">Active Promo Codes in System</div>
                  {[
                    { code: 'NEO20', discount: '20 SAR Fixed', min: '150 SAR', status: 'Active', uses: '840 / 1000' },
                    { code: 'WATERFAST', discount: '15 SAR Fixed', min: '100 SAR', status: 'Active', uses: '412 / 500' },
                    { code: 'SUMMER10', discount: '10% Percent', min: '120 SAR', status: 'Active', uses: '1,209 / 2000' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono font-bold text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-sm">
                          {item.code}
                        </span>
                        <div className="text-slate-400 text-[11px] mt-1">
                          {item.discount} • Min Order: {item.min}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                          {item.status}
                        </span>
                        <div className="text-[10px] text-slate-400 font-mono mt-1">
                          {item.uses} redemptions
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. Business Insights */}
            {activeAdminTab === 'insights' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="max-w-3xl">
                  <h4 className="text-xl font-bold text-white">Dashboard & Business Insights</h4>
                  <p className="text-slate-300 text-sm mt-1">
                    Real-time visual operational metrics empowering executives to make data-driven logistics and capacity expansion decisions.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Total Orders</div>
                    <div className="text-2xl font-extrabold text-white mt-1">18,490</div>
                    <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-mono">
                      <TrendingUp className="w-3 h-3" /> +14.2% MoM
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Active Orders</div>
                    <div className="text-2xl font-extrabold text-cyan-300 mt-1">42 Live</div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      All drivers dispatched
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Completed Deliveries</div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">18,210</div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      98.5% on-time delivery
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase">Monthly Revenue</div>
                    <div className="text-2xl font-extrabold text-white mt-1">3.4M SAR</div>
                    <div className="text-[11px] text-cyan-400 mt-1 font-mono">
                      Auto-settled through wallet
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Action Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Multi-tenant security, role-based access control (RBAC), and SSL encrypted.</span>
            </div>

            <button
              id="view-admin-features-btn"
              onClick={() => setActiveAdminTab(activeAdminTab === 'business' ? 'orders' : 'business')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 transition-all flex items-center gap-2"
            >
              <span>View Admin Features</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
