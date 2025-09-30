import { useNewPlankFormAnimation } from "@/hooks";
import { Dispatch, SetStateAction, useState } from "react";
import { TextInput, View } from "react-native";
import Animated from "react-native-reanimated";
import AntPressbleIcon from "../shared/AntIcon";

interface INewPlankFormProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

export default function NewPlankForm({ title, setTitle }: INewPlankFormProps) {
  const { handleFocus, handleBlur, animatedStyle } = useNewPlankFormAnimation();

  const [inputValue, setInputValue] = useState(title);

  const handlePress = () => {
    setTitle(inputValue);
    handleBlur();
  };

  return (
    <View className="h-20 flex-row items-center gap-6">
      <Animated.View style={animatedStyle} className="rounded-lg">
        <TextInput
          placeholder={title}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setInputValue(e.nativeEvent.text)}
          className="rounded px-3 py-4 text-base border border-transparent"
        />
      </Animated.View>
      <AntPressbleIcon title="check" callback={handlePress} color="#000" />
    </View>
  );
}
