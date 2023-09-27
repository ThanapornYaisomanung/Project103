import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./core/theme";
import { DrawerNavigator } from "../navigation/DrawerNavigator";
import StartScreen from "./register/StartScreen";
import LoginScreen from "./register/LoginScreen";
import RegisterScreen from "./register/RegisterScreen";
import ResetPasswordScreen from "./register/ResetPasswordScreen";
import useAuth from "../hooks/useAuth";

const Stack = createStackNavigator();

export default function OpenApp() {
  // const { user } = useAuth();
  // if (user) {
  //   return (
  //     <Provider theme={theme}>
  //       <NavigationContainer>
  //         <Stack.Navigator
  //           initialRouteName="Home"
  //           screenOptions={{
  //             headerShown: false,
  //           }}
  //         >
  //           <Stack.Screen name="Dashboard" component={DrawerNavigator} />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </Provider>
  //   );
  // } else {
  //   return (
  //     <Provider theme={theme}>
  //       <NavigationContainer>
  //         <Stack.Navigator
  //           initialRouteName="StartScreen"
  //           screenOptions={{
  //             headerShown: false,
  //           }}
  //         >
  //           <Stack.Screen name="StartScreen" component={StartScreen} />
  //           <Stack.Screen name="LoginScreen" component={LoginScreen} />
  //           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  //           <Stack.Screen
  //             name="ResetPasswordScreen"
  //             component={ResetPasswordScreen}
  //           />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     </Provider>
  //   );
  // }

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={DrawerNavigator} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
