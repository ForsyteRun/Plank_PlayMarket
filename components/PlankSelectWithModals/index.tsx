import AddPlankModal from "@/components/AddPlankModal";
import SetTimeModal from "@/components/SetTimeModal";
import { useOpen } from "@/hooks";
import type { IExercise } from "@/types/plank";
import { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import SelectablePlankList from "../shared/SelectablePlankList";

interface IPlankSelectWithModalsProps {
  exercices: IExercise[];
  editEnabled: boolean;
  isSubmitted: boolean;
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
}

export default function PlankSelectWithModals({
  exercices,
  editEnabled,
  isSubmitted,
  setSelectedPlanks,
}: IPlankSelectWithModalsProps) {
  const [newPlankModalVisible, setNewPlankModalVisible] = useState(false);
  const { isOpen, handleOpen } = useOpen();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  console.log("PlankSelectWithModals");

  const handleBannerClick = (id: string) => {
    // if (!isSubmitted) {
    //   setSelectedId(id);
    //   handleOpen();
    // }
  };

  return (
    <View className="flex-1">
      {/* Модалка добавления новой планки */}
      <AddPlankModal
        setSelectedPlanks={setSelectedPlanks}
        newPlankModalVisible={newPlankModalVisible}
        setNewPlankModalVisible={setNewPlankModalVisible}
      />

      <SelectablePlankList
        exercices={exercices}
        editEnabled={editEnabled}
        isSubmitted={isSubmitted}
        swipeable
        setNewPlankModalVisible={setNewPlankModalVisible}
      />

      {/* Модалка установки времени для выбранного упражнения */}
      {selectedId && (
        <SetTimeModal
          id={selectedId}
          isOpen={isOpen}
          handleBannerOpen={() => handleBannerClick(selectedId)}
        />
      )}
    </View>
  );
}
