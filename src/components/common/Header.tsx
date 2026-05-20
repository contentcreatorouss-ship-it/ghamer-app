import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../../theme';

interface HeaderProps {
  title: string;
  subtitle?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  dark?: boolean;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  leftAction,
  rightAction,
  dark = false,
  transparent = false,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + spacing[2] },
        dark && styles.dark,
        transparent && styles.transparent,
      ]}
    >
      <View style={styles.row}>
        <View style={styles.side}>{leftAction}</View>
        <View style={styles.center}>
          <Text
            style={[styles.title, dark && styles.titleDark]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {subtitle && (
            <Text
              style={[styles.subtitle, dark && styles.subtitleDark]}
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          )}
        </View>
        <View style={styles.side}>{rightAction}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F5',
  } as ViewStyle,

  dark: {
    backgroundColor: colors.black,
    borderBottomColor: colors.border,
  } as ViewStyle,

  transparent: {
    backgroundColor: colors.transparent,
    borderBottomWidth: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  } as ViewStyle,

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  } as ViewStyle,

  side: {
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  center: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,

  title: {
    ...typography.h4,
    color: colors.textPrimary,
  } as TextStyle,

  titleDark: {
    color: colors.white,
  } as TextStyle,

  subtitle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 2,
  } as TextStyle,

  subtitleDark: {
    color: '#9CA3AF',
  } as TextStyle,
});

export default Header;
