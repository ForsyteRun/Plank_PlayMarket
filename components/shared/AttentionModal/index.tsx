import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import { Modal, Text, View } from "react-native";
import ModalButton from "./components/ModalButton";
interface IAttentionModalProps {
  isOpen: boolean;
  handleOpen: () => void;
}

export default function AttentionModal({
  isOpen,
  handleOpen,
}: IAttentionModalProps) {
  const router = useRouter();

  const handleContinue = () => {
    handleOpen();

    router.push("/(drawer)");
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      statusBarTranslucent={true}
      onRequestClose={handleOpen}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-SECONDARY/90 rounded-3xl items-center p-5">
          <View className="flex items-center justify-center gap-5">
            <Entypo name="warning" size={24} color="#FFA726" />
            <Text className="text-2xl text-black">Отменить</Text>
            <Text className="text-sm text-black">
              Вы уверены что хотите отменить изменения?
            </Text>
          </View>
          <View className="flex-row self-end gap-5 mt-8 mb-6">
            <ModalButton text="Нет" callback={handleOpen} />
            <ModalButton text="Да" callback={handleContinue} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
