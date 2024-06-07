import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
      }}
    >
      <View>
        <Text>Dead end</Text>
      </View>
    </SafeAreaView>
  );
};
// export default Home;
const styles = StyleSheet.create({});
