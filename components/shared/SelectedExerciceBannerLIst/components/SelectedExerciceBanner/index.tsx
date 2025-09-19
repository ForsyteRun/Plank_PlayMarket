import SetTimeModal from "@/components/SetTimeModal";
import type { IExercice } from "@/types/plank";
import AntDesign from "@expo/vector-icons/AntDesign";
import cn from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";
import BannerCount from "../BannerCount";
interface ISelectedExerciceBannerProps {
  item: IExercice;
  isFirst: boolean;
  isRest: boolean;
  index: number;
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
}

export default function SelectedExerciceBanner({
  item,
  isRest,
  isFirst,
  index,
  setExercices,
}: ISelectedExerciceBannerProps) {
  const [isOpen, setOpen] = useState(false);

  const handleBannerClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <View>
      <Pressable
        onPress={handleBannerClick}
        className={cn("flex-row items-center justify-between px-5", {
          "pt-6": isFirst,
        })}
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
      <Modal
        transparent={true}
        visible={isOpen}
        statusBarTranslucent={true}
        onRequestClose={() => setOpen(false)}
      >
        <SetTimeModal
          id={item.id}
          setExercices={setExercices}
          handleBannerClick={handleBannerClick}
        />
      </Modal>
    </View>
  );
}
