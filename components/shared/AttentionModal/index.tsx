import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";
import BaseModal from "../BaseModal";
import ModalButton from "./components/ModalButton";
interface IAttentionModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  yesBtn: string;
  noBtn: string;
  handleOpen: () => void;
  handleYes: () => void;
}

export default function AttentionModal({
  isOpen,
  title,
  text,
  yesBtn,
  noBtn,
  handleOpen,
  handleYes,
}: IAttentionModalProps) {
  return (
    <BaseModal
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
            <Text className="text-2xl text-black">{title}</Text>
            <Text className="text-sm text-black">{text}</Text>
          </View>
          <View className="flex-row self-end gap-5 mt-8 mb-6">
            <ModalButton text={noBtn} callback={handleOpen} />
            <ModalButton text={yesBtn} callback={handleYes} />
          </View>
        </View>
      </View>
    </BaseModal>
  );
}
