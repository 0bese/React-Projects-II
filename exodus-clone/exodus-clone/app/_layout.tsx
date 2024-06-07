import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";

const _layout = () => {
  return (
    <Tabs
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
          title: "BuySell",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
