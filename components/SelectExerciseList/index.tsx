import { useExercises } from "@/context/ExerciseContext";
import { IMAGES } from "@/data/defaultPlank";
import type { IExercise, TExerciceType } from "@/types/plank";
import cn from "classnames";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

export default function SelectExerciseList() {
  const { setLocalExercises } = useExercises();

  const uniqueId = () =>
    Math.random().toString(36).substring(2) + Date.now().toString(36);

  const handleSelectExercice = (
    rowExercise: [TExerciceType, ImageSourcePropType]
  ) => {
    const exercise: IExercise = {
      id: uniqueId(),
      time: "00:20",
      type: rowExercise[0],
      image: rowExercise[1],
    };

    setLocalExercises((prev) => [...prev, exercise]);
  };

  return (
    <FlatList
      data={Object.entries(IMAGES)}
      keyExtractor={(item) => item[0]}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        const isRest = item[0] === "rest";

        const isLast = index === Object.entries(IMAGES).length - 1;

        return (
          <Pressable
            onPress={() =>
              handleSelectExercice([item[0] as TExerciceType, item[1]])
            }
            className={cn(
              "w-full h-20 flex-row items-center justify-between gap-2 bg-gray-100  border-b border-LIGHT_GREY px-5",
              {
                "border-b-0": isLast,
              }
            )}
          >
            <View className="flex-1 items-center pointer-events-none">
              <Image
                source={item[1]}
                className={cn(isRest ? "w-7" : "w-24")}
                resizeMode="contain"
              />
            </View>
            <View className="w-1/2 justify-start ">
              <Text className="text-gray-600 text-wrap">{item[0]}</Text>
            </View>
          </Pressable>
        );
      }}
    />
  );
}
