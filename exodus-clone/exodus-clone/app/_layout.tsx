import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
              <AntDesign
                style={{ marginLeft: 5 }}
                name="close"
                size={24}
                color={Colors.lightGray}
              />
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
      <Stack.Screen name="currency/[id]" />
    </Stack>
  );
}
