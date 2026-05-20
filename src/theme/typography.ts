import { TextStyle } from 'react-native';

export const fontFamily = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
  extraBold: 'Inter-ExtraBold',
} as const;

export const fontSize = {
  xs: 11,
  sm: 13,
  base: 15,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
  '6xl': 48,
} as const;

export const typography = {
  displayLg: {
    fontFamily: fontFamily.extraBold,
    fontSize: fontSize['5xl'],
    lineHeight: fontSize['5xl'] * 1.1,
    letterSpacing: -1,
  } as TextStyle,

  displayMd: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['4xl'],
    lineHeight: fontSize['4xl'] * 1.15,
    letterSpacing: -0.5,
  } as TextStyle,

  h1: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['3xl'],
    lineHeight: fontSize['3xl'] * 1.2,
  } as TextStyle,

  h2: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize['2xl'],
    lineHeight: fontSize['2xl'] * 1.25,
  } as TextStyle,

  h3: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.xl,
    lineHeight: fontSize.xl * 1.3,
  } as TextStyle,

  h4: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.lg,
    lineHeight: fontSize.lg * 1.4,
  } as TextStyle,

  bodyLg: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    lineHeight: fontSize.md * 1.6,
  } as TextStyle,

  bodyMd: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.base,
    lineHeight: fontSize.base * 1.6,
  } as TextStyle,

  bodySm: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * 1.5,
  } as TextStyle,

  label: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.sm,
    lineHeight: fontSize.sm * 1.4,
  } as TextStyle,

  caption: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.xs,
    lineHeight: fontSize.xs * 1.5,
  } as TextStyle,

  button: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.base,
    letterSpacing: 0.2,
  } as TextStyle,

  buttonSm: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sm,
    letterSpacing: 0.2,
  } as TextStyle,
} as const;
