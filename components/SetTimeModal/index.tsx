import { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import ExericiceList from "./components/ExericiceList";
import Footer from "./components/Footer";
import Title from "./components/Title";

interface ISetTimeModalProps {
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
}

export default function SetTimeModal({ setExercices }: ISetTimeModalProps) {
  return (
    <View className="w-full flex-1 justify-center items-center bg-black/50">
      <View className="flex w-[320px] bg-[#cffaf2] rounded-lg items-center overflow-hidden">
        <Title />
        <ExericiceList />
        <Footer />
      </View>
    </View>
  );
}
