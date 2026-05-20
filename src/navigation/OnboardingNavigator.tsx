import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingOne from '../screens/Onboarding/OnboardingOne';
import OnboardingTwo from '../screens/Onboarding/OnboardingTwo';
import OnboardingThree from '../screens/Onboarding/OnboardingThree';
import { OnboardingStackParamList } from './types';
import { colors, spacing, borderRadius, typography } from '../theme';

const Stack = createStackNavigator<OnboardingStackParamList>();
const { width } = Dimensions.get('window');

interface OnboardingNavigatorProps {
  onComplete: (goToSignIn?: boolean) => void;
}

const OnboardingNavigator: React.FC<OnboardingNavigatorProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const STEPS = 3;

  const handleNext = () => {
    if (step < STEPS - 1) {
      setStep(step + 1);
    }
  };

  const renderScreen = () => {
    switch (step) {
      case 0:
        return <OnboardingOne onNext={handleNext} />;
      case 1:
        return <OnboardingTwo onNext={handleNext} />;
      case 2:
        return (
          <OnboardingThree
            onGetStarted={() => onComplete(false)}
            onSignIn={() => onComplete(true)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}

      {step < STEPS - 1 && (
        <View style={styles.footer}>
          <View style={styles.dots}>
            {Array.from({ length: STEPS }).map((_, i) => (
              <View key={i} style={[styles.dot, i === step && styles.dotActive]} />
            ))}
          </View>

          <TouchableOpacity style={styles.nextBtn} onPress={handleNext}>
            <Text style={styles.nextText}>Next</Text>
            <View style={styles.nextArrow} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,

  footer: {
    position: 'absolute',
    bottom: spacing[7],
    left: spacing[5],
    right: spacing[5],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,

  dots: {
    flexDirection: 'row',
    gap: spacing[2],
  } as ViewStyle,

  dot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.25)',
  } as ViewStyle,

  dotActive: {
    width: 24,
    backgroundColor: colors.primary,
  } as ViewStyle,

  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[2],
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: borderRadius.pill,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  } as ViewStyle,

  nextText: {
    ...typography.button,
    color: colors.white,
  } as TextStyle,

  nextArrow: {
    width: 6,
    height: 6,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: colors.white,
    transform: [{ rotate: '45deg' }],
  } as ViewStyle,
});

export default OnboardingNavigator;
