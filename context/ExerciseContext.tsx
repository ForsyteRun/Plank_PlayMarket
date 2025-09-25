import { INIT_PLANK } from "@/data/defaultPlank";
import type { IPLank } from "@/types/plank";
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
  exercises: IPLank[];
  localExercises: IPLank;
  setLocalExercises: Dispatch<SetStateAction<IPLank>>;
  setExercises: Dispatch<SetStateAction<IPLank[]>>;
};

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const ExerciseProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [exercises, setExercises] = useState<IPLank[]>([]);
  const [localExercises, setLocalExercises] = useState<IPLank>(INIT_PLANK);

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
