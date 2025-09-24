import { useExercises } from "@/context/ExerciseContext";
import type { IPLank } from "@/types/plank";
import { useRouter } from "expo-router";

export const useManageUserPlankFomList = () => {
  const router = useRouter();

  const { setExercises, setLocalExercises } = useExercises();

  const handleDelete = (id: string) => {
    setExercises((prev) => prev.filter((e) => e.id !== id));
  };

  const handlePlankPress = (plank: IPLank) => {
    setLocalExercises({
      id: plank.id,
      title: plank.title,
      exercices: plank.exercices,
    });

    router.push("/newPlankScreen");
  };

  return {
    handleDelete,
    handlePlankPress,
  };
};
