import type { IExercise, IPLank } from "@/types/plank";
import { Dispatch, SetStateAction, useMemo } from "react";
import SetTimeModal from "../SetTimeModal";
import AnimatedContent from "../shared/AnimatedContent";
import EditablePlankSection from "./components/EditablePlankSection";
import SubmittedPlankSection from "./components/SubmittedPlankSection";
import { usePlankTimeManager } from "./hooks/usePlankTimeManager";

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
  const { selectedId, totalExercicesTime, setSelectedId, handleUpdateTime } =
    usePlankTimeManager(selectedPlanks, setSelectedPlanks);

  const data = useMemo(
    () => ({
      exercices: selectedPlanks.length ? selectedPlanks : plank.exercices,
      editEnabled: plank.editEnabled,
      isSubmitted,
    }),
    [plank.exercices, plank.editEnabled, isSubmitted]
  );

  return (
    <>
      <AnimatedContent>
        {plank.editEnabled && !isSubmitted ? (
          <EditablePlankSection
            plank={plank}
            submittedTitle={submittedTitle}
            totalExercicesTime={totalExercicesTime}
            data={data}
            setTitle={setTitle}
            setSelectedPlanks={setSelectedPlanks}
            setSelectedId={setSelectedId}
          />
        ) : (
          <SubmittedPlankSection
            totalExercicesTime={totalExercicesTime}
            data={data}
          />
        )}
      </AnimatedContent>
      <SetTimeModal
        id={selectedId}
        isOpen={!!selectedId}
        handleBannerOpen={() => setSelectedId("")}
        handleUpdateTime={handleUpdateTime}
      />
    </>
  );
}
