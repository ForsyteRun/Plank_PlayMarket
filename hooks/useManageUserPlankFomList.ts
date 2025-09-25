import { useExercises } from "@/context/ExerciseContext";
import type { IPLank } from "@/types/plank";
import { useRouter } from "expo-router";

export const useManageUserPlankFomList = () => {
  const router = useRouter();

  const { setExercises, setLocalExercises } = useExercises();

  const handleDelete = (id: string) => {
    setExercises((prev) => ({
      ...prev,
      custom: prev.custom.filter((e) => e.id !== id),
    }));
  };

  const handlePlankPress = (plank: IPLank, editEnabled: boolean) => {
    setLocalExercises({
      id: plank.id,
      title: plank.title,
      exercices: plank.exercices,
      count: plank.count,
      editEnabled,
    });

    router.push("/newPlankScreen");
  };

  return {
    handleDelete,
    handlePlankPress,
  };
};
