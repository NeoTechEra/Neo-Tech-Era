import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { Language, TranslationDictionary } from './types';
import { enTranslations } from './en';
import { arTranslations } from './ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  switchLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
  t: TranslationDictionary;
  getLocalizedPath: (path: string, overrideLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'neo_tech_language_pref';

export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const pathname = window.location.pathname;
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    return 'ar';
  }
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'ar' || stored === 'en') {
    return stored;
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync with browser URL changes
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/ar/') || pathname === '/ar') {
        setLanguageState('ar');
      } else if (pathname.startsWith('/en/') || pathname === '/en') {
        setLanguageState('en');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update HTML lang and dir attributes whenever language changes
  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore localStorage errors
    }
  }, [language]);

  const switchLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);

    // Swap URL prefix while preserving exact route
    const currentPath = window.location.pathname;
    let newPath = `/${newLang}`;

    if (currentPath.startsWith('/en/')) {
      newPath = `/${newLang}/` + currentPath.slice(4);
    } else if (currentPath === '/en') {
      newPath = `/${newLang}`;
    } else if (currentPath.startsWith('/ar/')) {
      newPath = `/${newLang}/` + currentPath.slice(4);
    } else if (currentPath === '/ar') {
      newPath = `/${newLang}`;
    } else if (currentPath === '/' || currentPath === '') {
      newPath = `/${newLang}`;
    } else {
      // e.g. /products or /products/pix-shield
      const cleaned = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
      newPath = `/${newLang}/${cleaned}`;
    }

    const searchAndHash = window.location.search + window.location.hash;
    const finalUrl = newPath + searchAndHash;
    window.history.pushState({}, '', finalUrl);

    // Dispatch a popstate so listeners update
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const toggleLanguage = () => {
    switchLanguage(language === 'en' ? 'ar' : 'en');
  };

  const getLocalizedPath = (path: string, overrideLang?: Language): string => {
    const lang = overrideLang || language;
    let clean = path;
    if (clean.startsWith('/en/')) clean = clean.slice(3);
    else if (clean === '/en') clean = '';
    else if (clean.startsWith('/ar/')) clean = clean.slice(3);
    else if (clean === '/ar') clean = '';
    else if (clean.startsWith('/')) clean = clean;
    else clean = '/' + clean;

    if (clean === '/' || clean === '') {
      return `/${lang}`;
    }
    return `/${lang}${clean.startsWith('/') ? clean : '/' + clean}`;
  };

  const t = useMemo(() => {
    return language === 'ar' ? arTranslations : enTranslations;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
      switchLanguage,
      toggleLanguage,
      isRTL: language === 'ar',
      dir: (language === 'ar' ? 'rtl' : 'ltr') as 'ltr' | 'rtl',
      t,
      getLocalizedPath
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
