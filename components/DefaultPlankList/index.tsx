import ListTitle from "@/components/shared/ListTitle";
import { useAppSelector } from "@/store/hooks";
import type { IPLank } from "@/types/plank";
import { View } from "react-native";
import PlankBanner from "../shared/PlankBanner";
import TapWrapper from "../shared/TapWrapper";

export default function DefaultPlankList() {
  const defaultExercises = useAppSelector((state) => state.exercises.default);

  return (
    <View>
      <ListTitle title="Упражнения по умолчанию" />
      {defaultExercises.map((plank: IPLank) => (
        <TapWrapper<IPLank>
          navigatePath="/plankScreen"
          data={plank}
          key={plank.id}
        >
          <PlankBanner {...plank} />
        </TapWrapper>
      ))}
    </View>
  );
}
