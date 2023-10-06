import React, { useState} from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddButton = ({navigation}) => {

  return(
    <View style={{
      flex: 1
    }}>
      <View
        style={styles.circle}
      >
        <Ionicons name="add-outline" size={30} color="#FFFF" />
        
      </View>
    </View>
  )

}

export default AddButton;

const styles = StyleSheet.create({
  circle: {
     backgroundColor: '#f52d56',
     width: 60,
     height: 60,
     position: 'absolute',
     bottom: 20,
     right: 30,
     borderRadius: 50,
     justifyContent: 'center',
     alignItems: 'center',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 4,
     },
     shadowOpacity: 0.30,
     shadowRadius: 4.65,
     elevation: 8,
  }
})