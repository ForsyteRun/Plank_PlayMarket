import AttentionModal from "@/components/shared/AttentionModal";
import PlankBanner from "@/components/shared/PlankBanner";
import { SwipeableComponent } from "@/components/shared/SwipeableComponent";
import UnderlaySwapPlankBanner from "@/components/shared/UnderlaySwapPlankBanner";
import { useManageUserPlankFomList, useOpen } from "@/hooks";
import type { IPLank } from "@/types/plank";
import { Pressable } from "react-native";

interface IUserPlankProps {
  plank: IPLank;
}

export default function UserPlank({ plank }: IUserPlankProps) {
  const { handleDelete, handlePlankPress } = useManageUserPlankFomList();
  const { isOpen, handleOpen } = useOpen();

  const handleAttentionPlank = () => {
    handleOpen();
  };

  const handleDeletePlank = () => {
    handleOpen();
    handleDelete(plank.id);
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
      <AttentionModal
        title="Удалить упражнение?"
        text="Вы уверены что хотите удалить это упаржнение?"
        isOpen={isOpen}
        noBtn="Отменить"
        yesBtn="Удалить"
        handleOpen={handleOpen}
        handleYes={handleDeletePlank}
      />
    </>
  );
}
