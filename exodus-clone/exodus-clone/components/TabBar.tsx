import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
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
    index: (props) => <Entypo name="wallet" size={30} {...props} />,
    swap: (props) => <Entypo name="swap" size={30} {...props} />,
    buysell: (props) => (
      <MaterialCommunityIcons name="hexagon-outline" size={30} {...props} />
    ),
    profile: (props) => <AntDesign name="appstore1" size={30} {...props} />,
  };

  // State to manage visibility of the tab bar
  const [hideTabBar, setHideTabBar] = useState(false);

  // Function to check if tabBarStyle.display is "none" and update state accordingly
  const checkTabBarVisibility = () => {
    const routeKey = state.routes[state.index].key;
    const { options } = descriptors[routeKey];
    if (options.tabBarStyle?.display === "none") {
      setHideTabBar(true);
    } else {
      setHideTabBar(false);
    }
  };

  // Check initial visibility on component mount and when active tab changes
  useEffect(() => {
    checkTabBarVisibility();
  }, [state.index]);

  return (
    <>
      {!hideTabBar && (
        <BlurView intensity={100} style={styles.tabBarStyle}>
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
                    color={
                      isFocused ? Colors.tabIconGradient : Colors.lightGray
                    }
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </BlurView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "rgba(166, 137, 183, 0.2)",
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
});

export default TabBar;
