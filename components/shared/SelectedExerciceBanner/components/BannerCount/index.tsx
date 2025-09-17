import { Text, View } from "react-native";

interface IBannerCountProps {
  count: number;
}

export default function BannerCount({ count }: IBannerCountProps) {
  return (
    <View className="w-12 h-12 flex items-center justify-center bg-PRIMARY rounded-full">
      <Text className="text-white text-xl">{count + 1}</Text>
    </View>
  );
}
