import SetTimeModal from "@/components/SetTimeModal";
import { useOpen } from "@/hooks";
import type { IExercice } from "@/types/plank";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dispatch, SetStateAction, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import SwipeableItem, {
  SwipeableItemImperativeRef,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import ExerciceBanner from "../ExerciceBanner";

interface ISelectedExerciceBannerProps {
  item: IExercice;
  isFirst: boolean;
  isRest: boolean;
  index: number;
  submitted: boolean;
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
}

export default function SelectedExerciceBanner({
  item,
  isRest,
  isFirst,
  index,
  submitted,
  setExercices,
}: ISelectedExerciceBannerProps) {
  const swipeableRef = useRef<SwipeableItemImperativeRef>(null);

  const { isOpen, handleOpen } = useOpen();

  const UnderlayRight = () => {
    const { item } = useSwipeableItemParams<IExercice>();

    const handleDelete = (id: string) => {
      setExercices((exercices) => exercices.filter((e) => e.id !== id));
    };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: 20,
        }}
      >
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={34} color="white" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SwipeableItem<unknown>
      key={item.id}
      item={item}
      ref={swipeableRef}
      renderUnderlayLeft={() => <UnderlayRight />}
      snapPointsLeft={[80]}
      activationThreshold={80}
      overSwipe={0}
      swipeEnabled={!submitted}
      onChange={() => {}}
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
        setExercices={setExercices}
        isOpen={isOpen}
        handleBannerOpen={handleOpen}
      />
    </SwipeableItem>
  );
}
