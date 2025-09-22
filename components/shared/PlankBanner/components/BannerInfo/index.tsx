import BunnerItem from "@/components/shared/BunnerItem";
import type { IExercise } from "@/types/plank";
import { getTotalTime } from "@/utils/getTotalTime";
import { Text, View } from "react-native";
interface IBannerInfoProps {
  title: string;
  exercices: IExercise[];
}

export default function BannerInfo({ title, exercices }: IBannerInfoProps) {
  const totalTime = getTotalTime(exercices);

  const step = `${exercices.length} ${exercices.length === 1 ? "шаг" : "шагов"}`;

  return (
    <View
      style={{ width: "40%" }}
      className="flex items-start justify-center gap-2"
    >
      <Text className="text-xl font-medium">{title}</Text>
      <View className="w-full flex-row items-center justify-between">
        <BunnerItem icon="unordered-list" text={step} />
        <BunnerItem icon="clock-circle" text={totalTime} />
      </View>
    </View>
  );
}
