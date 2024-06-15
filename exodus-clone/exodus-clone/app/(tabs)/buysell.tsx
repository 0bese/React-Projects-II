import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect, Stack, Tabs, useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Toggle from "@/components/Toggle";
import Toggle3btn from "@/components/Toggle3btn";

const Buysell = () => {
  return <Redirect href={"../currency"} />;
};

export default Buysell;
