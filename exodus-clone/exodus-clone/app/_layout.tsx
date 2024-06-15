import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import "react-native-reanimated";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Toggle from "@/components/Toggle";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [selectedOption, setSelectedOption] = useState("Buy");
  useEffect(() => {
    console.log(selectedOption);
    if (selectedOption === "Sell") {
    }
  }, [selectedOption]);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="crypto/[id]"
        options={{
          title: "",
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <AntDesign name="close" size={24} color={Colors.lightGray} />
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerLargeTitle: true,
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity>
                <AntDesign name="staro" size={24} color={Colors.lightGray} />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="setting" size={24} color={Colors.lightGray} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="currency/trade"
        options={{
          title: "",
          headerTitle: () => (
            <View>
              <Toggle
                leftLabel="Buy"
                rightLabel="Sell"
                options={["a", "b"]}
                selectedOption={selectedOption}
                onOptionPress={setSelectedOption}
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
              <AntDesign
                style={{ marginLeft: 5 }}
                name="arrowleft"
                size={24}
                color={Colors.lightGray}
              />
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerLargeTitle: true,
          headerRight: () => (
            <TouchableOpacity>
              <Entypo name="back-in-time" size={24} color={Colors.lightGray} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
