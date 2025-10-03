import { Stack } from "expo-router";
import "./../global.css";

import StoreProvider from "@/providers/storeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";

enableScreens();
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StoreProvider>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ animation: "none", headerShown: false }}
          />
          <Stack.Screen
            name="plankScreen"
            options={{
              animation: "none",
              headerShown: false,
            }}
          />
        </Stack>
      </StoreProvider>
    </GestureHandlerRootView>
  );
}
