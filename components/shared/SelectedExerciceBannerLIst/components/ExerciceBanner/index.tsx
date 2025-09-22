import { IExercise } from "@/types/plank";
import AntDesign from "@expo/vector-icons/AntDesign";
import cn from "classnames";
import { Image, Pressable, Text, View } from "react-native";
import BannerCount from "../BannerCount";

interface IExerciseBannerProps {
  item: IExercise;
  isFirst: boolean;
  isRest: boolean;
  index: number;
  handleBannerOpen: () => void;
}

export default function ExerciceBanner({
  item,
  index,
  isFirst,
  isRest,
  handleBannerOpen,
}: IExerciseBannerProps) {
  return (
    <Pressable
      onPress={handleBannerOpen}
      className={cn(
        "flex-1 flex-row items-center justify-between px-5 p-4 bg-white",
        {
          "pt-4": isFirst,
        }
      )}
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
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexBasis: "30%",
        }}
      >
        <Image
          source={item.image}
          className={cn(isRest ? "w-7 h-7" : "w-24 h-16")}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
}
