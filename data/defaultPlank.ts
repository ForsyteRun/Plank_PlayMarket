import type { IPLank, TExerciceType } from "@/types/plank";
import type { ImageSourcePropType } from "react-native";

const images: Record<TExerciceType, ImageSourcePropType> = {
  "Full plank": require("./../assets/images/Alice/Full_plank.png"),
  "Elbow plank": require("./../assets/images/Alice/Elbow_plank.png"),
  "Left leg plank": require("./../assets/images/Alice/Left_leg_plank.png"),
  "Right leg plank": require("./../assets/images/Alice/Right_leg_plank.png"),
  "Left side plank": require("./../assets/images/Alice/Left_side_plank.png"),
  "Right side plank": require("./../assets/images/Alice/Right_side_plank.png"),
  "Reverse plank": require("./../assets/images/Alice/Reverse_plank.png"),
  "Reverse elbow plank": require("./../assets/images/Alice/Reverse_elbow_plank.png"),
  rest: require("./../assets/images/rest.png"),
};

export const defaultPlankList: IPLank[] = [
  {
    title: "5 мин. комбо",
    exercices: [
      { type: "Full plank" as TExerciceType, time: "60" },
      { type: "Elbow plank" as TExerciceType, time: "30" },
      { type: "Left leg plank" as TExerciceType, time: "30" },
      { type: "Right leg plank" as TExerciceType, time: "30" },
      { type: "Left side plank" as TExerciceType, time: "30" },
      { type: "Right side plank" as TExerciceType, time: "30" },
      { type: "Elbow plank" as TExerciceType, time: "30" },
      { type: "Full plank" as TExerciceType, time: "60" },
    ],
  },
  {
    title: "Обычная планка",
    exercices: [{ type: "Full plank" as TExerciceType, time: "60" }],
  },
].map((plank) => ({
  ...plank,
  exercices: plank.exercices.map((exercice) => ({
    ...exercice,
    image: images[exercice.type as TExerciceType],
  })),
}));
