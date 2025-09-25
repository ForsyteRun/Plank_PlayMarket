import { ReactNode } from "react";

export type SwipeableComponentProps<T> = {
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
