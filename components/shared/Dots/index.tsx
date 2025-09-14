import type { IExercice } from "@/types/plank";
import { View } from "react-native";

interface IDotsProps {
  exercices: IExercice[];
  count: number;
}

export default function Dots({ exercices, count }: IDotsProps) {
  return (
    <View
      style={{
        width: "40%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      {exercices.length > 3 && (
        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {exercices.slice(0, count).map((_, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 4,
                  backgroundColor: "black",
                  marginHorizontal: 2,
                }}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}
