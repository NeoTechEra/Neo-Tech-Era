/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { 
  matchPathToRoute,
  matchPathToView, 
  getViewCanonicalPath, 
  updateDocumentSEO 
} from './utils/seoRouter';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsOverview } from './components/ProductsOverview';
import { FeaturedNabaa } from './components/FeaturedNabaa';
import { OtherProductsSection } from './components/OtherProductsSection';
import { CompanySection } from './components/CompanySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PixShieldDetail } from './components/PixShieldDetail';
import { PricePulserDetail } from './components/PricePulserDetail';
import { EcommerceBuilderDetail } from './components/EcommerceBuilderDetail';
import { NabaaDetail } from './components/NabaaDetail';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ContactModal } from './components/ContactModal';
import { ThemeProvider, useTheme } from './styles/theme/ThemeProvider';
import { LanguageProvider, useLanguage } from './i18n';

function AppContent() {
  const { language, isRTL, t } = useLanguage();

  // Initialize view based on current browser URL path (supports deep-linking)
  const [currentView, setCurrentView] = useState<PageView>(() => {
    if (typeof window !== 'undefined') {
      return matchPathToView(window.location.pathname);
    }
    return 'home';
  });
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactProduct, setContactProduct] = useState<string>('The Nabaa Tankers (Flagship)');
  const { theme, toggleTheme } = useTheme();

  // Redirect root domain "/" or "" to default language prefix "/en" (or "/ar" if preferred)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname === '/' || pathname === '') {
        const defaultPath = language === 'ar' ? '/ar' : '/en';
        window.history.replaceState({ view: 'home' }, '', defaultPath + window.location.search + window.location.hash);
      }
    }
  }, [language]);

  // Listen for browser Back & Forward button events (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const route = matchPathToRoute(window.location.pathname);
      setCurrentView(route.view);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize dynamic SEO metadata, canonical link, hreflang, and Schema.org JSON-LD whenever view or language changes
  useEffect(() => {
    updateDocumentSEO(currentView, language);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, language]);

  // Navigate with browser history pushState so every product has a distinct SEO/AEO URL
  const handleNavigate = (view: PageView, pushHistory: boolean = true) => {
    setCurrentView(view);

    if (pushHistory && typeof window !== 'undefined') {
      const targetPath = getViewCanonicalPath(view, language);
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ view }, '', targetPath);
      }
    }
  };

  const handleOpenContact = (productName?: string) => {
    if (productName) {
      setContactProduct(productName);
    }
    setIsContactOpen(true);
  };

  const handleExploreProducts = () => {
    if (currentView !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        document.getElementById('products-overview')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('products-overview')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-slate-50 text-slate-900 light' : 'bg-slate-950 text-slate-100 dark'} flex flex-col font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-slate-950`}>
      
      {/* Sticky Global Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              onNavigate={handleNavigate}
              onExploreNabaa={() => handleNavigate('nabaa-detail')}
              onExploreProducts={handleExploreProducts}
            />

            {/* Products Overview Grid */}
            <ProductsOverview 
              onNavigate={handleNavigate}
              onSelectNabaa={() => handleNavigate('nabaa-detail')}
            />

            {/* The Nabaa Tankers: Concise Flagship Introduction */}
            <FeaturedNabaa 
              onExplorePlatform={() => handleNavigate('nabaa-detail')}
              onExploreFullPlatform={() => handleNavigate('nabaa-detail')}
              onNavigate={handleNavigate}
            />

            {/* Other Products Section */}
            <OtherProductsSection onNavigate={handleNavigate} />

            {/* Company Section: Built by Neo Tech Era */}
            <CompanySection onNavigate={handleNavigate} />

            {/* Final Call to Action */}
            <FinalCTA 
              onNavigate={handleNavigate}
              onExploreProducts={handleExploreProducts}
            />
          </>
        )}

        {/* Dedicated Flagship Detail Page */}
        {currentView === 'nabaa-detail' && (
          <NabaaDetail 
            onBack={() => handleNavigate('home')}
            onOpenContact={() => handleOpenContact('The Nabaa Tankers')}
          />
        )}

        {/* Dedicated Pix Shield Detail Page */}
        {currentView === 'pix-shield-detail' && (
          <PixShieldDetail 
            onBack={() => handleNavigate('home')}
            onOpenContact={() => handleOpenContact('Pix Shield')}
          />
        )}

        {/* Dedicated Price Post Pulser Detail Page */}
        {currentView === 'price-pulser-detail' && (
          <PricePulserDetail 
            onBack={() => handleNavigate('home')}
            onOpenContact={() => handleOpenContact('Price Post Pulser')}
          />
        )}

        {/* Dedicated E-Commerce Post Builder Detail Page */}
        {currentView === 'ecommerce-builder-detail' && (
          <EcommerceBuilderDetail 
            onBack={() => handleNavigate('home')}
            onOpenContact={() => handleOpenContact('E-Commerce Post Builder')}
          />
        )}

        {/* Dedicated About Us Page (SEO / AEO with Schema.org & canonical URL) */}
        {currentView === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenContact={() => handleOpenContact('About Us Inquiry')}
          />
        )}

        {/* Dedicated Contact Us Page (SEO / AEO with Schema.org & canonical URL) */}
        {currentView === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenContact={() => handleOpenContact()}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Contact & Product Demo Inquiry Modal */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultProduct={contactProduct}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
