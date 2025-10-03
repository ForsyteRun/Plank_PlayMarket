import { useRouter, type Route } from "expo-router";
import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { scheduleOnRN } from "react-native-worklets";

interface TapWrapperProps<T = undefined> {
  navigatePath: Route;
  children: ReactNode;
  className?: string;
  style?: StyleProp<ViewStyle>;
  data?: T;
}

export default function TapWrapper<T = undefined>({
  navigatePath,
  children,
  className,
  style,
  data,
}: TapWrapperProps<T>) {
  const router = useRouter();

  const navigateToPage = () => {
    if (data !== undefined) {
      router.push({
        pathname: navigatePath as Route,
        params: { data: JSON.stringify(data) },
      });
    } else {
      router.push(navigatePath);
    }
  };

  const tapGesture = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      "worklet";
      scheduleOnRN(navigateToPage);
    });

  return (
    <GestureDetector gesture={tapGesture}>
      <View collapsable={false} style={style} className={className}>
        {children}
      </View>
    </GestureDetector>
  );
}
