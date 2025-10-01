import NewPlankForm from "@/components/NewPlankForm";
import PlankSelectWithModals from "@/components/PlankSelectWithModals";
import type { IExercise, IPLank } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

interface EditablePlankSectionProps {
  plank: IPLank;
  submittedTitle: string;
  totalExercicesTime: string;
  data: {
    exercices: IExercise[];
    editEnabled: boolean;
    isSubmitted: boolean;
  };
  setTitle: Dispatch<SetStateAction<string>>;
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

export default function EditablePlankSection({
  plank,
  submittedTitle,
  totalExercicesTime,
  data,
  setTitle,
  setSelectedPlanks,
  setSelectedId,
}: EditablePlankSectionProps) {
  return (
    <>
      <View
        className="pb-5 pt-2 bg-SECONDARY"
        style={{ paddingHorizontal: 20 }}
      >
        <NewPlankForm
          title={submittedTitle || plank.title}
          setTitle={setTitle}
        />
        <Text className="text-teal-800">Общее время: {totalExercicesTime}</Text>
      </View>
      <PlankSelectWithModals
        {...data}
        setSelectedPlanks={setSelectedPlanks}
        setSelectedId={setSelectedId}
      />
    </>
  );
}
