import type { IPLank, IPlankCollection } from "@/types/plank";
import { getUniqueId } from "@/utils/getUniqueId";

export function createOrUpdatePlank(
  prev: IPlankCollection,
  localExercises: IPLank,
  title: string,
  INIT_TITLE: string
): IPlankCollection {
  const newPlank: IPLank = {
    id: localExercises.id || getUniqueId(),
    title: title.trim() || INIT_TITLE,
    exercices: [...localExercises.exercices],
    count: localExercises.count,
  };

  const existsInCustom = prev.custom.some((plank) => plank.id === newPlank.id);
  const existsInDefault = prev.default.some(
    (plank) => plank.id === newPlank.id
  );

  if (existsInCustom) {
    return {
      ...prev,
      custom: prev.custom.map((plank) =>
        plank.id === newPlank.id ? newPlank : plank
      ),
    };
  }

  if (existsInDefault) {
    return {
      ...prev,
      default: prev.default.map((plank) =>
        plank.id === newPlank.id ? { ...plank, count: newPlank.count } : plank
      ),
    };
  }

  return {
    ...prev,
    custom: [...prev.custom, newPlank],
  };
}
