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
  midLabel?: string;
  rightLabel?: string;
}

const Toggle3btn = ({ leftLabel, midLabel, rightLabel }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonTranslateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(buttonTranslateX, {
      toValue: activeIndex === 0 ? 10 : activeIndex * 99,
      useNativeDriver: true,
    }).start();
  }, [activeIndex]);

  const handleTabClicked = (index: number) => {
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
            {leftLabel}
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
            {midLabel}
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
            {rightLabel}
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
    padding: 8,
    marginLeft: 9,
    borderCurve: "continuous",
    position: "relative",
  },
  animatedIndicator: {
    position: "absolute",
    height: "95%",
    width: "33.333%",
    backgroundColor: "#8576FF",
    marginHorizontal: "auto",
    borderRadius: 25,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyles: {
    color: "#fff",
    fontSize: 16,
  },
  activeLabel: {
    color: "#FFF",
    fontWeight: "700",
  },
});
