import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function CategoriesCard() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.Image}
        source={require('../assets/ImagesCatCard/T-Shirts.png')}
      />
      <Text style={styles.paragraph}>
      Tops and T-Shirts
      </Text>
      <Text style={styles.paragraph2}>
      265 items 
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
    borderRadius:16
  },
  paragraph: {
    fontSize: 18,
    paddingLeft: 20,
    fontWeight:'bold',
    paddingTop: 5,
    flexWrap:'wrap'
  },
  paragraph2: {
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 20,
    color:'#6b7280'
  },
  Image:{
    width:100,
    height:100
  },
});
