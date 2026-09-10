import { ThemeConfig } from '../theme/themeTypes';
import { lightColors } from './colors';

/**
 * LIGHT MODE THEME CONFIGURATION (LOCKED)
 * Approved light mode configuration - do not modify.
 */
export const lightTheme: ThemeConfig = {
  mode: 'light',
  colors: lightColors,
  navigation: {
    background: 'rgba(255, 255, 255, 0.90)',
    border: '#e2e8f0',
    textNormal: '#475569',
    textActive: '#0f172a',
    accentActive: '#0284c7',
  },
  buttons: {
    primaryBg: '#0284c7',
    primaryText: '#ffffff',
    primaryHover: '#0369a1',
    secondaryBg: 'transparent',
    secondaryBorder: '#cbd5e1',
    secondaryText: '#0f172a',
  },
  badges: {
    blueBg: '#f0f9ff',
    blueBorder: '#bae6fd',
    blueText: '#0369a1',
    greenBg: '#ecfdf5',
    greenBorder: '#a7f3d0',
    greenText: '#047857',
    purpleBg: '#faf5ff',
    purpleBorder: '#e9d5ff',
    purpleText: '#6d28d9',
  },
};
