import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import Toggle3btn from "@/components/Toggle3btn";
import sika from "../api/cntry";
import { defaultStyles } from "@/constants/Styles";

//wei

const trade = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: headerHeight }}
      style={{
        backgroundColor: Colors.primary,
      }}
    >
      <View>
        <View>
          <View
            style={{
              backgroundColor: "grey",
              borderRadius: 50,
              height: 30,
              width: 30,
            }}
          ></View>
          <Text> USD. </Text>
        </View>
        <Text> 150</Text>
      </View>
      <View>
        <View>
          <View
            style={{
              backgroundColor: "grey",
              borderRadius: 50,
              height: 30,
              width: 30,
            }}
          ></View>
          <Text> BTC. </Text>
        </View>
        <Text> ~0.0027</Text>
      </View>
      <View>
        <Toggle3btn leftLabel="$150" midLabel="$500" rightLabel="MAX" />
      </View>
      <Text>Debit Card with MoonPay</Text>

      <View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            {
              backgroundColor: Colors.primaryMuted,
              flexDirection: "row",

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
    </ScrollView>
  );
};

export default trade;

const styles = StyleSheet.create({});

// options={{
//   title: "",
//   header: () => (
//     <View style={{ paddingTop: top }}>
//       <Toggle leftLabel="Buy" rightLabel="Sell" />
//     </View>
//   ),
//   headerTransparent: true,
//   headerShown: true,
//   headerLeft: () => (
//     <TouchableOpacity onPress={router.back}>
//       <Ionicons
//         style={{ marginLeft: 200 }}
//         name="arrow-back-sharp"
//         size={24}
//         color={Colors.lightGray}
//       />
//     </TouchableOpacity>
//   ),
//   headerRight: () => (
//     <TouchableOpacity>
//       <Entypo name="back-in-time" size={24} color={Colors.lightGray} />
//     </TouchableOpacity>
//   ),
// }}
