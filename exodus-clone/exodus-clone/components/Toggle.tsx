import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef } from "react";

interface Props {
  leftLabel?: string;
  rightLabel?: string;
  isLeftButtonActive: boolean;
  onLeftTabClicked: () => void;
  onRightTabClicked: () => void;
}

const Toggle = ({
  leftLabel,
  rightLabel,
  isLeftButtonActive,
  onLeftTabClicked,
  onRightTabClicked,
}: Props) => {
  const width = Dimensions.get("window").width;

  const buttonTranslateX = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: isLeftButtonActive ? 0 : width / 2,
      useNativeDriver: false,
    }).start();
  }, [isLeftButtonActive]);

  return (
    <View style={styles.toggleContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.animatedIndicator}></TouchableOpacity>
      </View>
    </View>
  );
};

export default Toggle;

const styles = StyleSheet.create({
  toggleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    width: 150, // Each tab takes up equal space
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    flexDirection: "row",
  },
  animatedIndicator: {
    height: "100%", // Indicator covers the full height of the container
    width: "50%", // Indicator covers half the width of the container
    backgroundColor: "#8576FF", // Background color for the indicator
    borderRadius: 25,
  },
  labelStyles: {
    color: "#000", // Default label color
    fontSize: 16,
  },
  activeLabel: {
    color: "#FFF", // Active label color
    fontWeight: "bold",
  },
});

// {/* Left Button */}
// <TouchableOpacity style={styles.tabContainer}>
// <Text style={styles.labelStyles}>{leftLabel}</Text>
// </TouchableOpacity>
// {/* Right Button */}
// <TouchableOpacity onPress={onRightTabClicked} style={styles.tabContainer}>
// <Text
//   style={[
//     styles.labelStyles,
//     !isLeftButtonActive && styles.activeLabel,
//   ]}
// >
//   {rightLabel}
// </Text>
// </TouchableOpacity>
// {/* Animated Indicator */}
// <Animated.View
// style={[
//   styles.animatedIndicator,
//   {
//     transform: [{ translateX: buttonTranslateX }],
//   },
// ]}
// />
