import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView ,ScrollView  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerNavigator } from "./navigation/DrawerNavigator";


function DonateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Donate!</Text>
    </View>
  );
}

function ShoppingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    
    <NavigationContainer >
      <DrawerNavigator/>
    </NavigationContainer>
  );
}
