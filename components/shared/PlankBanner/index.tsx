import type { IPLank } from "@/types/plank";
import { TouchableOpacity } from "react-native";
import BannerImages from "./components/BannerImages";

export default function PlankBanner({ title, exercices }: IPLank) {
  return (
    <TouchableOpacity className="px-4">
      <BannerImages exercices={exercices} />
    </TouchableOpacity>
  );
}
