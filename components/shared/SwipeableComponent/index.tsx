import { ForwardedRef, forwardRef, JSX, ReactNode } from "react";
import SwipeableItem, {
  SwipeableItemImperativeRef,
} from "react-native-swipeable-item";

type SwipeableComponentProps<T> = {
  item: T;
  children: ReactNode;
  renderUnderlayLeft?: (params: any) => ReactNode;
  renderUnderlayRight?: (params: any) => ReactNode;
  renderOverlay?: (params: any) => ReactNode;
  onChange?: (params: { openDirection: string; snapPoint: number }) => void;
  overSwipe?: number;
  activationThreshold?: number;
  swipeEnabled?: boolean;
  snapPointsLeft?: number[];
  snapPointsRight?: number[];
  swipeDamping?: number;
};

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
