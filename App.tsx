import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import BlogScreen from "./BlogScreen";
import MoreDetailsScreen from "./MoreDetailsScreen";
import InfoScreen from "./InfoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

