import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Menu, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowUpRight,
  Sun,
  Moon,
  Globe
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';
import { useLanguage } from '../i18n';

interface NavbarProps {
  currentView: PageView;
  onNavigate?: (view: PageView) => void;
  onOpenContact?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  onNavigate, 
  onOpenContact,
  theme = 'light',
  onToggleTheme 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const { language, switchLanguage, isRTL, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView, anchorId?: string) => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    if (view === currentView && anchorId) {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (onNavigate) {
        onNavigate(view);
      }
      if (anchorId) {
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-xl dark:shadow-slate-950/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          id="nav-logo-btn"
          href={getViewCanonicalPath('home', language)}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 group text-start focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                N
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full blur-[2px] animate-pulse"></div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
                {t.common.brandName}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-mono font-medium">
              {t.common.brandTagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 shadow-inner">
          <a
            id="nav-link-home"
            href={getViewCanonicalPath('home', language)}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              currentView === 'home'
                ? 'bg-cyan-100 dark:bg-blue-600/20 text-cyan-900 dark:text-cyan-300 shadow-sm border border-cyan-300 dark:border-cyan-500/30 font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50'
            }`}
          >
            {t.nav.home}
          </a>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              id="nav-link-products"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50 flex items-center gap-1.5 transition-all"
            >
              {t.nav.products}
              <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''} ${productsDropdownOpen ? (isRTL ? '-rotate-90 text-cyan-600 dark:text-cyan-400' : 'rotate-90 text-cyan-600 dark:text-cyan-400') : ''}`} />
            </button>

            {productsDropdownOpen && (
              <div 
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className={`absolute top-full mt-2 w-72 bg-white dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in zoom-in-95 duration-150 ${
                  isRTL ? 'right-0' : 'left-0'
                }`}
              >
                <div className="px-3 py-2 text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                  {t.productsOverview.badge}
                </div>
                
                {/* The Nabaa - Flagship Item */}
                <a
                  id="dropdown-item-nabaa"
                  href={getViewCanonicalPath('nabaa-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('nabaa-detail');
                  }}
                  className="w-full text-start p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 group-hover:bg-cyan-500/30">
                    <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-200">The Nabaa Tankers</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-400/20 text-cyan-800 dark:text-cyan-300 uppercase tracking-tight">
                        {t.finalCta.flagshipBadge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.nav.nabaaTagline}</p>
                  </div>
                </a>

                <a
                  id="dropdown-item-pixshield"
                  href={getViewCanonicalPath('pix-shield-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('pix-shield-detail');
                  }}
                  className="w-full text-start p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white block">Pix Shield</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.nav.pixShieldTagline}</p>
                  </div>
                </a>

                <a
                  id="dropdown-item-pricepulser"
                  href={getViewCanonicalPath('price-pulser-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('price-pulser-detail');
                  }}
                  className="w-full text-start p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500/20">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white block">Price Post Pulser</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.nav.pricePulserTagline}</p>
                  </div>
                </a>

                <a
                  id="dropdown-item-ecommerce"
                  href={getViewCanonicalPath('ecommerce-builder-detail', language)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('ecommerce-builder-detail');
                  }}
                  className="w-full text-start p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all flex items-start gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500/20">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white block">E-Commerce Post Builder</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.nav.ecommerceTagline}</p>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Direct Flagship Link */}
          <a
            id="nav-link-nabaa"
            href={getViewCanonicalPath('nabaa-detail', language)}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('nabaa-detail');
            }}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${
              currentView === 'nabaa-detail'
                ? 'bg-cyan-100 dark:bg-cyan-500/25 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/40 shadow-sm'
                : 'text-cyan-700 dark:text-cyan-400 hover:text-cyan-900 dark:hover:text-cyan-200 hover:bg-cyan-50 dark:hover:bg-cyan-950/40'
            }`}
          >
            <Droplets className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            {t.nav.nabaa}
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
          </a>

          <a
            id="nav-link-about"
            href={`/${language}/about`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', 'company-section');
            }}
            className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-all"
          >
            {t.nav.about}
          </a>

          <button
            id="nav-link-contact"
            onClick={onOpenContact}
            className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/50 transition-all"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Language Switcher, Action Button, Theme Toggle & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">

          {/* Dedicated Language Selector EN | العربية */}
          <div 
            id="nav-language-switcher"
            className="inline-flex items-center rounded-full bg-slate-100/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 p-0.5 text-xs font-semibold shadow-sm"
            aria-label="Language Selector"
          >
            <button
              id="lang-switch-en"
              type="button"
              onClick={() => switchLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all text-xs font-mono font-bold ${
                language === 'en'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
              title="English"
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-slate-300 dark:text-slate-700 text-[11px] px-0.5 select-none font-normal">|</span>
            <button
              id="lang-switch-ar"
              type="button"
              onClick={() => switchLanguage('ar')}
              className={`px-2.5 py-1 rounded-full transition-all text-xs font-semibold font-display ${
                language === 'ar'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
              title="العربية"
              aria-label="التبديل إلى اللغة العربية"
            >
              العربية
            </button>
          </div>

          {/* Theme Switcher Button */}
          {onToggleTheme && (
            <button
              id="navbar-theme-toggle-btn"
              onClick={onToggleTheme}
              className={`p-2.5 rounded-full border transition-all flex items-center justify-center group ${
                theme === 'light'
                  ? 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-sm'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-amber-300 border-slate-700/80 shadow-md shadow-cyan-950/20'
              }`}
              title={theme === 'light' ? t.nav.switchDark : t.nav.switchLight}
              aria-label={theme === 'light' ? t.nav.switchDark : t.nav.switchLight}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700 group-hover:text-slate-950 group-hover:-rotate-12 transition-transform" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          )}

          <button
            id="nav-explore-cta-btn"
            onClick={() => handleNavClick('home', 'products-overview')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all duration-200 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            {t.nav.exploreCta}
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label={t.nav.toggleMenu}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden bg-white/98 dark:bg-slate-950/98 border-b border-slate-200 dark:border-slate-800 px-5 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-1 gap-2 pt-2">
            
            {/* Mobile Language Switcher */}
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between border border-slate-200 dark:border-transparent">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                {t.footer.languageLabel}
              </span>
              <div className="inline-flex items-center rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-0.5 text-xs font-semibold">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-mono font-bold ${
                    language === 'en'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  EN
                </button>
                <span className="text-slate-300 dark:text-slate-700 px-0.5 select-none">|</span>
                <button
                  onClick={() => switchLanguage('ar')}
                  className={`px-3 py-1 rounded-full transition-all text-xs font-semibold ${
                    language === 'ar'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>

            {onToggleTheme && (
              <button
                id="mobile-theme-toggle-btn"
                onClick={onToggleTheme}
                className="text-start px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center border border-slate-200 dark:border-transparent"
              >
                <span className="flex items-center gap-2.5">
                  {theme === 'light' ? (
                    <Moon className="w-4 h-4 text-slate-700" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-400" />
                  )}
                  <span>{t.nav.appearance}</span>
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300">
                  {theme === 'light' ? t.nav.lightMode : t.nav.darkMode}
                </span>
              </button>
            )}

            <a
              href={getViewCanonicalPath('home', language)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="text-start px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-transparent block"
            >
              {t.nav.home}
            </a>
            <a
              href={`/${language}/#products`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', 'products-overview');
              }}
              className="text-start px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 flex justify-between items-center border border-slate-200 dark:border-transparent"
            >
              <span>{t.nav.products}</span>
              <ChevronRight className={`w-4 h-4 text-slate-400 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            <a
              href={getViewCanonicalPath('nabaa-detail', language)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('nabaa-detail');
              }}
              className="text-start px-4 py-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/30 text-cyan-800 dark:text-cyan-300 font-semibold flex justify-between items-center"
            >
              <span className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                The Nabaa Tankers ({t.finalCta.flagshipBadge})
              </span>
              <span className="text-xs bg-cyan-100 dark:bg-cyan-500/20 px-2 py-0.5 rounded text-cyan-800 dark:text-cyan-300 font-bold">
                {t.common.learnMore}
              </span>
            </a>
            <a
              href={getViewCanonicalPath('pix-shield-detail', language)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('pix-shield-detail');
              }}
              className="text-start px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2 text-sm ps-6"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Pix Shield
            </a>
            <a
              href={getViewCanonicalPath('price-pulser-detail', language)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('price-pulser-detail');
              }}
              className="text-start px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2 text-sm ps-6"
            >
              <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              Price Post Pulser
            </a>
            <a
              href={getViewCanonicalPath('ecommerce-builder-detail', language)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('ecommerce-builder-detail');
              }}
              className="text-start px-4 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 flex items-center gap-2 text-sm ps-6"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              E-Commerce Post Builder
            </a>
            <a
              href={`/${language}/about`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', 'company-section');
              }}
              className="text-start px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-transparent block"
            >
              {t.nav.about}
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact?.(); }}
              className="text-start px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-transparent w-full"
            >
              {t.nav.contact}
            </button>
          </div>

          <a
            href={`/${language}/#products`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', 'products-overview');
            }}
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
          >
            <span>{t.nav.exploreCta}</span>
            <ArrowUpRight className={`w-4 h-4 ${isRTL ? 'rotate-[-90deg]' : ''}`} />
          </a>
        </div>
      )}
    </header>
  );
};
