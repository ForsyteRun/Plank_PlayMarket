import type { IExercise } from "@/types/plank";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ExerciseContextType = {
  exercises: IExercise[];
  localExercises: IExercise[];
  setLocalExercises: Dispatch<SetStateAction<IExercise[]>>;
  setExercises: Dispatch<SetStateAction<IExercise[]>>;
};

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const ExerciseProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [localExercises, setLocalExercises] = useState<IExercise[]>([]);

  return (
    <ExerciseContext.Provider
      value={{ exercises, localExercises, setExercises, setLocalExercises }}
    >
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
