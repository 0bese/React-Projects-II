import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import Toggle from "@/components/Toggle";

const Layout = () => {
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
          title: "",
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

export default Layout;

const styles = StyleSheet.create({});
