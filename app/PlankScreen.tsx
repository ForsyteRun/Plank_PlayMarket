import NewPlankForm from "@/components/NewPlankForm";
import PlankSelectWithModals from "@/components/PlankSelectWithModals";
import AnimatedContent from "@/components/shared/AnimatedContent";
import Header from "@/components/shared/Header";
import SelectablePlankList from "@/components/shared/SelectablePlankList";
import SubmitInfo from "@/components/shared/SubmitInfo";
import { useParsedParams } from "@/hooks";
import type { IPLank } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PlankScreen() {
  const { bottom } = useSafeAreaInsets();

  const plank = useParsedParams<IPLank>("data");

  if (!plank) return;

  const totalExercicesTime = sumExerciceTimes(plank.exercices);

  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <Header
        title={plank.title}
        submitted={false}
        handleSubmit={() => {}}
        handleEdit={() => {}}
      />
      <AnimatedContent>
        {!plank.editEnabled ? (
          // {submitted || !plank.editEnabled ? (
          <SubmitInfo totalExercicesTime={totalExercicesTime} />
        ) : (
          <NewPlankForm
            edit={false}
            title={plank.title}
            setTitle={() => {}}
            totalExercicesTime={totalExercicesTime}
          />
        )}
        {plank.editEnabled ? (
          <PlankSelectWithModals data={plank} submitted={false} />
        ) : (
          <SelectablePlankList data={plank} submitted={false} />
        )}
      </AnimatedContent>
    </SafeAreaView>
  );
}
