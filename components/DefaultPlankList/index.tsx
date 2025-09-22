import ListTitle from "@/components/shared/ListTitle";
import PlankBanner from "@/components/shared/PlankBanner";
import { defaultPlankList } from "@/data/defaultPlank";
import React from "react";
import { ScrollView, View } from "react-native";

export default function DefaultPlankList() {
  return (
    <View>
      <ListTitle title="Упражнения по умолчанию" />
      <ScrollView>
        {defaultPlankList.map((plank, index) => (
          <PlankBanner
            id={plank.id}
            key={index}
            title={plank.title}
            exercices={plank.exercices}
          />
        ))}
      </ScrollView>
    </View>
  );
}
