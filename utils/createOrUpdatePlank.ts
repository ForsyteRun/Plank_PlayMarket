import type { IPLank } from "@/types/plank";
import { getUniqueId } from "@/utils/getUniqueId";

export function createOrUpdatePlank(
  prev: IPLank[],
  localExercises: IPLank,
  title: string,
  INIT_TITLE: string
): IPLank[] {
  const newPlank: IPLank = {
    id: localExercises.id || getUniqueId(),
    title: title.trim() || INIT_TITLE,
    exercices: [...localExercises.exercices],
  };

  const exists = prev.some((plank) => plank.id === newPlank.id);

  return exists
    ? prev.map((plank) => (plank.id === newPlank.id ? newPlank : plank))
    : [...prev, newPlank];
}
