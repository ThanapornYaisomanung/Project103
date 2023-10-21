import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";

export default function SwapItemsScreen({ navigation }) {
  const [UserName, setUserName] = useState("");
  const [UserNameId, setUserNameId] = useState("");
  const [SwapItemsId, setSwapItemsId] = useState("");
  const [SwapItems, setSwapItems] = useState([]);
  const [SwapItemsOwner, setSwapItemsOwner] = useState([]);
  const [Products, setProducts] = useState();

  const auth = getAuth();

  async function getUserSwapItems() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        // console.log("This account:", uid, email);

        const q = query(collection(db, "Users"), where("Email", "==", email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (doc) => {
          // console.log(doc.id, " => ", doc.data().Name);
          setUserName(doc.data().Name);
          setUserNameId(doc.id);

          try {
            const CatListCol = query(
              collection(db, "SwapItems"),
              where("SwapOwner", "==", doc.id)
            );
            const CatListSnapshot = await getDocs(CatListCol);
            setSwapItems(
              CatListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );

            CatListSnapshot.forEach((doc) => {
              // console.log({ ...doc.data().ItemProductOwner, id: doc.id });
              setSwapItemsId(doc.data().ItemProductOwner);
            });

            const ProListCol = query(collection(db, "Products"));
            const ProListSnapshot = await getDocs(ProListCol);
            setProducts(
              ProListSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );

            const ProductOwnerListCol = query(
              collection(db, "SwapItems"),
              where("ProductOwner", "==", doc.id)
            );
            const ProductOwnerListSnapshot = await getDocs(ProductOwnerListCol);
            setSwapItemsOwner(
              ProductOwnerListSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
              }))
            );
          } catch (error) {
            console.error(error);
          }
        });
      } else {
        // User is signed out
        alert(
          "sign in Error!",
          "Please log in to access the 2 love application again.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]
        );
        
      }
    });
  }

  useEffect(() => {
    getUserSwapItems();
    // getProductById();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate('TabBarNavigator')}
          ></Ionicons>
          <Text style={styles.TextHead}>2LOVE SWAP</Text>
        </View>
      </View>

      {/* Recommend */}
      <View>
        <View>
          <Text style={styles.text}>รายการแลก</Text>
          <Text style={styles.subtext}>รออนุมัติ</Text>
        </View>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => navigation.navigate("SwapItemsScreen")}
            title="รออนุมัติ"
          />
          <Button
            onPress={() => navigation.navigate("SwapItemsScreen2")}
            title="ตอบรับ"
          />
          <Button
            onPress={() => navigation.navigate("SwapItemsScreen3")}
            title="เสร็จสิ้น"
          />
        </View>

        {SwapItems.length == null || SwapItems.length === 0 ? (
          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <Text>ไม่มีข้อมูลการแลกเปลี่ยนสินค้า</Text>
          </View>
        ) : (
          <View style={styles.contentCard}>
            {SwapItems.map((item) => (
              <View key={item.id}>
                {item.PO_AgreeSwap == 0 ? (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Swap3", {
                        SwapItemsID: item.id,
                        ItemProductOwnerID: item.ItemProductOwner,
                        ProductOwnerID: item.ProductOwner,
                        SwapOwnerID: item.SwapOwner,
                        ItemSwapOwnerID: item.ItemSwapOwner,
                        ProductOwnerSwap_Locations: item.ProductOwnerSwap_Locations
                      })
                    }
                    style={{ borderRadius: 25 }}
                    // key={item.id}
                  >
                    <ProductCard
                      NameProduct={item.ItemProductOwner_NameProduct}
                      Size={item.ItemProductOwner_Size}
                      Images={item.ItemProductOwner_Images}
                    />
                  </TouchableOpacity>
                ) : (
                  <View></View>
                )}
              </View>
            ))}
          </View>
        )}
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
    color: "#D7385E",
  },
  subtext: {
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
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
    margin: 20,
    gap: 10,
  },
  alternativeLayoutButtonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 170,
    marginLeft: 30,
  },
});
