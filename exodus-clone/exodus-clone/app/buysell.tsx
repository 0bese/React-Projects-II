import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";

const Buysell = () => {
  const headerHeight = useHeaderHeight();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
      }}
    >
      <ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
        <Text>buy-sell</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Buysell;

const styles = StyleSheet.create({});
