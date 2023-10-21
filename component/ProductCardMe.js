import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "./ProductCard";

export default function ProductCardMe({ navigation }) {
  // const UID = props.props;
  const [CatList, setCatList] = useState([]);
  const getCatList = async () => {
    try {
      const CatListCol = query(
        collection(db, "Products"),
        where("UserCreate", "==", 'nc5myqEZqyQAcKHY4HyJ')
      );
      const CatListSnapshot = await getDocs(CatListCol);
      setCatList(
        CatListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCatList();
  }, []);



  return (
    <View>
      {CatList.length == null || CatList.length === 0 ? (
        <View style={{marginLeft:20, marginTop:20}}>
           <Text>ไม่มีข้อมูลการโพสต์</Text>
        </View>
       
      ) : (
        <View style={styles.contentCard}>
          {CatList.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Proswap", { id: item.id })}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
  },
  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 180,
    maxHeight: 500,

    backgroundColor: "#fff",
  },
  paragraph: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph2: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  Logo: {
    width: 180,
    height: 150,
  },
});
