import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, Stack, Tabs } from "expo-router";
import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import Toggle from "@/components/Toggle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
