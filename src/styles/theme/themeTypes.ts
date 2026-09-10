export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  surfacePrimary: string;
  surfaceSecondary: string;
  surfaceElevated: string;
  surfaceInput: string;
  
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textImportant: string;
  
  border: string;
  borderSubtle: string;
  
  primary: string;
  primaryHover: string;
  cyan: string;
  success: string;
  purple: string;
  warning: string;
  danger: string;
}

export interface NavigationColors {
  background: string;
  border: string;
  textNormal: string;
  textActive: string;
  accentActive: string;
}

export interface ButtonColors {
  primaryBg: string;
  primaryText: string;
  primaryHover: string;
  secondaryBg: string;
  secondaryBorder: string;
  secondaryText: string;
}

export interface BadgeColors {
  blueBg: string;
  blueBorder: string;
  blueText: string;
  greenBg: string;
  greenBorder: string;
  greenText: string;
  purpleBg: string;
  purpleBorder: string;
  purpleText: string;
}

export interface ThemeConfig {
  mode: ThemeMode;
  colors: ThemeColors;
  navigation: NavigationColors;
  buttons: ButtonColors;
  badges: BadgeColors;
}

export interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
}
