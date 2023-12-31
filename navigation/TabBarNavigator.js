import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView ,ScrollView  } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../pages/HomeScreen";
import DonateScreen from "../pages/DonateScreen";
import ProfileScreen from "../pages/ProfileScreen";
import ShoppingScreen from "../pages/ShoppingScreen";


const Tab = createBottomTabNavigator();

const TabBarNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Donate") {
              iconName = focused ? "gift" : "gift-outline";
            } 
            else if (route.name === "Shopping") {
              iconName = focused ? "cart" : "cart-outline";
            }
            else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#D7385E",
          tabBarInactiveTintColor: "gray",
          // headerBackground:"#D7385E",

          headerShown: false,
          headerTransparent: true,

          
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Donate" component={DonateScreen} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export { TabBarNavigator };
