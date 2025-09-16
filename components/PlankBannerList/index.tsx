import { Text, View } from "react-native";

export default function PlankBannerList() {
  return (
    <View className="flex-1 h-full">
      <View className="bg-LIGHT_GREY flex-row items-center justify-center gap-4 px-2 py-5">
        <Text className="text-3xl text-black">+</Text>
        <Text className="text-lg text-black">Добавить упражнение</Text>
      </View>
    </View>
  );
}
