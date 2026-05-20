export const colors = {
  // Brand
  primary: '#FF3A1A',
  primaryLight: '#FF6B52',
  primaryDark: '#CC2E15',

  secondary: '#000000',
  secondaryLight: '#1A1A1A',

  tertiary: '#FFDC24',
  tertiaryLight: '#FFE85A',
  tertiaryDark: '#CCB01D',

  // Surfaces
  surface: '#D9D9D6',
  surfaceLight: '#F0F0EE',
  background: '#FFFFFF',

  // Text
  textPrimary: '#000000',
  textSecondary: '#949494',
  textDisabled: '#C4C4C4',
  textInverse: '#FFFFFF',

  // UI
  border: '#27272A',
  borderLight: '#E4E4E7',

  // Semantic
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Util
  overlay: 'rgba(0,0,0,0.6)',
  overlayLight: 'rgba(0,0,0,0.2)',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ColorKey = keyof typeof colors;
