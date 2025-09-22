import AddNewPlankButton from "@/components/AddNewPlankButton";
import { useExercises } from "@/context/ExerciseContext";
import { Dispatch, SetStateAction, useEffect } from "react";
import { FlatList } from "react-native";
import SelectedExerciceBanner from "./components/SelectedExerciseBanner";

interface ISelectedExerciseBannerListProps {
  submitted: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectedExerciseBannerList({
  submitted,
  setModalVisible,
}: ISelectedExerciseBannerListProps) {
  const { localExercises } = useExercises();

  useEffect(() => {
    setModalVisible(false);
  }, [localExercises.exercices.length]);

  return (
    <FlatList
      data={localExercises.exercices}
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
          />
        );
      }}
    />
  );
}
