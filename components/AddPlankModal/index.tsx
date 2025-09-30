import type { IExercise } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { Pressable, Text, View } from "react-native";
import SelectExerciceList from "../SelectExerciseList";
import BaseModal from "../shared/BaseModal";

interface IAddPlankModalProps {
  newPlankModalVisible: boolean;
  setSelectedPlanks: Dispatch<SetStateAction<IExercise[]>>;
  setNewPlankModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function AddPlankModal({
  newPlankModalVisible,
  setSelectedPlanks,
  setNewPlankModalVisible,
}: IAddPlankModalProps) {
  return (
    <BaseModal
      transparent={true}
      visible={newPlankModalVisible}
      statusBarTranslucent={true}
      onRequestClose={() => setNewPlankModalVisible(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[280px] h-[500px] bg-white rounded-xl items-center ">
          <View className="bg-SECONDARY/50 w-full rounded-t-xl p-5">
            <Text className="text-md">Выберите упражнения</Text>
          </View>
          <SelectExerciceList
            setSelectedPlanks={setSelectedPlanks}
            setNewPlankModalVisible={setNewPlankModalVisible}
          />
          <View className="bg-SECONDARY/50 w-full p-5 rounded-b-xl">
            <Pressable
              className="px-4 py-2 rounded"
              onPressIn={() => setNewPlankModalVisible(false)}
            >
              <Text className="text-PRIMARY font-bold text-right">
                Отменить
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BaseModal>
  );
}
