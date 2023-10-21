import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function CategoriesCard(props) {
  return (
    <View style={styles.container}>
        <Image
        style={styles.Image}
        source={{
          uri: props.Icons
        }}
      />
      <Text style={styles.paragraph}>
      {/* Tops and T-Shirts */}
      {props.Name}
      </Text>
       {/*<Text style={styles.paragraph}>
      Tops and T-Shirts 
      {props.Gender}
      </Text>*/}
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
    width:50,
    height:50,
    marginLeft: 20,
    marginTop:20,
    marginBottom:10
  },
});
