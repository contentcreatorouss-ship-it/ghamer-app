import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import MapScreen from '../screens/Map';
import CommunityScreen from '../screens/Community';
import ProfileScreen from '../screens/Profile';
import { MainTabParamList } from './types';
import { colors, borderRadius, spacing, typography, shadows } from '../theme';

const Tab = createBottomTabNavigator<MainTabParamList>();

interface TabIconProps {
  label: string;
  focused: boolean;
  emoji: string;
}

const TabIcon: React.FC<TabIconProps> = ({ label, focused, emoji }) => (
  <View style={[tabStyles.iconWrap, focused && tabStyles.iconWrapActive]}>
    <Text style={tabStyles.emoji}>{emoji}</Text>
    <Text style={[tabStyles.label, focused && tabStyles.labelActive]}>{label}</Text>
  </View>
);

const TAB_CONFIG: Record<keyof MainTabParamList, { emoji: string; label: string }> = {
  Home: { emoji: '🏠', label: 'Home' },
  Explore: { emoji: '🔍', label: 'Explore' },
  Map: { emoji: '📍', label: 'Nearby' },
  Community: { emoji: '💬', label: 'Feed' },
  Profile: { emoji: '👤', label: 'Profile' },
};

const MainTabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: tabStyles.tabBar,
      tabBarIcon: ({ focused }) => {
        const cfg = TAB_CONFIG[route.name as keyof MainTabParamList];
        return <TabIcon label={cfg.label} focused={focused} emoji={cfg.emoji} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const tabStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black,
    borderTopColor: 'rgba(255,255,255,0.08)',
    borderTopWidth: 1,
    height: Platform.OS === 'ios' ? 88 : 68,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingTop: spacing[2],
    ...shadows.md,
  } as ViewStyle,

  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[1],
    borderRadius: borderRadius.DEFAULT,
    gap: 2,
  } as ViewStyle,

  iconWrapActive: {
    backgroundColor: 'rgba(255,58,26,0.15)',
  } as ViewStyle,

  emoji: {
    fontSize: 20,
  } as TextStyle,

  label: {
    ...typography.caption,
    color: '#6B7280',
    fontSize: 10,
  } as TextStyle,

  labelActive: {
    color: colors.primary,
    fontWeight: '600',
  } as TextStyle,
});

export default MainTabNavigator;
