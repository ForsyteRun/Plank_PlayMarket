import { SplashScreen } from "expo-router";
import { useEffect } from "react";

export const useSplashScreen = (loaded: boolean) => {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
};
