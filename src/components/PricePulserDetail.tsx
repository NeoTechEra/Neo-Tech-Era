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

interface PricePulserDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const PricePulserDetail: React.FC<PricePulserDetailProps> = ({ onBack, onOpenContact }) => {
  // Live Price Post Generator State
  const [productTitle, setProductTitle] = useState<string>('Ultra Gaming Headset Pro');
  const [regularPrice, setRegularPrice] = useState<number>(399);
  const [dealPrice, setDealPrice] = useState<number>(249);
  const [discountBadge, setDiscountBadge] = useState<string>('38% OFF SPECIAL');
  const [themeStyle, setThemeStyle] = useState<'midnight-neon' | 'pure-light' | 'emerald-flash'>('midnight-neon');

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Breadcrumb currentView="price-pulser-detail" onNavigateHome={onBack} />
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Overview
          </a>
        </div>

        {/* Hero Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-xs font-mono text-purple-800 dark:text-purple-300">
              <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Dynamic Social Visual Automation
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Price Post Pulser
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-400">
              Turn Pricing Data into Visual Posts.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Create professional pricing posts faster. Price Post Pulser empowers retailers, e-commerce stores, and digital marketers to transform pricing spreadsheets into gorgeous, high-converting social media creatives in seconds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Create pricing posts quickly with zero design experience',
                'Professional ready-made layouts tuned for Instagram & X',
                'Deep product and price customization',
                'Designed for social media and rapid marketing campaigns'
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/20 transition-all active:scale-95"
              >
                Inquire & Request Price Post Pulser Access
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-purple-500/30 space-y-4 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <div className="text-xs font-mono text-purple-700 dark:text-purple-300 uppercase font-bold flex justify-between">
                <span>Product Specifications</span>
                <span>v1.8 Cloud</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Export Aspect Ratios:</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">1:1 (Feed), 9:16 (Story), 16:9 (X/Banner)</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Currencies Supported:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">SAR, AED, USD, EUR, KWD + 40 more</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Color Palette Presets:</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">24 Curated High-Contrast Themes</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Bulk CSV Importer:</span>
                  <span className="font-mono text-purple-700 dark:text-purple-300 font-semibold">Supported (Up to 1,000 SKUs)</span>
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
                Interactive Visual Post Generator
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Type in deal numbers below to watch Price Post Pulser render a publish-ready marketing visual.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-300">
              Live Sandbox
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  Product / Service Title:
                </label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    Regular Price (SAR):
                  </label>
                  <input
                    type="number"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-mono focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                    Promo Price (SAR):
                  </label>
                  <input
                    type="number"
                    value={dealPrice}
                    onChange={(e) => setDealPrice(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-purple-700 dark:text-purple-300 font-mono font-bold focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  Discount Pill Text:
                </label>
                <input
                  type="text"
                  value={discountBadge}
                  onChange={(e) => setDiscountBadge(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  Visual Layout Theme:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'midnight-neon', label: 'Midnight Neon' },
                    { id: 'pure-light', label: 'Ultra Clean' },
                    { id: 'emerald-flash', label: 'Emerald Glow' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setThemeStyle(t.id as any)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        themeStyle === t.id
                          ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-400 font-bold'
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
                  onClick={() => alert('Visual rendered and copied to clipboard as high-res PNG.')}
                  className="flex-1 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
                >
                  <Download className="w-4 h-4" /> Download Post Visual
                </button>
              </div>
            </div>

            {/* Rendered Social Post Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div 
                className={`w-full max-w-md aspect-square rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden shadow-2xl transition-all ${
                  themeStyle === 'midnight-neon' 
                    ? 'asset-canvas bg-gradient-to-br from-[#0c0721] via-[#1a0f35] to-[#090518] border-purple-500/40 shadow-purple-950/70' 
                    : themeStyle === 'pure-light'
                    ? 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-slate-200 shadow-slate-300/50 text-slate-900'
                    : 'asset-canvas bg-gradient-to-br from-[#02180f] via-[#053d2c] to-[#022116] border-emerald-500/40 shadow-emerald-950/70'
                }`}
              >
                
                {/* Visual Top Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs font-mono ${
                      themeStyle === 'midnight-neon'
                        ? 'bg-purple-500/25 text-purple-200 border border-purple-400/30'
                        : themeStyle === 'pure-light'
                        ? 'bg-purple-100 text-purple-700 border border-purple-200'
                        : 'bg-emerald-500/25 text-emerald-200 border border-emerald-400/30'
                    }`}>
                      PPP
                    </span>
                    <span className={`text-xs font-bold font-display uppercase tracking-wider ${
                      themeStyle === 'midnight-neon'
                        ? 'text-purple-200'
                        : themeStyle === 'pure-light'
                        ? 'text-slate-900'
                        : 'text-emerald-200'
                    }`}>
                      SPECIAL FLASH SALE
                    </span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-black uppercase shadow-md ${
                    themeStyle === 'midnight-neon' 
                      ? 'bg-purple-500 text-white shadow-purple-500/30' 
                      : themeStyle === 'pure-light' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
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
                    themeStyle === 'midnight-neon'
                      ? 'bg-purple-950/70 border-purple-400/30 shadow-lg shadow-purple-950/50'
                      : themeStyle === 'pure-light'
                      ? 'bg-white border-slate-200 shadow-md'
                      : 'bg-emerald-950/70 border-emerald-400/30 shadow-lg shadow-emerald-950/50'
                  }`}>
                    <span className={`text-sm line-through font-mono ${
                      themeStyle === 'midnight-neon'
                        ? 'text-purple-300/70'
                        : themeStyle === 'pure-light'
                        ? 'text-slate-400'
                        : 'text-emerald-300/70'
                    }`}>
                      {regularPrice} SAR
                    </span>
                    <span className={`text-3xl sm:text-4xl font-black font-mono ${
                      themeStyle === 'midnight-neon'
                        ? 'text-purple-300 drop-shadow-[0_0_12px_rgba(192,132,252,0.5)]'
                        : themeStyle === 'pure-light'
                        ? 'text-purple-600'
                        : 'text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]'
                    }`}>
                      {dealPrice} SAR
                    </span>
                  </div>
                  
                  <div className={`text-xs font-mono font-medium ${
                    themeStyle === 'midnight-neon'
                      ? 'text-purple-200/90'
                      : themeStyle === 'pure-light'
                      ? 'text-slate-600'
                      : 'text-emerald-200/90'
                  }`}>
                    Save {Math.max(regularPrice - dealPrice, 0)} SAR with code <span className="font-bold underline">PULSE</span>
                  </div>
                </div>

                {/* Visual Bottom Footer */}
                <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                  themeStyle === 'midnight-neon'
                    ? 'border-purple-500/20 text-purple-200/80'
                    : themeStyle === 'pure-light'
                    ? 'border-slate-200 text-slate-500'
                    : 'border-emerald-500/20 text-emerald-200/80'
                }`}>
                  <span>Limited Availability • Ships in 24h</span>
                  <span className={`font-mono font-bold ${
                    themeStyle === 'midnight-neon'
                      ? 'text-purple-200'
                      : themeStyle === 'pure-light'
                      ? 'text-purple-700'
                      : 'text-emerald-200'
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
