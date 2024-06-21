import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import sika from "../api/cntry";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { defaultStyles } from "@/constants/Styles";
import { EvilIcons } from "@expo/vector-icons";

const Sika = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.searchSection}>
        <EvilIcons name="search" size={24} color="#CCC" />
        <TextInput
          style={styles.searchBox}
          placeholder={"Search..."}
          placeholderTextColor={"#CCC"}
          clearButtonMode="always"
          selectionColor="#CCC"
          autoCapitalize="none"
          autoCorrect={false}
          value={searchQuery}
          onChange={(query) => handleSearch(query)}
        />
      </View>
      <ScrollView style={{ backgroundColor: Colors.background }}>
        {sika.map((kudi) => (
          <BlurView style={styles.blurViewContainer}>
            <Link href={"/(tabs)/buyswap"} asChild>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  gap: 14,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
                >
                  <Image
                    source={{ uri: kudi.flag }}
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                  />
                  <View>
                    <Text>{kudi.code} </Text>
                    <Text> {kudi.name}</Text>
                  </View>
                </View>
                <AntDesign name="right" size={13} color="black" />
              </TouchableOpacity>
            </Link>
          </BlurView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sika;

const styles = StyleSheet.create({
  blurViewContainer: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    overflow: "hidden",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 3,
  },
  searchBox: {
    flex: 1,
  },
  searchSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 50,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#CCC",
    marginHorizontal: 10,
    marginBottom: 4,
    alignItems: "center",
  },
});
