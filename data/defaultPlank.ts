import type { IPLank, TExerciceType } from "@/types/plank";
import type { ImageSourcePropType } from "react-native";

export const IMAGES: Record<TExerciceType, ImageSourcePropType> = {
  rest: require("./../assets/images/rest.png"),
  "Full plank": require("./../assets/images/Alice/Full_plank.png"),
  "Elbow plank": require("./../assets/images/Alice/Elbow_plank.png"),
  "Left leg plank": require("./../assets/images/Alice/Left_leg_plank.png"),
  "Right leg plank": require("./../assets/images/Alice/Right_leg_plank.png"),
  "Left side plank": require("./../assets/images/Alice/Left_side_plank.png"),
  "Right side plank": require("./../assets/images/Alice/Right_side_plank.png"),
  "Reverse plank": require("./../assets/images/Alice/Reverse_plank.png"),
  "Reverse elbow plank": require("./../assets/images/Alice/Reverse_elbow_plank.png"),
};

export const defaultPlankList: IPLank[] = [
  {
    id: "1",
    title: "5 мин. комбо",
    exercices: [
      { id: "", type: "Full plank" as TExerciceType, time: "00:60" },
      { id: "", type: "Elbow plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Left leg plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Right leg plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Left side plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Right side plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Elbow plank" as TExerciceType, time: "00:30" },
      { id: "", type: "Full plank" as TExerciceType, time: "00:60" },
    ],
  },
  {
    id: "2",
    title: "Обычная планка",
    exercices: [{ id: "", type: "Full plank" as TExerciceType, time: "00:60" }],
  },
].map((plank) => ({
  ...plank,
  exercices: plank.exercices.map((exercice) => ({
    ...exercice,
    image: IMAGES[exercice.type as TExerciceType],
  })),
}));

export const INIT_PLANK = {
  id: "",
  title: "",
  exercices: [],
  editEnabled: true,
};
