export { colors } from './colors';
export type { ColorKey } from './colors';
export { spacing, borderRadius, shadows } from './spacing';
export { typography, fontFamily, fontSize } from './typography';

import { colors } from './colors';
import { spacing, borderRadius, shadows } from './spacing';
import { typography, fontFamily, fontSize } from './typography';

export const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
  fontFamily,
  fontSize,
} as const;

export default theme;
