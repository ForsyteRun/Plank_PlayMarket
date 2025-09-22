import AddNewPlankButton from "@/components/AddNewPlankButton";
import type { IExercise } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { FlatList } from "react-native";
import SelectedExerciceBanner from "./components/SelectedExerciseBanner";

interface ISelectedExerciseBannerListProps {
  exercises: IExercise[];
  submitted: boolean;
  setExercise: Dispatch<SetStateAction<IExercise[]>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectedExerciseBannerList({
  exercises,
  submitted,
  setExercise,
  setModalVisible,
}: ISelectedExerciseBannerListProps) {
  return (
    <FlatList
      data={exercises}
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
            submitted={submitted}
            setExercise={setExercise}
          />
        );
      }}
    />
  );
}
