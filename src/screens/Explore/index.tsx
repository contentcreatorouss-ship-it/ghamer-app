import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  StatusBar,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { colors, spacing, typography, borderRadius } from '../../theme';

const categories = ['All', 'FPS', 'RPG', 'Sports', 'Strategy', 'Indie', 'Fighting'];

interface ExploreItem {
  id: string;
  name: string;
  genre: string;
  players: number;
  status: 'live' | 'upcoming' | 'open';
}

const mockData: ExploreItem[] = [
  { id: '1', name: 'Warzone Squad', genre: 'FPS', players: 128, status: 'live' },
  { id: '2', name: 'Fantasy League', genre: 'RPG', players: 64, status: 'open' },
  { id: '3', name: 'Street Soccer', genre: 'Sports', players: 32, status: 'upcoming' },
  { id: '4', name: 'Chess Club', genre: 'Strategy', players: 16, status: 'open' },
  { id: '5', name: 'Pixel Jam', genre: 'Indie', players: 48, status: 'upcoming' },
  { id: '6', name: 'Battle Arena', genre: 'FPS', players: 96, status: 'live' },
  { id: '7', name: 'Street Fighter League', genre: 'Fighting', players: 40, status: 'open' },
  { id: '8', name: 'Dungeon Runners', genre: 'RPG', players: 24, status: 'upcoming' },
];

const statusBadge: Record<ExploreItem['status'], React.ReactElement> = {
  live: <Badge label="LIVE" variant="primary" size="sm" dot />,
  upcoming: <Badge label="SOON" variant="warning" size="sm" />,
  open: <Badge label="OPEN" variant="success" size="sm" />,
};

const ExploreScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = mockData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.genre === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const renderItem: ListRenderItem<ExploreItem> = ({ item }) => (
    <TouchableOpacity style={styles.item} activeOpacity={0.85}>
      <View style={styles.itemIcon}>
        <Text style={styles.itemEmoji}>🎮</Text>
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemMeta}>{item.genre} · {item.players} players</Text>
      </View>
      {statusBadge[item.status]}
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <Input
            placeholder="Search games, events, communities..."
            value={search}
            onChangeText={setSearch}
            containerStyle={styles.searchInput}
            dark
          />
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            renderItem={({ item: cat }) => (
              <TouchableOpacity
                style={[styles.chip, activeCategory === cat && styles.chipActive]}
                onPress={() => setActiveCategory(cat)}
              >
                <Text style={[styles.chipText, activeCategory === cat && styles.chipTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            )}
            style={styles.categoryList}
            contentContainerStyle={styles.categoryContent}
          />
        </View>

        <FlatList
          data={filtered}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found</Text>
          }
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,
  header: { paddingHorizontal: spacing[4], paddingBottom: 0 } as ViewStyle,
  title: { ...typography.displayMd, color: colors.white, marginBottom: spacing[4] } as TextStyle,
  searchInput: { marginBottom: spacing[3] } as ViewStyle,
  categoryList: { marginHorizontal: -spacing[4] } as ViewStyle,
  categoryContent: {
    paddingHorizontal: spacing[4],
    gap: spacing[2],
    paddingBottom: spacing[3],
  } as ViewStyle,
  chip: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderRadius: borderRadius.full,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'transparent',
  } as ViewStyle,
  chipActive: {
    borderColor: colors.primary,
    backgroundColor: 'rgba(255,58,26,0.12)',
  } as ViewStyle,
  chipText: { ...typography.label, color: '#9CA3AF' } as TextStyle,
  chipTextActive: { color: colors.primary } as TextStyle,
  list: { padding: spacing[4] } as ViewStyle,
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: borderRadius.DEFAULT,
    padding: spacing[3],
    marginBottom: spacing[3],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,
  itemIcon: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.DEFAULT,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  } as ViewStyle,
  itemEmoji: { fontSize: 24 } as TextStyle,
  itemInfo: { flex: 1 } as ViewStyle,
  itemName: { ...typography.label, color: colors.white } as TextStyle,
  itemMeta: { ...typography.caption, color: '#9CA3AF', marginTop: 2 } as TextStyle,
  emptyText: {
    ...typography.bodyMd,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: spacing[7],
  } as TextStyle,
});

export default ExploreScreen;
