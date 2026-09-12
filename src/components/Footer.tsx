import React from 'react';
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  ShoppingBag, 
  ArrowUp,
  Mail,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { PageView } from '../types';
import { getViewCanonicalPath } from '../utils/seoRouter';

interface FooterProps {
  onNavigate?: (view: PageView) => void;
  onOpenContact?: () => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact, theme = 'light', onToggleTheme }) => {
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
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="text-xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                    N
                  </span>
                </div>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight font-display">
                Neo Tech Era
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Neo Tech Era builds practical software, digital tools, and business solutions designed to simplify work and create better digital experiences.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500">
              Enterprise Water Logistics • Visual Security • Social Commerce
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={getViewCanonicalPath('home')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/#products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home', 'products-overview');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('nabaa-detail')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('nabaa-detail');
                  }}
                  className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                  The Nabaa (Flagship)
                </a>
              </li>
              <li>
                <a 
                  href="/#company"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home', 'company-section');
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Product Portfolio
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href={getViewCanonicalPath('nabaa-detail')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('nabaa-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center justify-between w-full text-left group"
                >
                  <span className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    The Nabaa Tankers
                  </span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                    Flagship
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('pix-shield-detail')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('pix-shield-detail');
                  }}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  Pix Shield
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('price-pulser-detail')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('price-pulser-detail');
                  }}
                  className="hover:text-purple-400 transition-colors flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 text-purple-400" />
                  Price Post Pulser
                </a>
              </li>
              <li>
                <a 
                  href={getViewCanonicalPath('ecommerce-builder-detail')}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('ecommerce-builder-detail');
                  }}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  E-Commerce Post Builder
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Neo Tech Era. All rights reserved.</p>

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
                title={theme === 'light' ? 'Switch to Dark mode' : 'Switch to Light mode'}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-600" />
                    <span>Dark mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light mode</span>
                  </>
                )}
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800 flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
