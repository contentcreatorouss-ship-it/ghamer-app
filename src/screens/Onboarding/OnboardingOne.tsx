import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ViewStyle,
  TextStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors, spacing, typography, borderRadius } from '../../theme';

const { width, height } = Dimensions.get('window');

interface OnboardingOneProps {
  onNext: () => void;
}

const OnboardingOne: React.FC<OnboardingOneProps> = ({ onNext }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 8, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 7, useNativeDriver: true }),
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim]);

  return (
    <LinearGradient
      colors={[colors.black, '#1A0500', '#0D0D0D']}
      style={styles.container}
    >
      <Animated.View style={[styles.heroArea, { transform: [{ scale: scaleAnim }], opacity: fadeAnim }]}>
        <LinearGradient
          colors={['#FF5C3F', '#FF3A1A', '#8B0000']}
          style={styles.heroCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.heroOrb1} />
          <View style={styles.heroOrb2} />
          <View style={styles.heroContent}>
            <View style={styles.logoMark}>
              <Text style={styles.logoText}>G</Text>
            </View>
            <View style={styles.heroLines}>
              <View style={[styles.heroLine, styles.heroLineFull]} />
              <View style={[styles.heroLine, styles.heroLineHalf]} />
            </View>
            <View style={styles.heroBadges}>
              {['FPS', 'RPG', 'MOBA', 'IRL'].map(tag => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </LinearGradient>

        <View style={styles.floatingBadge}>
          <View style={styles.floatingDot} />
          <Text style={styles.floatingText}>2,400+ gamers online</Text>
        </View>
      </Animated.View>

      <Animated.View style={[styles.textArea, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
        <Text style={styles.eyebrow}>WELCOME TO</Text>
        <Text style={styles.headline}>Ghamer</Text>
        <Text style={styles.subheadline}>
          Your local gaming universe.{'\n'}Find crews, events, and squads near you.
        </Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[5],
    paddingTop: spacing[12],
    paddingBottom: spacing[5],
    justifyContent: 'space-between',
  } as ViewStyle,

  heroArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  heroCard: {
    width: width - spacing[5] * 2,
    height: height * 0.38,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  heroOrb1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -60,
    right: -40,
  } as ViewStyle,

  heroOrb2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(0,0,0,0.15)',
    bottom: -50,
    left: -30,
  } as ViewStyle,

  heroContent: {
    alignItems: 'center',
    gap: spacing[4],
  } as ViewStyle,

  logoMark: {
    width: 72,
    height: 72,
    borderRadius: borderRadius.DEFAULT,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
  } as ViewStyle,

  logoText: {
    ...typography.displayMd,
    color: colors.white,
  } as TextStyle,

  heroLines: { width: 160, gap: spacing[2] } as ViewStyle,
  heroLine: {
    height: 4,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.4)',
  } as ViewStyle,
  heroLineFull: { width: '100%' } as ViewStyle,
  heroLineHalf: { width: '60%' } as ViewStyle,

  heroBadges: {
    flexDirection: 'row',
    gap: spacing[2],
  } as ViewStyle,

  tag: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  } as ViewStyle,

  tagText: {
    ...typography.caption,
    color: colors.white,
    fontWeight: '700',
    letterSpacing: 0.8,
  } as TextStyle,

  floatingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    marginTop: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  } as ViewStyle,

  floatingDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    marginRight: spacing[2],
  } as ViewStyle,

  floatingText: {
    ...typography.label,
    color: 'rgba(255,255,255,0.8)',
  } as TextStyle,

  textArea: {
    paddingBottom: spacing[4],
  } as ViewStyle,

  eyebrow: {
    ...typography.caption,
    color: colors.primary,
    letterSpacing: 3,
    marginBottom: spacing[1],
  } as TextStyle,

  headline: {
    ...typography.displayLg,
    color: colors.white,
    marginBottom: spacing[3],
  } as TextStyle,

  subheadline: {
    ...typography.bodyLg,
    color: '#9CA3AF',
    lineHeight: 26,
  } as TextStyle,
});

export default OnboardingOne;
