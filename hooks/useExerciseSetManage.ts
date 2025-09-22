import { useExercises } from "@/context/ExerciseContext";
import type { IExercise } from "@/types/plank";
import { useCallback, useState } from "react";

export const useExerciseSetManage = (INIT_TITLE: string) => {
  const { setExercises } = useExercises();

  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState(INIT_TITLE);
  const [submitted, setSubmitted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [exercise, setExercise] = useState<IExercise[]>([]);

  const handleSubmit = useCallback(() => {
    setExercises((prev) => [...prev, ...exercise]);
    setSubmittedTitle(title.trim() || INIT_TITLE);
    setSubmitted(true);
    setEdit(false);
  }, [exercise, title, setExercises]);

  const handleEdit = useCallback(() => {
    setSubmitted(false);
    setEdit(true);
  }, []);

  return {
    // state
    edit,
    title,
    exercise,
    submitted,
    submittedTitle,

    // setters
    setTitle,
    setExercise,

    // handlers
    handleSubmit,
    handleEdit,
  };
};
