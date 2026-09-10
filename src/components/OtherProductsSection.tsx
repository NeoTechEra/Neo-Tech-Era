import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles,
  Check
} from 'lucide-react';
import { PageView } from '../types';

interface OtherProductsProps {
  onNavigate?: (view: PageView) => void;
}

export const OtherProductsSection: React.FC<OtherProductsProps> = ({ onNavigate }) => {
  const handleNav = (view: PageView) => {
    if (onNavigate) {
      onNavigate(view);
    }
  };
  return (
    <section id="other-products" className="py-24 relative bg-slate-100/70 dark:bg-[#060b16] border-t border-slate-200 dark:border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 text-xs font-mono text-cyan-800 dark:text-cyan-300 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            Digital Productivity Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            More Tools by Neo Tech Era
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-200 font-normal">
            Practical software designed to eliminate repetitive bottlenecks, protect creative output, and generate high-converting visual assets.
          </p>
        </div>

        {/* Clean, Concise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PIX SHIELD */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-cyan-500/40 hover:dark:border-cyan-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#092233] dark:to-[#05141f] shadow-sm dark:shadow-xl dark:shadow-cyan-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-400/40 text-cyan-600 dark:text-cyan-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cyan-800 dark:text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/40 font-bold">
                  Visual Protection
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display">
                Pix Shield
              </h3>
              
              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mt-1">
                Sign 🖋️ & Shield Your Pixels.
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                Protect and watermark your images. A smart tool designed to help creators, photographers, and agencies safeguard their digital work with automated batch watermarking.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {[
                  'Add custom watermarks',
                  'Protect original images',
                  'Branding support',
                  'Fast and simple image processing'
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                id="other-products-pix-shield-btn"
                onClick={() => handleNav('pix-shield-detail')}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-cyan-500/20 hover:bg-slate-100 dark:hover:bg-cyan-500/30 text-slate-800 dark:text-cyan-200 font-bold text-sm border border-slate-200 dark:border-cyan-500/40 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-200 shadow-sm active:scale-95"
              >
                <span>View All Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* PRICE POST PULSER */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-purple-500/40 hover:dark:border-purple-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#2a0e40] dark:to-[#140620] shadow-sm dark:shadow-xl dark:shadow-purple-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-400/40 text-purple-600 dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-purple-800 dark:text-purple-300 px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 border border-purple-300 dark:border-purple-500/40 font-bold">
                  Marketing Graphics
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors font-display">
                Price Post Pulser
              </h3>

              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mt-1">
                Turn Pricing Data into Visual Posts.
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                Create professional pricing posts faster. It helps businesses turn raw product prices and discount information into ready-to-share social visuals in seconds.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {[
                  'Create pricing posts quickly',
                  'Professional ready-made layouts',
                  'Product and price customization',
                  'Designed for social media and marketing use'
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                id="other-products-price-pulser-btn"
                onClick={() => handleNav('price-pulser-detail')}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-purple-500/20 hover:bg-slate-100 dark:hover:bg-purple-500/30 text-slate-800 dark:text-purple-200 font-bold text-sm border border-slate-200 dark:border-purple-500/40 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-purple-600 dark:group-hover:text-purple-200 shadow-sm active:scale-95"
              >
                <span>View All Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* E-COMMERCE POST BUILDER */}
          <div className="p-7 rounded-3xl border border-slate-200 dark:border-emerald-500/40 hover:dark:border-emerald-300 transition-all duration-300 flex flex-col justify-between group bg-white/90 dark:bg-gradient-to-b dark:from-[#0a291b] dark:to-[#05150d] shadow-sm dark:shadow-xl dark:shadow-emerald-950/40">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 dark:border-emerald-400/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 font-bold">
                  Seller Visuals
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors font-display">
                E-Commerce Post Builder
              </h3>

              <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mt-1">
                High-Converting Online Store Visuals.
              </p>

              <p className="text-slate-600 dark:text-slate-100 text-sm mt-3 leading-relaxed font-normal">
                Create attractive product and promotional posts for your online store. Designed for online sellers who want to create product marketing content faster.
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 space-y-2">
                {[
                  'Product-focused post creation',
                  'Add product images and details',
                  'Add pricing and promotional information',
                  'Create attractive marketing visuals'
                ].map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                id="other-products-ecommerce-builder-btn"
                onClick={() => handleNav('ecommerce-builder-detail')}
                className="w-full py-3 px-4 rounded-xl bg-white dark:bg-emerald-500/20 hover:bg-slate-100 dark:hover:bg-emerald-500/30 text-slate-800 dark:text-emerald-200 font-bold text-sm border border-slate-200 dark:border-emerald-500/40 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-200 shadow-sm active:scale-95"
              >
                <span>View All Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
