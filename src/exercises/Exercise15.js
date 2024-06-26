import Details from "../pages/Details";
import Home from "../pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Exercise15 = () => {
  // ------------------------->>>>>>>>>>>>>   Navigation    <<<<<<<<<<-----------------------

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Exercise15;

const styles = StyleSheet.create({});
