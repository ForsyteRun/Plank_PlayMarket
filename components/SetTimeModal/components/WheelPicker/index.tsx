import { default as React, RefObject, memo, useCallback } from "react";
import { Text } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";

interface IWheelPickerProps {
  data: {
    label: string;
    value: number;
  }[];
  timeRef: RefObject<string>;
}

export default function WheelPicker({ data, timeRef }: IWheelPickerProps) {
  const handleChange = useCallback(
    (index: number) => {
      const selected = data[index];
      if (selected) {
        timeRef.current = selected.value.toString();
      }
    },
    [data, timeRef]
  );

  return (
    <WheelPickerExpo
      height={200}
      width={100}
      items={data}
      renderItem={({ label }) => <WhileItem label={label} />}
      backgroundColor="#cffaf2"
      onChange={({ index }) => handleChange(index)}
      flatListProps={{
        decelerationRate: 1,
        scrollEventThrottle: 10,
      }}
    />
  );
}

const WhileItem = memo(({ label }: { label: string }) => {
  return <Text className="text-black text-2xl">{label}</Text>;
});
