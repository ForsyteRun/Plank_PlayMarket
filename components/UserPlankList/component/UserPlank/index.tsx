import AttentionModal from "@/components/shared/AttentionModal";
import PlankBanner from "@/components/shared/PlankBanner";
import { SwipeableComponent } from "@/components/shared/SwipeableComponent";
import TapWrapper from "@/components/shared/TapWrapper";
import UnderlaySwapPlankBanner from "@/components/shared/UnderlaySwapPlankBanner";
import { useActions, useOpen } from "@/hooks";
import type { IPLank } from "@/types/plank";
import type { SwipeableComponentProps } from "@/types/swipeableComponentProps";

interface IUserPlankProps
  extends Pick<SwipeableComponentProps<IPLank>, "swipeEnabled"> {
  plank: IPLank;
  editEnabled: boolean;
}

export default function UserPlank({
  plank,
  editEnabled,
  ...rest
}: IUserPlankProps) {
  const { isOpen, handleOpen } = useOpen();

  const { removeCustomExercises } = useActions();

  const handleAttentionPlank = () => {
    handleOpen();
  };

  const handleTap = (value: "yes" | "no") => {
    if (value === "yes") {
      removeCustomExercises(plank.id);
    }

    handleOpen();
  };

  return (
    <>
      <SwipeableComponent<IPLank>
        item={plank}
        key={plank.id}
        renderUnderlayLeft={() => (
          <UnderlaySwapPlankBanner<IPLank>
            handleDelete={handleAttentionPlank}
          />
        )}
        snapPointsLeft={[80]}
        activationThreshold={80}
        overSwipe={0}
        {...rest}
      >
        <TapWrapper<IPLank> navigatePath="/plankScreen" data={plank}>
          <PlankBanner
            id={plank.id}
            title={plank.title}
            exercices={plank.exercices}
            count={plank.count}
            editEnabled={plank.editEnabled}
          />
        </TapWrapper>
      </SwipeableComponent>
      <AttentionModal
        title="Удалить упражнение?"
        text="Вы уверены что хотите удалить это упаржнение?"
        isOpen={isOpen}
        noBtn="Отменить"
        yesBtn="Удалить"
        handleTap={handleTap}
      />
    </>
  );
}
