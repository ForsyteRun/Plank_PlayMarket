import { useState } from "react";
import { View } from "react-native";
import BaseModal from "../shared/BaseModal";
import ExericiceList from "./components/ExericiceList";
import Footer from "./components/Footer";
import Title from "./components/Title";

interface ISetTimeModalProps {
  id: string;
  isOpen: boolean;
  handleBannerOpen: () => void;
  handleUpdateTime: (id: string, mins: string, sec: string) => void;
}

export default function SetTimeModal({
  id,
  isOpen,
  handleBannerOpen,
  handleUpdateTime,
}: ISetTimeModalProps) {
  const [mins, setMins] = useState("00");
  const [sec, setSec] = useState("00");

  const handleTime = () => {
    if (mins === "00" && sec === "00") {
      setSec("20");
      return;
    }

    handleUpdateTime(id, mins, sec);

    setMins("00");
    setSec("00");
  };

  return (
    <BaseModal
      animationType="fade"
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
    </BaseModal>
  );
}
