import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";
import BaseModal from "../BaseModal";
import TapWrapper from "../TapWrapper";
import ModalButton from "./components/ModalButton";
interface IAttentionModalProps {
  isOpen: boolean;
  title: string;
  text: string;
  yesBtn: string;
  noBtn: string;
  handleTap: (value: "yes" | "no") => void;
}

export default function AttentionModal({
  isOpen,
  title,
  text,
  yesBtn,
  noBtn,
  handleTap,
}: IAttentionModalProps) {
  return (
    <BaseModal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      statusBarTranslucent={true}
      onRequestClose={() => handleTap("no")}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-SECONDARY/90 rounded-3xl items-center p-5">
          <View className="flex items-center justify-center gap-5">
            <Entypo name="warning" size={24} color="#FFA726" />
            <Text className="text-2xl text-black">{title}</Text>
            <Text className="text-sm text-black">{text}</Text>
          </View>
          <View className="flex-row self-end gap-5 mt-8 mb-6">
            <ModalButton text={noBtn} handleOpen={() => handleTap("no")} />
            <TapWrapper navigatePath="/(drawer)">
              <ModalButton text={yesBtn} handleOpen={() => handleTap("yes")} />
            </TapWrapper>
          </View>
        </View>
      </View>
    </BaseModal>
  );
}
