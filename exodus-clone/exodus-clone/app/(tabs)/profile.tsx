import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";

const Profile = () => {
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: headerHeight,
      }}
    >
      <ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
        <Text>profile</Text>
        <Text>profile</Text>
        <Text>profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
