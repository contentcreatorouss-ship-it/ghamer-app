import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const screen = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmall: SCREEN_WIDTH < 375,
  isLarge: SCREEN_WIDTH >= 428,
};

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const normalize = (size: number): number => {
  const scale = SCREEN_WIDTH / 375;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

export const formatNumber = (n: number): string => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
};
