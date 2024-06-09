import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import dataJSON from "../api/infoApi";
import listData from "../api/listingsApi";
import { BlurView } from "expo-blur";
import { defaultStyles } from "@/constants/Styles";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import tickersData from "../api/tickers";
import { Circle, useFont } from "@shopify/react-native-skia";
import * as Haptics from "expo-haptics";
import Animated, { SharedValue } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color={Colors.primary} />;
}

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Page = () => {
  let { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  useEffect(() => {
    // console.log(isActive);
    if (isActive) Haptics.selectionAsync();
  }, [isActive]);

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
              <View style={{ height: 150 }}>
                {!isActive && (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "300",
                        color: "#fff",
                      }}
                    >
                      $ {tickersData[tickersData.length - 1].price.toFixed(2)}
                    </Text>
                    <Text style={{ fontSize: 18, color: Colors.lightGray }}>
                      Today
                    </Text>
                  </View>
                )}
                {isActive && (
                  <View>
                    <AnimatedTextInput
                      editable={false}
                      underlineColorAndroid={"transparent"}
                      style={{
                        fontSize: 30,
                        fontWeight: "bold",
                        color: Colors.dark,
                      }}
                      animatedProps={animatedText}
                    ></AnimatedTextInput>
                    <AnimatedTextInput
                      editable={false}
                      underlineColorAndroid={"transparent"}
                      style={{ fontSize: 18, color: Colors.gray }}
                      animatedProps={animatedDateText}
                    ></AnimatedTextInput>
                  </View>
                )}
              </View>

              <CartesianChart
                chartPressState={state}
                axisOptions={{
                  font,
                  tickCount: { x: 0, y: 2 },
                  tickValues: {
                    x: [0, 72],
                    y: [39300, 72018],
                  },
                  lineColor: { grid: "#fff", frame: "transparent" },
                  labelColor: Colors.lightGray,
                  labelPosition: "inset",
                  labelOffset: { x: 0, y: 0 },
                  formatYLabel: (v) => `$${v}`,
                }}
                data={tickersData}
                xKey="timestamp"
                yKeys={["price"]}
              >
                {/* 👇 render function exposes various data, such as points. */}
                {({ points }) => (
                  // 👇 and we'll use the Line component to render a line path.
                  <>
                    <Line
                      points={points.price}
                      color="#FF8F00"
                      strokeWidth={3}
                    />
                    {isActive && (
                      <ToolTip
                        x={state.x.position}
                        y={state.y.price.position}
                      />
                    )}
                  </>
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
