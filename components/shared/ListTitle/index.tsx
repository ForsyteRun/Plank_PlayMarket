import React from "react";
import { Text, View } from "react-native";

interface IListTitlePops {
  title: string;
}

export default function ListTitle({ title }: IListTitlePops) {
  return (
    <View className="w-full bg-SECONDARY">
      <Text className="text-lg p-3">{title}</Text>
    </View>
  );
}
