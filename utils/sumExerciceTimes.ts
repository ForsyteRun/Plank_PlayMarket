import type { IExercise } from "@/types/plank";

export function sumExerciceTimes(exercices: IExercise[]): string {
  let totalSeconds = 0;

  for (const ex of exercices) {
    const [mm, ss] = ex.time.split(":").map(Number);
    totalSeconds += mm * 60 + ss;
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
