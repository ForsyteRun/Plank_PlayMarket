import AntPressbleIcon from "@/components/shared/AntIcon";
import FeatherPressbleIcon from "@/components/shared/FatherIcon";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IHeaderContentProps {
  title: string;
  isSubmitted: boolean;
  editEnabled?: boolean;
  handleEdit: (value: "edit" | "submit") => void;
  handleBack: () => void;
}

export default function HeaderContent({
  title,
  isSubmitted,
  editEnabled,
  handleEdit,
  handleBack,
}: IHeaderContentProps) {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: top + 18 }}
      className="w-full flex-row items-center justify-between  bg-PRIMARY px-4 py-6"
    >
      <View className="w-5/6 flex-row items-center gap-5 pr-4">
        <AntPressbleIcon title="arrow-left" callback={handleBack} />
        <Text className="text-BG_WHITE text-2xl">{title}</Text>
      </View>
      {editEnabled &&
        (isSubmitted ? (
          <FeatherPressbleIcon
            title="edit-2"
            callback={() => handleEdit("edit")}
          />
        ) : (
          <AntPressbleIcon
            title="check"
            callback={() => handleEdit("submit")}
          />
        ))}
    </View>
  );
}
