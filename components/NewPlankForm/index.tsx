import { useNewPlankFormAnimation } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";

interface INewPlankFormProps {
  title: string;
}

export default function NewPlankForm({ title }: INewPlankFormProps) {
  const {
    isFocused,
    handleFocus,
    handleBlur,
    animatedStyle,
    containerPadding,
  } = useNewPlankFormAnimation();

  return (
    <View
      className="pb-5 pt-2 bg-SECONDARY"
      style={{ paddingHorizontal: containerPadding }}
    >
      <View className="h-20 flex-row items-center gap-6">
        <Animated.View style={animatedStyle}>
          <TextInput
            placeholder={title}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              borderWidth: isFocused ? 2 : 1,
              borderColor: isFocused ? "#000" : "#65a198",
              borderRadius: 4,
              paddingHorizontal: isFocused ? 11 : 12,
              paddingVertical: 16,
              fontSize: 16,
            }}
          />
        </Animated.View>
        <AntDesign onPress={handleBlur} name="check" size={20} color="#000" />
      </View>
      <Text className=" text-teal-800">Общее время: 00:00</Text>
    </View>
  );
}
