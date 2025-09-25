import ListTitle from "@/components/shared/ListTitle";
import { useExercises } from "@/context/ExerciseContext";
import { FlatList, View } from "react-native";
import UserPlank from "./component/UserPlank";

export default function UserPlankList() {
  const { exercises } = useExercises();

  return (
    <View className="flex-1">
      <ListTitle title="Пользовательские упражнения" />

      <FlatList
        data={exercises.custom}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserPlank plank={item} key={item.id} editEnabled={true} />
        )}
      />
    </View>
  );
}
