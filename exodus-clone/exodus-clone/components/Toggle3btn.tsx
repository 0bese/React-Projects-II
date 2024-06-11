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

const Toggle3btn = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: activeIndex * 100, // Assuming each button is one-third of the container width (150 / 3)
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const handleTabClicked = (index) => {
    setActiveIndex(index);
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
        <TouchableOpacity
          onPress={() => handleTabClicked(0)}
          style={styles.tab}
        >
          <Text
            style={[
              styles.labelStyles,
              activeIndex === 0 && styles.activeLabel,
            ]}
          >
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabClicked(1)}
          style={styles.tab}
        >
          <Text
            style={[
              styles.labelStyles,
              activeIndex === 1 && styles.activeLabel,
            ]}
          >
            Sell
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleTabClicked(2)}
          style={styles.tab}
        >
          <Text
            style={[
              styles.labelStyles,
              activeIndex === 2 && styles.activeLabel,
            ]}
          >
            Hold
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Toggle3btn;

const styles = StyleSheet.create({
  toggleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    width: 300,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#26355D",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    position: "relative",
  },
  animatedIndicator: {
    position: "absolute",
    height: "95%",
    width: "33%", // Indicator covers one-third the width of the container
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
