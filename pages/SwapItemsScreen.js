import { View, Text, Image, StyleSheet, ScrollView , Link, Button} from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";



export default function SwapItemsScreen({ navigation }) {
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

      {/* Recommend */}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
                  <Text style={styles.text}>รายการแลก</Text>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
            <Button onPress={this._onPressButton} title="รออนุมัติ" />
            <Button onPress={this._onPressButton} title="ตอบรับ" />
            <Button onPress={this._onPressButton} title="เสร็จสิ้น" />
        </View>

        <View style={styles.contentCard}>
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
    justifyContent: 'center',
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
    color: "#D7385E",
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
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 170,
    marginLeft: 30,
  },
});