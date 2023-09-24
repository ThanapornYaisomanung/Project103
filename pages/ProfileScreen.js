import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
// import SwipeSlide from "../componant/SwipeSlide";
import Proimg from "../component/Proimg";
import ProductCard from "../component/ProductCard";
import { TabViewNavigator } from "../navigation/TabViewNavigator";

export default function ProfileScreen({ navigation }) {
  return (
    // style={styles.scrollView}
    <View style={styles.container}>
      <View style={styles.Topbar}>
        <View style={styles.SubTopbar1}>
          <Ionicons
            name="menu-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.openDrawer()}
          ></Ionicons>
          <Text style={styles.textHead}>Profile</Text>
          <Ionicons
            name="create-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("FavoriteScreen")}
          ></Ionicons>
        </View>

        <View style={styles.SubTopbar}>
          <View style={styles.list1}>
            <Proimg></Proimg>
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
              <View style={styles.profile}>
                <Text style={styles.text}>Mamyfotko</Text>
                <Text style={styles.text}>5,000 follwers</Text>
                <View style={styles.star}>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#C7C3C3"}
                  ></Ionicons>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TabViewNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Topbar: {
    backgroundColor: "#D7385E",
    height: 200
  },
  SubTopbar1: {
    padding: 10,
    // flex: 1,
    paddingTop:36,
    flexDirection: "row",
    backgroundColor: "#D7385E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SubTopbar: {
    flex: 1,
    padding: 10,
  },
  list1: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 50,
  },
  star: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
  },
  text: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    color: "#fff",
  },
  textHead: {
    fontSize: 20,
    color: "#fff",
    fontWeight: 'bold'
  },
  text1: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    color: "#fff",
  },
});
