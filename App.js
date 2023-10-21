import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SplashScreen } from './pages/SplashScreen'
import { DrawerNavigator } from "./navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
       <SplashScreen></SplashScreen>
    </SafeAreaProvider>
  )
}

// -------------------------------------


// import * as React from "react";
// import { Text, View, StyleSheet, SafeAreaView ,ScrollView  } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { DrawerNavigator } from "./navigation/DrawerNavigator";

// export default function App() {
//   return (
    
//     <NavigationContainer >
//       <DrawerNavigator/>
//     </NavigationContainer>
//   );
// }
