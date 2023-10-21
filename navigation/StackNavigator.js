import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBarNavigator } from './TabBarNavigator';
import FavoriteScreen from "../pages/FavoriteScreen";
import HomeScreen from "../pages/HomeScreen";
import EditScreen from "../pages/EditScreen";
import Infodonate from "../pages/Infodonate";
import Donateform from "../pages/Donateform";
import CatagoriesScreen from "../pages/CatagoriesScreen";
import { Categories } from "../component/Categories";
import ShoppingScreen from "../pages/ShoppingScreen";
import Addpro from "../pages/Addpro";
import AppProForm from "../pages/AppProForm";
import Proswap from "../pages/Proswap";
import Swap1 from "../pages/Swap1";
import Swap12 from "../pages/Swap12";
import Swap2 from "../pages/Swap2";
import Swap3 from "../pages/Swap3";
import My2love from "../pages/My2love";
import { TabViewNavigator } from "./TabViewNavigator";
import ProfileScreen from "../pages/ProfileScreen";
import { PostsScreen } from "../pages/PostsScreen";
import ProductCardMe from "../component/ProductCardMe";
import SwapSuccessScreen from "../pages/SwapSuccessScreen";
import SwapItemsScreen from "../pages/SwapItemsScreen";
import SwapItemsScreen2 from "../pages/SwapItemsScreen2";
import SwapItemsScreen3 from "../pages/SwapItemsScreen3";
import ProductlistScreenFM from "../pages/ProductlistScreenFM";
import ProductlistScreenM from "../pages/ProductlistScreenM";
import EditProswap from "../pages/EditProswap";
import Editpro from "../pages/Editpro";

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
      <Stack.Screen name="EditScreen" component={EditScreen} />
      <Stack.Screen name="Infodonate" component={Infodonate} />
      <Stack.Screen name="Donateform" component={Donateform} />
      <Stack.Screen name="CatagoriesScreen" component={CatagoriesScreen} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Shopping" component={ShoppingScreen} />
      <Stack.Screen name="Addpro" component={Addpro} />
      <Stack.Screen name="AppProForm" component={AppProForm} />
      <Stack.Screen name="Proswap" component={Proswap} />
      <Stack.Screen name="Swap1" component={Swap1} />
      <Stack.Screen name="Swap12" component={Swap12} />
      <Stack.Screen name="Swap2" component={Swap2} />
      <Stack.Screen name="Swap3" component={Swap3} />
      <Stack.Screen name="My2love" component={My2love} />
      <Stack.Screen name="TabViewNavigator" component={TabViewNavigator} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="ProductCardMe" component={ProductCardMe} />
      <Stack.Screen name="SwapSuccessScreen" component={SwapSuccessScreen} />
      <Stack.Screen name="SwapItemsScreen" component={SwapItemsScreen} />
      <Stack.Screen name="SwapItemsScreen2" component={SwapItemsScreen2} />
      <Stack.Screen name="SwapItemsScreen3" component={SwapItemsScreen3} />
      <Stack.Screen name="ProductlistScreenFM" component={ProductlistScreenFM} />
      <Stack.Screen name="ProductlistScreenM" component={ProductlistScreenM} />
      <Stack.Screen name="EditProswap" component={EditProswap} />
      <Stack.Screen name="Editpro" component={Editpro} />

    </Stack.Navigator>
    );
  }

export { MainStackNavigator };
