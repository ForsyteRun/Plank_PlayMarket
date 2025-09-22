import React from "react";
import { Text, View } from "react-native";

interface IListTitlePops {
  title: string;
}

export default function ListTitle({ title }: IListTitlePops) {
  return (
    <View className="w-full bg-SECONDARY">
      <Text className="text-lg px-3 py-1">{title}</Text>
    </View>
  );
}
