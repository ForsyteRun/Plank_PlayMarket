import { Stack } from "expo-router";
import "./../global.css";

import { ExerciseProvider } from "@/context/ExerciseContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExerciseProvider>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen
            name="newPlankScreen"
            options={{
              headerShown: false,
              animation: "none",
            }}
          />
        </Stack>
      </ExerciseProvider>
    </GestureHandlerRootView>
  );
}
