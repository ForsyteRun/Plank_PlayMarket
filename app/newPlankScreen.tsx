import NewPlankForm from "@/components/NewPlankForm";
import NewPlankHeader from "@/components/NewPlankHeader";
import type { IExercice } from "@/types/plank";
import { useState } from "react";
import { Text, View } from "react-native";

export default function NewPlankScreen() {
  const [excercice, setExcercice] = useState<IExercice>();
  const [isSubmit, setIsSubmit] = useState(false);
  const [title, setTitle] = useState("Новое Упражнение");

  return (
    <View className="flex-1 bg-BG_WHITE ">
      <NewPlankHeader title={title} />
      <NewPlankForm title={title} />

      <View>
        <Text>newPlankScreen</Text>
      </View>
    </View>
  );
}
