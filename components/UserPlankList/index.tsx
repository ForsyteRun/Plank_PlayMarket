import ListTitle from "@/components/shared/ListTitle";
import { useExercises } from "@/context/ExerciseContext";
import { View } from "react-native";
import PlankBanner from "../shared/PlankBanner";

export default function UserPlankList() {
  const { exercises } = useExercises();

  return (
    <View className="flex-1">
      <ListTitle title="Пользовательские упражнения" />
      <View className="flex justify-center gap-8">
        {exercises.map((plank) => (
          <PlankBanner
            id={plank.id}
            key={plank.id}
            title={plank.title}
            exercices={plank.exercices}
          />
        ))}
      </View>
    </View>
  );
}
