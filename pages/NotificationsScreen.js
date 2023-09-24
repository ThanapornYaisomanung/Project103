import { View, Text, StyleSheet,ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";

export default function NotificationsScreen({ navigation }) {
  return (
    <View>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.goBack()}
          ></Ionicons>
          <Text style={styles.TextHead}>Notifications</Text>
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
    padding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextHead: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
