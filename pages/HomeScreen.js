import { View, Text, Image, StyleSheet, ScrollView , Link} from "react-native";
import { Button } from "../component/Theme";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import SwipeSlide from "../component/SwipeSlide";
import ProductCard from "../component/ProductCard";
import CategoriesCard from "../component/CategoriesCard";

function DonateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Donate!</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>
      {/* หัว */}
      <View style={styles.Topbar}>
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

      {/* branner */}
      <SwipeSlide></SwipeSlide>

            
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
          <Text style={styles.textSub} onPress={() => navigation.navigate("FavoriteScreen")}>More</Text>
        </View>

        <View style={{ margin: 10 }}>
          <ScrollView horizontal={true}>
            <View style={{flex:1, flexDirection:'row', gap:10}}>
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
              <CategoriesCard />
            </View>
          </ScrollView>
        </View>
      </View>

      {/* Recommend */}
      <View>
      <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
                  <Text style={styles.text}>Recommend</Text>
        <Text style={styles.textSub} onPress={() => navigation.navigate("FavoriteScreen")}>More</Text>

        </View>

            <View style={styles.contentCard}>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </View>
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
});
