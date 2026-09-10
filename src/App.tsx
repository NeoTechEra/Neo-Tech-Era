/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsOverview } from './components/ProductsOverview';
import { FeaturedNabaa } from './components/FeaturedNabaa';
import { NabaaPlatformOverview } from './components/NabaaPlatformOverview';
import { CustomerAppSection } from './components/CustomerAppSection';
import { DriverAppSection } from './components/DriverAppSection';
import { ConnectedOrderJourney } from './components/ConnectedOrderJourney';
import { WhyNabaaTankers } from './components/WhyNabaaTankers';
import { OtherProductsSection } from './components/OtherProductsSection';
import { CompanySection } from './components/CompanySection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { PixShieldDetail } from './components/PixShieldDetail';
import { PricePulserDetail } from './components/PricePulserDetail';
import { EcommerceBuilderDetail } from './components/EcommerceBuilderDetail';
import { NabaaDetail } from './components/NabaaDetail';
import { ContactModal } from './components/ContactModal';
import { ThemeProvider, useTheme } from './styles/theme/ThemeProvider';

function AppContent() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [contactProduct, setContactProduct] = useState<string>('The Nabaa Tankers (Flagship)');
  const { theme, toggleTheme } = useTheme();

  // Scroll to top upon view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
  };

  const handleOpenContact = (productName?: string) => {
    if (productName) {
      setContactProduct(productName);
    }
    setIsContactOpen(true);
  };

  const handleExploreProducts = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
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

            {/* The Nabaa Tankers: Flagship Showcase (Admin, Driver, Customer) */}
            <FeaturedNabaa 
              onExplorePlatform={() => handleNavigate('nabaa-detail')}
              onExploreFullPlatform={() => handleNavigate('nabaa-detail')}
              onNavigate={handleNavigate}
            />

            {/* Admin Web Dashboard Subsystems */}
            <NabaaPlatformOverview />

            {/* Customer Mobile App & Interactive Step-by-Step Order Simulator */}
            <CustomerAppSection />

            {/* Driver Mobile App & Interactive Driver Console */}
            <DriverAppSection />

            {/* Connected Order Journey: Cross-App Flow */}
            <ConnectedOrderJourney />

            {/* Why The Nabaa Tankers: 8 Feature Bento Cards */}
            <WhyNabaaTankers />

            {/* Concise Other Products Section with View All Details buttons */}
            <OtherProductsSection onNavigate={handleNavigate} />

            {/* Company Section: Built by Neo Tech Era */}
            <CompanySection />

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
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
