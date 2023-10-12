import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Link,
  Button,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import { collection, query, getDocs, limit, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export default function ProductlistScreenM({ navigation, route }) {
  const CatName = route.params.CatName;
  const Gender = route.params.Gender;

  const [PosList, setPosList] = useState([]);
  const getPosList = async () => {
    const PosListCol = query(
      collection(db, "Products"),
      where("Categories", "==", CatName)
    );
    const PosListSnapshot = await getDocs(PosListCol);
    setPosList(
      PosListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getPosList();
  }, []);

  console.log("อันนี้", Gender);
  return (
    <ScrollView style={styles.scrollView}>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("TabBarNavigator")}
          ></Ionicons>
          <Text style={styles.TextHead}>2LOVE SWAP</Text>
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
          <Text style={styles.text}>{CatName}</Text>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          {/* <Text>Number of products: </Text> */}
          {/* <Button onPress={this._onPressButton} title="Reebok shoes" />
            <Button onPress={this._onPressButton} title="Casual" />
            <Button onPress={this._onPressButton} title="Walking shoes" />
            <Button onPress={this._onPressButton} title="Meesho" /> */}
        </View>

        <View style={styles.contentCard}>
          {PosList.map((item) => (
            <View
            key={item.id}
            >
              {item.Gender == 'Men' || item.Gender == 'Others'  ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Proswap", { id: item.id })
                  }
                  style={{ borderRadius: 25 }}
                  
                >
                  <ProductCard
                    NameProduct={item.NameProduct}
                    Size={item.Size}
                    Images={item.Images}
                  />
                </TouchableOpacity>
              ) : (
                <View></View>
              )}


            </View>
          ))}
          
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: "#D7385E",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 80,
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
  },
  TextHead: {
    marginLeft: 90,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
    gap: 10,
  },
  alternativeLayoutButtonContainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    // color:"#FFFFFF"
    paddingLeft: 15,
  },
});
