import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";

type GlyphMap = ReturnType<typeof AntDesign.getRawGlyphMap>;

type AntIconName = keyof GlyphMap;

interface IAntPressbleIconProps {
  title: AntIconName;
  color?: string;
  size?: number;
  callback: () => void;
}

export default function AntPressbleIcon({
  title,
  color = "#fbf9e6",
  size = 20,
  callback,
}: IAntPressbleIconProps) {
  return (
    <Pressable
      onPressIn={callback}
      className="flex items-center justify-center"
    >
      <AntDesign name={title} size={size} color={color} />
    </Pressable>
  );
}
