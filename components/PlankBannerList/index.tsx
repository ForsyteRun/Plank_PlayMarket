import AddPlankModal from "@/components/AddPlankModal";
import { useState } from "react";
import { View } from "react-native";
import SelectedExerciseBannerList from "../shared/SelectedExerciceBannerLIst";

interface IPlankBannerListProps {
  submitted: boolean;
}

export default function PlankBannerList({ submitted }: IPlankBannerListProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1">
      <AddPlankModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <SelectedExerciseBannerList
        submitted={submitted}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
