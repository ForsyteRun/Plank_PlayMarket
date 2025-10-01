import type { IExercise, IPLank } from "@/types/plank";
import { useState } from "react";

export const usePlankFormState = (plank: IPLank) => {
  const [title, setTitle] = useState(plank.title);
  const [submittedTitle, setSubmittedTitle] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedPlanks, setSelectedPlanks] = useState<IExercise[]>(
    plank.exercices
  );

  return {
    title,
    isSubmitted,
    submittedTitle,
    selectedPlanks,
    setTitle,
    setIsSubmitted,
    setSubmittedTitle,
    setSelectedPlanks,
  };
};
