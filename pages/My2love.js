import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";

export default function My2love({ navigation, route }) {
  const ProductId = route.params.ProductId;
  const UserMeId = route.params.id;
  console.log('UserMeId : ',UserMeId);
  console.log('ProductId : ',ProductId);

  const [UserName, setUserName] = useState("");

  const auth = getAuth();

  async function getUser() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const q = query(collection(db, "Users"), where("Email", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          setUserName(doc.id);

          try {
            const CatListCol = query(
              collection(db, "Products"),
              where("UserCreate", "==", doc.id)
            );
            const CatListSnapshot = await getDocs(CatListCol);
            setCatList(
              CatListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        alert("sign in Error!");
      }
    });
  }

  const [CatList, setCatList] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.goBack()}
          ></Ionicons>
          <Text style={styles.TextHead}>2LOVE SWAP</Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
        {/* <ProductCardMe props={UserName} /> */}
        {CatList.length == null || CatList.length === 0 ? (
          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <Text>ไม่มีข้อมูลการโพสต์</Text>
          </View>
        ) : (
          <View style={styles.contentCard}>
            {CatList.map((item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Swap12" , { idMepro: item.id , ProductId: ProductId })}
                style={{ borderRadius: 25 }}
                key={item.id}
              >
                <ProductCard
                  NameProduct={item.NameProduct}
                  Size={item.Size}
                  Images={item.Images}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
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
    marginLeft: 110,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
