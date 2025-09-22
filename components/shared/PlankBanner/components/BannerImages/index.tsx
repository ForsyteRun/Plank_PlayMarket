import Dots from "@/components/shared/Dots";
import type { IExercise } from "@/types/plank";
import cn from "classnames";
import { Image, View } from "react-native";

interface IBannerImagesProps {
  exercices: IExercise[];
}

export default function BannerImages({ exercices }: IBannerImagesProps) {
  const isMultiple = exercices.length > 1;

  return (
    <View
      style={{ width: "45%" }}
      className={cn({
        "flex-row flex-wrap py-4": isMultiple,
      })}
    >
      {exercices.slice(0, 3).map((exercice, index) => {
        return (
          <Image
            source={exercice.image}
            style={{
              width: isMultiple ? 60 : 120,
              height: isMultiple ? 30 : 80,
            }}
            resizeMode="contain"
            key={index}
          />
        );
      })}
      {exercices.length > 3 && <Dots count={3} />}
    </View>
  );
}
