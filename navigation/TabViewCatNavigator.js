import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CatagoriesTypeFM from '../pages/CatagoriesTypeFM';
import CatagoriesTypeM from '../pages/CatagoriesTypeM';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed" 
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { 
            backgroundColor: '#D7385E',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius:20,
        },
        tabBarLabel:{
            backgroundColor: '#D7385E'
        },
        tabBarIndicatorStyle:{ backgroundColor: '#fff' , width:150, marginLeft:30, height:3}
      }}
    >
      <Tab.Screen
        name="WOMEN"
        component={CatagoriesTypeFM}
        options={{ tabBarLabel: 'WOMEN' }}
        
      />
      <Tab.Screen
        name="MEN"
        component={CatagoriesTypeM}
        options={{ tabBarLabel: 'MEN' }}
      />
    </Tab.Navigator>
  );
}

const TabViewCatNavigator = () => {
  return (

      <MyTabs />

  );
}
export {TabViewCatNavigator}
