import { useExercises } from "@/context/ExerciseContext";
import type { IPLank } from "@/types/plank";
import { getUniqueId } from "@/utils/getUniqueId";
import { useCallback, useState } from "react";

export const useExerciseSetManage = (INIT_TITLE: string) => {
  const { localExercises, setLocalExercises, setExercises } = useExercises();

  const [title, setTitle] = useState(localExercises.title ?? INIT_TITLE);
  const [submittedTitle, setSubmittedTitle] = useState(
    localExercises.title ?? INIT_TITLE
  );

  const [submitted, setSubmitted] = useState(!!localExercises.title ?? false);
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

      // const unique = merged.filter(
      //   (item, index, self) =>
      //     index === self.findIndex((e) => e.title === item.title)
      // );

      return merged;
    });

    setLocalExercises({ id: "", title: "", exercices: [] });

    setSubmittedTitle(title.trim() || INIT_TITLE);
    setSubmitted(true);

    setEdit(false);
  };

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
    [title, edit, submitted]
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
