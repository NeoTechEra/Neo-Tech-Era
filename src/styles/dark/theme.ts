import { ThemeConfig } from '../theme/themeTypes';
import { darkColors } from './colors';

/**
 * DARK MODE THEME CONFIGURATION (NEW ARCHITECTURE)
 * Rebuilt according to user requirements for premium SaaS visual appeal.
 */
export const darkTheme: ThemeConfig = {
  mode: 'dark',
  colors: darkColors,
  navigation: {
    background: '#070B14',
    border: '#1B293B',
    textNormal: '#AAB7C9',
    textActive: '#F5F9FF',
    accentActive: '#19B9E8',
  },
  buttons: {
    primaryBg: '#19B9E8',
    primaryText: '#061018',
    primaryHover: '#29C7F4',
    secondaryBg: 'transparent',
    secondaryBorder: '#263449',
    secondaryText: '#F5F9FF',
  },
  badges: {
    blueBg: 'rgba(25, 185, 232, 0.12)',
    blueBorder: 'rgba(25, 185, 232, 0.30)',
    blueText: '#42D8EA',
    greenBg: 'rgba(32, 201, 151, 0.12)',
    greenBorder: 'rgba(32, 201, 151, 0.30)',
    greenText: '#20C997',
    purpleBg: 'rgba(155, 124, 255, 0.12)',
    purpleBorder: 'rgba(155, 124, 255, 0.30)',
    purpleText: '#9B7CFF',
  },
};
