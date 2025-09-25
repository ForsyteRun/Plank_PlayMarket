import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromStorage = async () => {
  try {
    return await AsyncStorage.getItem("exercises");
  } catch (error) {
    console.log("Ошибка получения упражнений:", error);
  }
};
