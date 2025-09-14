import { View } from "react-native";

interface IDotsProps {
  count: number;
}

export default function Dots({ count }: IDotsProps) {
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
      <View
        style={{
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Array.from({ length: count }).map((_, index) => {
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
    </View>
  );
}
