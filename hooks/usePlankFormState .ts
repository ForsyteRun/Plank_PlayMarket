import type { IPLank } from "@/types/plank";
import { useState } from "react";

export const usePlankFormState = (
  initialTitle: string,
  localExercises: IPLank
) => {
  const [title, setTitle] = useState(localExercises.title || initialTitle);
  const [submittedTitle, setSubmittedTitle] = useState(
    localExercises.title || initialTitle
  );
  const [submitted, setSubmitted] = useState(Boolean(localExercises.title));
  const [edit, setEdit] = useState(false);

  return {
    title,
    setTitle,
    submittedTitle,
    setSubmittedTitle,
    submitted,
    setSubmitted,
    edit,
    setEdit,
  };
};
