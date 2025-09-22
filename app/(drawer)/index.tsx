import DefaultPlankList from "@/components/DefaultPlankList";
import NewPlankButton from "@/components/NewPlankButton";
import UserPlankList from "@/components/UserPlankList";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { bottom } = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-BG_WHITE">
      <ScrollView className="flex-1 pb-10" style={{ marginBottom: bottom }}>
        <DefaultPlankList />
        <UserPlankList />
      </ScrollView>
      <NewPlankButton />
    </View>
  );
}
