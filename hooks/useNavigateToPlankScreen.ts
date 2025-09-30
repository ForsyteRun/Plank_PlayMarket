import type { IPLank } from "@/types/plank";
import { useRouter } from "expo-router";

export const useNavigateToPlankScreen = () => {
  const router = useRouter();

  // const handleDelete = (id: string) => {
  //   // setExercises((prev) => ({
  //   //   ...prev,
  //   //   custom: prev.custom.filter((e) => e.id !== id),
  //   // }));
  // };

  const navigateToPlankScreen = (plank: IPLank) => {
    const JSONplank = JSON.stringify({
      ...plank,
    });

    router.push({
      pathname: "/plankScreen",
      params: { data: JSONplank },
    });
  };

  return {
    navigateToPlankScreen,
  };
};
