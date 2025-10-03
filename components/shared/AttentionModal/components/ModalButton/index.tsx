import { Pressable, Text } from "react-native";

interface IModalButtonProps {
  text: string;
  handleOpen?: () => void;
}

export default function ModalButton({ text, handleOpen }: IModalButtonProps) {
  return (
    <Pressable onPress={handleOpen} className="px-4 py-2 rounded">
      <Text className="text-PRIMARY font-bold text-right">{text}</Text>
    </Pressable>
  );
}
