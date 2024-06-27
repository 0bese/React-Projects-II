import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, router, Stack } from "expo-router";
import Toggle from "@/components/Toggle";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Route } from "expo-router/build/Route";

const TradeLayout = () => {
  //   const [selectedOption, setSelectedOption] = useState("Buy");
  //   useEffect(() => {
  //     console.log(selectedOption);
  //   }, [selectedOption]);
  return (
    <Stack>
      <Stack.Screen
        name="trade"
        options={{
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back}>
              <AntDesign
                style={{ marginLeft: 5 }}
                name="arrowleft"
                size={24}
                color={Colors.lightGray}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Entypo name="back-in-time" size={24} color={Colors.lightGray} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default TradeLayout;

const styles = StyleSheet.create({});
