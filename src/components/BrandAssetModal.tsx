import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, FileImage, ShieldCheck } from 'lucide-react';
import { NeoTechLogo } from './NeoTechLogo';
import { useLanguage } from '../i18n';

interface BrandAssetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandAssetModal: React.FC<BrandAssetModalProps> = ({ isOpen, onClose }) => {
  const { language, isRTL } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [activeBg, setActiveBg] = useState<'dark' | 'light' | 'checkered'>('checkered');

  if (!isOpen) return null;

  const handleCopySvg = async () => {
    try {
      const res = await fetch('/neo-tech-logo.svg');
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy SVG', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#071324] border border-slate-200 dark:border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>{language === 'ar' ? 'أصول الهوية البصرية' : 'Official Brand Asset'}</span>
          </span>
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'شفاف بدون خلفية' : 'Transparent (No Background)'}</span>
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
          {language === 'ar' ? 'شعار Neo Tech Era المفرغ' : 'Neo Tech Era Suite Logo (Transparent)'}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {language === 'ar' 
            ? 'نسخة فائقة الدقة مفرغة من الخلفية بصيغتي PNG و SVG مناسبة لجميع الاستخدامات والتصاميم.'
            : 'Isolated high-resolution asset without background. Ready for dark & light UI, printing, and branding.'}
        </p>

        {/* Preview Canvas with Background Toggle */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600 dark:text-slate-400 font-medium">
              {language === 'ar' ? 'معاينة الخلفية الشفافة:' : 'Transparency Preview Canvas:'}
            </span>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-lg">
              <button
                onClick={() => setActiveBg('checkered')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                  activeBg === 'checkered'
                    ? 'bg-white dark:bg-cyan-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {language === 'ar' ? 'شبكة الشفافية' : 'Checkered'}
              </button>
              <button
                onClick={() => setActiveBg('dark')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                  activeBg === 'dark'
                    ? 'bg-white dark:bg-cyan-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {language === 'ar' ? 'داكن' : 'Dark'}
              </button>
              <button
                onClick={() => setActiveBg('light')}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                  activeBg === 'light'
                    ? 'bg-white dark:bg-cyan-500 text-slate-900 dark:text-slate-950 shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {language === 'ar' ? 'فاتح' : 'Light'}
              </button>
            </div>
          </div>

          <div
            className={`w-full h-56 rounded-2xl flex items-center justify-center p-6 border transition-all ${
              activeBg === 'checkered'
                ? 'border-slate-300 dark:border-slate-700 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%),linear-gradient(-45deg,#e2e8f0_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e2e8f0_75%),linear-gradient(-45deg,transparent_75%,#e2e8f0_75%)] dark:bg-[linear-gradient(45deg,#0f172a_25%,transparent_25%),linear-gradient(-45deg,#0f172a_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#0f172a_75%),linear-gradient(-45deg,transparent_75%,#0f172a_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]'
                : activeBg === 'dark'
                ? 'bg-slate-950 border-slate-800'
                : 'bg-white border-slate-200'
            }`}
          >
            <NeoTechLogo className="w-36 h-36 drop-shadow-2xl transition-transform hover:scale-105" />
          </div>
        </div>

        {/* Download Buttons Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* PNG High Res */}
          <a
            href="/neo-tech-logo-1024.png"
            download="neo-tech-era-logo-1024x1024-transparent.png"
            className="p-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 shadow-lg shadow-cyan-600/20 transition-all active:scale-95"
          >
            <div className="flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              <span>PNG 1024×1024</span>
            </div>
            <span className="text-[10px] text-cyan-100 font-normal">
              {language === 'ar' ? 'أعلى دقة مفرغ' : 'Ultra HD Transparent'}
            </span>
          </a>

          {/* PNG Standard */}
          <a
            href="/neo-tech-logo.png"
            download="neo-tech-era-logo-512x512-transparent.png"
            className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              <span>PNG 512×512</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
              {language === 'ar' ? 'دقة قياسية مفرغ' : 'Standard Transparent'}
            </span>
          </a>

          {/* Vector SVG */}
          <a
            href="/neo-tech-logo.svg"
            download="neo-tech-era-logo-vector.svg"
            className="p-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-1.5">
              <FileImage className="w-4 h-4" />
              <span>SVG Vector</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
              {language === 'ar' ? 'فيكتور غير محدود الدقة' : 'Infinite Scalability'}
            </span>
          </a>
        </div>

        {/* Copy SVG Code row */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            {language === 'ar' ? 'هل تريد كود الفيكتور مباشرة؟' : 'Need raw vector SVG code for codebases?'}
          </span>
          <button
            onClick={handleCopySvg}
            className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium flex items-center gap-1.5 transition-colors active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">{language === 'ar' ? 'تم النسخ!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-cyan-500" />
                <span>{language === 'ar' ? 'نسخ كود SVG' : 'Copy SVG'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
