import { Stack } from "expo-router";
import "./../global.css";

import HeaderWrapper from "@/components/shared/HeaderWrapper";
import { ExerciseProvider } from "@/context/ExerciseContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";

enableScreens(true);

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExerciseProvider>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ animation: "none", headerShown: false }}
          />
          <Stack.Screen
            name="newPlankScreen"
            options={{
              animation: "none",
              header: (props) => <HeaderWrapper {...props} />,
            }}
          />
        </Stack>
      </ExerciseProvider>
    </GestureHandlerRootView>
  );
}
