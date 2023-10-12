import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import ProductCard from "../component/ProductCard";

const PostsScreen = ({ navigation }) => {
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
    <View style={{}}>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Proswap")}>
            <Text style={styles.TextHead}>PostsScreen</Text>
          </TouchableOpacity>
        </View>

        {/* <ProductCardMe props={UserName} /> */}
        {CatList.length == null || CatList.length === 0 ? (
          <View style={{ marginLeft: 20, marginTop: 20 }}>
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
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export { PostsScreen };

const styles = StyleSheet.create({
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
    // justifyContent: "center",
    // alignItems: "center"
  },
  TextHead: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
