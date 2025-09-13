import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: "#fbf9e6" },
        headerStyle: { backgroundColor: "#01a79e" },
        headerTitleStyle: { color: "#fbf9e6", fontSize: 18 },
        headerTitle: "Упражнения",
        headerTintColor: "#fbf9e6",
      }}
    />
  );
}
