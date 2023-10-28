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

