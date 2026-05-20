import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors, spacing, typography, borderRadius, shadows } from '../../theme';

const achievements = [
  { emoji: '🏆', label: 'Champion' },
  { emoji: '🎮', label: '100 Games' },
  { emoji: '🔥', label: 'On Fire' },
  { emoji: '⭐', label: 'MVP' },
];

const menuItems = [
  { emoji: '📅', label: 'My Events', count: '3' },
  { emoji: '👥', label: 'My Communities', count: '7' },
  { emoji: '🏆', label: 'Achievements', count: '12' },
  { emoji: '⚙️', label: 'Settings', count: undefined },
  { emoji: '❓', label: 'Help & Support', count: undefined },
];

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Cover + Avatar */}
          <View style={styles.coverContainer}>
            <LinearGradient
              colors={['#FF3A1A', '#8B0000', '#000000']}
              style={styles.cover}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            />
            <View style={styles.avatarContainer}>
              <LinearGradient
                colors={['#FF5C3F', '#FF3A1A']}
                style={styles.avatar}
              >
                <Text style={styles.avatarText}>G</Text>
              </LinearGradient>
              <View style={styles.onlineDot} />
            </View>
          </View>

          {/* User Info */}
          <View style={styles.infoSection}>
            <View style={styles.infoRow}>
              <View>
                <Text style={styles.displayName}>GhamerTag #42</Text>
                <Text style={styles.username}>@ghamer42</Text>
              </View>
              <Badge label="Pro Gamer" variant="primary" size="sm" />
            </View>
            <Text style={styles.bio}>
              Competitive FPS & RPG player 🎮 Looking for squad · City tournaments addict
            </Text>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            {[
              { value: '12', label: 'Events' },
              { value: '84', label: 'Following' },
              { value: '210', label: 'Followers' },
              { value: '4.8★', label: 'Rating' },
            ].map(stat => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <Button label="Edit Profile" variant="outline" style={styles.actionBtn} />
            <Button label="Share Profile" variant="secondary" style={styles.actionBtn} />
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.achievements}>
              {achievements.map(a => (
                <View key={a.label} style={styles.achievement}>
                  <View style={styles.achievementIcon}>
                    <Text style={styles.achievementEmoji}>{a.emoji}</Text>
                  </View>
                  <Text style={styles.achievementLabel}>{a.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Recent Games */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            {['Joined Warzone Squad · 2h ago', 'Attended City LAN Party · 3d ago', 'Won Chess Club Tournament · 1w ago'].map(item => (
              <View key={item} style={styles.activityItem}>
                <View style={styles.activityDot} />
                <Text style={styles.activityText}>{item}</Text>
              </View>
            ))}
          </View>

          {/* Menu */}
          <View style={styles.section}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={item.label}
                style={[
                  styles.menuItem,
                  index < menuItems.length - 1 && styles.menuItemBorder,
                ]}
                activeOpacity={0.7}
              >
                <Text style={styles.menuEmoji}>{item.emoji}</Text>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <View style={styles.menuRight}>
                  {item.count && (
                    <Badge label={item.count} variant="dark" size="sm" style={styles.menuCount} />
                  )}
                  <Text style={styles.menuChevron}>›</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.logout}>
            <Button label="Sign Out" variant="outline" fullWidth />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,

  coverContainer: { height: 180, marginBottom: 44 } as ViewStyle,
  cover: { height: 130 } as ViewStyle,
  avatarContainer: {
    position: 'absolute',
    bottom: 0,
    left: spacing[4],
    ...shadows.glow,
  } as ViewStyle,
  avatar: {
    width: 88,
    height: 88,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.black,
  } as ViewStyle,
  avatarText: { ...typography.displayMd, color: colors.white } as TextStyle,
  onlineDot: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: borderRadius.full,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: colors.black,
  } as ViewStyle,

  infoSection: { paddingHorizontal: spacing[4], marginBottom: spacing[5] } as ViewStyle,
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  } as ViewStyle,
  displayName: { ...typography.h2, color: colors.white } as TextStyle,
  username: { ...typography.bodySm, color: '#9CA3AF', marginTop: 2 } as TextStyle,
  bio: { ...typography.bodyMd, color: '#9CA3AF', lineHeight: 22 } as TextStyle,

  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing[4],
    marginBottom: spacing[5],
    justifyContent: 'space-between',
  } as ViewStyle,
  statItem: { alignItems: 'center' } as ViewStyle,
  statValue: { ...typography.h3, color: colors.white } as TextStyle,
  statLabel: { ...typography.caption, color: '#9CA3AF', marginTop: 2 } as TextStyle,

  actions: {
    flexDirection: 'row',
    paddingHorizontal: spacing[4],
    gap: spacing[3],
    marginBottom: spacing[6],
  } as ViewStyle,
  actionBtn: { flex: 1 } as ViewStyle,

  section: {
    paddingHorizontal: spacing[4],
    marginBottom: spacing[6],
  } as ViewStyle,
  sectionTitle: { ...typography.h3, color: colors.white, marginBottom: spacing[3] } as TextStyle,

  achievements: { flexDirection: 'row', gap: spacing[3] } as ViewStyle,
  achievement: { alignItems: 'center', gap: spacing[2] } as ViewStyle,
  achievementIcon: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.DEFAULT,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  } as ViewStyle,
  achievementEmoji: { fontSize: 24 } as TextStyle,
  achievementLabel: { ...typography.caption, color: '#9CA3AF' } as TextStyle,

  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[3],
    paddingVertical: spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  } as ViewStyle,
  activityText: { ...typography.bodyMd, color: '#9CA3AF' } as TextStyle,

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing[4],
    gap: spacing[3],
  } as ViewStyle,
  menuItemBorder: { borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)' } as ViewStyle,
  menuEmoji: { fontSize: 20, width: 28 } as TextStyle,
  menuLabel: { ...typography.bodyMd, color: colors.white, flex: 1 } as TextStyle,
  menuRight: { flexDirection: 'row', alignItems: 'center', gap: spacing[2] } as ViewStyle,
  menuCount: {} as ViewStyle,
  menuChevron: { ...typography.h3, color: '#6B7280' } as TextStyle,

  logout: { paddingHorizontal: spacing[4], paddingBottom: spacing[7] } as ViewStyle,
});

export default ProfileScreen;
