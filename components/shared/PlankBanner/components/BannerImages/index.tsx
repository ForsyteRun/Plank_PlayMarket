import Dots from "@/components/shared/Dots";
import type { IExercice } from "@/types/plank";
import cn from "classnames";
import { Image, View } from "react-native";

interface IBannerImagesProps {
  exercices: IExercice[];
}

export default function BannerImages({ exercices }: IBannerImagesProps) {
  const isMultiple = exercices.length > 1;

  return (
    <View
      style={{ width: "40%" }}
      className={cn({
        "flex-row flex-wrap py-4": isMultiple,
      })}
    >
      {exercices.slice(0, 3).map((exercice, index) => {
        return (
          <Image
            source={exercice.image}
            style={{
              width: isMultiple ? 70 : 120,
              height: isMultiple ? 40 : 80,
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
