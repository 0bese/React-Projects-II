import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { BlurView } from "expo-blur";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      // tabBarActiveTintColor: Colors[colorScheme ?? 'primary'].tint,
      headerShown: false,
      tabBarBackground: () => (
        <BlurView
          intensity={100}
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        />
      ),
      tabBarStyle: {
        backgroundColor: "rgba(102, 89, 123, 0.72)",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="buysell"
        options={{
          title: "Buysell",
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
          // tabBarShowLabel: false
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
          // tabBarShowLabel: false
        }}
      />
    </Tabs>
  );
}
