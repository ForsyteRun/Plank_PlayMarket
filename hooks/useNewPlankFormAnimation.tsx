import { Dimensions, Keyboard } from "react-native";
import {
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

  const animatedStyle = useAnimatedStyle(() => ({
    width: inputWidth.value,
    borderWidth: borderWidth.value,
    borderColor: borderColor.value,
  }));

  const handleFocus = () => {
    inputWidth.value = withTiming(startWidth - 40, { duration: 300 });
    borderWidth.value = withTiming(borderWidth.value + 1, { duration: 300 });
    borderColor.value = withTiming("#000", { duration: 300 });
  };

  const handleBlur = () => {
    inputWidth.value = withTiming(startWidth, { duration: 300 });
    borderWidth.value = withTiming(borderWidth.value - 1, { duration: 300 });
    borderColor.value = withTiming("#65a198", { duration: 300 });

    Keyboard.dismiss();
  };

  return {
    animatedStyle,
    containerPadding,
    handleFocus,
    handleBlur,
  };
};
