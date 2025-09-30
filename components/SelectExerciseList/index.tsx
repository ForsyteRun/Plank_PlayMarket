import { IMAGES } from "@/data/defaultPlank";
import type { IExercise, TExerciceType } from "@/types/plank";
import { getUniqueId } from "@/utils/getUniqueId";
import cn from "classnames";
import { Dispatch, SetStateAction } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

interface ISelectExerciseListProps {
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
  setNewPlankModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectExerciseList({
  setSelectedPlanks,
  setNewPlankModalVisible,
}: ISelectExerciseListProps) {
  const selectExercice = (
    rowExercise: [TExerciceType, ImageSourcePropType]
  ) => {
    const exercise: IExercise = {
      id: getUniqueId(),
      time: "00:20",
      type: rowExercise[0],
      image: rowExercise[1],
    };

    setSelectedPlanks((prev) => [...prev, exercise]);
    setNewPlankModalVisible(false);
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
            onPressIn={() =>
              selectExercice([item[0] as TExerciceType, item[1]])
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
