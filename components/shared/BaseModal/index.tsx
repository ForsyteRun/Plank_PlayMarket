import { ReactNode } from "react";
import { Modal, ModalBaseProps } from "react-native";

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
      {children}
    </Modal>
  );
}
