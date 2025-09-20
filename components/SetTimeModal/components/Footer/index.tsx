import { Pressable, Text, View } from "react-native";

interface IFooterProps {
  handleTime: () => void;
  handleBannerOpen: () => void;
}

export default function Footer({ handleTime, handleBannerOpen }: IFooterProps) {
  return (
    <View className="w-full flex-row items-center justify-end gap-5 px-10 pb-5 mt-10">
      <Pressable onPress={handleBannerOpen}>
        <Text className="text-PRIMARY text-xl">Отменить</Text>
      </Pressable>
      <Pressable onPress={handleTime}>
        <Text className="text-PRIMARY text-xl">Ок</Text>
      </Pressable>
    </View>
  );
}
