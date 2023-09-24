import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function Proimg() {
  return (
    <View>
        <Image
        style={styles.Logo}
        source={{
          uri: 'https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
//   container: {
//     // flex: 2,
//     // justifyContent: "center",
//     width: 180,
//     maxHeight: 500,
    
    
//     backgroundColor: "#fff",
//   },
//   paragraph: {
//     fontSize: 18,
//     // textAlign: "center",
//     paddingLeft: 20,
//     paddingTop: 20,
//   },
//   paragraph2: {
//     fontSize: 18,
//     // textAlign: "center",
//     paddingLeft: 20,
//     paddingBottom: 20,
//   },
  Logo:{
    width:89,
    height:82,
    borderRadius:85
  },
});
