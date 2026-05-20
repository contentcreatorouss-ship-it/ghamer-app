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

interface LoginScreenProps {
  onLogin: () => void;
  onNavigateToSignup: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin, onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = (): boolean => {
    const e: typeof errors = {};
    if (!email) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = 'Enter a valid email';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Minimum 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise(r => setTimeout(r, 1500));
      onLogin();
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

            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to continue gaming</Text>

            <View style={styles.form}>
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
                placeholder="Your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                error={errors.password}
                dark
              />

              <TouchableOpacity style={styles.forgotRow}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <Button
              label="Sign In"
              onPress={handleLogin}
              loading={loading}
              fullWidth
              size="lg"
              glow
            />

            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            <View style={styles.signupRow}>
              <Text style={styles.signupPrompt}>New to Ghamer? </Text>
              <TouchableOpacity onPress={onNavigateToSignup}>
                <Text style={styles.signupLink}>Create account</Text>
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
    marginBottom: spacing[7],
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
  subtitle: { ...typography.bodyLg, color: '#9CA3AF', marginBottom: spacing[7] } as TextStyle,

  form: { marginBottom: spacing[5] } as ViewStyle,

  forgotRow: { alignSelf: 'flex-end', paddingVertical: spacing[1] } as ViewStyle,
  forgotText: { ...typography.label, color: colors.primary } as TextStyle,

  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    marginVertical: spacing[5],
  } as ViewStyle,
  dividerLine: { flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.08)' } as ViewStyle,
  dividerText: { ...typography.caption, color: '#6B7280' } as TextStyle,

  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  } as ViewStyle,
  signupPrompt: { ...typography.bodyMd, color: '#9CA3AF' } as TextStyle,
  signupLink: { ...typography.bodyMd, color: colors.primary, fontWeight: '700' } as TextStyle,
});

export default LoginScreen;
