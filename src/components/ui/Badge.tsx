import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, borderRadius, spacing, typography } from '../../theme';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline' | 'dark';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  dot = false,
  style,
}) => {
  return (
    <View style={[styles.base, variantStyles[variant], sizeStyles[size], style]}>
      {dot && <View style={[styles.dot, dotColor[variant]]} />}
      <Text style={[styles.label, labelColor[variant], size === 'sm' && styles.labelSm]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  } as ViewStyle,

  dot: {
    width: 6,
    height: 6,
    borderRadius: borderRadius.full,
    marginRight: spacing[1],
  } as ViewStyle,

  label: {
    ...typography.label,
    fontWeight: '600',
  } as TextStyle,

  labelSm: {
    ...typography.caption,
    fontWeight: '600',
  } as TextStyle,
});

const variantStyles = StyleSheet.create({
  primary: { backgroundColor: '#FF3A1A' } as ViewStyle,
  secondary: { backgroundColor: colors.secondary } as ViewStyle,
  success: { backgroundColor: '#DCFCE7' } as ViewStyle,
  warning: { backgroundColor: '#FEF9C3' } as ViewStyle,
  error: { backgroundColor: '#FEE2E2' } as ViewStyle,
  info: { backgroundColor: '#DBEAFE' } as ViewStyle,
  outline: { backgroundColor: colors.transparent, borderWidth: 1.5, borderColor: colors.border } as ViewStyle,
  dark: { backgroundColor: colors.secondaryLight } as ViewStyle,
});

const sizeStyles = StyleSheet.create({
  sm: { paddingHorizontal: spacing[2], paddingVertical: 2 } as ViewStyle,
  md: { paddingHorizontal: spacing[3], paddingVertical: spacing[1] } as ViewStyle,
});

const labelColor = StyleSheet.create({
  primary: { color: colors.white } as TextStyle,
  secondary: { color: colors.white } as TextStyle,
  success: { color: '#15803D' } as TextStyle,
  warning: { color: '#92400E' } as TextStyle,
  error: { color: '#B91C1C' } as TextStyle,
  info: { color: '#1D4ED8' } as TextStyle,
  outline: { color: colors.textPrimary } as TextStyle,
  dark: { color: colors.white } as TextStyle,
});

const dotColor = StyleSheet.create({
  primary: { backgroundColor: 'rgba(255,255,255,0.7)' } as ViewStyle,
  secondary: { backgroundColor: 'rgba(255,255,255,0.7)' } as ViewStyle,
  success: { backgroundColor: '#16A34A' } as ViewStyle,
  warning: { backgroundColor: '#D97706' } as ViewStyle,
  error: { backgroundColor: '#DC2626' } as ViewStyle,
  info: { backgroundColor: '#2563EB' } as ViewStyle,
  outline: { backgroundColor: colors.textSecondary } as ViewStyle,
  dark: { backgroundColor: 'rgba(255,255,255,0.7)' } as ViewStyle,
});

export default Badge;
