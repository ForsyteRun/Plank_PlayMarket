import type { IExercise } from "@/types/plank";

export function getTotalTime(exercices: IExercise[]): string {
  const totalSeconds = exercices.reduce((sum, ex) => {
    const [min, sec] = ex.time.split(":").map(Number);
    return sum + (min * 60 + sec);
  }, 0);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  return `${mm}:${ss}`;
}
