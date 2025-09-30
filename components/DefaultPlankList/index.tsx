import ListTitle from "@/components/shared/ListTitle";
import { useNavigateToPlankScreen } from "@/hooks";
import { useAppSelector } from "@/store/hooks";
import type { IPLank } from "@/types/plank";
import { TouchableOpacity, View } from "react-native";
import PlankBanner from "../shared/PlankBanner";

export default function DefaultPlankList() {
  const { navigateToPlankScreen } = useNavigateToPlankScreen();

  const defaultExercises = useAppSelector((state) => state.exercises.default);

  return (
    <View>
      <ListTitle title="Упражнения по умолчанию" />
      {defaultExercises.map((plank: IPLank) => (
        <TouchableOpacity
          onPressIn={() => navigateToPlankScreen(plank)}
          key={plank.id}
        >
          <PlankBanner {...plank} />
        </TouchableOpacity>
      ))}
    </View>
  );
}
