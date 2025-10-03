import type { IPLank } from "@/types/plank";
import { useCallback } from "react";
import { useActions } from ".";
import { usePlankFormState } from "./usePlankFormState";

export const useCustomPlankManage = (plank: IPLank) => {
  const {
    title,
    isSubmitted,
    submittedTitle,
    selectedPlanks,
    setTitle,
    setIsSubmitted,
    setSelectedPlanks,
    setSubmittedTitle,
  } = usePlankFormState(plank);

  const { setCustomExercises } = useActions();

  const handleEdit = useCallback(
    (value: "edit" | "submit") => {
      if (value === "edit") {
        setIsSubmitted(false);
      } else if (value === "submit") {
        const newTitle = title.trim();

        const plantToSave: IPLank = {
          id: plank.id,
          title: newTitle,
          count: 0,
          editEnabled: true,
          exercices: selectedPlanks,
        };

        setCustomExercises(plantToSave);

        setSubmittedTitle(newTitle);
        setIsSubmitted(true);
      }
    },
    [plank.id, isSubmitted, title, selectedPlanks, setIsSubmitted]
  );

  return {
    isSubmitted,
    submittedTitle,
    selectedPlanks,

    setSelectedPlanks,
    setTitle,

    handleEdit,
  };
};
