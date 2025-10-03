import { ReactNode } from "react";
import { Modal, ModalBaseProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface IBaseModalProps extends ModalBaseProps {
  statusBarTranslucent?: boolean;
  children: ReactNode;
}
export default function BaseModal({
  statusBarTranslucent,
  children,
  ...props
}: IBaseModalProps) {
  return (
    <Modal {...props} statusBarTranslucent={statusBarTranslucent}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
      </GestureHandlerRootView>
    </Modal>
  );
}
