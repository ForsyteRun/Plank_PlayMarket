import { useOpen } from "@/hooks";
import { memo } from "react";
import { View } from "react-native";
import AttentionModal from "../AttentionModal";
import HeaderContent from "./components/HeaderContent";

interface INewPlankHeaderProps {
  title: string;
  isSubmitted: boolean;
  editEnabled?: boolean;
  handleEdit: (value: "edit" | "submit") => void;
}

const Header = memo(
  ({ title, isSubmitted, editEnabled, handleEdit }: INewPlankHeaderProps) => {
    const { isOpen, handleOpen } = useOpen();

    const handleBack = () => {
      if (!isSubmitted && editEnabled) {
        handleOpen();
      }
    };

    return (
      <View>
        <HeaderContent
          title={title}
          isSubmitted={isSubmitted}
          handleBack={handleBack}
          editEnabled={editEnabled}
          handleEdit={handleEdit}
        />
        <AttentionModal
          title="Отменить?"
          text="Вы уверены что хотите отменить изменения?"
          noBtn="Нет"
          yesBtn="Да"
          isOpen={isOpen}
          handleTap={handleOpen}
        />
      </View>
    );
  }
);

export default Header;
