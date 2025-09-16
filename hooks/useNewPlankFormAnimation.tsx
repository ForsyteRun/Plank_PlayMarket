import { useState } from "react";
import { Dimensions, Keyboard } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const containerPadding = 20;
export const useNewPlankFormAnimation = () => {
  const [isFocused, setIsFocused] = useState(false);

  const width = Dimensions.get("window").width;
  const startWidth = width - containerPadding * 2;
  const inputWidth = useSharedValue(startWidth);

  const animatedStyle = useAnimatedStyle(() => ({
    width: inputWidth.value,
  }));

  const handleFocus = () => {
    setIsFocused(true);
    inputWidth.value = withTiming(startWidth - 40, { duration: 300 });
  };

  const handleBlur = () => {
    setIsFocused(false);
    inputWidth.value = withTiming(startWidth, { duration: 300 });
    Keyboard.dismiss();
  };

  return {
    isFocused,
    animatedStyle,
    containerPadding,
    handleFocus,
    handleBlur,
  };
};
