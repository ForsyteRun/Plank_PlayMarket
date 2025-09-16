import DefaultPlankList from "@/components/DefaultPlankList";
import NewPlankButton from "@/components/NewPlankButton";
import UserPlankList from "@/components/UserPlankList";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-BG_WHITE">
      <DefaultPlankList />
      <UserPlankList />
      <NewPlankButton />
    </View>
  );
}
