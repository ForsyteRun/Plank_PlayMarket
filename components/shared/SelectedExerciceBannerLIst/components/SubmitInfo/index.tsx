import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text, View } from "react-native";
interface ISubmitInfoProps {
  totalExercicesTime: string;
}

export default function SubmitInfo({ totalExercicesTime }: ISubmitInfoProps) {
  return (
    <View className="p-5 bg-SECONDARY">
      <Text className="text-2xl text-teal-800 mb-1">
        Общее время: {totalExercicesTime}
      </Text>
      <Text className="text-md text-teal-800">Выполнено: 0 раз</Text>
      <Pressable className="h-16 w-16 absolute right-3 flex items-center justify-center bottom-[-28px] z-20 bg-ORANGE px-4 py-2 rounded-2xl mt-5">
        <FontAwesome name="play" size={14} color="white" />
      </Pressable>
    </View>
  );
}
