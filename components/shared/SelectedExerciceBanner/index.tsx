import AddNewPlankButton from "@/components/AddNewPlankButton";
import type { IExercice } from "@/types/plank";
import AntDesign from "@expo/vector-icons/AntDesign";
import cn from "classnames";
import { Dispatch, SetStateAction } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { BannerCount } from "./components";

interface ISelectedExerciceBannerProps {
  exercices: IExercice[];
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function SelectedExerciceBanner({
  exercices,
  setModalVisible,
}: ISelectedExerciceBannerProps) {
  return (
    <FlatList
      data={exercices}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <AddNewPlankButton setModalVisible={setModalVisible} />
      }
      contentContainerStyle={{
        gap: 30,
      }}
      renderItem={({ item, index }) => {
        const isRest = item.type === "rest";
        const isFirst = index === 0;

        return (
          <View
            className={cn("flex-row items-center justify-between px-5", {
              "pt-6": isFirst,
            })}
          >
            <View className="flex-row items-center gap-4">
              <BannerCount count={index} />
              <View className="flex gap-2">
                <Text className="text-black font-medium text-md">
                  {item.type}
                </Text>
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
          </View>
        );
      }}
    />
  );
}
