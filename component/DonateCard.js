import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function DonateCard(props) {
  return (
    <View style={styles.container}>
        <Image
        style={styles.Logo}
        source={{
          uri: props.Images,
        }}
      />
      <Text style={styles.paragraph}>
      {props.Name}
      </Text>
      <Text style={styles.paragraph2}>
      {props.Id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 180,
    maxHeight: 500,
    borderRadius: 25,
    backgroundColor: "#EAEAEA",
  },
  paragraph: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph2: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  Logo:{
    // margin:20,
    width:150,
    marginTop:5,
   marginLeft:15,
    height:150,
    borderRadius: 20,
    
  },
});
