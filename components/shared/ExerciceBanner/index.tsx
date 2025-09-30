import { IExercise } from "@/types/plank";
import AntDesign from "@expo/vector-icons/AntDesign";
import cn from "classnames";
import { Image, Pressable, Text, View } from "react-native";
import BannerCount from "../BannerCount";
import { SwipeableComponent } from "../SwipeableComponent";
import UnderlaySwapPlankBanner from "../UnderlaySwapPlankBanner";

interface IExerciseBannerProps {
  item: IExercise;
  index: number;
  changeTime?: () => void;
  swipeable: boolean;
}

export default function ExerciceBanner({
  item,
  index,
  changeTime,
  swipeable,
}: IExerciseBannerProps) {
  const content = (
    <Pressable
      onPressIn={changeTime}
      className="flex-row items-center justify-between px-5 py-4 bg-white"
    >
      <View className="flex-row items-center gap-4">
        <BannerCount count={index} />
        <View className="flex gap-2">
          <Text className="text-black font-medium text-md">{item.type}</Text>
          <View className="flex-row items-center gap-2">
            <AntDesign name="clock-circle" size={14} color="black" />
            <Text className="text-black text-md">{item.time}</Text>
          </View>
        </View>
      </View>

      <View className="flex items-center justify-center basis-1/3">
        <Image
          source={item.image}
          className={cn(item.type === "rest" ? "w-7 h-7" : "w-24 h-16")}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );

  if (!swipeable) return content;

  return (
    <SwipeableComponent<IExercise>
      item={item}
      key={item.id}
      renderUnderlayLeft={() => (
        <UnderlaySwapPlankBanner<IExercise> handleDelete={() => {}} />
      )}
      snapPointsLeft={[80]}
      activationThreshold={80}
      overSwipe={0}
    >
      {content}
    </SwipeableComponent>
  );
}
