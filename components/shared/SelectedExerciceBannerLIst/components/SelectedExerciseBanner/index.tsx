import SetTimeModal from "@/components/SetTimeModal";
import { useOpen } from "@/hooks";
import type { IExercise } from "@/types/plank";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import SwipeableItem, {
  SwipeableItemImperativeRef,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import ExerciceBanner from "../ExerciceBanner";

interface ISelectedExerciseBannerProps {
  item: IExercise;
  isFirst: boolean;
  isRest: boolean;
  index: number;
  submitted: boolean;
  setExercise: Dispatch<SetStateAction<IExercise[]>>;
}

export default function SelectedExerciseBanner({
  item,
  isRest,
  isFirst,
  index,
  submitted,
  setExercise,
}: ISelectedExerciseBannerProps) {
  const swipeableRefs = useRef<SwipeableItemImperativeRef[]>([]);

  const { isOpen, handleOpen } = useOpen();

  const UnderlayRight = () => {
    const { item } = useSwipeableItemParams<IExercise>();

    const handleDelete = (id: string) => {
      setExercise((exercises) => exercises.filter((e) => e.id !== id));
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

  useEffect(() => {
    if (submitted) {
      swipeableRefs.current.forEach((ref) => ref?.close());
    }
  }, [submitted]);

  return (
    <SwipeableItem<unknown>
      key={item.id}
      item={item}
      ref={(ref) => {
        if (ref) swipeableRefs.current[index] = ref;
      }}
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
        setExercise={setExercise}
        isOpen={isOpen}
        handleBannerOpen={handleOpen}
      />
    </SwipeableItem>
  );
}
