import React, { useEffect, useRef } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Animated,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing, typography } from '../../theme';

interface LoadingProps {
  message?: string;
  fullscreen?: boolean;
  dark?: boolean;
  size?: 'small' | 'large';
}

export const Loading: React.FC<LoadingProps> = ({
  message,
  fullscreen = false,
  dark = false,
  size = 'large',
}) => {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 0.6, duration: 700, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ]),
    ).start();
  }, [pulse]);

  return (
    <View
      style={[
        styles.container,
        fullscreen && styles.fullscreen,
        dark && styles.dark,
      ]}
    >
      <ActivityIndicator size={size} color={colors.primary} />
      {message && (
        <Animated.Text
          style={[styles.message, dark && styles.messageDark, { opacity: pulse }]}
        >
          {message}
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[5],
  } as ViewStyle,

  fullscreen: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,

  dark: {
    backgroundColor: colors.black,
  } as ViewStyle,

  message: {
    ...typography.bodyMd,
    color: colors.textSecondary,
    marginTop: spacing[3],
    textAlign: 'center',
  } as TextStyle,

  messageDark: {
    color: '#6B7280',
  } as TextStyle,
});

export default Loading;
