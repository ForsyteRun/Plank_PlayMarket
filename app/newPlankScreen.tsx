import NewPlankForm from "@/components/NewPlankForm";
import NewPlankHeader from "@/components/NewPlankHeader";
import PlankBannerList from "@/components/PlankBannerList";
import type { IExercice } from "@/types/plank";
import { sumExerciceTimes } from "@/utils/sumExerciceTimes";
import { useState } from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function NewPlankScreen() {
  const [exercises, setExercices] = useState<IExercice[]>([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [title, setTitle] = useState("Новое Упражнение");
  const { bottom } = useSafeAreaInsets();

  const totalExercicesTime = sumExerciceTimes(exercises);

  return (
    <SafeAreaView
      style={{ paddingBottom: bottom + 40 }}
      edges={["bottom"]}
      className="flex-1 bg-white"
    >
      <NewPlankHeader title={title} />
      <NewPlankForm title={title} totalExercicesTime={totalExercicesTime} />
      <PlankBannerList exercises={exercises} setExercices={setExercices} />
    </SafeAreaView>
  );
}
