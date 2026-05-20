import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
  Animated,
} from 'react-native';
import { colors, borderRadius, spacing, typography } from '../../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  dark?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  containerStyle,
  style,
  secureTextEntry,
  dark = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecure, setIsSecure] = useState(secureTextEntry ?? false);
  const borderAnim = useRef(new Animated.Value(0)).current;

  const hasError = Boolean(error);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(borderAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    Animated.timing(borderAnim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: false,
    }).start();
  };

  const borderColor = borderAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      hasError ? colors.error : dark ? colors.border : '#D4D4D8',
      hasError ? colors.error : colors.primary,
    ],
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, dark && styles.labelDark]}>{label}</Text>
      )}

      <Animated.View
        style={[
          styles.wrapper,
          dark && styles.wrapperDark,
          { borderColor },
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            dark && styles.inputDark,
            leftIcon ? styles.inputWithLeft : null,
            (rightIcon || secureTextEntry) ? styles.inputWithRight : null,
            style as TextStyle,
          ]}
          placeholderTextColor={dark ? '#6B7280' : colors.textSecondary}
          secureTextEntry={isSecure}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setIsSecure(!isSecure)}
            style={styles.rightIcon}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.toggleText}>{isSecure ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        ) : rightIcon ? (
          <View style={styles.rightIcon}>{rightIcon}</View>
        ) : null}
      </Animated.View>

      {hasError && <Text style={styles.error}>{error}</Text>}
      {hint && !hasError && <Text style={styles.hint}>{hint}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing[4],
  } as ViewStyle,

  label: {
    ...typography.label,
    color: colors.textPrimary,
    marginBottom: spacing[2],
  } as TextStyle,

  labelDark: {
    color: '#E4E4E7',
  } as TextStyle,

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.DEFAULT,
    borderWidth: 1.5,
    backgroundColor: colors.white,
    minHeight: 52,
  } as ViewStyle,

  wrapperDark: {
    backgroundColor: '#18181B',
  } as ViewStyle,

  input: {
    flex: 1,
    ...typography.bodyMd,
    color: colors.textPrimary,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  } as TextStyle,

  inputDark: {
    color: colors.white,
  } as TextStyle,

  inputWithLeft: {
    paddingLeft: spacing[2],
  } as TextStyle,

  inputWithRight: {
    paddingRight: spacing[2],
  } as TextStyle,

  leftIcon: {
    paddingLeft: spacing[4],
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  rightIcon: {
    paddingRight: spacing[4],
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  toggleText: {
    ...typography.label,
    color: colors.primary,
  } as TextStyle,

  error: {
    ...typography.caption,
    color: colors.error,
    marginTop: spacing[1],
  } as TextStyle,

  hint: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing[1],
  } as TextStyle,
});

export default Input;
