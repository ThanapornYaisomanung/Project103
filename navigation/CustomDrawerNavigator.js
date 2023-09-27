import * as React from "react";
import { View, Text } from "react-native";
import { Button } from "../component/Theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { ButtonLogout } from "../component/ButtomLogout";

const CustomDrawer = (props) => {
  return (
    // <View>
    //   <Text>dasd</Text>
    //   <View style={{padding:10, }}>
    //     <Button
    //       mode="outlined"
    //       onPress={() =>
    //         navigation.reset({
    //           index: 0,
    //           routes: [{ name: "StartScreen" }],
    //         })
    //       }

    //     >

    //         <Ionicons name="log-out-outline" size={20}></Ionicons>
    
            

    //       Logout
    //     </Button>
        
    //   </View>
    // </View>

    <DrawerContentScrollView>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};
export { CustomDrawer };
