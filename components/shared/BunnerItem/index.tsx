import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View } from "react-native";

interface IBunnerItemProps {
  icon: "unordered-list" | "clock-circle";
  text: string;
}

export default function BunnerItem({ icon, text }: IBunnerItemProps) {
  return (
    <View className="flex-row items-center justify-between gap-2 ">
      <AntDesign name={icon} size={14} color="#999" />
      <Text className="text-GREY">{text}</Text>
    </View>
  );
}
