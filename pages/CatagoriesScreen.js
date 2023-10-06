import { View, Text, Image, StyleSheet, ScrollView, Link } from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import CatagoriesTypeFM from "./CatagoriesTypeFM";
import CateCard from "../component/CateCard";
import { TabViewCatNavigator } from "../navigation/TabViewCatNavigator";

export default function CatagoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
        {/* หัว */}
        <View style={styles.Topbar}>
          <View style={styles.SubTopBar}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={"white"}
              onPress={() => navigation.navigate("TabBarNavigator")}
            ></Ionicons>
            <Text style={styles.TextHead}>Categories</Text>
          </View>
        </View>

      <TabViewCatNavigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    maxHeight: 750,
    maxWidth: 500,
  },
  scrollView: {},
  text: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  textSub: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  card: {
    paddingHorizontal: 20,
  },
  Topbar: {
    padding: 10,
    paddingTop: 25,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D7385E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
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
