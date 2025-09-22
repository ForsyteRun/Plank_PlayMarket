import { Pressable, Text } from "react-native";

interface IModalButtonProps {
  text: string;
  callback: () => void;
}

export default function ModalButton({ text, callback }: IModalButtonProps) {
  return (
    <Pressable className="px-4 py-2 rounded" onPress={callback}>
      <Text className="text-PRIMARY font-bold text-right">{text}</Text>
    </Pressable>
  );
}
