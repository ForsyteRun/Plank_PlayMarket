import AntPressbleIcon from "@/components/shared/AntIcon";
import FeatherPressbleIcon from "@/components/shared/FatherIcon";
import { Dispatch, SetStateAction } from "react";
import { Text, View } from "react-native";

interface IHeaderContentProps {
  title: string;
  isSubmitted: boolean;
  editEnabled?: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  handleBack: () => void;
}

export default function HeaderContent({
  title,
  isSubmitted,
  editEnabled,
  setIsSubmitted,
  handleBack,
}: IHeaderContentProps) {
  return (
    <View className="w-full flex-row items-center justify-between px-4 py-2">
      <View className="flex-row items-center gap-5">
        <AntPressbleIcon title="arrow-left" callback={handleBack} />
        <Text className="text-BG_WHITE text-2xl">{title}</Text>
      </View>
      {editEnabled &&
        (isSubmitted ? (
          <FeatherPressbleIcon
            title="edit-2"
            callback={() => setIsSubmitted(false)}
          />
        ) : (
          <AntPressbleIcon
            title="check"
            callback={() => setIsSubmitted(true)}
          />
        ))}
    </View>
  );
}
