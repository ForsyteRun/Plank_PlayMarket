import AddPlankModal from "@/components/AddPlankModal";
import SelectedExerciceBannerList from "@/components/shared/SelectedExerciceBannerLIst";
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
      <SelectedExerciceBannerList
        exercices={exercises}
        setExercices={setExercices}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
