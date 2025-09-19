import { memo, useState } from "react";
import { Text, View } from "react-native";
import WheelPicker from "../WheelPicker";

const TIMES = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString(),
  value: i,
}));

const LOOP_DATA = Array.from({ length: 100 }, () => TIMES).flat();

export default function ExericiceList() {
  const [value1, setValue1] = useState(TIMES[0].label);
  const [value2, setValue2] = useState(TIMES[0].label);

  return (
    <View className="flex-row justify-center items-center gap-2">
      <View className="relative">
        <WheelPicker data={LOOP_DATA} setValue={setValue1} />
        <BorderItem />
      </View>

      <Text className="text-2xl text-black mx-1">:</Text>

      <View className="relative">
        <WheelPicker data={LOOP_DATA} setValue={setValue2} />
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
