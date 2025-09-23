import type { IPLank } from "@/types/plank";
import { View } from "react-native";
import { BannerImages, BannerInfo } from "./components";

export default function PlankBanner({ title, exercices }: IPLank) {
  return (
    <View className="flex-row justify-start p-4">
      <BannerImages exercices={exercices} />
      <BannerInfo title={title} exercices={exercices} />
    </View>
  );
}
