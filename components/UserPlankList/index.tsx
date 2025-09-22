import ListTitle from "@/components/shared/ListTitle";
import { useExercises } from "@/context/ExerciseContext";
import { ScrollView, Text, View } from "react-native";

export default function UserPlankList() {
  const { exercises } = useExercises();

  return (
    <View>
      <ListTitle title="Пользовательские упражнения" />
      <ScrollView>
        {exercises.map((plank, index) => (
          <View key={index}>
            <Text>{plank.type}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
