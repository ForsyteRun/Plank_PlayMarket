import { NewPlankFormAnimation } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";

export default function NewPlankForm() {
  const {
    isFocused,
    handleFocus,
    handleBlur,
    animatedStyle,
    containerPadding,
  } = NewPlankFormAnimation();

  return (
    <View
      className="flex justify-between bg-SECONDARY"
      style={{ padding: containerPadding }}
    >
      <View className="flex-row items-center gap-6">
        <Animated.View style={animatedStyle}>
          <TextInput
            placeholder="Новое Упражнение"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              borderWidth: isFocused ? 2 : 1,
              borderColor: isFocused ? "#000" : "#65a198",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 16,
              fontSize: 16,
            }}
          />
        </Animated.View>
        <AntDesign name="check" size={20} color="#000" />
      </View>
      <Text className="mt-1 text-teal-800">Общее время: 00:00</Text>
    </View>
  );
}
