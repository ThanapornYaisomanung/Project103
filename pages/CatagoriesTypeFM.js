import React from "react";
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
import { collection, query, getDocs, limit, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import CateCard from "../component/CateCard";

export default function CatagoriesTypeFM({ navigation }) {
  const [CatList, setCatList] = useState([]);
  const getCatList = async () => {
    const CatListCol = query(
      collection(db, "Category"),
      where("Gender", "==", "Women")
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
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#D7385E" />
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></View>
          <ScrollView>
            <View style={styles.contentCard}>
              {CatList.map((item) => (
                <TouchableHighlight
                  onPress={() =>
                    navigation.navigate("ProductlistScreenFM" , { CatName: item.Name , Gender: item.Gender})
                  }
                  style={{ borderRadius: 25 }}
                  key={item.id}
                >
                  <CateCard Icons={item.Images} Name={item.Name}></CateCard>
                </TouchableHighlight>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
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
  Topbar: {
    padding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextHead: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  spinner:{
    marginTop:250
  }
});
