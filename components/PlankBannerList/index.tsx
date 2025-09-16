import AddPlankModal from "@/components/AddPlankModal";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function PlankBannerList() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 h-full">
      <Pressable
        onPress={() => setModalVisible(true)}
        className="bg-LIGHT_GREY flex-row items-center justify-center gap-4 px-2 py-5"
      >
        <Text className="text-3xl text-black">+</Text>
        <Text className="text-lg text-black">Добавить упражнение</Text>
      </Pressable>
      <AddPlankModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}
