import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import Toggle from "@/components/Toggle";

const Swap = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
      }}
    >
      <ScrollView>
        <View>
          <Toggle leftLabel="buy" rightLabel="sell" isLeftButtonActive={true} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Swap;

const styles = StyleSheet.create({});
