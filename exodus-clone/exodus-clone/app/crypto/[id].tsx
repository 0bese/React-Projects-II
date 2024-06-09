import { ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
const Page = () => {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  console.log(id);

  return (
    <>
      <Stack.Screen options={{ title: "Bitcoin" }} />
      <SectionList
        contentInsetAdjustmentBehavior="automatic"
        style={{ backgroundColor: Colors.background }}
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
              <Text style={styles.subtitle}> BTC</Text>
            </View>
          </>
        )}
        renderItem={({ item }) => <Text> nvm</Text>}
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
