import AddPlankModal from "@/components/AddPlankModal";
import SelectedExerciceBanner from "@/components/shared/SelectedExerciceBanner";
import type { IExercice } from "@/types/plank";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function PlankBannerList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [exercices, setExercices] = useState<IExercice[]>([]);

  useEffect(() => {
    setModalVisible(false);
  }, [exercices.length]);

  return (
    <View className="flex-1">
      <AddPlankModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setExercices={setExercices}
      />
      <SelectedExerciceBanner
        exercices={exercices}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
