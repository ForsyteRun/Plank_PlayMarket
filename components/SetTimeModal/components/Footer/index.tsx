import { Pressable, Text, View } from "react-native";

export default function Footer() {
  return (
    <View className="w-full flex-row items-center justify-end gap-5 px-10 pb-5 mt-10">
      <Pressable>
        <Text className="text-PRIMARY text-xl">Отменить</Text>
      </Pressable>
      <Pressable>
        <Text className="text-PRIMARY text-xl">Ок</Text>
      </Pressable>
    </View>
  );
}
