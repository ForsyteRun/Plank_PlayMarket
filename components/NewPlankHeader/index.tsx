import { Dimensions, Text, View } from "react-native";

import { useOpen } from "@/hooks";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { Dispatch, SetStateAction } from "react";
import AttentionModal from "../shared/AttentionModal";
interface INewPlankHeaderProps {
  title: string;
  submitted: boolean;
  handleSubmit: () => void;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  handleEdit: () => void;
}

export default function NewPlankHeader({
  title,
  submitted,
  handleSubmit,
  setSubmitted,
  handleEdit,
}: INewPlankHeaderProps) {
  const router = useRouter();

  const { isOpen, handleOpen } = useOpen();

  const height = Dimensions.get("window").height;

  const handleBack = () => {
    if (submitted) {
      handleSubmit();

      router.push("/(drawer)");
    } else {
      handleOpen();
    }
  };

  return (
    <View>
      <View
        style={{
          height: height * 0.12,
          backgroundColor: "#3BA79B",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: 18,
        }}
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
              }}
            >
              {title}
            </Text>
          </View>
          {submitted ? (
            <Feather
              onPress={handleEdit}
              name="edit-2"
              size={20}
              color="#fbf9e6"
            />
          ) : (
            <AntDesign
              onPress={() => setSubmitted(true)}
              name="check"
              size={20}
              color="#fbf9e6"
            />
          )}
        </View>
      </View>
      <AttentionModal isOpen={isOpen} handleOpen={handleOpen} />
    </View>
  );
}
