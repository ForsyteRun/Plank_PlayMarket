import { useState } from "react";
import { Dimensions } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const containerPadding = 20;
export const NewPlankFormAnimation = () => {
  const [isFocused, setIsFocused] = useState(false);

  const width = Dimensions.get("window").width;
  const startWidth = width - containerPadding * 2;
  const inputWidth = useSharedValue(startWidth);

  const animatedStyle = useAnimatedStyle(() => ({
    width: inputWidth.value,
  }));

  const handleFocus = () => {
    setIsFocused(true);
    inputWidth.value = withTiming(width - 80, { duration: 300 });
  };

  const handleBlur = () => {
    setIsFocused(false);
    inputWidth.value = withTiming(width + 70, { duration: 300 });
  };

  return {
    isFocused,
    handleFocus,
    handleBlur,
    animatedStyle,
    containerPadding,
  };
};
