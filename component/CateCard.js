import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function CateCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.Name}</Text>
        <Image
        style={styles.Logo}
        source={{
          uri: props.Icons
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 180,
    height:200,
    backgroundColor: "#000",
    borderRadius:15,
  },
  Logo:{
    width:180,
    height:200,
    borderRadius:15,
    opacity:0.5,
    position:'relative',
  },
  text:{
    position:'absolute',
    alignSelf:'center',
    marginTop:90,
    color:'#fff',
    fontSize:18,
    flexWrap:'wrap',
    fontWeight:'bold'
  }
});