import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function NewPlankButton() {
  const { bottom, right } = useSafeAreaInsets();
  const router = useRouter();

  const handleNewPlankScreen = () => {
    router.push("/newPlankScreen");
  };

  return (
    <Pressable
      onPress={handleNewPlankScreen}
      style={{ bottom: bottom + 30, right: right + 20 }}
      className="absolute bottom-[px] right-8 h-16 w-16 items-center justify-center rounded-2xl bg-ORANGE elevation-md"
    >
      <Text className="text-3xl text-white">+</Text>
    </Pressable>
  );
}
