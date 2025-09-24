import PlankBanner from "@/components/shared/PlankBanner";
import { SwipeableComponent } from "@/components/shared/SwipeableComponent";
import UnderlaySwapPlankBanner from "@/components/shared/UnderlaySwapPlankBanner";
import { useManageUserPlankFomList } from "@/hooks";
import type { IPLank } from "@/types/plank";
import { Pressable } from "react-native";

interface IUserPlankProps {
  plank: IPLank;
}

export default function UserPlank({ plank }: IUserPlankProps) {
  const { handleDelete, handlePlankPress } = useManageUserPlankFomList();

  return (
    <SwipeableComponent<IPLank>
      item={plank}
      key={plank.id}
      renderUnderlayLeft={() => (
        <UnderlaySwapPlankBanner<IPLank> handleDelete={handleDelete} />
      )}
      snapPointsLeft={[80]}
      activationThreshold={80}
      overSwipe={0}
    >
      <Pressable
        onPress={() => handlePlankPress(plank)}
        style={{ minHeight: 60 }}
      >
        <PlankBanner
          id={plank.id}
          title={plank.title}
          exercices={plank.exercices}
        />
      </Pressable>
    </SwipeableComponent>
  );
}
