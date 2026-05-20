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

const { width } = Dimensions.get('window');

const features = [
  {
    title: 'Discover Events',
    desc: 'Find local tournaments, LAN parties, and game nights around you.',
    accentColor: colors.primary,
    icon: '🎮',
  },
  {
    title: 'Build Your Crew',
    desc: 'Join communities that match your playstyle and games.',
    accentColor: colors.tertiary,
    icon: '👥',
  },
  {
    title: 'Map View',
    desc: 'See what\'s happening nearby in real-time.',
    accentColor: '#3B82F6',
    icon: '📍',
  },
];

interface OnboardingTwoProps {
  onNext: () => void;
}

const OnboardingTwo: React.FC<OnboardingTwoProps> = ({ onNext }) => {
  const anims = features.map(() => ({
    fade: useRef(new Animated.Value(0)).current,
    slide: useRef(new Animated.Value(30)).current,
  }));

  useEffect(() => {
    const staggered = anims.map((a, i) =>
      Animated.parallel([
        Animated.timing(a.fade, { toValue: 1, duration: 500, delay: i * 150, useNativeDriver: true }),
        Animated.spring(a.slide, { toValue: 0, delay: i * 150, friction: 8, useNativeDriver: true }),
      ]),
    );
    Animated.parallel(staggered).start();
  }, []);

  return (
    <LinearGradient
      colors={[colors.black, '#0F0F0F', '#1A0500']}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.eyebrow}>FEATURES</Text>
        <Text style={styles.headline}>Everything you need{'\n'}to game smarter</Text>
        <Text style={styles.subheadline}>
          Built for the local gaming scene. Find people who play what you play.
        </Text>
      </View>

      <View style={styles.cards}>
        {features.map((feature, i) => (
          <Animated.View
            key={feature.title}
            style={[
              styles.featureCard,
              {
                opacity: anims[i].fade,
                transform: [{ translateY: anims[i].slide }],
              },
            ]}
          >
            <View style={[styles.iconBox, { backgroundColor: feature.accentColor + '22' }]}>
              <Text style={styles.iconText}>{feature.icon}</Text>
            </View>
            <View style={styles.featureText}>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDesc}>{feature.desc}</Text>
            </View>
            <View style={[styles.accentLine, { backgroundColor: feature.accentColor }]} />
          </Animated.View>
        ))}
      </View>

      <View style={styles.statsRow}>
        {[['4.9★', 'Rating'], ['10K+', 'Events'], ['50+', 'Cities']].map(([val, lbl]) => (
          <View key={lbl} style={styles.statItem}>
            <Text style={styles.statVal}>{val}</Text>
            <Text style={styles.statLbl}>{lbl}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing[5],
    paddingTop: spacing[12],
    paddingBottom: spacing[5],
  } as ViewStyle,

  header: {
    marginBottom: spacing[6],
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
    ...typography.bodyMd,
    color: '#9CA3AF',
    lineHeight: 24,
  } as TextStyle,

  cards: {
    flex: 1,
    gap: spacing[3],
    justifyContent: 'center',
  } as ViewStyle,

  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: borderRadius.DEFAULT,
    padding: spacing[4],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  } as ViewStyle,

  iconBox: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  } as ViewStyle,

  iconText: {
    fontSize: 24,
  } as TextStyle,

  featureText: {
    flex: 1,
  } as ViewStyle,

  featureTitle: {
    ...typography.h4,
    color: colors.white,
    marginBottom: 4,
  } as TextStyle,

  featureDesc: {
    ...typography.bodySm,
    color: '#9CA3AF',
    lineHeight: 18,
  } as TextStyle,

  accentLine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    borderTopLeftRadius: borderRadius.DEFAULT,
    borderBottomLeftRadius: borderRadius.DEFAULT,
  } as ViewStyle,

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: spacing[5],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    marginTop: spacing[4],
  } as ViewStyle,

  statItem: {
    alignItems: 'center',
  } as ViewStyle,

  statVal: {
    ...typography.h2,
    color: colors.white,
  } as TextStyle,

  statLbl: {
    ...typography.caption,
    color: '#9CA3AF',
    marginTop: 2,
  } as TextStyle,
});

export default OnboardingTwo;
