import type { IExercice } from "@/types/plank";

export function getTotalTime(exercices: IExercice[]): string {
  const totalSeconds = exercices.reduce((sum, ex) => sum + Number(ex.time), 0);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `${mm}:${ss}`;
}
