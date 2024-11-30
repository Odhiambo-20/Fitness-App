import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import Screens
import HomeScreen from "../app/(tabs)/index";
import LogWorkoutScreen from "../app/(tabs)/log-workout";
import ProgressScreen from "../app/(tabs)/progress";
import SettingsScreen from "../app/(tabs)/settings";

// Create Tab Navigator
const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Log Workout") {
              iconName = focused ? "fitness" : "fitness-outline";
            } else if (route.name === "Progress") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }

            // Return the appropriate icon
            return <Ionicons name={iconName ?? "default-icon-name"} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6200ee",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Log Workout" component={LogWorkoutScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
