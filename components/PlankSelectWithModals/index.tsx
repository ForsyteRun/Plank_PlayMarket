import AddPlankModal from "@/components/AddPlankModal";
import type { IExercise } from "@/types/plank";
import { Dispatch, SetStateAction, useState } from "react";
import { View } from "react-native";
import SelectablePlankList from "../shared/SelectablePlankList";

interface IPlankSelectWithModalsProps {
  exercices: IExercise[];
  editEnabled: boolean;
  isSubmitted: boolean;
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
  setSelectedId?: Dispatch<SetStateAction<string>>;
}

export default function PlankSelectWithModals({
  exercices,
  editEnabled,
  isSubmitted,
  setSelectedPlanks,
  setSelectedId,
}: IPlankSelectWithModalsProps) {
  const [newPlankModalVisible, setNewPlankModalVisible] = useState(false);

  return (
    <View className="flex-1">
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
        setSelectedId={setSelectedId}
        setSelectedPlanks={setSelectedPlanks}
      />
    </View>
  );
}
