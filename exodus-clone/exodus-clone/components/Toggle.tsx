import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

interface ToggleControlProps {
  leftLabel: string;
  rightLabel: string;

  selectedOption?: string;
  onOptionPress?: (option: string) => void;
}

const Toggle: React.FC<ToggleControlProps> = React.memo(
  ({ leftLabel, rightLabel, selectedOption, onOptionPress }) => {
    const [isLeftButtonActive, setIsLeftButtonActive] = useState(
      selectedOption === leftLabel
    );
    const buttonTranslateX = useRef(
      new Animated.Value(selectedOption === leftLabel ? 0 : 75)
    ).current;

    useEffect(() => {
      Animated.spring(buttonTranslateX, {
        toValue: isLeftButtonActive ? 2 : 75, // Half of the container width (150 / 2)
        useNativeDriver: true,
      }).start();
    }, [isLeftButtonActive]);

    const handleLeftTabClicked = () => {
      setIsLeftButtonActive(true);
      onOptionPress?.(leftLabel);
    };

    const handleRightTabClicked = () => {
      setIsLeftButtonActive(false);
      onOptionPress?.(rightLabel);
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
  }
);

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

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from 'react-native';
// import { Palette } from '../constants';
// import Animated, {
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';

// type SegmentedControlProps = {
//   options: string[];
//   selectedOption: string;
//   onOptionPress?: (option: string) => void;
// // };

// const SegmentedControl: React.FC<SegmentedControlProps> = React.memo(
//   ({ options, selectedOption, onOptionPress }) => {
//     const { width: windowWidth } = useWindowDimensions();

//     const internalPadding = 20;
//     const segmentedControlWidth = windowWidth - 40;

//     const itemWidth =
//       (segmentedControlWidth - internalPadding) / options.length;

//     const rStyle = useAnimatedStyle(() => {
//       return {
//         left: withTiming(
//           itemWidth * options.indexOf(selectedOption) + internalPadding / 2
//         ),
//       };
//     }, [selectedOption, options, itemWidth]);

//     return (
//       <View
//         style={[
//           styles.container,
//           {
//             width: segmentedControlWidth,
//             borderRadius: 20,
//             paddingLeft: internalPadding / 2,
//           },
//         ]}
//       >
//         <Animated.View
//           style={[
//             {
//               width: itemWidth,
//             },
//             rStyle,
//             styles.activeBox,
//           ]}
//         />
//         {options.map((option) => {
//           return (
//             <TouchableOpacity
//               onPress={() => {
//                 onOptionPress?.(option);
//               }}
//               key={option}
//               style={[
//                 {
//                   width: itemWidth,
//                 },
//                 styles.labelContainer,
//               ]}
//             >
//               <Text style={styles.label}>{option}</Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     height: 55,
//     backgroundColor: Palette.baseGray05,
//   },
//   activeBox: {
//     position: 'absolute',
//     borderRadius: 10,
//     shadowColor: 'black',
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//     shadowOpacity: 0.1,
//     elevation: 3,
//     height: '80%',
//     top: '10%',
//     backgroundColor: Palette.background,
//   },
//   labelContainer: { justifyContent: 'center', alignItems: 'center' },
//   label: {
//     fontFamily: 'SF-Compact-Rounded-Medium',
//     fontSize: 16,
//   },
// });

// export { SegmentedControl };
