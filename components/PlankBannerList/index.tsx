import AddPlankModal from "@/components/AddPlankModal";
import SelectedExerciceBanner from "@/components/shared/SelectedExerciceBanner";
import type { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { View } from "react-native";

interface IPlankBannerListProps {
  exercises: IExercice[];
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
}

export default function PlankBannerList({
  exercises,
  setExercices,
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
        setExercices={setExercices}
      />
      <SelectedExerciceBanner
        exercices={exercises}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
