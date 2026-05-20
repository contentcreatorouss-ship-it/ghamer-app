import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, borderRadius, spacing, shadows } from '../../theme';

type CardVariant = 'default' | 'elevated' | 'outlined' | 'filled' | 'dark' | 'gradient';

interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: TouchableOpacityProps['onPress'];
  padding?: number;
  gradientColors?: string[];
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  children,
  style,
  onPress,
  padding = spacing[4],
  gradientColors,
}) => {
  const baseStyle = [styles.base, variantStyles[variant], { padding }, style];

  if (variant === 'gradient') {
    const grad = gradientColors ?? ['#FF5C3F', '#FF3A1A', '#1A0A00'];
    const content = (
      <LinearGradient
        colors={grad}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.base, { padding }, style]}
      >
        {children}
      </LinearGradient>
    );
    if (onPress) {
      return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.gradientWrapper}>
          {content}
        </TouchableOpacity>
      );
    }
    return content;
  }

  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.88} onPress={onPress} style={baseStyle}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={baseStyle}>{children}</View>;
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.DEFAULT,
    overflow: 'hidden',
  } as ViewStyle,

  gradientWrapper: {
    borderRadius: borderRadius.DEFAULT,
    overflow: 'hidden',
  } as ViewStyle,
});

const variantStyles = StyleSheet.create({
  default: {
    backgroundColor: colors.white,
    ...shadows.sm,
  } as ViewStyle,

  elevated: {
    backgroundColor: colors.white,
    ...shadows.md,
  } as ViewStyle,

  outlined: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  } as ViewStyle,

  filled: {
    backgroundColor: colors.surfaceLight,
  } as ViewStyle,

  dark: {
    backgroundColor: colors.secondaryLight,
  } as ViewStyle,

  gradient: {} as ViewStyle,
});

export default Card;
