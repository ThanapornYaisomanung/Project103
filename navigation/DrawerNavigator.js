import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from './StackNavigator';
import NotificationsScreen from '../pages/NotificationsScreen';
import { CustomDrawer } from './CustomDrawerNavigator';
import StartScreen from '../pages/register/StartScreen'
import { ButtonLogout } from '../component/ButtomLogout';

// function logout(){
//   return(
//     <View>
//       <Button
//         mode="outlined"
//         onPress={() =>
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'StartScreen' }],
//           })
//         }
//       >
//         Logout
//       </Button>
//     </View>
    
//   )
// }


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{
        headerShown: false,
        headerTitle: ' ',
      }}
      drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}
      
      >
        <Drawer.Screen name="Home" component={MainStackNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Logout" component={ButtonLogout} />
  
        
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
export { DrawerNavigator };