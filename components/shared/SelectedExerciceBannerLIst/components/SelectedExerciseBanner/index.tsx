import SetTimeModal from "@/components/SetTimeModal";
import { SwipeableComponent } from "@/components/shared/SwipeableComponent";
import UnderlaySwapPlankBanner from "@/components/shared/UnderlaySwapPlankBanner";
import { useManageSelectedExerciseBanner, useOpen } from "@/hooks";
import type { IExercise } from "@/types/plank";
import { SwipeableItemImperativeRef } from "react-native-swipeable-item";
import ExerciceBanner from "../ExerciceBanner";

interface ISelectedExerciseBannerProps {
  item: IExercise;
  isFirst: boolean;
  isRest: boolean;
  index: number;
  submitted: boolean;
}

export default function SelectedExerciseBanner({
  item,
  isRest,
  isFirst,
  index,
  submitted,
}: ISelectedExerciseBannerProps) {
  const { isOpen, handleOpen } = useOpen();

  const { swipeableRefs, handleDelete } = useManageSelectedExerciseBanner(
    item.id,
    submitted
  );

  return (
    <SwipeableComponent<IExercise>
      key={item.id}
      item={item}
      ref={(ref: SwipeableItemImperativeRef | null) => {
        if (ref) swipeableRefs.current[index] = ref;
      }}
      renderUnderlayLeft={() => (
        <UnderlaySwapPlankBanner<IExercise> handleDelete={handleDelete} />
      )}
      snapPointsLeft={[80]}
      activationThreshold={80}
      overSwipe={0}
      swipeEnabled={!submitted}
    >
      <ExerciceBanner
        item={item}
        index={index}
        isFirst={isFirst}
        isRest={isRest}
        handleBannerOpen={!submitted ? handleOpen : () => {}}
      />
      <SetTimeModal
        id={item.id}
        isOpen={isOpen}
        handleBannerOpen={handleOpen}
      />
    </SwipeableComponent>
  );
}
