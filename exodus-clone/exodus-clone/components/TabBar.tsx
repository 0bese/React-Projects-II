import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { Colors } from "@/constants/Colors";
import { Entypo, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

type RouteIconProps = {
  color: string;
  [key: string]: any;
};

type IconComponents = {
  [key: string]: (props: RouteIconProps) => JSX.Element;
};

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const icons: IconComponents = {
    index: (props) => (
      <Entypo name="wallet" size={26} color={Colors.greyColor} {...props} />
    ),
    swap: (props) => (
      <Entypo name="swap" size={26} color={Colors.greyColor} {...props} />
    ),
    buysell: (props) => (
      <MaterialCommunityIcons
        name="hexagon-outline"
        size={26}
        color={Colors.greyColor}
        {...props}
      />
    ),
    profile: (props) => (
      <AntDesign
        name="appstore1"
        size={26}
        color={Colors.greyColor}
        {...props}
      />
    ),
  };

  return (
    <BlurView intensity={90} style={styles.tabBarStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (["_sitemap", "+not-found"].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const IconComponent = icons[route.name];

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarItem}
          >
            {IconComponent && (
              <IconComponent
                color={isFocused ? Colors.tabIconGradient : Colors.greyColor}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "rgba(94, 79, 113, 0.6)",
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    overflow: "hidden",
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  tabBarContainer: {
    borderRadius: 9,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default TabBar;
