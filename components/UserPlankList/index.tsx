import ListTitle from "@/components/shared/ListTitle";
import { useAppSelector } from "@/store/hooks";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import UserPlank from "./component/UserPlank";

export default function UserPlankList() {
  const customExercises = useAppSelector((state) => state.exercises.custom);

  return (
    <View className="flex-1">
      <ListTitle title="Пользовательские упражнения" />

      <FlashList
        data={customExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserPlank plank={item} key={item.id} editEnabled={true} />
        )}
      />
    </View>
  );
}
