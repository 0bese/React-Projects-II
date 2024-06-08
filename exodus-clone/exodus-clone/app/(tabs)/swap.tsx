import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

const Swap = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
      }}
    >
      <View>
        <Text>Swap</Text>
        <Text>Swap</Text>
        <Text>Swap</Text>
      </View>
    </SafeAreaView>
  );
};

export default Swap;

const styles = StyleSheet.create({});
