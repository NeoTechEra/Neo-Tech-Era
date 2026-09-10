import { ThemeColors } from '../theme/themeTypes';

/**
 * DARK MODE COLOR PALETTE (NEW ARCHITECTURE)
 * Rebuilt from scratch per design specifications.
 * Layered surfaces, controlled blue/cyan accents, strong contrast.
 */
export const darkColors: ThemeColors = {
  // Layered Surfaces
  background: '#070B14',          // PAGE BACKGROUND: #070B14
  surfacePrimary: '#0A101C',      // PRIMARY SECTION: #0A101C
  surfaceSecondary: '#111927',    // CARD: #111927
  surfaceElevated: '#151F2E',     // ELEVATED CARD: #151F2E
  surfaceInput: '#0C1523',        // INNER CARD / INPUT: #0C1523

  // Typography Hierarchy
  textPrimary: '#F5F9FF',         // PRIMARY TEXT: #F5F9FF
  textImportant: '#E8F0FA',       // H3 / Important text: #E8F0FA
  textSecondary: '#AAB7C9',       // SECONDARY TEXT / Body: #AAB7C9
  textMuted: '#718096',           // MUTED TEXT: #718096

  // Borders
  border: '#263449',              // BORDER: #263449
  borderSubtle: '#1B293B',        // SUBTLE BORDER: #1B293B

  // Brand Accents
  primary: '#19B9E8',             // PRIMARY BRAND: #19B9E8
  primaryHover: '#29C7F4',        // PRIMARY BRAND HOVER: #29C7F4
  cyan: '#42D8EA',                // CYAN HIGHLIGHT: #42D8EA
  success: '#20C997',             // SUCCESS: #20C997
  purple: '#9B7CFF',              // PURPLE: #9B7CFF
  warning: '#F5B942',             // WARNING: #F5B942
  danger: '#FF6B7A',              // ERROR: #FF6B7A
};

/**
 * Surface Layers constant for easy reference
 */
export const darkSurfaces = {
  page: '#070B14',
  primarySection: '#0A101C',
  secondarySection: '#0D1422',
  card: '#111927',
  elevatedCard: '#151F2E',
  innerCard: '#0C1523',
} as const;
