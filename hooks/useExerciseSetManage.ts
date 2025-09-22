import { useExercises } from "@/context/ExerciseContext";
import { useCallback, useState } from "react";

export const useExerciseSetManage = (INIT_TITLE: string) => {
  const { localExercises, setExercises } = useExercises();

  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState(INIT_TITLE);
  const [submitted, setSubmitted] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = useCallback(() => {
    setExercises((prev) => {
      const merged = [...prev, ...localExercises];
      const unique = merged.filter(
        (item, index, self) => index === self.findIndex((e) => e.id === item.id)
      );
      return unique;
    });

    setSubmittedTitle(title.trim() || INIT_TITLE);
    setSubmitted(true);

    setEdit(false);
  }, [localExercises, title, setExercises]);

  const handleEdit = useCallback(() => {
    setSubmitted(false);
    setEdit(true);
  }, []);

  return {
    // state
    edit,
    title,
    submitted,
    submittedTitle,
    localExercises,
    // setters
    setTitle,

    // handlers
    handleSubmit,
    handleEdit,
  };
};
