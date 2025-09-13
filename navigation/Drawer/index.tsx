import { Drawer } from "expo-router/drawer";

export function DrawerNavigation() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="settings" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "settings",
          title: "overview",
        }}
      />
    </Drawer>
  );
}
