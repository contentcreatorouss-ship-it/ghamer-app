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
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors, spacing, typography, borderRadius } from '../../theme';

interface Post {
  id: string;
  author: string;
  handle: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
  badge?: string;
}

const mockPosts: Post[] = [
  {
    id: '1',
    author: 'XxSniper99',
    handle: '@sniper99',
    content: 'Anyone up for Warzone quads tonight? Drop a 👋 if you\'re down. We need 2 more, preferably ranked Platinum+.',
    likes: 18,
    comments: 12,
    time: '3m ago',
    badge: 'Pro',
  },
  {
    id: '2',
    author: 'PixelPrincess',
    handle: '@pixelprincess',
    content: 'Just organized the first Indie Game Jam in our city! 48 hours, no sleep, 6 games shipped. Proud of everyone 🎮🔥',
    likes: 64,
    comments: 28,
    time: '25m ago',
    badge: 'Organizer',
  },
  {
    id: '3',
    author: 'RetroKing',
    handle: '@retroking',
    content: 'Hosting retro game night this Friday. SNES, N64, Dreamcast. Free snacks. Limited to 20 people so comment to save your spot!',
    likes: 41,
    comments: 19,
    time: '1h ago',
  },
  {
    id: '4',
    author: 'MLGzilla',
    handle: '@mlgzilla',
    content: 'Top 3 in the city ranking! The grind was real. Thanks everyone who helped me practice this month 🏆',
    likes: 99,
    comments: 34,
    time: '2h ago',
    badge: 'Champion',
  },
];

const CommunityScreen: React.FC = () => {
  const [liked, setLiked] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const renderPost: ListRenderItem<Post> = ({ item }) => {
    const isLiked = liked.has(item.id);
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{item.author[0]}</Text>
          </View>
          <View style={styles.postMeta}>
            <View style={styles.authorRow}>
              <Text style={styles.authorName}>{item.author}</Text>
              {item.badge && (
                <Badge label={item.badge} variant="primary" size="sm" style={styles.authorBadge} />
              )}
            </View>
            <Text style={styles.postHandle}>{item.handle} · {item.time}</Text>
          </View>
          <TouchableOpacity style={styles.moreBtn}>
            <Text style={styles.moreIcon}>···</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.postContent}>{item.content}</Text>

        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionBtn} onPress={() => toggleLike(item.id)}>
            <Text style={styles.actionEmoji}>{isLiked ? '❤️' : '🤍'}</Text>
            <Text style={[styles.actionCount, isLiked && styles.actionCountLiked]}>
              {item.likes + (isLiked ? 1 : 0)}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionEmoji}>💬</Text>
            <Text style={styles.actionCount}>{item.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Text style={styles.actionEmoji}>↗️</Text>
            <Text style={styles.actionCount}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <View style={styles.header}>
          <Text style={styles.title}>Community</Text>
          <Button label="+ Post" size="sm" onPress={() => {}} />
        </View>

        <FlatList
          data={mockPosts}
          renderItem={renderPost}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.black } as ViewStyle,
  safe: { flex: 1 } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing[4],
    paddingBottom: spacing[3],
  } as ViewStyle,
  title: { ...typography.displayMd, color: colors.white } as TextStyle,
  list: { paddingBottom: spacing[7] } as ViewStyle,

  post: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    backgroundColor: colors.black,
  } as ViewStyle,

  postHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing[3],
  } as ViewStyle,

  avatar: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing[3],
  } as ViewStyle,
  avatarText: { ...typography.h4, color: colors.white } as TextStyle,

  postMeta: { flex: 1 } as ViewStyle,
  authorRow: { flexDirection: 'row', alignItems: 'center', gap: spacing[2] } as ViewStyle,
  authorName: { ...typography.label, color: colors.white } as TextStyle,
  authorBadge: {} as ViewStyle,
  postHandle: { ...typography.caption, color: '#6B7280', marginTop: 2 } as TextStyle,

  moreBtn: { padding: spacing[2] } as ViewStyle,
  moreIcon: { ...typography.h3, color: '#6B7280', letterSpacing: 2 } as TextStyle,

  postContent: {
    ...typography.bodyMd,
    color: '#E4E4E7',
    lineHeight: 24,
    marginBottom: spacing[4],
  } as TextStyle,

  postActions: {
    flexDirection: 'row',
    gap: spacing[5],
    paddingTop: spacing[3],
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  } as ViewStyle,

  actionBtn: { flexDirection: 'row', alignItems: 'center', gap: spacing[2] } as ViewStyle,
  actionEmoji: { fontSize: 16 } as TextStyle,
  actionCount: { ...typography.bodySm, color: '#9CA3AF' } as TextStyle,
  actionCountLiked: { color: '#FB7185' } as TextStyle,

  separator: { height: 1, backgroundColor: 'rgba(255,255,255,0.06)' } as ViewStyle,
});

export default CommunityScreen;
