import {
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import dataJSON from "../api/infoApi";
import listData from "../api/listingsApi";
import { BlurView } from "expo-blur";
import { defaultStyles } from "@/constants/Styles";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import tickersData from "../api/tickers";
import {
  center,
  Circle,
  LinearGradient,
  useFont,
  vec,
} from "@shopify/react-native-skia";
import * as Haptics from "expo-haptics";
import Animated, {
  SharedValue,
  useAnimatedProps,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";

const filters = ["24H", "7D", "1M", "3M", "6M", "1Y"];

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Page = () => {
  let { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  const font = useFont(require("@/assets/fonts/SpaceMono-Regular.ttf"), 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const [activeIndex, setActiveIndex] = useState(0);

  function ToolTip({
    x,
    y,
  }: {
    x: SharedValue<number>;
    y: SharedValue<number>;
  }) {
    return <Circle cx={x} cy={y} r={8} color={lineColor} />;
  }
  useEffect(() => {
    if (isActive) Haptics.selectionAsync();
    switch (id) {
      case "1":
        setLineColor("#FF8F00");
        break;
      case "1027":
        setLineColor("#7091F5");
        break;
      case "825":
        setLineColor("#00FFD1");
        break;
      case "1839":
        setLineColor("#FFFF00");
        break;
      case "5426":
        setLineColor("#72FFFF");
        break;
    }
  }, [isActive, id]);

  const animatedText = useAnimatedProps(() => {
    return {
      text: `$ ${state.y.price.value.value.toFixed(2)}`,
      defaultValue: "",
    };
  });

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      text: `${date.toLocaleDateString()}`,
      defaultValue: "",
    };
  });

  const [filterNumber, setFilterNumber] = useState(0);
  function getRandomFilterNumber() {
    setFilterNumber(Math.floor(Math.random() * 69));
  }

  const [lineColor, setLineColor] = useState("");

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
                  height: 600,
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
                  <GestureHandlerRootView>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AnimatedTextInput
                        editable={false}
                        underlineColorAndroid={"transparent"}
                        style={{
                          fontSize: 30,
                          fontWeight: "300",
                          color: "#fff",
                        }}
                        animatedProps={animatedText}
                      ></AnimatedTextInput>
                      <AnimatedTextInput
                        editable={false}
                        underlineColorAndroid={"transparent"}
                        style={{ fontSize: 18, color: Colors.lightGray }}
                        animatedProps={animatedDateText}
                      ></AnimatedTextInput>
                    </View>
                  </GestureHandlerRootView>
                )}
              </View>
              <GestureHandlerRootView>
                <CartesianChart
                  chartPressState={state}
                  axisOptions={{
                    font,
                    tickCount: { x: 0, y: 2 },
                    tickValues: {
                      x: [filterNumber, 70],
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
                  {({ points, chartBounds }) => (
                    // 👇 and we'll use the Line component to render a line path.
                    <>
                      <Line
                        points={points.price}
                        color={lineColor}
                        strokeWidth={3}
                        animate={{ type: "timing", duration: 500 }}
                      />
                      <Area
                        points={points.price}
                        y0={chartBounds.bottom}
                        animate={{ type: "timing", duration: 500 }}
                      >
                        <LinearGradient
                          start={vec(chartBounds.bottom, 10)}
                          end={vec(chartBounds.bottom, chartBounds.bottom)}
                          colors={[lineColor, "transparent"]}
                        />
                      </Area>
                      {isActive && (
                        <ToolTip
                          x={state.x.position}
                          y={state.y.price.position}
                        />
                      )}
                    </>
                  )}
                </CartesianChart>
              </GestureHandlerRootView>
              <View
                style={{
                  height: 50,

                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 20,
                }}
              >
                {filters.map((filter, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setActiveIndex(index);
                      getRandomFilterNumber();
                    }}
                    key={index}
                    style={
                      activeIndex === index ? styles.categoriesBtnActive : ""
                    }
                  >
                    <Text
                      style={{
                        color: "#fff",
                      }}
                    >
                      {filter}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              <View
                style={{
                  height: 90,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: 20,
                    }}
                  >
                    0
                  </Text>
                  <Text
                    style={{
                      color: "#373A40",
                    }}
                  >
                    {dataJSON[id].symbol}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    borderLeftWidth: 1,
                    borderLeftColor: Colors.lightGray,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 600,
                      color: "#fff",
                      fontSize: 20,
                    }}
                  >
                    $0.00
                  </Text>
                  <Text
                    style={{
                      color: "#373A40",
                    }}
                  >
                    Value
                  </Text>
                </View>
              </View>
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
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  categoryTextActive: {
    fontSize: 14,
    color: "#000",
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  categoriesBtnActive: {
    padding: 7,
    paddingHorizontal: 14,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(34, 67, 71, 0.4)",
    borderRadius: 6,
  },
});
