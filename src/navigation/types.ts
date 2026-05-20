import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';

// Root Stack
export type RootStackParamList = {
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
};

// Onboarding Stack
export type OnboardingStackParamList = {
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
};

// Auth Stack
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Main Tab
export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Map: undefined;
  Community: undefined;
  Profile: undefined;
};

// Navigation prop helpers
export type RootStackNavProp = StackNavigationProp<RootStackParamList>;
export type OnboardingNavProp = StackNavigationProp<OnboardingStackParamList>;
export type AuthNavProp = StackNavigationProp<AuthStackParamList>;
export type MainTabNavProp = BottomTabNavigationProp<MainTabParamList>;
