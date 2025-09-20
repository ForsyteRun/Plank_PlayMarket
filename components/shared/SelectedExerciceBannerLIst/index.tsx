import AddNewPlankButton from "@/components/AddNewPlankButton";
import type { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import SelectedExerciceBanner from "./components/SelectedExerciceBanner";

interface ISelectedExerciceBannerListProps {
  exercices: IExercice[];
  submitted: boolean;
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectedExerciceBannerList({
  exercices,
  submitted,
  setExercices,
  setModalVisible,
}: ISelectedExerciceBannerListProps) {
  return (
    <FlatList
      data={exercices}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
      ListFooterComponent={
        !submitted ? (
          <AddNewPlankButton setModalVisible={setModalVisible} />
        ) : null
      }
      renderItem={({ item, index }) => {
        const isRest = item.type === "rest";
        const isFirst = index === 0;

        return (
          <SelectedExerciceBanner
            item={item}
            isRest={isRest}
            isFirst={isFirst}
            index={index}
            setExercices={setExercices}
          />
        );
      }}
    />
  );
}
