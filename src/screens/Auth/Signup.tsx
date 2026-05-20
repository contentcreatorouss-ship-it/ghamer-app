import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { colors, spacing, typography, borderRadius } from '../../theme';

interface SignupScreenProps {
  onSignup: () => void;
  onNavigateToLogin: () => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ onSignup, onNavigateToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; email?: string; password?: string }>({});

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!username) e.username = 'Username is required';
    else if (username.length < 3) e.username = 'Minimum 3 characters';
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 8) e.password = 'Minimum 8 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSignup = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      onSignup();
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView
          style={styles.kav}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.brandRow}>
              <LinearGradient
                colors={['#FF5C3F', '#FF3A1A']}
                style={styles.logoMark}
              >
                <Text style={styles.logoLetter}>G</Text>
              </LinearGradient>
              <Text style={styles.brandName}>Ghamer</Text>
            </View>

            <Text style={styles.title}>Join the crew</Text>
            <Text style={styles.subtitle}>Create your Ghamer account</Text>

            <View style={styles.form}>
              <Input
                label="Username"
                placeholder="Choose a gamer tag"
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                onChangeText={setUsername}
                error={errors.username}
                hint="This will be your public display name"
                dark
              />

              <Input
                label="Email"
                placeholder="you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
                error={errors.email}
                dark
              />

              <Input
                label="Password"
                placeholder="Create a strong password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                error={errors.password}
                hint="At least 8 characters"
                dark
              />
            </View>

            <Button
              label="Create Account"
              onPress={handleSignup}
              loading={loading}
              fullWidth
              size="lg"
              glow
            />

            <View style={styles.terms}>
              <Text style={styles.termsText}>
                By signing up, you agree to our{' '}
                <Text style={styles.termsLink}>Terms</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </View>

            <View style={styles.loginRow}>
              <Text style={styles.loginPrompt}>Already have an account? </Text>
              <TouchableOpacity onPress={onNavigateToLogin}>
                <Text style={styles.loginLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,
  kav: { flex: 1 } as ViewStyle,
  scroll: {
    flexGrow: 1,
    paddingHorizontal: spacing[5],
    paddingTop: spacing[7],
    paddingBottom: spacing[7],
  } as ViewStyle,

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginBottom: spacing[6],
  } as ViewStyle,
  logoMark: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.DEFAULT,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  logoLetter: { ...typography.h2, color: colors.white } as TextStyle,
  brandName: { ...typography.h2, color: colors.white } as TextStyle,

  title: { ...typography.displayMd, color: colors.white, marginBottom: spacing[1] } as TextStyle,
  subtitle: { ...typography.bodyLg, color: '#9CA3AF', marginBottom: spacing[6] } as TextStyle,

  form: { marginBottom: spacing[5] } as ViewStyle,

  terms: { marginTop: spacing[4], marginBottom: spacing[5] } as ViewStyle,
  termsText: {
    ...typography.caption,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  } as TextStyle,
  termsLink: { color: colors.textSecondary, textDecorationLine: 'underline' } as TextStyle,

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  loginPrompt: { ...typography.bodyMd, color: '#9CA3AF' } as TextStyle,
  loginLink: { ...typography.bodyMd, color: colors.primary, fontWeight: '700' } as TextStyle,
});

export default SignupScreen;
