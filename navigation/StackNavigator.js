import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBarNavigator } from './TabBarNavigator';
import FavoriteScreen from "../pages/FavoriteScreen";
import HomeScreen from "../pages/HomeScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      // <Stack.Navigator
      //   screenOptions={{
      //     headerStyle: {
      //       backgroundColor: "#D7385E",
      //     },
      //     headerTintColor: "white",
      //     headerTransparent: 'true',
      //     headerTitle: '',
      //     headerShown: false,
      //     headerTransparent: true,
      //     shouldShowHintSearchIcon: 'true'
      //   }}
      // >
        
        
      //   <Stack.Screen name="Home" component={Home} />
      //   <Stack.Screen name="About" component={About} />
      // </Stack.Navigator>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'push'
      }}
      >
      <Stack.Screen name="TabBarNavigator" component={TabBarNavigator} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
    );
  }

export { MainStackNavigator };
