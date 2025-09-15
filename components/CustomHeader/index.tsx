import { Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
export default function CustomHeader() {
  const router = useRouter();

  const handleBack = () => router.push("/(drawer)");
  return (
    <View
      style={{
        height: 110,
        backgroundColor: "#3BA79B",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: 18,
      }}
    >
      <View className="w-full flex-row items-center justify-between ">
        <View className="flex-row items-center justify-center gap-6">
          <AntDesign
            onPress={handleBack}
            name="arrow-left"
            size={20}
            color="#fbf9e6"
          />
          <Text
            style={{
              color: "#fbf9e6",
              fontSize: 22,
            }}
          >
            Новое Упражнение
          </Text>
        </View>
        <AntDesign name="check" size={20} color="#fbf9e6" />
      </View>
    </View>
  );
}
