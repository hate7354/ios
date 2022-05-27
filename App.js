/** @format */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./navigation/home";
import { DetailsScreen } from "./navigation/detail";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
const delay_splash = async () => {
  await SplashScreen.preventAutoHideAsync();
  await sleep(2000);
  await SplashScreen.hideAsync();
};

export default function App() {
  delay_splash();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
