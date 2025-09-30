import type { IExercise } from "@/types/plank";
import { useState } from "react";

export const usePlankFormState = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const [submittedTitle, setSubmittedTitle] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedPlanks, setSelectedPlanks] = useState<IExercise[]>([]);

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
