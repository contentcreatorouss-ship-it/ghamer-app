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
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { colors, spacing, typography, borderRadius } from '../../theme';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Topbar */}
          <View style={styles.topbar}>
            <View>
              <Text style={styles.greeting}>Good evening, Gamer</Text>
              <Text style={styles.username}>GhamerTag #42</Text>
            </View>
            <TouchableOpacity style={styles.notifBtn}>
              <Text style={styles.notifIcon}>🔔</Text>
              <View style={styles.notifDot} />
            </TouchableOpacity>
          </View>

          {/* Hero Banner */}
          <Card variant="gradient" style={styles.hero} gradientColors={['#FF5C3F', '#FF3A1A', '#8B1A00']}>
            <Badge label="LIVE EVENT" variant="secondary" size="sm" dot style={styles.heroBadge} />
            <Text style={styles.heroTitle}>City Gaming{'\n'}Championship</Text>
            <Text style={styles.heroSub}>32 slots · Tonight 8PM · $500 prize pool</Text>
            <TouchableOpacity style={styles.heroBtn}>
              <Text style={styles.heroBtnText}>Register Now →</Text>
            </TouchableOpacity>
          </Card>

          {/* Quick Stats */}
          <View style={styles.statsRow}>
            {[
              { value: '2.4k', label: 'Gamers online', color: colors.primary },
              { value: '18', label: 'Events today', color: colors.tertiary },
              { value: '6', label: 'Your crew', color: '#3B82F6' },
            ].map(stat => (
              <View key={stat.label} style={styles.statCard}>
                <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>

          {/* Nearby Communities */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Nearby Communities</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.hScroll}>
              {[
                { name: 'FPS Squad', count: 48, genre: 'FPS' },
                { name: 'RPG Guild', count: 32, genre: 'RPG' },
                { name: 'Street Fighters', count: 24, genre: 'Fighting' },
                { name: 'MOBA Club', count: 61, genre: 'MOBA' },
              ].map(c => (
                <TouchableOpacity key={c.name} style={styles.communityCard} activeOpacity={0.85}>
                  <LinearGradient
                    colors={['#1A1A1A', '#0D0D0D']}
                    style={styles.communityGrad}
                  >
                    <View style={styles.communityAvatar}>
                      <Text style={styles.communityAvatarText}>{c.name[0]}</Text>
                    </View>
                    <Text style={styles.communityName}>{c.name}</Text>
                    <Text style={styles.communityMeta}>{c.count} members</Text>
                    <Badge label={c.genre} variant="dark" size="sm" style={styles.communityBadge} />
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Active Events */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Active Events</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>
            {[
              { name: 'Weekly Warzone', time: 'Tonight · 8PM', spots: 6, genre: 'FPS' },
              { name: 'Indie Game Jam', time: 'Sat · 2PM', spots: 12, genre: 'Indie' },
              { name: 'Retro Night', time: 'Sun · 6PM', spots: 20, genre: 'Retro' },
            ].map(event => (
              <TouchableOpacity key={event.name} activeOpacity={0.85}>
                <LinearGradient
                  colors={['#1A1A1A', '#111111']}
                  style={styles.eventCard}
                >
                  <View style={styles.eventIcon}>
                    <Text style={styles.eventIconText}>🎮</Text>
                  </View>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventName}>{event.name}</Text>
                    <Text style={styles.eventMeta}>{event.time} · {event.spots} spots left</Text>
                  </View>
                  <Badge label={event.genre} variant="outline" size="sm" />
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,
  scroll: { padding: spacing[4], paddingBottom: spacing[7] } as ViewStyle,

  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[5],
  } as ViewStyle,
  greeting: { ...typography.caption, color: '#9CA3AF' } as TextStyle,
  username: { ...typography.h3, color: colors.white } as TextStyle,
  notifBtn: { position: 'relative', padding: spacing[2] } as ViewStyle,
  notifIcon: { fontSize: 22 } as TextStyle,
  notifDot: {
    position: 'absolute',
    top: spacing[2],
    right: spacing[2],
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.black,
  } as ViewStyle,

  hero: {
    marginBottom: spacing[5],
    padding: spacing[5],
    minHeight: 180,
    justifyContent: 'flex-end',
  } as ViewStyle,
  heroBadge: { marginBottom: spacing[3] } as ViewStyle,
  heroTitle: { ...typography.h1, color: colors.white, marginBottom: spacing[2] } as TextStyle,
  heroSub: { ...typography.bodySm, color: 'rgba(255,255,255,0.75)', marginBottom: spacing[4] } as TextStyle,
  heroBtn: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: borderRadius.pill,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  } as ViewStyle,
  heroBtnText: { ...typography.button, color: colors.white } as TextStyle,

  statsRow: {
    flexDirection: 'row',
    gap: spacing[3],
    marginBottom: spacing[6],
  } as ViewStyle,
  statCard: {
    flex: 1,
    backgroundColor: '#111111',
    borderRadius: borderRadius.DEFAULT,
    padding: spacing[3],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,
  statValue: { ...typography.h2 } as TextStyle,
  statLabel: { ...typography.caption, color: '#9CA3AF', textAlign: 'center', marginTop: 2 } as TextStyle,

  section: { marginBottom: spacing[6] } as ViewStyle,
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[3],
  } as ViewStyle,
  sectionTitle: { ...typography.h3, color: colors.white } as TextStyle,
  seeAll: { ...typography.label, color: colors.primary } as TextStyle,

  hScroll: { marginHorizontal: -spacing[4] } as ViewStyle,
  communityCard: {
    width: 130,
    marginLeft: spacing[4],
    borderRadius: borderRadius.DEFAULT,
    overflow: 'hidden',
  } as ViewStyle,
  communityGrad: {
    padding: spacing[3],
    alignItems: 'center',
    gap: spacing[2],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    borderRadius: borderRadius.DEFAULT,
  } as ViewStyle,
  communityAvatar: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  communityAvatarText: { ...typography.h3, color: colors.white } as TextStyle,
  communityName: { ...typography.label, color: colors.white, textAlign: 'center' } as TextStyle,
  communityMeta: { ...typography.caption, color: '#9CA3AF', textAlign: 'center' } as TextStyle,
  communityBadge: {} as ViewStyle,

  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing[3],
    borderRadius: borderRadius.DEFAULT,
    marginBottom: spacing[2],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,
  eventIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.DEFAULT,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  } as ViewStyle,
  eventIconText: { fontSize: 22 } as TextStyle,
  eventInfo: { flex: 1 } as ViewStyle,
  eventName: { ...typography.label, color: colors.white } as TextStyle,
  eventMeta: { ...typography.caption, color: '#9CA3AF', marginTop: 2 } as TextStyle,
});

export default HomeScreen;
