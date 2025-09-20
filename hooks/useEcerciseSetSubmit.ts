import { useState } from "react";

export const useEcerciseSetSubmit = (INIT_TITLE: string) => {
  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState<string>("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmittedTitle(title || INIT_TITLE);
    setSubmitted(true);
  };

  const handleEditExercise = () => {
    setSubmitted(false);
  };

  return {
    title,
    setTitle,
    submitted,
    submittedTitle,
    handleSubmit,
    handleEditExercise,
  };
};
