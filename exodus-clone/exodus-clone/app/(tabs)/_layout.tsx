import { StyleSheet } from "react-native";
import React from "react";
import { router, Stack, Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Layout = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tabs
      backBehavior="history"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="buysell"
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarStyle: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
