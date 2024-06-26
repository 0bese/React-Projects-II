import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import { Colors } from "../../constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useHeaderHeight } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import listData from "../api/listingsApi";

import dataJSON from "../api/infoApi";
import { currency } from "@/interfaces/Crypto";

const Page = () => {
  const headerHeight = useHeaderHeight();

  // const currencies = useQuery({
  //   queryKey: ["listings"],
  //   queryFn: () => fetch("/api/listings").then((res) => res.json()),
  // });

  // const ids = currencies.data
  //   ?.map((currency: Currency) => currency.id)
  //   .join(",");

  // const { data } = useQuery({
  //   queryKey: ["info", ids],
  //   queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
  //   enabled: !!ids,
  // });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView
        style={{
          backgroundColor: Colors.background,
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={{ uri: dataJSON[1].logo }}
            style={{ width: 200, height: 200, margin: 40 }}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[defaultStyles.sectionHeader, { color: "#fff" }]}>
            {" "}
            Start Your Journey
          </Text>
          <Text style={[defaultStyles.descriptionText, { color: "#C7C8CC" }]}>
            {" "}
            Manage crypto on multiple networks
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            gap: 20,
            margin: 12,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              {
                backgroundColor: Colors.primaryDark,
                flexDirection: "row",
                gap: 16,
                width: "45%",
                borderCurve: "continuous",
              },
            ]}
          >
            <Text style={[defaultStyles.buttonText, { color: "#fff" }]}>
              Receive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              defaultStyles.pillButton,
              {
                backgroundColor: Colors.primaryMuted,
                flexDirection: "row",
                gap: 16,
                width: "45%",
                borderCurve: "continuous",
              },
            ]}
          >
            <Text style={[defaultStyles.buttonText, { color: "#fff" }]}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
        <View style={defaultStyles.block}>
          {listData.map((currency) => (
            <BlurView key={currency.id} style={styles.blurViewContainer}>
              <Link href={`/crypto/${currency.id}`} asChild>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    gap: 14,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: dataJSON[currency.id].logo }}
                    style={{ width: 40, height: 40 }}
                  />
                  <View style={{ flex: 1, gap: 6 }}>
                    <Text style={{ fontWeight: "600", color: Colors.dark }}>
                      {currency.name}
                    </Text>
                    <Text style={{ color: Colors.lightGray }}>
                      {currency.symbol}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons
                      name={
                        currency.quote.EUR.percent_change_1h > 0
                          ? "caret-up"
                          : "caret-down"
                      }
                      size={16}
                      color={
                        currency.quote.EUR.percent_change_1h > 0
                          ? "green"
                          : "red"
                      }
                    />
                    <Text
                      style={{
                        color:
                          currency.quote.EUR.percent_change_1h > 0
                            ? "green"
                            : "red",
                      }}
                    >
                      {currency.quote.EUR.percent_change_1h.toFixed(2)} %
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>
            </BlurView>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blurViewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
});

export default Page;
