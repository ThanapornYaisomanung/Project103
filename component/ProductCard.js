import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function ProductCard(props) {
  // const UID = props;
  // console.log("อิสัสได้สักที => ", UID);

  return (
    <View style={styles.container}>
      {props.Images == null ? (
        <Image
          style={styles.Logo}
          source={{
            uri: "https://legacy.reactjs.org/logo-og.png",
          }}
        />
      ) : (
        <Image
          style={styles.Logo}
          source={{
            uri: props.Images,
          }}
        />
      )}

      {props.NameProduct == null ? (
        <Text style={styles.paragraph} numberOfLines={1}>
          Name Product
        </Text>
      ) : (
        <Text style={styles.paragraph} numberOfLines={1}>
          {props.NameProduct}
        </Text>
      )}

      {props.Size == null ? (
        <Text style={styles.paragraph2} numberOfLines={1}>
          Size: Free
        </Text>
      ) : (
        <Text style={styles.paragraph2} numberOfLines={1}>
          {props.Size}
        </Text>
      )}

      
    
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
    borderRadius: 16,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph2: {
    fontSize: 16,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  Logo: {
    width: 180,
    height: 150,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
