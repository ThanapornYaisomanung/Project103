import { View, Text, StyleSheet,ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";

export default function My2love({ navigation }) {
  return (
    <View>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("Swap1")}
          ></Ionicons>

          <Text style={styles.TextHead}>My2love</Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
        <View style={styles.contentCard}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
    contentCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:20,
    gap: 10,
  },
  Topbar: {
    ppadding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height:80
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop:5
  },
  TextHead: {
    marginLeft: 110,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
