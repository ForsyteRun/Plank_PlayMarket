import { Dispatch, default as React, SetStateAction, memo } from "react";
import { Text } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";

interface IWheelPickerProps {
  data: {
    label: string;
    value: number;
  }[];
  setValue: Dispatch<SetStateAction<string>>;
}

export default function WheelPicker({ data, setValue }: IWheelPickerProps) {
  return (
    <WheelPickerExpo
      height={200}
      width={100}
      items={data}
      renderItem={({ label }) => <WhileItem label={label} />}
      backgroundColor="#cffaf2"
      onChange={({ item }) => setValue(item.label)}
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
