import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function Reviewcard() {
  return (
    <View style={styles.container}>
       <View>
        <Image
        style={styles.Logo}
        source={{
          uri: 'https://legacy.reactjs.org/logo-og.png',
        }}/>

        </View>
      {/* <Text style={styles.paragraph}>
      ProductCard 
      </Text>
      <Text style={styles.paragraph2}>
      M
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 380,
    maxHeight: 100,
    // borderWidth: 1.8,
    // borderColor:"#D09CB1",
    borderRadius: 25,
    borderRadiusLeft:50,
    backgroundColor: "#C7C3C3",
    borderBottomLeftRadius: 89,
    borderTopLeftRadius: 89,
  },
  paragraph: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: "bold",
    color:"#D7385E",
    flexDirection: "row-reverse"
  },
  paragraph2: {
    fontSize: 15,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
    color:"#D7385E"
  },
  Logo:{
    width:89,
    height:82,
    borderRadius:85
    

  },
});
