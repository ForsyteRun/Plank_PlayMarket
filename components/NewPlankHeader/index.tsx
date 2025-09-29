import { Text, View } from "react-native";

import { useOpen } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { memo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntPressbleIcon from "../shared/AntIcon";
import AttentionModal from "../shared/AttentionModal";

interface INewPlankHeaderProps extends DrawerHeaderProps {
  title: string;
  submitted: boolean;
  editEnabled?: boolean;
  handleSubmit: () => void;
  handleEdit: (value: "active" | "inactive") => void;
}

const NewPlankHeader = memo(
  ({
    title,
    submitted,
    editEnabled,
    route,
    navigation,
    handleSubmit,
    handleEdit,
  }: INewPlankHeaderProps) => {
    const { top } = useSafeAreaInsets();

    const { isOpen, handleOpen } = useOpen();

    const handleBack = () => {
      navigation.goBack();
      // if (!editEnabled) {
      //   // router.push("/(drawer)");
      //   return;
      // }

      // if (submitted) {
      //   handleSubmit();

      //   // router.push("/(drawer)");
      // } else {
      //   handleOpen();
      // }
    };

    const handleDrawer = () => {
      navigation.openDrawer();
    };

    const handleYes = () => {
      handleOpen();

      // router.push("/(drawer)");
    };

    const isHomePage = route.name === "index";

    return (
      <View>
        <View
          style={{ paddingTop: top + 25 }}
          className="w-full flex-row items-end justify-between bg-PRIMARY pr-4 py-4"
        >
          <View className="w-full flex-row items-center justify-between px-6">
            <View className="flex-row items-center gap-5">
              {isHomePage ? (
                <AntPressbleIcon title="menu" callback={handleDrawer} />
              ) : (
                <AntPressbleIcon title="arrow-left" callback={handleBack} />
              )}

              <Text className="text-BG_WHITE text-2xl">
                {isHomePage ? "Упражнения" : title}
              </Text>
            </View>
            {editEnabled ? (
              submitted ? (
                <Feather
                  onPressIn={() => handleEdit("active")}
                  name="edit-2"
                  size={20}
                  color="#fbf9e6"
                />
              ) : (
                <AntDesign
                  onPressIn={() => handleEdit("inactive")}
                  name="check"
                  size={20}
                  color="#fbf9e6"
                />
              )
            ) : null}
          </View>
        </View>
        <AttentionModal
          title="Отменить?"
          text="Вы уверены что хотите отменить изменения?"
          noBtn="Нет"
          yesBtn="Да"
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleYes={handleYes}
        />
      </View>
    );
  }
);

export default NewPlankHeader;
