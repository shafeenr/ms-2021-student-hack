import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ConfigureScreen from "./screens/ConfigureScreen";
import HomeScreen from "./screens/HomeScreen";
import FoodBankScreen from "./screens/services/FoodBankScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ConfigureContextProvider } from "./screens/ConfigureContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ConfigureContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Configuration" component={ConfigureScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Food Bank" component={FoodBankScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ConfigureContextProvider>
  );
}
