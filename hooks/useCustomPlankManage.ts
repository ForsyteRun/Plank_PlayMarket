import { useCallback } from "react";
import { usePlankFormState } from "./usePlankFormState";

export const useCustomPlankManage = (initialTitle: string) => {
  const {
    title,
    isSubmitted,
    submittedTitle,
    selectedPlanks,
    setTitle,
    setIsSubmitted,
    setSelectedPlanks,
    setSubmittedTitle,
  } = usePlankFormState(initialTitle);

  const handleSubmit = useCallback(
    () => {
      // if (submitted) return;
      // setExercises((prev) =>
      //   createOrUpdatePlank(prev, localExercises, title, INIT_TITLE)
      // );
      // setLocalExercises(INIT_PLANK);
      // setSubmittedTitle(title.trim() || INIT_TITLE);
      // setSubmitted(true);
      // setEdit(false);
    },
    [
      // localExercises,
      // // title,
      // setExercises,
      // setLocalExercises,
      // setSubmittedTitle,
      // setSubmitted,
      // setEdit,
    ]
  );

  const handleEdit = useCallback(
    (value: "edit" | "submit") => {
      if (value === "edit") {
        setIsSubmitted(false);
      } else if (value === "submit") {
        setSubmittedTitle(title.trim());
        setIsSubmitted(true);
      }
    },
    [isSubmitted, title, setIsSubmitted]
  );

  return {
    isSubmitted,
    submittedTitle,
    selectedPlanks,

    setSelectedPlanks,
    setIsSubmitted,
    setTitle,

    handleSubmit,
    handleEdit,
  };
};
