import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import CategoriesCard from "../component/CategoriesCard";

export default function ShoppingScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Topbar}>
        <View style={styles.SubTopbar1}>
          <Ionicons
            name="menu-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.openDrawer()}
          ></Ionicons>
          <SearchBar style={styles.searchBar} />
          <Ionicons
            name="heart-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("FavoriteScreen")}
          ></Ionicons>
        </View>

        <View style={styles.SubTopbar}>
          <Text style={styles.Text}>Welcome to ...</Text>
          <Text style={styles.Text}>           2LOVED DONATE</Text>
        </View>
      </View>

      {/* <SwipeSlide></SwipeSlide> */}

      {/* Categories */}
      <View>
        {/* หัวข้อ */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>Categories</Text>
          <Text
            style={styles.textSub}
            onPress={() => navigation.navigate("FavoriteScreen")}
          >
            More
          </Text>
        </View>

        <View style={{ margin: 10 }}>
          <ScrollView horizontal={true}>
            <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
            </View>
          </ScrollView>
        </View>
      </View>

      <Text style={styles.text}>My Feed</Text>
      <View style={styles.list}>
        <ProductCard style={styles.card}></ProductCard>
        <ProductCard style={styles.card}></ProductCard>
        <ProductCard style={styles.card}></ProductCard>
        <ProductCard style={styles.card}></ProductCard>
        <ProductCard style={styles.card}></ProductCard>
        <ProductCard style={styles.card}></ProductCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  card: {
    paddingHorizontal: 20,
  },
  Topbar: {
    backgroundColor: "#D7385E",
  },
  SubTopbar1: {
    padding: 10,
    paddingTop: 25,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D7385E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SubTopbar: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  Text: {
    flex: 1,
    // margin:2,
    // flexDirection: "row",
    // justifyContent: "space-between",
    fontSize: 20,
    color: "#fff",
  },
  ViewText: {
    marginTop: 2,
  },
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
});
