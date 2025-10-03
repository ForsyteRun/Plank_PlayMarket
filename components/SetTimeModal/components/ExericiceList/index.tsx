import { RefObject, memo } from "react";
import { Text, View } from "react-native";
import WheelPicker from "../WheelPicker";

const TIMES = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString(),
  value: i,
}));

const LOOP_DATA = Array.from({ length: 100 }, () => TIMES).flat();

interface IExericiceListProps {
  minsRef: RefObject<string>;
  secRef: RefObject<string>;
}

export default function ExericiceList({
  minsRef,
  secRef,
}: IExericiceListProps) {
  return (
    <View className="flex-row justify-center items-center gap-2">
      <View className="relative">
        <WheelPicker data={LOOP_DATA} timeRef={minsRef} />
        <BorderItem />
      </View>

      <Text className="text-2xl text-black mx-1">:</Text>

      <View className="relative">
        <WheelPicker data={LOOP_DATA} timeRef={secRef} />
        <BorderItem />
      </View>
    </View>
  );
}

const BorderItem = memo(() => {
  return (
    <View
      className="absolute top-1/2 w-3/4 self-center border-y border-black"
      style={{ marginTop: -23, height: 46 }}
      pointerEvents="none"
    />
  );
});
