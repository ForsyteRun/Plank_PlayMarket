import type { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import SelectExerciceList from "../SelectExerciceList";

interface IAddPlankModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
}

export default function AddPlankModal({
  modalVisible,
  setModalVisible,
  setExercices,
}: IAddPlankModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      statusBarTranslucent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[280px] h-[500px] bg-white rounded-xl items-center ">
          <View className="bg-SECONDARY/50 w-full rounded-t-xl p-5">
            <Text className="text-md">Выберите упражнения</Text>
          </View>
          <SelectExerciceList setExercices={setExercices} />
          <View className="bg-SECONDARY/50 w-full p-5 rounded-b-xl">
            <Pressable
              className="px-4 py-2 rounded"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-PRIMARY font-bold text-right">
                Отменить
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
