import { Dimensions, Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
interface INewPlankHeaderProps {
  title: string;
  submitted: boolean;
  handleSubmit: () => void;
  handleEditExercise: () => void;
}

export default function NewPlankHeader({
  title,
  submitted,
  handleSubmit,
  handleEditExercise,
}: INewPlankHeaderProps) {
  const router = useRouter();
  const height = Dimensions.get("window").height;

  const handleBack = () => router.push("/(drawer)");
  return (
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
            onPress={handleEditExercise}
            name="edit-2"
            size={20}
            color="#fbf9e6"
          />
        ) : (
          <AntDesign
            onPress={handleSubmit}
            name="check"
            size={20}
            color="#fbf9e6"
          />
        )}
      </View>
    </View>
  );
}
