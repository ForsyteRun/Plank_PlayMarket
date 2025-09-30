import AddNewPlankButton from "@/components/AddNewPlankButton";
import type { IExercise } from "@/types/plank";
import { FlashList } from "@shopify/flash-list";
import type { Dispatch, SetStateAction } from "react";
import ExerciceBanner from "../ExerciceBanner";

interface ISelectablePlankListProps {
  exercices: IExercise[];
  editEnabled: boolean;
  isSubmitted: boolean;
  swipeable?: boolean;
  setNewPlankModalVisible?: Dispatch<SetStateAction<boolean>>;
}

export default function SelectablePlankList({
  exercices,
  editEnabled,
  isSubmitted,
  swipeable = false,
  setNewPlankModalVisible,
}: ISelectablePlankListProps) {
  const renderFooter = () => {
    if (!isSubmitted && editEnabled) {
      return (
        <AddNewPlankButton setNewPlankModalVisible={setNewPlankModalVisible} />
      );
    }
    return null;
  };

  return (
    <FlashList
      data={exercices}
      renderItem={({ item, index }) => (
        <ExerciceBanner
          key={item.id}
          item={item}
          index={index}
          swipeable={swipeable}
        />
      )}
      keyExtractor={(item) => item.id}
      ListFooterComponent={renderFooter}
    />
  );
}
