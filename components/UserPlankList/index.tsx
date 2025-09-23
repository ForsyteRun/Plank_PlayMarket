import ListTitle from "@/components/shared/ListTitle";
import { useExercises } from "@/context/ExerciseContext";
import type { IPLank } from "@/types/plank";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import PlankBanner from "../shared/PlankBanner";

export default function UserPlankList() {
  const { exercises, setLocalExercises } = useExercises();

  const router = useRouter();

  const handlePlankPress = (plank: IPLank) => {
    setLocalExercises({
      id: plank.id,
      title: plank.title,
      exercices: plank.exercices,
    });

    router.push("/newPlankScreen");
  };

  return (
    <View className="flex-1">
      <ListTitle title="Пользовательские упражнения" />
      <View className="flex justify-center gap-8">
        {exercises.map((plank) => (
          <Pressable key={plank.id} onPress={() => handlePlankPress(plank)}>
            <PlankBanner
              id={plank.id}
              title={plank.title}
              exercices={plank.exercices}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
