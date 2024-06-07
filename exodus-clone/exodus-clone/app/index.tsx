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
import { Colors } from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useHeaderHeight } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { Currency } from "@/interfaces/Crypto";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });

  const ids = currencies.data
    ?.map((currency: Currency) => currency.id)
    .join(",");

  const { data } = useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <ScrollView
        style={{
          backgroundColor: Colors.background,
        }}
      >
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
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blurViewContainer: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 15,
    overflow: "hidden",
    borderRadius: 5,
  },
});

export default Page;
