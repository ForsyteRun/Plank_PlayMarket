import type { IExercise } from "@/types/plank";
import { FC, Dispatch, SetStateAction,  ReactNode, createContext, useContext, useState } from "react";

type ExerciseContextType = {
  exercises: IExercise[];
  setExercises: Dispatch<SetStateAction<IExercise[]>>;
};

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const ExerciseProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [exercises, setExercises] = useState<IExercise[]>([]);

  return (
    <ExerciseContext.Provider value={{ exercises, setExercises }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercises = () => {
  const ctx = useContext(ExerciseContext);
  if (!ctx)
    throw new Error("useExercises must be used within ExerciseProvider");
  return ctx;
};
