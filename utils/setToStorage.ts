import type { IPlankCollection } from "@/types/plank";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToStorage = async (value: IPlankCollection) => {
  try {
    await AsyncStorage.setItem("exercises", JSON.stringify(value));
  } catch (error) {
    console.log("Ошибка сохранения  упражнений:", error);
  }
};
