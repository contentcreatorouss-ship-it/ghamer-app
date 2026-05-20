import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Button } from '../ui/Button';
import { colors, spacing, typography, borderRadius } from '../../theme';

interface EmptyStateProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  dark?: boolean;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  dark = false,
  icon,
}) => {
  return (
    <View style={[styles.container, dark && styles.dark]}>
      {icon ? (
        <View style={styles.iconWrapper}>{icon}</View>
      ) : (
        <View style={[styles.defaultIcon, dark && styles.defaultIconDark]}>
          <View style={styles.iconInner} />
        </View>
      )}

      <Text style={[styles.title, dark && styles.titleDark]}>{title}</Text>

      {description && (
        <Text style={[styles.description, dark && styles.descriptionDark]}>
          {description}
        </Text>
      )}

      {actionLabel && onAction && (
        <Button
          label={actionLabel}
          onPress={onAction}
          variant={dark ? 'primary' : 'outline'}
          style={styles.action}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing[5],
  } as ViewStyle,

  dark: {
    backgroundColor: colors.black,
  } as ViewStyle,

  iconWrapper: {
    marginBottom: spacing[4],
  } as ViewStyle,

  defaultIcon: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.DEFAULT,
    backgroundColor: '#F4F4F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing[4],
  } as ViewStyle,

  defaultIconDark: {
    backgroundColor: '#27272A',
  } as ViewStyle,

  iconInner: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.sm,
    backgroundColor: '#D4D4D8',
  } as ViewStyle,

  title: {
    ...typography.h3,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing[2],
  } as TextStyle,

  titleDark: {
    color: colors.white,
  } as TextStyle,

  description: {
    ...typography.bodyMd,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 280,
    marginBottom: spacing[5],
  } as TextStyle,

  descriptionDark: {
    color: '#9CA3AF',
  } as TextStyle,

  action: {
    marginTop: spacing[2],
  } as ViewStyle,
});

export default EmptyState;
