import type { IExercise, IPLank } from "@/types/plank";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";

interface IUnderlayRightUserPlankProps {
  handleDelete: () => void;
}

export default function UnderlaySwapPlankBanner<T extends IPLank | IExercise>({
  handleDelete,
}: IUnderlayRightUserPlankProps) {
  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();

    handleDelete();
  };

  return (
    <View className="flex-1  bg-RED items-end justify-center pr-6">
      <TouchableOpacity onPressIn={handlePress}>
        <MaterialIcons name="delete" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
}
