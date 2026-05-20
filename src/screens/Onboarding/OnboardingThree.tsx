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
import { Button } from '../../components/ui/Button';
import { colors, spacing, typography, borderRadius } from '../../theme';

const { width, height } = Dimensions.get('window');

interface OnboardingThreeProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

const OnboardingThree: React.FC<OnboardingThreeProps> = ({ onGetStarted, onSignIn }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 8, tension: 40, useNativeDriver: true }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <LinearGradient
      colors={[colors.black, '#1A0500', '#2D0800']}
      style={styles.container}
    >
      <View style={styles.bgOrbs}>
        <View style={styles.orb1} />
        <View style={styles.orb2} />
      </View>

      <View style={styles.topSection}>
        <Animated.View style={[styles.mascotArea, { opacity: fadeAnim }]}>
          <LinearGradient
            colors={['#FF5C3F', '#FF3A1A']}
            style={styles.mascotCircle}
          >
            <Text style={styles.mascotEmoji}>🎮</Text>
          </LinearGradient>

          <View style={styles.ring1} />
          <View style={styles.ring2} />

          <View style={styles.bubbleLeft}>
            <Text style={styles.bubbleText}>GG!</Text>
          </View>
          <View style={styles.bubbleRight}>
            <Text style={styles.bubbleText}>🔥 Squad up</Text>
          </View>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.bottomSection,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Text style={styles.eyebrow}>YOU'RE READY</Text>
        <Text style={styles.headline}>Start gaming{'\n'}with your city</Text>
        <Text style={styles.subheadline}>
          Join thousands of gamers already finding their squad, events, and competitions nearby.
        </Text>

        <View style={styles.actions}>
          <Button
            label="Create Account"
            onPress={onGetStarted}
            size="lg"
            glow
            fullWidth
          />

          <Button
            label="I already have an account"
            onPress={onSignIn}
            variant="ghost"
            size="md"
            fullWidth
            style={styles.signInBtn}
          />
        </View>

        <View style={styles.terms}>
          <Text style={styles.termsText}>
            By continuing, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text>
            {' & '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,

  bgOrbs: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  } as ViewStyle,

  orb1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,58,26,0.08)',
    top: -100,
    right: -100,
  } as ViewStyle,

  orb2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(255,220,36,0.05)',
    bottom: height * 0.35,
    left: -60,
  } as ViewStyle,

  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  mascotArea: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,

  mascotCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  } as ViewStyle,

  mascotEmoji: {
    fontSize: 52,
  } as TextStyle,

  ring1: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'rgba(255,58,26,0.25)',
  } as ViewStyle,

  ring2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,58,26,0.1)',
  } as ViewStyle,

  bubbleLeft: {
    position: 'absolute',
    top: 20,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  } as ViewStyle,

  bubbleRight: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    backgroundColor: 'rgba(255,220,36,0.12)',
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderWidth: 1,
    borderColor: 'rgba(255,220,36,0.2)',
  } as ViewStyle,

  bubbleText: {
    ...typography.label,
    color: colors.white,
  } as TextStyle,

  bottomSection: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[7],
  } as ViewStyle,

  eyebrow: {
    ...typography.caption,
    color: colors.primary,
    letterSpacing: 3,
    marginBottom: spacing[1],
  } as TextStyle,

  headline: {
    ...typography.displayMd,
    color: colors.white,
    marginBottom: spacing[3],
  } as TextStyle,

  subheadline: {
    ...typography.bodyLg,
    color: '#9CA3AF',
    lineHeight: 26,
    marginBottom: spacing[7],
  } as TextStyle,

  actions: {
    gap: spacing[3],
  } as ViewStyle,

  signInBtn: {
    marginTop: -spacing[1],
  } as ViewStyle,

  terms: {
    marginTop: spacing[4],
    alignItems: 'center',
  } as ViewStyle,

  termsText: {
    ...typography.caption,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  } as TextStyle,

  termsLink: {
    color: colors.textSecondary,
    textDecorationLine: 'underline',
  } as TextStyle,
});

export default OnboardingThree;
