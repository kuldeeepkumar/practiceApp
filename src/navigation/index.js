import AboutScreen from "../pages/AboutScreen";
import DetailsScreen from "../pages/DetailsScreen";
import HomeScreen from "../pages/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../pages/ProfileScreen";
import React from "react";
import SettingsScreen from "../pages/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
