import Header from "@/components/shared/Header";
import { useParsedParams } from "@/hooks";
import type { IPLank } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function PlankScreen() {
  const { bottom } = useSafeAreaInsets();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const plank = useParsedParams<IPLank>("data");

  if (!plank) return null;

  const totalExercicesTime = sumExerciceTimes(plank.exercices);

  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <Header
        title={plank.title}
        editEnabled={plank.editEnabled}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />
      {/* <AnimatedContent>
        {plank.editEnabled ? (
          <Fragment>
            <NewPlankForm
              edit={false}
              title={plank.title}
              setTitle={() => {}}
              totalExercicesTime={totalExercicesTime}
            />
            <PlankSelectWithModals data={plank} submitted={false} />
          </Fragment>
        ) : (
          <Fragment>
            <SubmitInfo totalExercicesTime={totalExercicesTime} />
            <SelectablePlankList data={plank} submitted={false} />
          </Fragment>
        )}
      </AnimatedContent> */}
    </SafeAreaView>
  );
}
