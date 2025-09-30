import type { IExercise, IPLank } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";
import NewPlankForm from "../NewPlankForm";
import PlankSelectWithModals from "../PlankSelectWithModals";
import AnimatedContent from "../shared/AnimatedContent";
import SelectablePlankList from "../shared/SelectablePlankList";
import SubmitInfo from "../shared/SubmitInfo";

interface IPlankScreenContentProps {
  plank: IPLank;
  isSubmitted: boolean;
  submittedTitle: string;
  selectedPlanks: IExercise[];
  setTitle: Dispatch<SetStateAction<string>>;
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
}

export default function PlankScreenContent({
  plank,
  isSubmitted,
  submittedTitle,
  selectedPlanks,
  setTitle,
  setSelectedPlanks,
}: IPlankScreenContentProps) {
  const totalExercicesTime = sumExerciceTimes(plank.exercices);

  const data = {
    exercices: selectedPlanks.length ? selectedPlanks : plank.exercices,
    editEnabled: plank.editEnabled,
    isSubmitted: isSubmitted,
  };

  return (
    <AnimatedContent>
      {plank.editEnabled && !isSubmitted ? (
        <>
          <View
            className="pb-5 pt-2 bg-SECONDARY"
            style={{ paddingHorizontal: 20 }}
          >
            <NewPlankForm
              title={submittedTitle || plank.title}
              setTitle={setTitle}
            />
            <Text className="text-teal-800">
              Общее время: {totalExercicesTime}
            </Text>
          </View>
          <PlankSelectWithModals
            {...data}
            setSelectedPlanks={setSelectedPlanks}
          />
        </>
      ) : (
        <>
          <SubmitInfo totalExercicesTime={totalExercicesTime} />
          <SelectablePlankList {...data} />
        </>
      )}
    </AnimatedContent>
  );
}
