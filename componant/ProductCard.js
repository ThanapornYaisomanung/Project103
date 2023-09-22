import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.Logo}
        source={{
          uri: 'https://legacy.reactjs.org/logo-og.png',
        }}
      />
      <Text style={styles.paragraph}>
      ProductCard 
      </Text>
      <Text style={styles.paragraph2}>
      $999
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
    
    
    backgroundColor: "#fff",
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
    width:180,
    height:150
  },
});
