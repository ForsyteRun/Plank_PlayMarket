import type { IPLank } from "@/types/plank";
import { TouchableOpacity } from "react-native";
import { BannerImages, BannerInfo } from "./components";

export default function PlankBanner({ title, exercices }: IPLank) {
  return (
    <TouchableOpacity className="flex-row justify-start p-4">
      <BannerImages exercices={exercices} />
      <BannerInfo title={title} exercices={exercices} />
    </TouchableOpacity>
  );
}
