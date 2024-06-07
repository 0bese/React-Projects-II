import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabBar from '@/components/TabBar';
import { BlurView } from 'expo-blur';
export default function TabLayout() {
  //const colorScheme = useColorScheme();

  return (
    

    <Tabs
    tabBar = {props => <TabBar {...props} />}
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'primary'].tint,
        headerShown: false,
        tabBarBackground: () => <BlurView intensity={80} style={{
          flex: 1,
          backgroundColor: 'rgba(102, 89, 123, 0.72)'
        }} />,
        tabBarStyle:{
          backgroundColor: 'transparent',
        }
      }}
      >

      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="swap"
        options={{
          title: 'Swap',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="buysell"
        options={{
          title: 'Buysell',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
          // tabBarShowLabel: false
        }}
      />

    </Tabs>
  );
}
