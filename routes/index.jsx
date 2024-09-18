import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/pages/Home";
import Settings from "../src/pages/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Font from "expo-font";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

export default function Routes() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Ionicons: require("react-native-vector-icons/Fonts/Ionicons.ttf"),
      });
    }
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home"; // Nome do ícone corrigido
            } else if (route.name === "Settings") {
              iconName = "settings"; // Nome do ícone corrigido
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#ff0044",
          tabBarInactiveTintColor: "#bbb",
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
