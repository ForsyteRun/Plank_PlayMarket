import { ImageSourcePropType } from "react-native";

export interface IPLank {
  id: string;
  title: string;
  exercices: IExercise[];
}

export interface IExercise {
  id: string;
  type: TExerciceType;
  time: string;
  image: ImageSourcePropType;
}

export type TExerciceType =
  | "Full plank"
  | "Elbow plank"
  | "Left leg plank"
  | "Right leg plank"
  | "Left side plank"
  | "Right side plank"
  | "Reverse plank"
  | "Reverse elbow plank"
  | "rest";
