import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from './StackNavigator';
import NotificationsScreen from '../pages/NotificationsScreen';




const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        // headerTransparent: true,
        headerTitle: ' ',

       
        // drawerStyle: 
        //   backgroundColor: '#c6cbef',
        //   width: 240,
        // },
      }}>
        <Drawer.Screen name="Home" component={MainStackNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
export { DrawerNavigator };