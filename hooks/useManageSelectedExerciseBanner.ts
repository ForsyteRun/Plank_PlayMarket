import { useExercises } from "@/context/ExerciseContext";
import { useEffect, useRef } from "react";
import { SwipeableItemImperativeRef } from "react-native-swipeable-item";

export const useManageSelectedExerciseBanner = (
  itemId: string,
  submitted: boolean
) => {
  const swipeableRefs = useRef<SwipeableItemImperativeRef[]>([]);

  const { setLocalExercises } = useExercises();

  useEffect(() => {
    if (submitted) {
      swipeableRefs.current.forEach((ref) => ref?.close());
    }
  }, [submitted]);

  const handleDelete = () => {
    setLocalExercises((plank) => ({
      ...plank,
      exercices: plank.exercices.filter((e) => e.id !== itemId),
    }));
  };

  return {
    swipeableRefs,
    handleDelete,
  };
};
