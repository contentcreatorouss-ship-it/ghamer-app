import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/Login';
import SignupScreen from '../screens/Auth/Signup';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

interface AuthNavigatorProps {
  onAuth: () => void;
  initialRoute?: keyof AuthStackParamList;
}

const AuthNavigator: React.FC<AuthNavigatorProps> = ({
  onAuth,
  initialRoute = 'Signup',
}) => (
  <Stack.Navigator
    initialRouteName={initialRoute}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Login">
      {props => (
        <LoginScreen
          onLogin={onAuth}
          onNavigateToSignup={() => props.navigation.navigate('Signup')}
        />
      )}
    </Stack.Screen>
    <Stack.Screen name="Signup">
      {props => (
        <SignupScreen
          onSignup={onAuth}
          onNavigateToLogin={() => props.navigation.navigate('Login')}
        />
      )}
    </Stack.Screen>
    <Stack.Screen name="ForgotPassword">
      {props => <LoginScreen onLogin={onAuth} onNavigateToSignup={() => {}} />}
    </Stack.Screen>
  </Stack.Navigator>
);

export default AuthNavigator;
