import { useExercises } from "@/context/ExerciseContext";
import { INIT_PLANK } from "@/data/defaultPlank";
import { createOrUpdatePlank } from "@/utils";
import { useCallback } from "react";
import { usePlankFormState } from "./usePlankFormState ";

export const useUserPlankManage = (INIT_TITLE: string) => {
  const { localExercises, setLocalExercises, setExercises } = useExercises();

  const {
    title,
    setTitle,
    submittedTitle,
    setSubmittedTitle,
    submitted,
    setSubmitted,
    edit,
    setEdit,
  } = usePlankFormState(INIT_TITLE, localExercises);

  const handleSubmit = useCallback(() => {
    if (submitted) return;

    setExercises((prev) =>
      createOrUpdatePlank(prev, localExercises, title, INIT_TITLE)
    );

    setLocalExercises(INIT_PLANK);

    setSubmittedTitle(title.trim() || INIT_TITLE);
    setSubmitted(true);

    setEdit(false);
  }, [
    localExercises,
    title,
    setExercises,
    setLocalExercises,
    setSubmittedTitle,
    setSubmitted,
    setEdit,
  ]);

  const handleEdit = useCallback(
    (value: "active" | "inactive") => {
      setSubmittedTitle(title.trim());

      if (value === "active") {
        setSubmitted(false);

        setEdit(true);
      } else if (value === "inactive") {
        setSubmitted(true);

        setEdit(false);
      }
    },
    [title]
  );

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
