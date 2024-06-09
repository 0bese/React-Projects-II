import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import dataJSON from "../api/infoApi";
import listData from "../api/listingsApi";
import { BlurView } from "expo-blur";
import { defaultStyles } from "@/constants/Styles";
import { CartesianChart, Line } from "victory-native";
import tickersData from "../api/tickers";
const Page = () => {
  let { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  return (
    <>
      <Stack.Screen
        options={{
          title: dataJSON[id].name,
          contentStyle: { backgroundColor: Colors.background },
        }}
      />
      <SectionList
        collapsable
        contentInsetAdjustmentBehavior="automatic"
        style={{ marginTop: headerHeight }}
        keyExtractor={(i) => i.title}
        sections={[{ data: [{ title: "Chart" }] }]}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              <Text style={styles.subtitle}> {dataJSON[id].symbol}</Text>
              <Image
                source={{
                  uri: dataJSON[id].logo,
                }}
                style={{ width: 60, height: 60 }}
              />
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <>
            <BlurView
              style={[
                defaultStyles.block,
                {
                  overflow: "hidden",
                  height: 400,
                  marginTop: 30,
                  padding: 0,
                  marginHorizontal: 20,
                },
              ]}
            >
              <View style={{ height: 150 }}></View>
              <CartesianChart
                onChartBoundsChange={() => 0}
                axisOptions={{
                  tickCount: { x: 0, y: 0 },
                  lineColor: "#fff",
                }}
                data={tickersData}
                xKey="timestamp"
                yKeys={["price"]}
              >
                {/* 👇 render function exposes various data, such as points. */}
                {({ points }) => (
                  // 👇 and we'll use the Line component to render a line path.
                  <Line points={points.price} color="#FF8F00" strokeWidth={3} />
                )}
              </CartesianChart>
            </BlurView>
          </>
        )}
      ></SectionList>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: Colors.gray,
  },
});
