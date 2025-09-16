import { IMAGES } from "@/data/defaultPlank";
import cn from "classnames";
import { Dispatch, SetStateAction } from "react";
import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";

interface IAddPlankModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export default function AddPlankModal({
  modalVisible,
  setModalVisible,
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
          <FlatList
            data={Object.entries(IMAGES)}
            keyExtractor={(item) => item[0]}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              const isRest = item[0] === "rest";

              const isLast = index === Object.entries(IMAGES).length - 1;

              return (
                <View
                  className={cn(
                    "w-full h-20 flex-row items-center justify-between gap-2 bg-gray-100  border-b border-LIGHT_GREY px-5",
                    {
                      "border-b-0": isLast,
                    }
                  )}
                >
                  <View className="flex-1 items-center">
                    <Image
                      source={item[1]}
                      className={cn(isRest ? "w-7" : "w-24")}
                      resizeMode="contain"
                    />
                  </View>
                  <View className="w-1/2 justify-start ">
                    <Text className="text-gray-600 text-wrap">{item[0]}</Text>
                  </View>
                </View>
              );
            }}
          />
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
