import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Badge } from '../../components/ui/Badge';
import { colors, spacing, typography, borderRadius } from '../../theme';

interface NearbyItem {
  id: string;
  name: string;
  distance: string;
  type: string;
  status: 'live' | 'upcoming' | 'open';
  time: string;
}

const nearby: NearbyItem[] = [
  { id: '1', name: 'LAN Party at GameStation', distance: '0.5km', type: 'LAN Event', status: 'live', time: 'Happening now' },
  { id: '2', name: 'Retro Arcade Night', distance: '1.2km', type: 'Social', status: 'upcoming', time: 'Tonight 7PM' },
  { id: '3', name: 'Board Game Cafe Meet', distance: '2.4km', type: 'Board Games', status: 'open', time: 'Sat 3PM' },
  { id: '4', name: 'Esports Center Open Day', distance: '3.1km', type: 'Esports', status: 'upcoming', time: 'Sun 10AM' },
  { id: '5', name: 'Indie Dev Hangout', distance: '4.0km', type: 'Dev Meetup', status: 'open', time: 'Fri 6PM' },
];

const MapScreen: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const renderItem: ListRenderItem<NearbyItem> = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, selected === item.id && styles.cardSelected]}
      onPress={() => setSelected(selected === item.id ? null : item.id)}
      activeOpacity={0.85}
    >
      <View style={styles.cardLeft}>
        <View style={styles.distanceBubble}>
          <Text style={styles.distanceEmoji}>📍</Text>
          <Text style={styles.distanceText}>{item.distance}</Text>
        </View>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardMeta}>{item.type} · {item.time}</Text>
      </View>
      <Badge
        label={item.status.toUpperCase()}
        variant={item.status === 'live' ? 'primary' : item.status === 'upcoming' ? 'warning' : 'success'}
        size="sm"
        dot={item.status === 'live'}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Nearby</Text>
          <Text style={styles.subtitle}>Gaming spots in your area</Text>
        </View>

        <View style={styles.mapPlaceholder}>
          <View style={styles.mapGrid}>
            {Array.from({ length: 20 }).map((_, i) => (
              <View key={i} style={styles.gridDot} />
            ))}
          </View>
          <View style={styles.mapCenter}>
            <View style={styles.mapPing}>
              <View style={styles.mapPingInner} />
            </View>
            <Text style={styles.mapLabel}>You are here</Text>
          </View>
          {nearby.slice(0, 3).map((item, i) => (
            <View
              key={item.id}
              style={[
                styles.mapMarker,
                {
                  top: 40 + i * 55,
                  left: i % 2 === 0 ? 60 + i * 30 : undefined,
                  right: i % 2 !== 0 ? 60 : undefined,
                },
              ]}
            >
              <View style={[styles.markerDot, item.status === 'live' && styles.markerLive]} />
            </View>
          ))}
          <View style={styles.mapOverlay}>
            <Text style={styles.mapOverlayText}>Map view coming soon</Text>
            <Text style={styles.mapOverlayHint}>Integrate react-native-maps</Text>
          </View>
        </View>

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>{nearby.length} nearby</Text>
          <TouchableOpacity>
            <Text style={styles.filterText}>Filter ▾</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={nearby}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,
  header: { paddingHorizontal: spacing[4], paddingBottom: spacing[3] } as ViewStyle,
  title: { ...typography.displayMd, color: colors.white } as TextStyle,
  subtitle: { ...typography.bodyMd, color: '#9CA3AF', marginTop: 2 } as TextStyle,

  mapPlaceholder: {
    height: 200,
    backgroundColor: '#0D0D0D',
    marginHorizontal: spacing[4],
    borderRadius: borderRadius.lg,
    marginBottom: spacing[4],
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,

  mapGrid: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacing[4],
    gap: 24,
    justifyContent: 'space-between',
  } as ViewStyle,

  gridDot: {
    width: 3,
    height: 3,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255,255,255,0.05)',
  } as ViewStyle,

  mapCenter: {
    position: 'absolute',
    bottom: spacing[4],
    left: '50%',
    transform: [{ translateX: -30 }],
    alignItems: 'center',
  } as ViewStyle,

  mapPing: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: 'rgba(255,58,26,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,58,26,0.3)',
  } as ViewStyle,

  mapPingInner: {
    width: 16,
    height: 16,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
  } as ViewStyle,

  mapLabel: { ...typography.caption, color: '#9CA3AF', marginTop: spacing[1] } as TextStyle,

  mapMarker: {
    position: 'absolute',
    alignItems: 'center',
  } as ViewStyle,

  markerDot: {
    width: 12,
    height: 12,
    borderRadius: borderRadius.full,
    backgroundColor: '#3B82F6',
    borderWidth: 2,
    borderColor: colors.black,
  } as ViewStyle,

  markerLive: {
    backgroundColor: colors.primary,
  } as ViewStyle,

  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  } as ViewStyle,

  mapOverlayText: { ...typography.h4, color: colors.white } as TextStyle,
  mapOverlayHint: { ...typography.caption, color: '#9CA3AF', marginTop: 4 } as TextStyle,

  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    marginBottom: spacing[3],
  } as ViewStyle,
  listTitle: { ...typography.h3, color: colors.white } as TextStyle,
  filterText: { ...typography.label, color: colors.primary } as TextStyle,

  list: { paddingHorizontal: spacing[4], paddingBottom: spacing[7] } as ViewStyle,

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: borderRadius.DEFAULT,
    padding: spacing[3],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,

  cardSelected: {
    borderColor: colors.primary,
    backgroundColor: 'rgba(255,58,26,0.08)',
  } as ViewStyle,

  cardLeft: { marginRight: spacing[3] } as ViewStyle,

  distanceBubble: {
    alignItems: 'center',
    width: 52,
  } as ViewStyle,

  distanceEmoji: { fontSize: 20 } as TextStyle,

  distanceText: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '700',
    marginTop: 2,
  } as TextStyle,

  cardInfo: { flex: 1 } as ViewStyle,
  cardName: { ...typography.label, color: colors.white } as TextStyle,
  cardMeta: { ...typography.caption, color: '#9CA3AF', marginTop: 2 } as TextStyle,
});

export default MapScreen;
