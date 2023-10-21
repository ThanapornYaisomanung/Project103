import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Link,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";
import { collection, query, getDocs, limit, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";

const Categories = ({ navigation }) => {
  onLearnMore = (user) => {
    this.props.navigation.navigate("Infodonate", { ...user });
  };

  const [CatList, setCatList] = useState([]);
  const getCatList = async () => {
    const CatListCol = query(
      collection(db, "Category"),
      limit(4),
      where("Gender", "==", "Female")
    );
    const CatListSnapshot = await getDocs(CatListCol);
    setCatList(
      CatListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getCatList();
  }, []);

  return (
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
                <TouchableHighlight
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
                </TouchableHighlight>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export { Categories };

const styles = StyleSheet.create({
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
    margin: 10,
    gap: 10,
  },
  container: {
    padding: 200,
  },
});
