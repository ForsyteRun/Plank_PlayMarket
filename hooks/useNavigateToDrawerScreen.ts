import { useRouter } from "expo-router";

export const useNavigateToDrawerScreen = () => {
  const router = useRouter();

  const navigateToDrawerScreen = () => {
    router.push("/(drawer)");
  };

  return {
    navigateToDrawerScreen,
  };
};
