import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Toggle3btn from "@/components/Toggle3btn";
import sika from "../api/cntry";
import { defaultStyles } from "@/constants/Styles";
import { Link, router, Stack, useLocalSearchParams } from "expo-router";
import Toggle from "@/components/Toggle";
import { AntDesign, Entypo } from "@expo/vector-icons";

//wei

const trade = () => {
  const headerHeight = useHeaderHeight();
  const [selectedOption, setSelectedOption] = useState("Buy");

  useEffect(() => {
    //console.log(selectedOption);
  }, [selectedOption]);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack.Screen
        options={{
          title: "",
          headerTitle: () => (
            <View>
              <Toggle
                leftLabel="Buy"
                rightLabel="Sell"
                selectedOption={selectedOption}
                onOptionPress={setSelectedOption}
              />
            </View>
          ),

          headerTransparent: true,
          headerLargeTitle: true,
        }}
      />
      <ScrollView contentContainerStyle={{ paddingTop: headerHeight }}>
        {selectedOption === "Buy" ? (
          <>
            <View style={styles.currContainer}>
              <View key={sika[0].code} style={styles.sikaContainer}>
                <Link href={`../sika/${sika[0].code}`} asChild>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "grey",
                        borderRadius: 50,
                        height: 30,
                        width: 30,
                      }}
                    ></View>
                    <Text style={{ color: Colors.lightGray }}>
                      {" "}
                      {sika[1].code}{" "}
                    </Text>
                    <Entypo
                      name="chevron-small-down"
                      size={24}
                      color={Colors.lightGray}
                    />
                  </TouchableOpacity>
                </Link>
              </View>
              <Text style={{ color: Colors.lightGray }}> 150</Text>
            </View>

            <View style={styles.currContainer}>
              <View key={sika[1].code} style={styles.sikaContainer}>
                <Link href={`/random`} asChild>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "grey",
                        borderRadius: 50,
                        height: 30,
                        width: 30,
                      }}
                    ></View>
                    <Text style={{ color: Colors.lightGray }}> BTC. </Text>
                    <Entypo
                      name="chevron-small-down"
                      size={24}
                      color={Colors.lightGray}
                    />
                  </TouchableOpacity>
                </Link>
              </View>
              <Text style={{ color: Colors.lightGray }}> ~0.0027</Text>
            </View>

            <View>
              <Toggle3btn leftLabel="$150" midLabel="$500" rightLabel="MAX" />
            </View>
            <Text
              style={{ margin: "auto", color: Colors.lightGray, marginTop: 10 }}
            >
              Debit Card with MoonPay
            </Text>

            <View
              style={{
                flex: 1,
                height: 500,
              }}
            >
              <TouchableOpacity
                style={[
                  defaultStyles.pillButton,
                  {
                    backgroundColor: "#8576FF",
                    flexDirection: "row",
                    marginHorizontal: "auto",
                    marginTop: 450,
                    width: "50%",
                    borderCurve: "continuous",
                  },
                ]}
              >
                <Text style={[defaultStyles.buttonText, { color: "#fff" }]}>
                  {" "}
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View>
            <Text style={{ color: Colors.lightGray }}>
              {" "}
              This is the sell screen
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default trade;

const styles = StyleSheet.create({
  currContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  sikaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
