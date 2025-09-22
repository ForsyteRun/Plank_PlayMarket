import AddPlankModal from "@/components/AddPlankModal";
import type { IExercise } from "@/types/plank";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";
import SelectedExerciseBannerList from "../shared/SelectedExerciceBannerLIst";

interface IPlankBannerListProps {
  exercises: IExercise[];
  submitted: boolean;
  setExercise: Dispatch<SetStateAction<IExercise[]>>;
}

export default function PlankBannerList({
  exercises,
  submitted,
  setExercise,
}: IPlankBannerListProps) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(false);
  }, [exercises.length]);

  return (
    <View className="flex-1">
      <AddPlankModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setExercises={setExercise}
      />
      <SelectedExerciseBannerList
        exercises={exercises}
        submitted={submitted}
        setExercise={setExercise}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
