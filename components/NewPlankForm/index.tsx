import { useNewPlankFormAnimation } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dispatch, SetStateAction, useState } from "react";
import { Text, TextInput, View } from "react-native";
import Animated from "react-native-reanimated";

interface INewPlankFormProps {
  edit: boolean;
  title: string;
  totalExercicesTime: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export default function NewPlankForm({
  edit,
  title,
  totalExercicesTime,
  setTitle,
}: INewPlankFormProps) {
  const { handleFocus, handleBlur, animatedStyle, containerPadding } =
    useNewPlankFormAnimation();

  const [inputValue, setInputValue] = useState(edit ? title : "");
  const handlePress = () => {
    setTitle(inputValue);
    handleBlur();
  };

  return (
    <View
      className="pb-5 pt-2 bg-SECONDARY"
      style={{ paddingHorizontal: containerPadding }}
    >
      <View className="h-20 flex-row items-center gap-6">
        <Animated.View style={animatedStyle} className="rounded-lg">
          <TextInput
            placeholder={title}
            value={inputValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => setInputValue(e.nativeEvent.text)}
            className="rounded px-3 py-4 text-base border border-transparent"
          />
        </Animated.View>
        <AntDesign onPress={handlePress} name="check" size={20} color="#000" />
      </View>
      <Text className=" text-teal-800">Общее время: {totalExercicesTime}</Text>
    </View>
  );
}
