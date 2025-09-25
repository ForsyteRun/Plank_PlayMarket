import { SwipeableComponentProps } from "@/types/swipeableComponentProps";
import { ForwardedRef, forwardRef, JSX } from "react";
import SwipeableItem, {
  SwipeableItemImperativeRef,
} from "react-native-swipeable-item";

function SwipeableComponentInner<T>(
  { item, children, ...rest }: SwipeableComponentProps<T>,
  ref: ForwardedRef<SwipeableItemImperativeRef>
) {
  return (
    <SwipeableItem<T> ref={ref} item={item} {...rest}>
      {children}
    </SwipeableItem>
  );
}

export const SwipeableComponent = forwardRef(SwipeableComponentInner) as <T>(
  props: SwipeableComponentProps<T> & {
    ref?: ForwardedRef<SwipeableItemImperativeRef>;
  }
) => JSX.Element;
