import SelectablePlankList from "@/components/shared/SelectablePlankList";
import SubmitInfo from "@/components/shared/SubmitInfo";
import type { IExercise } from "@/types/plank";

interface SubmittedPlankSectionProps {
  totalExercicesTime: string;
  data: {
    exercices: IExercise[];
    editEnabled: boolean;
    isSubmitted: boolean;
  };
}

export default function SubmittedPlankSection({
  totalExercicesTime,
  data,
}: SubmittedPlankSectionProps) {
  return (
    <>
      <SubmitInfo totalExercicesTime={totalExercicesTime} />
      <SelectablePlankList {...data} />
    </>
  );
}
