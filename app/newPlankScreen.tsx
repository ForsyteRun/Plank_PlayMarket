import NewPlankForm from "@/components/NewPlankForm";
import NewPlankHeader from "@/components/NewPlankHeader";
import type { IExercice } from "@/types/plank";
import { useState } from "react";
import { Text, View } from "react-native";

export default function NewPlankScreen() {
  const [excercice, setExcercice] = useState<IExercice>();
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <View className="flex-1 bg-BG_WHITE ">
      <NewPlankHeader />
      <NewPlankForm />

      <View>
        <Text>newPlankScreen</Text>
      </View>
    </View>
  );
}
