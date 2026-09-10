import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Wallet, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  Check, 
  X, 
  DollarSign, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

export const DriverAppSection: React.FC = () => {
  // Interactive Driver State
  const [driverStatus, setDriverStatus] = useState<'request_pending' | 'accepted' | 'on_the_way' | 'arrived' | 'delivered'>('request_pending');
  const [driverWalletSAR, setDriverWalletSAR] = useState<number>(1840);
  const [activeTab, setActiveTab] = useState<'delivery' | 'wallet' | 'history'>('delivery');

  const handleAcceptOrder = () => {
    setDriverStatus('accepted');
  };

  const handleDeclineOrder = () => {
    alert('Request declined. System will instantly redirect order to next closest tanker driver.');
  };

  const handleAdvanceStatus = () => {
    if (driverStatus === 'accepted') setDriverStatus('on_the_way');
    else if (driverStatus === 'on_the_way') setDriverStatus('arrived');
    else if (driverStatus === 'arrived') {
      setDriverStatus('delivered');
      setDriverWalletSAR(prev => prev + 35);
    }
  };

  const handleResetDriver = () => {
    setDriverStatus('request_pending');
  };

  return (
    <section id="driver-app-section" className="py-24 relative bg-slate-50 dark:bg-gradient-to-b dark:from-[#060c18] dark:via-[#0c162e] dark:to-[#060c18] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/40 text-xs font-mono text-blue-800 dark:text-blue-300 mb-3 shadow-sm">
            <Truck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Driver Logistics Platform
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Built for Drivers on the Move.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            The driver application helps drivers receive nearby delivery alerts, navigate optimized routes, track trip commissions, and manage fleet earnings with zero administrative friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Feature Group Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Driver Account & Order Requests */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-500/40 space-y-3 bg-white/90 dark:bg-gradient-to-br dark:from-[#0c203b] dark:to-[#061122] shadow-sm dark:shadow-lg dark:shadow-cyan-950/50 transition-all">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 uppercase font-bold tracking-wider">
                Incoming Dispatch Protocol
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Intelligent Order Requests
              </h3>
              <p className="text-slate-600 dark:text-slate-100 text-sm leading-relaxed">
                When a customer orders water, the engine calculates proximity and tanker capacity, instantly pinging the driver with customer location, delivery address, tanker volume, and clear earnings.
              </p>
              
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-200 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span>Exact drop-off location & GPS coordinates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span>Tanker requirement (10T, 19T, 32T)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span>Scheduled vs Immediate dispatch flag</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span>Customer phone & gate access notes</span>
                </div>
              </div>
            </div>

            {/* Active Delivery Flow & Route Guidance */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-blue-500/40 space-y-3 bg-white/90 dark:bg-gradient-to-br dark:from-[#0e1c48] dark:to-[#070e26] shadow-sm dark:shadow-lg dark:shadow-blue-950/50 transition-all">
              <div className="text-xs font-mono text-blue-700 dark:text-blue-300 uppercase font-bold tracking-wider">
                Seamless Logistics Progression
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Active Delivery Lifecycle & Route Guidance
              </h3>
              <p className="text-slate-600 dark:text-slate-100 text-sm leading-relaxed">
                Drivers tap through clear milestone updates to keep the customer and central admin dispatch in perfect synchronization:
              </p>

              {/* Status Flow Progression */}
              <div className="flex items-center justify-between bg-slate-50 dark:bg-[#070c1e] p-3 rounded-xl border border-slate-200 dark:border-blue-500/30 text-[11px] font-mono text-slate-700 dark:text-slate-200">
                <span className="text-cyan-600 dark:text-cyan-300 font-bold">1. Accepted</span>
                <span className="text-slate-400 dark:text-slate-400">→</span>
                <span className="text-blue-600 dark:text-blue-300 font-bold">2. On the Way</span>
                <span className="text-slate-400 dark:text-slate-400">→</span>
                <span className="text-amber-600 dark:text-amber-300 font-bold">3. Arrived</span>
                <span className="text-slate-400 dark:text-slate-400">→</span>
                <span className="text-emerald-600 dark:text-emerald-300 font-bold">4. Delivered</span>
              </div>
            </div>

            {/* Driver Wallet & Earnings */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/40 space-y-3 bg-white/90 dark:bg-gradient-to-br dark:from-[#092b1d] dark:to-[#04160e] shadow-sm dark:shadow-lg dark:shadow-emerald-950/50 transition-all">
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-300 uppercase font-bold tracking-wider">
                Financial Transparency
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Driver Wallet & Commission Engine
              </h3>
              <p className="text-slate-600 dark:text-slate-100 text-sm leading-relaxed">
                Administrators choose whether commissions are paid as a percentage (e.g. 15%) or a fixed currency amount (e.g. 35 SAR per trip). Drivers can withdraw earnings, track payment history, and see performance bonuses.
              </p>

              <div className="flex items-center justify-between pt-2">
                <button
                  id="driver-features-explore-btn"
                  onClick={() => setActiveTab(activeTab === 'delivery' ? 'wallet' : 'delivery')}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-emerald-500/20 dark:hover:bg-emerald-500/30 text-cyan-700 dark:text-emerald-200 text-xs sm:text-sm font-bold border border-slate-200 dark:border-emerald-500/40 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>View Driver Features in Mockup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 dark:text-emerald-300 font-medium">
                  Real-time wallet settlement
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Driver Smartphone App Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[42px] p-3 bg-slate-300 dark:bg-gradient-to-b dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 shadow-2xl shadow-slate-900/10 dark:shadow-blue-950/70 border border-slate-300 dark:border-slate-700/80">
              <div className="bg-white dark:bg-slate-950 rounded-[34px] p-4 text-left border border-slate-200 dark:border-slate-800 min-h-[580px] flex flex-col justify-between overflow-hidden shadow-inner">
                
                {/* Speaker notch */}
                <div className="w-28 h-4 bg-slate-200 dark:bg-slate-900 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-950" />
                </div>

                {/* Driver Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center font-bold text-xs">
                      TM
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Tariq Al-Mansoor</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online • Tanker #402
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white font-mono">{driverWalletSAR} SAR</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">Wallet Balance</div>
                  </div>
                </div>

                {/* Driver App Tab Switcher */}
                <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl my-2 text-[11px] font-semibold border border-slate-200 dark:border-slate-800">
                  <button
                    onClick={() => setActiveTab('delivery')}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${
                      activeTab === 'delivery' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Active Delivery
                  </button>
                  <button
                    onClick={() => setActiveTab('wallet')}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${
                      activeTab === 'wallet' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Driver Wallet
                  </button>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${
                      activeTab === 'history' ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    Trip History
                  </button>
                </div>

                {/* Driver Screen Body */}
                <div className="flex-1 py-2 space-y-3">
                  
                  {activeTab === 'delivery' && (
                    <div className="space-y-3">
                      
                      {/* Incoming Request State */}
                      {driverStatus === 'request_pending' && (
                        <div className="space-y-3 animate-in fade-in duration-200">
                          <div className="p-3.5 rounded-2xl bg-cyan-50/90 dark:bg-cyan-950/40 border border-cyan-300 dark:border-cyan-500/40 space-y-2 shadow-sm">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                                <Truck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> New Delivery Request!
                              </span>
                              <span className="text-[10px] font-mono font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/60">
                                Immediate
                              </span>
                            </div>

                            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                              <div className="flex justify-between">
                                <span className="text-slate-500 dark:text-slate-400">Customer:</span>
                                <span className="font-bold text-slate-900 dark:text-white">Nasser Al-Subaie</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500 dark:text-slate-400">Required:</span>
                                <span className="font-semibold text-cyan-700 dark:text-cyan-300">Medium Tanker (19 Tons)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500 dark:text-slate-400">Distance:</span>
                                <span className="font-mono font-bold text-slate-900 dark:text-white">2.4 km (6 mins drive)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500 dark:text-slate-400">Destination:</span>
                                <span className="font-bold text-slate-900 dark:text-white truncate max-w-[150px]">Villa 42, Al-Nakheel</span>
                              </div>
                              <div className="flex justify-between pt-1 border-t border-cyan-200 dark:border-cyan-500/20">
                                <span className="text-slate-600 dark:text-slate-400">Trip Commission:</span>
                                <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono">+35 SAR Guaranteed</span>
                              </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                              <button
                                onClick={handleDeclineOrder}
                                className="w-1/3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold border border-slate-300 dark:border-slate-800 flex items-center justify-center gap-1 transition-colors"
                              >
                                <X className="w-3.5 h-3.5" /> Decline
                              </button>
                              <button
                                onClick={handleAcceptOrder}
                                className="w-2/3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center gap-1 shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                              >
                                <Check className="w-4 h-4" /> Accept Delivery
                              </button>
                            </div>
                          </div>

                          <div className="text-center text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                            Auto-expires in 45s if unaccepted.
                          </div>
                        </div>
                      )}

                      {/* Active Delivery Flow Stages */}
                      {driverStatus !== 'request_pending' && (
                        <div className="space-y-3 animate-in fade-in duration-200 text-xs">
                          
                          {/* Route Map Visual Simulation */}
                          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pb-1.5 border-b border-slate-200 dark:border-slate-800">
                              <span className="flex items-center gap-1 font-mono text-cyan-700 dark:text-cyan-300 font-semibold">
                                <Navigation className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> GPS Turn-by-Turn
                              </span>
                              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">1.2 km left</span>
                            </div>

                            <div className="my-2 p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 text-xs shadow-sm">
                              <div className="font-bold text-slate-900 dark:text-white">Turn right onto King Fahd Road</div>
                              <div className="text-[10px] text-slate-500 dark:text-slate-400">Follow signs toward Al-Nakheel District</div>
                            </div>

                            <div className="flex items-center justify-between pt-1">
                              <div className="text-[11px] text-slate-700 dark:text-slate-300 font-medium">Customer: Nasser Al-Subaie</div>
                              <button className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-600/30 text-blue-800 dark:text-blue-300 text-[10px] font-semibold flex items-center gap-1 border border-blue-200 dark:border-transparent">
                                <PhoneCall className="w-2.5 h-2.5" /> Call Customer
                              </button>
                            </div>
                          </div>

                          {/* Progress Milestone Bar */}
                          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-2">
                            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Delivery Milestone</div>
                            
                            <div className="flex items-center justify-between text-[11px] font-mono">
                              <span className={driverStatus === 'accepted' ? 'text-cyan-600 dark:text-cyan-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
                                ● Accepted
                              </span>
                              <span className={driverStatus === 'on_the_way' ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
                                ● On the Way
                              </span>
                              <span className={driverStatus === 'arrived' ? 'text-amber-600 dark:text-amber-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
                                ● Arrived
                              </span>
                              <span className={driverStatus === 'delivered' ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400 dark:text-slate-500'}>
                                ● Delivered
                              </span>
                            </div>

                            {driverStatus !== 'delivered' ? (
                              <button
                                onClick={handleAdvanceStatus}
                                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
                              >
                                {driverStatus === 'accepted' && 'Mark: On the Way'}
                                {driverStatus === 'on_the_way' && 'Mark: Arrived at Site'}
                                {driverStatus === 'arrived' && 'Mark: Water Delivered & Fill Complete'}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            ) : (
                              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-1">
                                <div className="text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-1">
                                  <CheckCircle2 className="w-4 h-4" /> Order Complete & Paid!
                                </div>
                                <div className="text-[10px] text-slate-600 dark:text-slate-300 font-mono">
                                  +35 SAR credited to your Driver Wallet.
                                </div>
                                <button
                                  onClick={handleResetDriver}
                                  className="mt-2 px-3 py-1 rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[10px] border border-slate-300 dark:border-slate-700 inline-flex items-center gap-1 font-semibold"
                                >
                                  <RotateCcw className="w-3 h-3" /> Reset Demo
                                </button>
                              </div>
                            )}

                          </div>

                        </div>
                      )}

                    </div>
                  )}

                  {/* Wallet View */}
                  {activeTab === 'wallet' && (
                    <div className="space-y-3 animate-in fade-in duration-200 text-xs">
                      <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-center space-y-1">
                        <div className="text-[10px] font-mono text-cyan-800 dark:text-cyan-300 uppercase font-semibold">Total Available Balance</div>
                        <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">{driverWalletSAR} SAR</div>
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold">Commission rate: 35 SAR / trip</div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Recent Earnings Credits</div>
                        {[
                          { title: 'Villa 42 Delivery (19T)', date: 'Today, 2:15 PM', amount: '+35 SAR' },
                          { title: 'Al-Olaya Site (32T)', date: 'Today, 11:30 AM', amount: '+50 SAR' },
                          { title: 'Farm Top-up (10T)', date: 'Yesterday', amount: '+25 SAR' }
                        ].map((item, i) => (
                          <div key={i} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white text-[11px]">{item.title}</div>
                              <div className="text-[9px] text-slate-500 dark:text-slate-400">{item.date}</div>
                            </div>
                            <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{item.amount}</span>
                          </div>
                        ))}
                      </div>

                      <button className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-xs border border-slate-800 dark:border-slate-700 transition-colors">
                        Request Bank Payout
                      </button>
                    </div>
                  )}

                  {/* Trip History View */}
                  {activeTab === 'history' && (
                    <div className="space-y-2 animate-in fade-in duration-200 text-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase font-semibold">Completed Deliveries (1,420 Total)</div>
                      {[
                        { id: '#NB-9481', size: 'Medium Tanker', time: '18 min ago', rating: '★ 5.0' },
                        { id: '#NB-9475', size: 'Large Tanker', time: '3 hours ago', rating: '★ 5.0' },
                        { id: '#NB-9460', size: 'Small Tanker', time: 'Yesterday', rating: '★ 4.9' },
                        { id: '#NB-9442', size: 'Medium Tanker', time: 'Yesterday', rating: '★ 5.0' }
                      ].map((h, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-mono font-bold text-cyan-700 dark:text-cyan-300">{h.id}</div>
                            <div className="text-[10px] text-slate-600 dark:text-slate-400">{h.size} • {h.time}</div>
                          </div>
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">{h.rating}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation */}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around text-[10px] text-slate-500 dark:text-slate-400">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">● Operations</span>
                  <span>Routes</span>
                  <span>Wallet</span>
                  <span>Profile</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
