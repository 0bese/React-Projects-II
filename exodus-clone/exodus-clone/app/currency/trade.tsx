import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";

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
        <Text> this is the trade place</Text>
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
