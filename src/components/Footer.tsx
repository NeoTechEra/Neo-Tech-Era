import React from 'react';
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowUp,
  Mail,
  Sun,
  Moon,
  Globe,
  Download
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';
import { useLanguage } from '../i18n';
import { NeoTechLogo } from './NeoTechLogo';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
  onOpenContact?: () => void;
  onOpenBrandAsset?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, onOpenBrandAsset, theme = 'light', onToggleTheme }) => {
  const { language, switchLanguage, isRTL, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: PageView, targetId?: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-start">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <NeoTechLogo className="w-10 h-10" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-display">
                {t.common.brandName}
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {t.footer.brandDescription}
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              {t.footer.taglineBullets}
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {t.footer.languageLabel}:
              </span>
              <div className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 p-0.5 text-xs font-semibold">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-2.5 py-0.5 rounded-full transition-all text-xs font-mono font-bold ${
                    language === 'en'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <span className="text-slate-700 px-1 select-none">|</span>
                <button
                  onClick={() => switchLanguage('ar')}
                  className={`px-2.5 py-0.5 rounded-full transition-all text-xs font-display font-bold ${
                    language === 'ar'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="التبديل إلى العربية"
                >
                  العربية
                </button>
              </div>
            </div>

            {/* Brand Assets / Transparent Logo Download Trigger */}
            {onOpenBrandAsset && (
              <div className="pt-2">
                <button
                  onClick={onOpenBrandAsset}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 text-xs font-semibold transition-all active:scale-95 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{language === 'ar' ? 'تحميل الشعار مفرغ (بدون خلفية)' : 'Download Logo (Without Background)'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-start">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={getViewCanonicalPath('home', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a 
                  href={`/${language}/#products`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home', 'products-overview');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('nabaa-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('nabaa-detail');
                  }}
                  className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  {t.nav.nabaa} ({t.finalCta.flagshipBadge})
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('about', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('about');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('contact', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="md:col-span-4 space-y-3 text-start">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              {t.footer.productsHeading}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={getViewCanonicalPath('nabaa-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('nabaa-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between w-full text-start group"
                >
                  <span className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    The Nabaa Tankers
                  </span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                    {t.finalCta.flagshipBadge}
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('pix-shield-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('pix-shield-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Pix Shield
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('price-pulser-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('price-pulser-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Price Post Pulser
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('ecommerce-builder-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('ecommerce-builder-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                  E-Commerce Post Builder
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Neo Tech Era. {t.footer.allRightsReserved}</p>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenContact}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              techeraneo@gmail.com
            </button>
            {onToggleTheme && (
              <button
                id="footer-theme-toggle-btn"
                onClick={onToggleTheme}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-2 text-xs"
                title={theme === 'light' ? t.nav.switchDark : t.nav.switchLight}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.nav.darkMode}</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>{t.nav.lightMode}</span>
                  </>
                )}
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-1"
              aria-label={isRTL ? 'العودة للأعلى' : 'Back to top'}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
