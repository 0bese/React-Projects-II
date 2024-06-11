import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Toggle from "@/components/Toggle";

const Buysell = () => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <ScrollView
        style={{ paddingTop: "15%", backgroundColor: Colors.primary }}
      >
        <View style={{ position: "static" }}>
          <Toggle leftLabel="Buy" rightLabel="Sell" />
        </View>
        <Text>BTC </Text>
        <Text>BTC </Text>
        <Text>BTC </Text>
        <Text>BTC </Text>
      </ScrollView>
    </>
  );
};

export default Buysell;

const styles = StyleSheet.create({});
