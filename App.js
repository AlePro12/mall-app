import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SambilMap from "./pages/sambilMap";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PaperProvider } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Shops from "./components/shops";

export default function App() {
  const tab = createBottomTabNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <PaperProvider>
          <tab.Navigator
            initialRouteName="Sambil"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Sambil") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Tiendas") {
                  iconName = focused ? "storefront" : "storefront-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "blue",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <tab.Screen name="Sambil" component={SambilMap} />
            <tab.Screen name="Tiendas" component={Shops} />
          </tab.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
