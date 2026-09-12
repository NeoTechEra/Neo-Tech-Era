import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { PageView } from '../types';
import { ROUTES_CONFIG } from '../utils/seoRouter';

interface BreadcrumbProps {
  currentView: PageView;
  onNavigateHome: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentView, onNavigateHome }) => {
  const currentRoute = ROUTES_CONFIG[currentView];

  return (
    <nav 
      aria-label="Breadcrumb"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 mb-6 shadow-sm"
    >
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onNavigateHome();
        }}
        className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
        <span>Home</span>
      </a>

      <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />

      <a
        href="/#products"
        onClick={(e) => {
          e.preventDefault();
          onNavigateHome();
          setTimeout(() => {
            document.getElementById('products-overview')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        className="hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors"
      >
        Products
      </a>

      <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />

      <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-none">
        {currentRoute?.breadcrumbName || 'Product Details'}
      </span>
    </nav>
  );
};
