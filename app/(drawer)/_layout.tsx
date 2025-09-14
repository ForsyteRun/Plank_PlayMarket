import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Image, View } from "react-native";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: "#d8e4e8" },
        headerStyle: { backgroundColor: "#3BA79B" },
        headerTitleStyle: { color: "#fbf9e6", fontSize: 18 },
        headerTitle: "Упражнения",
        headerTintColor: "#fbf9e6",
        drawerActiveBackgroundColor: "#b2e6ed",
        drawerActiveTintColor: "#b2e6ed",
        drawerInactiveTintColor: "#000",
        drawerLabelStyle: {
          fontSize: 16,
          color: "#000",
        },
      }}
      drawerContent={(props) => {
        const settingsRoute = props.state.routes.find(
          (r) => r.name === "settings"
        );

        const activeRoute = props.state.routes[props.state.index].name;
        return (
          <View style={{ flex: 1 }}>
            <View className="w-full h-[170px] overflow-hidden rounded-b-[20px]">
              <Image
                source={require("@/assets/images/drawer-bg.jpg")}
                className="w-full h-[170px]"
              />
            </View>

            <DrawerItemList {...props} />

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#999",
              }}
            />

            <DrawerItem
              label="Настройки"
              icon={() => (
                <Fontisto name="player-settings" size={24} color={"#000"} />
              )}
              labelStyle={{ fontSize: 16, color: "#000" }}
              style={{
                marginVertical: 10,
                marginHorizontal: 10,
                borderRadius: 30,
                backgroundColor:
                  activeRoute === "settings" ? "#b2e6ed" : "transparent",
              }}
              onPress={() =>
                settingsRoute && props.navigation.navigate(settingsRoute.name)
              }
            />
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Упражнения",
          title: "Упражнения",
          drawerItemStyle: { margin: 10 },
          drawerIcon: () => (
            <MaterialIcons
              name="local-fire-department"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="history"
        options={{
          drawerLabel: "История",
          title: "История",
          drawerItemStyle: { margin: 10 },
          drawerIcon: () => (
            <AntDesign name="history" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Настройки",
          title: "Настройки",
          drawerItemStyle: { display: "none" },
          drawerIcon: ({ color, size }) => (
            <Fontisto name="player-settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
