import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, borderRadius, typography, spacing, shadows } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  glow = false,
  disabled,
  style,
  ...props
}) => {
  const isDisabled = disabled || loading;
  const sizeStyle = sizeStyles[size];

  const inner = (
    <>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? colors.white : colors.primary}
        />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={[styles.label, labelVariant[variant], labelSize[size]]}>{label}</Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </View>
      )}
    </>
  );

  if (variant === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={isDisabled}
        style={[
          styles.base,
          sizeStyle,
          fullWidth && styles.fullWidth,
          isDisabled && styles.disabled,
          glow && shadows.glow,
          style as ViewStyle,
        ]}
        {...props}
      >
        <LinearGradient
          colors={['#FF5C3F', '#FF3A1A', '#E0300F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.gradient, sizeStyle]}
        >
          {inner}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      style={[
        styles.base,
        variantStyles[variant],
        sizeStyle,
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style as ViewStyle,
      ]}
      {...props}
    >
      {inner}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.pill,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  } as ViewStyle,

  gradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.pill,
  } as ViewStyle,

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  leftIcon: { marginRight: spacing[2] } as ViewStyle,
  rightIcon: { marginLeft: spacing[2] } as ViewStyle,

  fullWidth: { alignSelf: 'stretch' } as ViewStyle,
  disabled: { opacity: 0.45 } as ViewStyle,

  label: {
    ...typography.button,
    color: colors.white,
  } as TextStyle,
});

const variantStyles = StyleSheet.create({
  secondary: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  } as ViewStyle,
  outline: {
    backgroundColor: colors.transparent,
    borderWidth: 2,
    borderColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  ghost: {
    backgroundColor: colors.transparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
});

const sizeStyles = StyleSheet.create({
  sm: { paddingHorizontal: spacing[4], paddingVertical: spacing[2], minHeight: 36 } as ViewStyle,
  md: { paddingHorizontal: spacing[6], paddingVertical: spacing[3], minHeight: 48 } as ViewStyle,
  lg: { paddingHorizontal: spacing[7], paddingVertical: spacing[4], minHeight: 56 } as ViewStyle,
});

const labelVariant = StyleSheet.create({
  primary: { color: colors.white } as TextStyle,
  secondary: { color: colors.white } as TextStyle,
  outline: { color: colors.primary } as TextStyle,
  ghost: { color: colors.primary } as TextStyle,
});

const labelSize = StyleSheet.create({
  sm: { ...typography.buttonSm } as TextStyle,
  md: { ...typography.button } as TextStyle,
  lg: { ...typography.button, fontSize: 16 } as TextStyle,
});

export default Button;
