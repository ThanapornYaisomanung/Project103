import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import SwipeSlide from "../component/SwipeSlide";
import ProductCard from "../component/ProductCard";
import { Categories } from "../component/Categories";
import CategoriesCard from "../component/CategoriesCard";
import { collection, query, getDocs, limit, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export default function HomeScreen({ navigation }) {
  const [PosList, setPosList] = useState([]);
  const getPosList = async () => {
    const PosListCol = query(collection(db, "Products"), limit(10));
    const PosListSnapshot = await getDocs(PosListCol);
    setPosList(
      PosListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };


  const [CatList, setCatList] = useState([]);
  const getCatList = async () => {
    const CatListCol = query(
      collection(db, "Category"),
      limit(4),
      where("Gender", "==", "Women")
    );
    const CatListSnapshot = await getDocs(CatListCol);
    setCatList(
      CatListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  useEffect(() => {
    getPosList();
    getCatList();
  }, []);

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
          onPress={() => navigation.navigate("CatagoriesScreen")}
        >
          More
        </Text>
      </View>
      {/* <Categories /> */}
      <View>
      {CatList.length == 0 ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#D7385E" />
        </View>
      ) : (
        <View style={{ margin: 10 }}>
          <ScrollView horizontal={true}>
            <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
              {CatList.map((item) => (
                <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductlistScreenFM" , { CatName: item.Name , Gender: item.Gender})
                }
                  style={{ borderRadius: 25 }}
                  key={item.id}
                >
                  <CategoriesCard
                    Icons={item.Icons}
                    Name={item.Name}
                    Gender={item.Gender}
                  ></CategoriesCard>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
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
          {/* <Text style={styles.textSub} onPress={() => navigation.navigate("FavoriteScreen")}>More</Text> */}
        </View>

        <View style={styles.contentCard}>
          {PosList.map((item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Proswap", { id: item.id })}
              style={{ borderRadius: 25 }}
              key={item.id}
            >
              <ProductCard
                NameProduct={item.NameProduct}
                Size={item.Size}
                Images={item.Images}
              />
              {/* <Text>{}</Text> */}
            </TouchableOpacity>
          ))}
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
