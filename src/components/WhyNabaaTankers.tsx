import React from 'react';
import { 
  Layers, 
  Clock, 
  Truck, 
  Cpu, 
  Tag, 
  Smartphone, 
  Wallet, 
  Monitor,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhyNabaaTankers: React.FC = () => {
  const cards = [
    {
      title: 'Complete Ecosystem',
      description: 'Admin Web Dashboard, Customer Mobile App, and Driver Logistics App synchronized through a unified real-time infrastructure.',
      icon: Layers,
      highlight: '3 Apps In 1',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] dark:border-cyan-500/40 hover:dark:border-cyan-300 dark:shadow-lg dark:shadow-cyan-950/40',
      darkIcon: 'dark:bg-cyan-500/20 dark:border-cyan-400/40 dark:text-cyan-300',
      darkBadge: 'dark:bg-cyan-950/80 dark:border-cyan-500/40 dark:text-cyan-300',
      darkCheck: 'dark:text-cyan-400'
    },
    {
      title: 'Flexible Ordering',
      description: 'Order immediately for rapid emergency top-up, or schedule water tanker delivery for any specific date and preferred time window.',
      icon: Clock,
      highlight: 'Now or Scheduled',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0c2045] dark:to-[#061025] dark:border-blue-500/40 hover:dark:border-blue-300 dark:shadow-lg dark:shadow-blue-950/40',
      darkIcon: 'dark:bg-blue-500/20 dark:border-blue-400/40 dark:text-blue-300',
      darkBadge: 'dark:bg-blue-950/80 dark:border-blue-500/40 dark:text-blue-300',
      darkCheck: 'dark:text-blue-400'
    },
    {
      title: 'Multiple Tanker Sizes',
      description: 'Customers choose the exact capacity needed (10-Ton, 19-Ton, 32-Ton) with transparent pricing and live capacity meters.',
      icon: Truck,
      highlight: '10T • 19T • 32T',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#09262f] dark:to-[#04141a] dark:border-teal-500/40 hover:dark:border-teal-300 dark:shadow-lg dark:shadow-teal-950/40',
      darkIcon: 'dark:bg-teal-500/20 dark:border-teal-400/40 dark:text-teal-300',
      darkBadge: 'dark:bg-teal-950/80 dark:border-teal-500/40 dark:text-teal-300',
      darkCheck: 'dark:text-teal-400'
    },
    {
      title: 'Smart Driver Assignment',
      description: 'Automated radius calculation searches nearby available drivers, presents detailed delivery cards, and handles 1-tap acceptance.',
      icon: Cpu,
      highlight: 'Proximity Engine',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#1b1642] dark:to-[#0e0c24] dark:border-indigo-500/40 hover:dark:border-indigo-300 dark:shadow-lg dark:shadow-indigo-950/40',
      darkIcon: 'dark:bg-indigo-500/20 dark:border-indigo-400/40 dark:text-indigo-300',
      darkBadge: 'dark:bg-indigo-950/80 dark:border-indigo-500/40 dark:text-indigo-300',
      darkCheck: 'dark:text-indigo-400'
    },
    {
      title: 'Promotions & Savings',
      description: 'Robust dual system supporting automated promotional campaigns alongside separate, trackable customer voucher promo codes.',
      icon: Tag,
      highlight: 'Dual Savings Engine',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#2b0f42] dark:to-[#150621] dark:border-purple-500/40 hover:dark:border-purple-300 dark:shadow-lg dark:shadow-purple-950/40',
      darkIcon: 'dark:bg-purple-500/20 dark:border-purple-400/40 dark:text-purple-300',
      darkBadge: 'dark:bg-purple-950/80 dark:border-purple-500/40 dark:text-purple-300',
      darkCheck: 'dark:text-purple-400'
    },
    {
      title: 'Simple Mobile Access',
      description: 'Frictionless SMS OTP verification enables immediate login, order placement, and past delivery address management without passwords.',
      icon: Smartphone,
      highlight: 'Zero Password',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#2d1b09] dark:to-[#170e04] dark:border-amber-500/40 hover:dark:border-amber-300 dark:shadow-lg dark:shadow-amber-950/40',
      darkIcon: 'dark:bg-amber-500/20 dark:border-amber-400/40 dark:text-amber-300',
      darkBadge: 'dark:bg-amber-950/80 dark:border-amber-500/40 dark:text-amber-300',
      darkCheck: 'dark:text-amber-400'
    },
    {
      title: 'Driver Earnings Management',
      description: 'Full transparency over driver commissions (percentage or fixed SAR), built-in digital wallet balance, and payout histories.',
      icon: Wallet,
      highlight: '% or Fixed SAR',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0a291b] dark:to-[#05150d] dark:border-emerald-500/40 hover:dark:border-emerald-300 dark:shadow-lg dark:shadow-emerald-950/40',
      darkIcon: 'dark:bg-emerald-500/20 dark:border-emerald-400/40 dark:text-emerald-300',
      darkBadge: 'dark:bg-emerald-950/80 dark:border-emerald-500/40 dark:text-emerald-300',
      darkCheck: 'dark:text-emerald-400'
    },
    {
      title: 'Central Business Control',
      description: 'Command all fleet vehicles, drivers, customer records, live dispatch flows, and financial insights from a single master dashboard.',
      icon: Monitor,
      highlight: 'Total Oversight',
      darkCardBg: 'dark:bg-gradient-to-b dark:from-[#0e223d] dark:to-[#071322] dark:border-sky-500/40 hover:dark:border-sky-300 dark:shadow-lg dark:shadow-sky-950/40',
      darkIcon: 'dark:bg-sky-500/20 dark:border-sky-400/40 dark:text-sky-300',
      darkBadge: 'dark:bg-sky-950/80 dark:border-sky-500/40 dark:text-sky-300',
      darkCheck: 'dark:text-sky-400'
    }
  ];

  return (
    <section id="why-nabaa-tankers" className="py-24 relative bg-slate-50 dark:bg-[#060b16] border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-700/60 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Competitive Superiority
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            Why The Nabaa Tankers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            Built from the ground up to overcome the unique logistical challenges of bulk liquid delivery and fleet operations.
          </p>
        </div>

        {/* 8 Feature Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl border border-slate-200 bg-white/90 transition-all duration-300 group flex flex-col justify-between ${card.darkCardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform ${card.darkIcon}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono text-cyan-800 px-2 py-0.5 rounded-md bg-cyan-50 border border-cyan-200 font-semibold ${card.darkBadge}`}>
                      {card.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-100 mt-2 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-300">
                  <CheckCircle2 className={`w-3.5 h-3.5 text-cyan-600 ${card.darkCheck}`} />
                  <span className="font-medium">Enterprise Ready</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
