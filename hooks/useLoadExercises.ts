import { defaultPlankList } from "@/data/defaultPlank";
import type { IPlankCollection } from "@/types/plank";
import { getFromStorage } from "@/utils/getFromStorage";
import { setToStorage } from "@/utils/setToStorage";
import { Dispatch, SetStateAction, useEffect } from "react";

export const useLoadExercises = (
  setExercises: Dispatch<SetStateAction<IPlankCollection>>,
  setLoaded: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await getFromStorage();

        let exercisesToSet: IPlankCollection;

        if (stored) {
          const parsed: IPlankCollection = JSON.parse(stored);
          exercisesToSet =
            !parsed.default || parsed.default.length === 0
              ? { ...parsed, default: defaultPlankList }
              : parsed;

          if (!parsed.default || parsed.default.length === 0) {
            await setToStorage(exercisesToSet);
          }
        } else {
          exercisesToSet = { default: defaultPlankList, custom: [] };
          await setToStorage(exercisesToSet);
        }

        setExercises(exercisesToSet);
      } catch (e) {
        console.log("Ошибка загрузки упражнений:", e);
      } finally {
        setLoaded(true);
      }
    };

    loadData();
  }, [setExercises, setLoaded]);
};
