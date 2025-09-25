import ListTitle from "@/components/shared/ListTitle";
import { defaultPlankList } from "@/data/defaultPlank";
import React from "react";
import { FlatList, View } from "react-native";
import UserPlank from "../UserPlankList/component/UserPlank";

export default function DefaultPlankList() {
  return (
    <View>
      <ListTitle title="Упражнения по умолчанию" />
      <FlatList
        data={defaultPlankList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserPlank
            plank={item}
            key={item.id}
            swipeEnabled={false}
            editEnabled={false}
          />
        )}
      />
    </View>
  );
}
