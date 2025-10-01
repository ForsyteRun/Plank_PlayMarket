import type { IExercise } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { Dispatch, SetStateAction, useState } from "react";

export function usePlankTimeManager(
  selectedPlanks: IExercise[],
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>
) {
  const [selectedId, setSelectedId] = useState<string>("");

  const handleUpdateTime = (id: string, mins: string, sec: string) => {
    setSelectedPlanks((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              time: `${String(mins).padStart(2, "0")}:${String(sec).padStart(2, "0")}`,
            }
          : item
      )
    );

    setSelectedId("");
  };

  const totalExercicesTime = sumExerciceTimes(selectedPlanks);

  return {
    selectedId,
    totalExercicesTime,
    handleUpdateTime,
    setSelectedId,
  };
}
