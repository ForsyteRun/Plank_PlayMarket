import { useCallback, useRef } from "react";
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
  const minsRef = useRef("00");
  const secRef = useRef("00");

  const handleTime = useCallback(() => {
    if (minsRef.current === "00" && secRef.current === "00") {
      secRef.current = "20";
      return;
    }

    handleUpdateTime(id, minsRef.current, secRef.current);

    minsRef.current = "00";
    secRef.current = "00";
  }, [minsRef, secRef, id]);

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
          <ExericiceList minsRef={minsRef} secRef={secRef} />
          <Footer handleTime={handleTime} handleBannerOpen={handleBannerOpen} />
        </View>
      </View>
    </BaseModal>
  );
}
