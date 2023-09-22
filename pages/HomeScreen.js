import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componant/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import SwipeSlide from "../componant/SwipeSlide";
import ProductCard from "../componant/ProductCard";

function DonateScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Donate!</Text>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Topbar}>
        <Ionicons name="menu-outline" size={30} color={"white"}></Ionicons>
        <SearchBar style={styles.searchBar} />
        <Ionicons
          name="heart-outline"
          size={30}
          color={"white"}
        ></Ionicons>
      </View>

  <SwipeSlide></SwipeSlide>
      <Text style={styles.text}>Recommend</Text>
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
  list:{
    flex:1,
    flexDirection: 'column',
    margin:20,
    flexWrap:'wrap',
    justifyContent: "space-between",
    alignContent: 'space-between',
    maxHeight:750,
    maxWidth:500
    
  },
  scrollView: {},
  text: {
    fontSize: 24,
    marginTop: 20,
    fontWeight:'bold',
    paddingHorizontal: 20,
  },
  card:{
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
});
