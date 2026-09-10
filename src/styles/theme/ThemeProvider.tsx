import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode, ThemeContextType } from './themeTypes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('neo_theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('neo_theme', theme);
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
      root.classList.add('light', 'light-theme');
      root.classList.remove('dark', 'dark-theme');
      body.classList.add('light', 'light-theme');
      body.classList.remove('dark', 'dark-theme');
    } else {
      root.classList.add('dark', 'dark-theme');
      root.classList.remove('light', 'light-theme');
      body.classList.add('dark', 'dark-theme');
      body.classList.remove('light', 'light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isDark: theme === 'dark',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
