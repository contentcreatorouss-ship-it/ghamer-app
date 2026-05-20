import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingNavigator from './OnboardingNavigator';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

type AppState = 'onboarding' | 'auth' | 'main';

const AppNavigator: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('onboarding');
  const [startAtSignIn, setStartAtSignIn] = useState(false);

  const navigatorTheme = {
    dark: true,
    colors: {
      primary: '#FF3A1A',
      background: '#000000',
      card: '#000000',
      text: '#FFFFFF',
      border: '#27272A',
      notification: '#FF3A1A',
    },
    fonts: {
      regular: { fontFamily: 'Inter-Regular', fontWeight: '400' as const },
      medium: { fontFamily: 'Inter-Medium', fontWeight: '500' as const },
      bold: { fontFamily: 'Inter-Bold', fontWeight: '700' as const },
      heavy: { fontFamily: 'Inter-ExtraBold', fontWeight: '800' as const },
    },
  };

  return (
    <NavigationContainer theme={navigatorTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
        {appState === 'onboarding' && (
          <Stack.Screen name="Onboarding">
            {() => (
              <OnboardingNavigator
                onComplete={(goToSignIn = false) => {
                  setStartAtSignIn(goToSignIn);
                  setAppState('auth');
                }}
              />
            )}
          </Stack.Screen>
        )}

        {appState === 'auth' && (
          <Stack.Screen name="Auth">
            {() => (
              <AuthNavigator
                initialRoute={startAtSignIn ? 'Login' : 'Signup'}
                onAuth={() => setAppState('main')}
              />
            )}
          </Stack.Screen>
        )}

        {appState === 'main' && (
          <Stack.Screen name="Main" component={MainTabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
