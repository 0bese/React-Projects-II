import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, Stack, Tabs, useSegments } from "expo-router";
import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import Toggle from "@/components/Toggle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Layout = () => {
  const { top } = useSafeAreaInsets();
  const segment = useSegments();
  const page = segment[segment.length - 1];
  const pagesToHideTabBar = ["buysell"];
  return (
    <Tabs
      backBehavior="history"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarStyle: {
          display: pagesToHideTabBar.includes(page) ? "none" : "flex",
        },
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
          tabBarStyle: { display: segment[3] === "/buysell" ? "none" : "flex" },
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
