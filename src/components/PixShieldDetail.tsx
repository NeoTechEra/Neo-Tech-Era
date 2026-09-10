import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Download, 
  Sliders, 
  Layers, 
  Maximize2,
  RefreshCw,
  Camera,
  Type,
  FileCheck
} from 'lucide-react';
import { PageView } from '../types';

interface PixShieldDetailProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const PixShieldDetail: React.FC<PixShieldDetailProps> = ({ onBack, onOpenContact }) => {
  // Live Interactive Watermark Sandbox State
  const [watermarkText, setWatermarkText] = useState<string>('© Neo Tech Era • Confidential');
  const [watermarkPosition, setWatermarkPosition] = useState<'bottom-right' | 'center' | 'diagonal' | 'top-left'>('bottom-right');
  const [opacity, setOpacity] = useState<number>(75);
  const [sampleImage, setSampleImage] = useState<string>('landscape');

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Back Navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 shadow-sm transition-all text-xs font-semibold mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </button>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 text-xs font-mono text-cyan-800 dark:text-cyan-300">
              <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Digital Asset Copyright & Protection
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
              Pix Shield
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-cyan-700 dark:text-cyan-400">
              Sign 🖋️ & Shield Your Pixels.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              A smart image protection and watermarking tool designed to help creators, photographers, digital agencies, and businesses protect their visual content from unauthorized reuse.
            </p>

            {/* Main capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Add custom watermarks (text, signatures, vector logos)',
                'Protect original images with invisible digital markers',
                'Branding support with automated batch scaling',
                'Fast and simple image processing in browser & cloud'
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-300" />
                  </div>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
              >
                Inquire & Request Pix Shield Access
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-3xl border border-slate-200 dark:border-cyan-500/30 space-y-4 bg-white/90 dark:bg-slate-900/60 shadow-md">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-300 uppercase font-bold flex justify-between">
                <span>Product Specifications</span>
                <span>v2.4 Pro</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Supported Formats:</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">PNG, JPG, WebP, TIFF, SVG</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Processing Speed:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Under 180ms / photo</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">Batch Processing:</span>
                  <span className="font-mono text-slate-900 dark:text-white font-semibold">Up to 500 images / batch</span>
                </div>
                <div className="flex justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500 dark:text-slate-400">EXIF Metadata:</span>
                  <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">Preserved or Sanitized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Interactive Watermark Sandbox */}
        <div className="mt-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 shadow-md">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Interactive Watermark Studio Preview
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Experience Pix Shield’s precision positioning, opacity blending, and real-time canvas rendering.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300">
              Live Demo
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Control Form */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  Watermark Text / Signature:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={watermarkText}
                    onChange={(e) => setWatermarkText(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white font-medium focus:border-cyan-500 focus:outline-none"
                  />
                  <Type className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute right-3 top-3" />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 uppercase block mb-1">
                  Positioning:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'bottom-right', label: 'Bottom Right' },
                    { id: 'center', label: 'Center' },
                    { id: 'top-left', label: 'Top Left' },
                    { id: 'diagonal', label: 'Full Diagonal' }
                  ].map((pos) => (
                    <button
                      key={pos.id}
                      onClick={() => setWatermarkPosition(pos.id as any)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        watermarkPosition === pos.id
                          ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border-cyan-400 font-bold'
                          : 'bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {pos.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono text-slate-700 dark:text-slate-300 mb-1">
                  <span>Watermark Opacity:</span>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">{opacity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => alert(`Watermark "${watermarkText}" applied successfully! In production, the file downloads instantly.`)}
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Download className="w-4 h-4" /> Download Protected Asset
                </button>
              </div>
            </div>

            {/* Visual Canvas Render */}
            <div className="lg:col-span-7">
              <div className="asset-canvas relative rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-950 aspect-[16/10] flex items-center justify-center shadow-2xl">
                
                {/* Simulated high-res photography artwork background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 75% 25%, rgba(14, 165, 233, 0.35) 0%, transparent 55%), radial-gradient(ellipse at 25% 75%, rgba(37, 99, 235, 0.3) 0%, transparent 60%), linear-gradient(135deg, #090e1a 0%, #0f172a 45%, #0369a1 100%)`
                  }}
                />

                {/* Simulated artwork content */}
                <div className="relative z-10 text-center p-6 pointer-events-none">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 mx-auto mb-3 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/20">
                    <Camera className="w-8 h-8 text-cyan-300" />
                  </div>
                  <div className="text-xl font-extrabold font-display tracking-tight text-white drop-shadow-md" style={{ color: '#ffffff' }}>
                    Premium Visual Asset
                  </div>
                  <div className="text-xs font-mono mt-1 font-medium" style={{ color: '#bae6fd' }}>
                    High-Resolution Studio Master • 3840 x 2160 • RAW
                  </div>
                </div>

                {/* Overlaid Watermark layer */}
                <div 
                  className={`absolute z-20 pointer-events-none font-mono font-bold tracking-wider select-none ${
                    watermarkPosition === 'bottom-right' ? 'bottom-6 right-6 text-right' :
                    watermarkPosition === 'top-left' ? 'top-6 left-6 text-left' :
                    watermarkPosition === 'center' ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-base sm:text-xl' :
                    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] text-base sm:text-2xl whitespace-nowrap'
                  }`}
                  style={{
                    color: `rgba(255, 255, 255, ${Math.max(opacity / 100, 0.25)})`,
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  <div 
                    className="px-3.5 py-1.5 rounded-lg border inline-block font-mono tracking-wider font-semibold backdrop-blur-md"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.7)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: `rgba(255, 255, 255, ${Math.max(opacity / 100, 0.25)})`,
                      textShadow: '0 2px 4px rgba(0,0,0,0.9)'
                    }}
                  >
                    {watermarkText}
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
