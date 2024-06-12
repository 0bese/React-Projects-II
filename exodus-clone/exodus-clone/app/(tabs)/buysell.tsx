import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Toggle from "@/components/Toggle";
import Toggle3btn from "@/components/Toggle3btn";

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
        <View style={{ margin: "auto" }}>
          <Image
            source={{
              uri: "https://pngtree.com/freepng/american-flag-usa-circle-icon_7925809.html",
            }}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View>
          <Toggle3btn leftLabel="$150" midLabel="$500" rightLabel="MAX" />
        </View>
      </ScrollView>
    </>
  );
};

export default Buysell;

const styles = StyleSheet.create({});
