import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  leftLabel?: string;
  rightLabel?: string;
}

const Toggle = ({ leftLabel, rightLabel }: Props) => {
  const [isLeftButtonActive, setIsLeftButtonActive] = useState(true);
  const buttonTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: isLeftButtonActive ? 2 : 75, // Half of the container width (150 / 2)
      useNativeDriver: true,
    }).start();
  }, [isLeftButtonActive]);

  const handleLeftTabClicked = () => {
    setIsLeftButtonActive(true);
  };

  const handleRightTabClicked = () => {
    setIsLeftButtonActive(false);
  };

  return (
    <View style={styles.toggleContainer}>
      <View style={styles.tabContainer}>
        <Animated.View
          style={[
            styles.animatedIndicator,
            {
              transform: [{ translateX: buttonTranslateX }],
            },
          ]}
        />
        <TouchableOpacity onPress={handleLeftTabClicked} style={styles.tab}>
          <Text
            style={[
              styles.labelStyles,
              isLeftButtonActive && styles.activeLabel,
            ]}
          >
            {leftLabel}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRightTabClicked} style={styles.tab}>
          <Text
            style={[
              styles.labelStyles,
              !isLeftButtonActive && styles.activeLabel,
            ]}
          >
            {rightLabel}
          </Text>
        </TouchableOpacity>
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
    width: 150,
    height: 45,
    borderRadius: 30,
    backgroundColor: "#26355D",
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    position: "relative",
  },
  animatedIndicator: {
    position: "absolute",
    height: "100%",
    width: "50%",
    backgroundColor: "#8576FF",
    borderRadius: 25,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyles: {
    color: "#000",
    fontSize: 16,
  },
  activeLabel: {
    color: "#FFF",
    fontWeight: "700",
  },
});
