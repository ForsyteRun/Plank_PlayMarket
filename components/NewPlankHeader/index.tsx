import { Dimensions, Text, View } from "react-native";

import { useOpen } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AttentionModal from "../shared/AttentionModal";
interface INewPlankHeaderProps {
  title: string;
  submitted: boolean;
  editEnabled?: boolean;
  handleSubmit: () => void;
  handleEdit: (value: "active" | "inactive") => void;
}

export default function NewPlankHeader({
  title,
  submitted,
  editEnabled,
  handleSubmit,
  handleEdit,
}: INewPlankHeaderProps) {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  const { isOpen, handleOpen } = useOpen();

  const height = Dimensions.get("window").height;

  const handleBack = () => {
    if (!editEnabled) {
      router.push("/(drawer)");
      return;
    }

    if (submitted) {
      handleSubmit();

      router.push("/(drawer)");
    } else {
      handleOpen();
    }
  };

  // const handleBack = () => {
  //   if (!editEnabled) {
  //     return router.push("/(drawer)");
  //   }

  //   if (submitted) {
  //     handleSubmit();
  //     return router.push("/(drawer)");
  //   }

  //   handleOpen();
  // };

  const handleYes = () => {
    handleOpen();

    router.push("/(drawer)");
  };

  console.log(editEnabled);

  return (
    <View>
      <View
        style={{ minHeight: height * 0.12, paddingTop: top }}
        className="w-full flex-row items-end justify-between bg-PRIMARY pr-4 py-4"
      >
        <View className="w-full flex-row items-center justify-between ">
          <View className="flex-row items-center justify-center gap-6">
            <AntDesign
              onPress={handleBack}
              name="arrow-left"
              size={20}
              color="#fbf9e6"
            />
            <Text
              style={{
                color: "#fbf9e6",
                fontSize: 22,
                width: "80%",
              }}
            >
              {title}
            </Text>
          </View>
          {editEnabled ? (
            submitted ? (
              <Feather
                onPress={() => handleEdit("active")}
                name="edit-2"
                size={20}
                color="#fbf9e6"
              />
            ) : (
              <AntDesign
                onPress={() => handleEdit("inactive")}
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
