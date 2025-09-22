import { useExercises } from "@/context/ExerciseContext";
import type { IPLank } from "@/types/plank";
import { getUniqueId } from "@/utils/getUniqueId";
import { useCallback, useState } from "react";

export const useExerciseSetManage = (INIT_TITLE: string) => {
  const { localExercises, setLocalExercises, setExercises } = useExercises();

  const [title, setTitle] = useState(INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState(INIT_TITLE);
  const [submitted, setSubmitted] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = () => {
    setExercises((prev) => {
      if (!localExercises.exercices.length) return prev;

      const newPlank: IPLank = {
        id: getUniqueId(),
        title,
        exercices: [...localExercises.exercices],
      };

      const merged = [...prev, newPlank];

      return merged;
    });

    setLocalExercises({ id: "", title: "", exercices: [] });

    setSubmittedTitle(title.trim() || INIT_TITLE);
    setSubmitted(true);

    setEdit(false);
  };

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
    setSubmitted,
    // handlers
    handleSubmit,
    handleEdit,
  };
};
