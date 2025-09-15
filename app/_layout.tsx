import { Stack } from "expo-router";
import "./../global.css";

import CustomHeader from "@/components/CustomHeader";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(drawer)"
          options={{ headerShown: false, animation: "none" }}
        />
        <Stack.Screen
          name="newPlankScreen"
          options={{
            animation: "none",
            header: () => <CustomHeader />,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
