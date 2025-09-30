import Feather from "@expo/vector-icons/Feather";
import { Pressable } from "react-native";

type GlyphMap = ReturnType<typeof Feather.getRawGlyphMap>;

type FeatherIconName = keyof GlyphMap;

interface IFeatherPressbleIconProps {
  title: FeatherIconName;
  color?: string;
  size?: number;
  callback: () => void;
}

export default function FeatherPressbleIcon({
  title,
  color = "#fbf9e6",
  size = 20,
  callback,
}: IFeatherPressbleIconProps) {
  return (
    <Pressable
      onPressIn={callback}
      className="flex items-center justify-center"
    >
      <Feather name={title} size={size} color={color} />
    </Pressable>
  );
}
