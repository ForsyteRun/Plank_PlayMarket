import { Dimensions, Keyboard } from "react-native";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const containerPadding = 20;

export const useNewPlankFormAnimation = () => {
  const width = Dimensions.get("window").width;
  const startWidth = width - containerPadding * 2;

  const inputWidth = useSharedValue(startWidth);
  const borderWidth = useSharedValue(1);
  const borderColor = useSharedValue("#65a198");

  const animatedStyle = useAnimatedStyle(() => {
    "worklet";
    return {
      width: inputWidth.value,
      borderWidth: borderWidth.value,
      borderColor: borderColor.value,
    };
  });

  const handleFocus = () => {
    "worklet";
    inputWidth.value = withTiming(startWidth - 40, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    borderWidth.value = withTiming(borderWidth.value + 1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    borderColor.value = withTiming("#000", {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const handleBlur = () => {
    "worklet";
    inputWidth.value = withTiming(startWidth, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    borderWidth.value = withTiming(borderWidth.value - 1, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
    borderColor.value = withTiming("#65a198", {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });

    Keyboard.dismiss();
  };

  return {
    animatedStyle,
    containerPadding,
    handleFocus,
    handleBlur,
  };
};
