import type { IExercice } from "@/types/plank";
import { Dispatch, SetStateAction, useState } from "react";
import { Modal, View } from "react-native";
import ExericiceList from "./components/ExericiceList";
import Footer from "./components/Footer";
import Title from "./components/Title";

interface ISetTimeModalProps {
  id: string;
  isOpen: boolean;
  setExercices: Dispatch<SetStateAction<IExercice[]>>;
  handleBannerOpen: () => void;
}

export default function SetTimeModal({
  id,
  isOpen,
  setExercices,
  handleBannerOpen,
}: ISetTimeModalProps) {
  const [mins, setMins] = useState("00");
  const [sec, setSec] = useState("00");

  const handleTime = () => {
    if (mins === "00" && sec === "00") {
      setSec("20");
      return;
    }

    setExercices((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              time: `${String(mins).padStart(2, "0")}:${String(sec).padStart(2, "0")}`,
            }
          : item
      )
    );

    handleBannerOpen();
  };

  return (
    <Modal
      transparent={true}
      visible={isOpen}
      statusBarTranslucent={true}
      onRequestClose={handleBannerOpen}
    >
      <View className="w-full flex-1 justify-center items-center bg-black/50">
        <View className="flex w-[320px] bg-[#cffaf2] rounded-lg items-center overflow-hidden">
          <Title />
          <ExericiceList setMins={setMins} setSec={setSec} />
          <Footer handleTime={handleTime} handleBannerOpen={handleBannerOpen} />
        </View>
      </View>
    </Modal>
  );
}
