import { useUserPlankManage } from "@/hooks";
import type { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { EDIT, INIT_TITLE } from "@/data/header";
import type { DrawerHeaderProps } from "@react-navigation/drawer";
import Header from "../Header";

type IHeaderWrapperProps = DrawerHeaderProps | NativeStackHeaderProps;

export default function HeaderWrapper<T extends IHeaderWrapperProps>(props: T) {
  const {
    edit,
    submitted,

    handleEdit,
    handleSubmit,
  } = useUserPlankManage();

  return (
    <Header
      headerProps={props}
      title={edit ? EDIT : (props.options.title ?? INIT_TITLE)}
      submitted={submitted}
      editEnabled={false}
      handleSubmit={handleSubmit}
      handleEdit={handleEdit}
    />
  );
}
