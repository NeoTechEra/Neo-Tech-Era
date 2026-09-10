import React, { useState } from 'react';
import { 
  User, 
  Cpu, 
  Truck, 
  CreditCard, 
  Droplets, 
  Monitor, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ConnectedOrderJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      actor: 'CUSTOMER',
      title: 'Places Water Order',
      description: 'Selects address, tanker size (10T, 19T, 32T), immediate dispatch or future scheduled date, and payment method.',
      icon: User,
      badgeColor: 'bg-cyan-50 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05121c] dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:shadow-lg dark:shadow-cyan-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#0e354f] dark:to-[#081e2e] dark:border-cyan-400 dark:shadow-cyan-500/30 ring-1 ring-cyan-400/30',
      darkTextAccent: 'dark:text-cyan-300',
      darkDesc: 'dark:text-cyan-100/95',
      darkNum: 'dark:text-cyan-300',
      darkIconBg: 'dark:bg-cyan-500/25 dark:border-cyan-400/50 dark:text-cyan-200'
    },
    {
      actor: 'SYSTEM',
      title: 'Calculates & Pings Drivers',
      description: 'Processes geofence coordinates, checks tanker inventory, and dispatches an instant request to the nearest qualified driver.',
      icon: Cpu,
      badgeColor: 'bg-blue-50 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0c2045] dark:to-[#061025] dark:border-blue-500/40 hover:dark:border-blue-300 dark:shadow-lg dark:shadow-blue-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#13326d] dark:to-[#0b1c40] dark:border-blue-400 dark:shadow-blue-500/30 ring-1 ring-blue-400/30',
      darkTextAccent: 'dark:text-blue-300',
      darkDesc: 'dark:text-blue-100/95',
      darkNum: 'dark:text-blue-300',
      darkIconBg: 'dark:bg-blue-500/25 dark:border-blue-400/50 dark:text-blue-200'
    },
    {
      actor: 'DRIVER',
      title: 'Accepts & Dispatches',
      description: 'Receives customer location and order details on the Driver App, accepts the request, and navigates via turn-by-turn route.',
      icon: Truck,
      badgeColor: 'bg-indigo-50 dark:bg-indigo-500/20 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#1b1642] dark:to-[#0e0c24] dark:border-indigo-500/40 hover:dark:border-indigo-300 dark:shadow-lg dark:shadow-indigo-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#2a2267] dark:to-[#17133f] dark:border-indigo-400 dark:shadow-indigo-500/30 ring-1 ring-indigo-400/30',
      darkTextAccent: 'dark:text-indigo-300',
      darkDesc: 'dark:text-indigo-100/95',
      darkNum: 'dark:text-indigo-300',
      darkIconBg: 'dark:bg-indigo-500/25 dark:border-indigo-400/50 dark:text-indigo-200'
    },
    {
      actor: 'PAYMENT',
      title: 'Secures Transaction',
      description: 'Processes card tokenization, digital wallet, or flags Cash on Delivery upon tank delivery confirmation.',
      icon: CreditCard,
      badgeColor: 'bg-emerald-50 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0a291b] dark:to-[#05150d] dark:border-emerald-500/40 hover:dark:border-emerald-300 dark:shadow-lg dark:shadow-emerald-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#10432c] dark:to-[#092719] dark:border-emerald-400 dark:shadow-emerald-500/30 ring-1 ring-emerald-400/30',
      darkTextAccent: 'dark:text-emerald-300',
      darkDesc: 'dark:text-emerald-100/95',
      darkNum: 'dark:text-emerald-300',
      darkIconBg: 'dark:bg-emerald-500/25 dark:border-emerald-400/50 dark:text-emerald-200'
    },
    {
      actor: 'DELIVERY',
      title: 'Site Arrival & Pumping',
      description: 'Driver connects the hose, pumps pure water into customer storage tanks, and updates order status to Delivered.',
      icon: Droplets,
      badgeColor: 'bg-sky-50 dark:bg-sky-500/20 text-sky-800 dark:text-sky-300 border-sky-200 dark:border-sky-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#092633] dark:to-[#04121a] dark:border-sky-500/40 hover:dark:border-sky-300 dark:shadow-lg dark:shadow-sky-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#0f3d53] dark:to-[#092432] dark:border-sky-400 dark:shadow-sky-500/30 ring-1 ring-sky-400/30',
      darkTextAccent: 'dark:text-sky-300',
      darkDesc: 'dark:text-sky-100/95',
      darkNum: 'dark:text-sky-300',
      darkIconBg: 'dark:bg-sky-500/25 dark:border-sky-400/50 dark:text-sky-200'
    },
    {
      actor: 'ADMIN',
      title: 'Monitors & Auto-Settles',
      description: 'Tracks delivery completion on the central dashboard, credits driver wallet commission, and logs financial audit reports.',
      icon: Monitor,
      badgeColor: 'bg-purple-50 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-400/40',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#2b0f42] dark:to-[#150621] dark:border-purple-500/40 hover:dark:border-purple-300 dark:shadow-lg dark:shadow-purple-950/40',
      darkActiveBg: 'dark:bg-gradient-to-b dark:from-[#431868] dark:to-[#290d40] dark:border-purple-400 dark:shadow-purple-500/30 ring-1 ring-purple-400/30',
      darkTextAccent: 'dark:text-purple-300',
      darkDesc: 'dark:text-purple-100/95',
      darkNum: 'dark:text-purple-300',
      darkIconBg: 'dark:bg-purple-500/25 dark:border-purple-400/50 dark:text-purple-200'
    }
  ];

  return (
    <section id="connected-order-journey" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-gradient-to-b dark:from-[#050b17] dark:via-[#091226] dark:to-[#050b17] border-t border-slate-200 dark:border-slate-800/80">
      
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-cyan-600/10 dark:bg-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-700/60 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            End-to-End Synergy
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            From Order to Delivery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            A seamless horizontal journey demonstrating how all three applications work in perfect, automated harmony.
          </p>
        </div>

        {/* Horizontal Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected 
                    ? `border-cyan-500 bg-white shadow-xl shadow-cyan-500/15 scale-[1.02] ${step.darkActiveBg}` 
                    : `border-slate-200 hover:border-slate-300 bg-white/70 ${step.darkCardBg}`
                }`}
              >
                <div>
                  {/* Step Actor Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                      {step.actor}
                    </span>
                    <span className={`text-xs font-mono text-slate-400 font-bold ${step.darkNum}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Step Icon */}
                  <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center mb-3 transition-colors ${
                    isSelected 
                      ? `bg-slate-100 border-cyan-500 text-cyan-600 ${step.darkIconBg}` 
                      : `bg-slate-100 border-slate-200 text-slate-500 ${step.darkIconBg}`
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 transition-colors ${step.darkTextAccent}`}>
                    {step.title}
                  </h3>

                  <p className={`text-xs text-slate-600 mt-2 leading-relaxed ${step.darkDesc}`}>
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-300">
                  <span className="font-mono font-medium">{isSelected ? 'Active Step' : 'Click to inspect'}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-400 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-white dark:bg-gradient-to-r dark:from-[#0b172a] dark:via-[#092233] dark:to-[#0b172a] border border-slate-200 dark:border-cyan-500/50 shadow-lg dark:shadow-2xl dark:shadow-cyan-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-500/25 border border-cyan-300 dark:border-cyan-400/50 text-cyan-700 dark:text-cyan-200 flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 uppercase font-bold tracking-wider">
                Ecosystem Insight: Step {activeStep + 1} of 6
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {steps[activeStep].actor} — {steps[activeStep].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-200 mt-0.5 leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : steps.length - 1))}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0))}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/30 transition-all active:scale-95"
            >
              Next Step
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
