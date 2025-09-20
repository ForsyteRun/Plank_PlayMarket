import NewPlankForm from "@/components/NewPlankForm";
import NewPlankHeader from "@/components/NewPlankHeader";
import PlankBannerList from "@/components/PlankBannerList";
import { useEcerciseSetSubmit } from "@/hooks";
import type { IExercice } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { useState } from "react";
import { Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const INIT_TITLE = "Новое Упражнение";
export default function NewPlankScreen() {
  const { bottom } = useSafeAreaInsets();

  const [exercises, setExercices] = useState<IExercice[]>([]);

  const { title, setTitle, submittedTitle, handleSubmit } =
    useEcerciseSetSubmit(INIT_TITLE);

  const totalExercicesTime = sumExerciceTimes(exercises);
  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <NewPlankHeader
        title={submittedTitle || INIT_TITLE}
        handleSubmit={handleSubmit}
      />
      {submittedTitle ? (
        <Text>ok</Text>
      ) : (
        <NewPlankForm
          title={title}
          totalExercicesTime={totalExercicesTime}
          setTitle={setTitle}
        />
      )}

      <PlankBannerList exercises={exercises} setExercices={setExercices} />
    </SafeAreaView>
  );
}
