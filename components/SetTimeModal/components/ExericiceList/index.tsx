import { default as React, useEffect, useRef } from "react";
import { FlatList, InteractionManager, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const TIMES = Array.from({ length: 60 }, (_, i) => ({
  label: (i + 1).toString(),
  value: i + 1,
}));

const ITEM_HEIGHT = 46;
const VISIBLE_ITEMS = 5;

const LOOP_DATA = Array.from({ length: 100 }, () => TIMES).flat();

export default function ExericiceList() {
  const scrollY = useSharedValue(0);
  const listRef = useRef<FlatList>(null);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      listRef.current?.scrollToIndex({
        index: 10,
        animated: false,
      });
    });

    return () => task.cancel();
  }, []);

  return (
    <View
      className="w-full flex-row items-center justify-center"
      style={{ height: ITEM_HEIGHT * VISIBLE_ITEMS }}
    >
      <Animated.FlatList
        ref={listRef}
        data={LOOP_DATA}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        contentContainerStyle={{
          width: "100%",
          paddingTop: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
          paddingBottom: ITEM_HEIGHT * Math.floor(VISIBLE_ITEMS / 2),
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <WheelItem label={item.label} index={index} scrollY={scrollY} />
        )}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
}

import { Text } from "react-native";
import { interpolate, useAnimatedStyle } from "react-native-reanimated";

interface ItemProps {
  label: string;
  index: number;
  scrollY: number;
}

export function WheelItem({ label, index, scrollY }: ItemProps) {
  const animatedStyle = useAnimatedStyle(() => {
    const position = index * ITEM_HEIGHT - scrollY.value;

    const opacity = interpolate(
      position,
      [-ITEM_HEIGHT * 2, 0, ITEM_HEIGHT * 2],
      [0.3, 1, 0.3]
    );

    const scale = interpolate(
      position,
      [-ITEM_HEIGHT * 2, 0, ITEM_HEIGHT * 2],
      [0.8, 1, 0.8]
    );

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <Text style={styles.text}>{label}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "#000",
  },
});
