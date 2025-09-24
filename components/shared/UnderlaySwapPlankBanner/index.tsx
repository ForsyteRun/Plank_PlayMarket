import type { IExercise, IPLank } from "@/types/plank";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TouchableOpacity, View } from "react-native";
import { useSwipeableItemParams } from "react-native-swipeable-item";

interface IUnderlayRightUserPlankProps {
  handleDelete: (id: string) => void;
}

export default function UnderlaySwapPlankBanner<T extends IPLank | IExercise>({
  handleDelete,
}: IUnderlayRightUserPlankProps) {
  const { item } = useSwipeableItemParams<T>();

  return (
    <View className="flex-1  bg-RED items-end justify-center pr-6">
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <MaterialIcons name="delete" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
}
