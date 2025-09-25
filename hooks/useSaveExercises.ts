import type { IPlankCollection } from "@/types/plank";
import { setToStorage } from "@/utils/setToStorage";
import { useEffect } from "react";

export const useSaveExercises = (
  exercises: IPlankCollection,
  loaded: boolean
) => {
  useEffect(() => {
    if (!loaded) return;

    const save = async () => {
      await setToStorage(exercises);
    };

    save();
  }, [exercises, loaded]);
};
