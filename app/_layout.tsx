import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import "./../global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#006652" },
        headerTitle: () => (
          <Text
            style={{
              color: "#f7daa4",
              fontSize: 18,
              marginLeft: 10,
            }}
          >
            Упражнения
          </Text>
        ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => (
            <Pressable onPress={() => console.log("Нажали на иконку!")}>
              <Ionicons name="menu-sharp" size={34} color="#f7daa4" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
