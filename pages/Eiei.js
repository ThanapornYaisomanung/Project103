import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componant/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.Topbar}>
      <Ionicons name="menu-outline" size={30} color={"white"} ></Ionicons>
        <SearchBar style={styles.searchBar} />
        <Ionicons name="heart-outline" size={30} color={"white"} components></Ionicons>
      </View>

      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  text: {
    fontSize: 40,
    paddingHorizontal: 20,
  },
  Topbar: {
    padding: 10,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D7385E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
});
