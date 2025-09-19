import AddNewPlankButton from "@/components/AddNewPlankButton";
import type { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import SelectedExerciceBanner from "./components/SelectedExerciceBanner";

interface ISelectedExerciceBannerListProps {
  exercices: IExercice[];
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectedExerciceBannerList({
  exercices,
  setExercices,
  setModalVisible,
}: ISelectedExerciceBannerListProps) {
  return (
    <FlatList
      data={exercices}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <AddNewPlankButton setModalVisible={setModalVisible} />
      }
      contentContainerStyle={{
        gap: 30,
      }}
      renderItem={({ item, index }) => {
        const isRest = item.type === "rest";
        const isFirst = index === 0;

        return (
          <SelectedExerciceBanner
            item={item}
            isRest={isRest}
            isFirst={isFirst}
            index={index + 1}
            setExercices={setExercices}
          />
        );
      }}
    />
  );
}
