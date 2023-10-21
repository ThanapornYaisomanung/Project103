import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import DonateCard from "../component/DonateCard";
import {
  collection,
  query,
  orderBy,
  startAfter,
  limit,
  getDocs,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export default function DonateScreen({ navigation }) {
  onLearnMore = (user) => {
    this.props.navigation.navigate("Infodonate", { ...user });
  };

  const [donateList, setDonateList] = useState([]);

  const getDonateList = async () => {
    const shoppingCol = query(collection(db, "Donates"));
    const shoppingSnapshot = await getDocs(shoppingCol);
    setDonateList(
      shoppingSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getDonateList();
  }, []);

  // const getDonate = async () => {
  //   const first = query(collection(db, "Donates"), orderBy("Name"), limit(2));
  //   const documentSnapshots = await getDocs(first);

  //   const lastVisible =
  //     documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //     console.log("last =>", lastVisible);

  //   const next = query(
  //     collection(db, "Donates"),
  //     orderBy("Name"),
  //     startAfter(lastVisible),
  //     limit(2)
  //   );

  //   console.log("next =>", next);

  // };

  // console.log(donateList.length);

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
          <Text style={styles.Text}> 2LOVED DONATE</Text>
        </View>
      </View>

      {donateList.length == 0 ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#D7385E" />
        </View>
      ) : (
        <View style={styles.contentCard}>
          {donateList.map((item) => (
            <TouchableHighlight
              onPress={() => navigation.navigate("Infodonate", { Id: item.id })}
              style={{ borderRadius: 25 }}
              key={item.id}
            >
              <DonateCard Name={item.Name} Images={item.Images}></DonateCard>
            </TouchableHighlight>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 200,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
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
    // padding: 10,
    // paddingTop: 25,
    top: 0,
    left: 0,

    backgroundColor: "#D7385E",
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    height: 154,
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
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
  },
});
