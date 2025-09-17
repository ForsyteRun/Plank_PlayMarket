import React, { Dispatch, SetStateAction } from "react";
import { Pressable, Text } from "react-native";

interface IAddNewPlankButtonProps {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function AddNewPlankButton({
  setModalVisible,
}: IAddNewPlankButtonProps) {
  return (
    <Pressable
      onPress={() => setModalVisible(true)}
      className="bg-LIGHT_GREY flex-row items-center justify-center gap-4 px-2 py-5"
    >
      <Text className="text-3xl text-black">+</Text>
      <Text className="text-lg text-black">Добавить упражнение</Text>
    </Pressable>
  );
}
