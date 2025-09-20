import { useState } from "react";

export const useEcerciseSetSubmit = (INIT_TITLE: string) => {
  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState<string>("");

  const [submitted, setSubmitted] = useState(false);

  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setSubmittedTitle(title || INIT_TITLE);
    setSubmitted(true);
    setEdit(false);
  };

  const handleEditExercise = () => {
    setSubmitted(false);
    setEdit(true);
  };

  return {
    edit,
    title,
    submitted,
    submittedTitle,
    setTitle,
    handleSubmit,
    handleEditExercise,
  };
};
