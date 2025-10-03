import { createInitPlank } from "@/data/defaultPlank";
import { IPLank } from "@/types/plank";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TapWrapper from "../shared/TapWrapper";

export default function NewPlankButton() {
  const { bottom, right } = useSafeAreaInsets();

  return (
    <TapWrapper<IPLank>
      navigatePath="/plankScreen"
      data={createInitPlank()}
      style={{ bottom: bottom + 30, right: right + 20 }}
      className="absolute bottom right-8 h-16 w-16 items-center justify-center rounded-2xl bg-ORANGE elevation-md"
    >
      <Text className="text-3xl text-white">+</Text>
    </TapWrapper>
  );
}
