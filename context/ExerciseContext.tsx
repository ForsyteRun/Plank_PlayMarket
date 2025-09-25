import { INIT_PLANK } from "@/data/defaultPlank";
import { useLoadExercises } from "@/hooks/useLoadExercises";
import { useSaveExercises } from "@/hooks/useSaveExercises";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import type { IPLank, IPlankCollection } from "@/types/plank";
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
  exercises: IPlankCollection;
  localExercises: IPLank;
  setLocalExercises: Dispatch<SetStateAction<IPLank>>;
  setExercises: Dispatch<SetStateAction<IPlankCollection>>;
};

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export const ExerciseProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [exercises, setExercises] = useState<IPlankCollection>({
    default: [],
    custom: [],
  });
  const [localExercises, setLocalExercises] = useState<IPLank>(INIT_PLANK);

  const [loaded, setLoaded] = useState(false);

  useSplashScreen(loaded);
  useLoadExercises(setExercises, setLoaded);
  useSaveExercises(exercises, loaded);

  if (!loaded) return null;

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
