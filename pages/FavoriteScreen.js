import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDoc,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function FavoriteScreen({ navigation }) {
  const [UserName, setUserName] = useState("");
  const [UserId, setUserId] = useState("");
  const [favData, setFavData] = useState([]);
  const [favDataID, setFavDataID] = useState("");
  const [ProID, setProID] = useState("");
  const [posList, setPosList] = useState([]);

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
              collection(db, "fav"),
              where("UserName", "==", doc.id)
            );
            const CatListSnapshot = await getDocs(CatListCol);
            setFavData(
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

  // const getFavById = async () => {
  //   const q = query(collection(db, "fav"), where("UserName", "==", UserId));
  //   const querySnapshot = await getDocs(q);

  //   setFavData(
  //     querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  //   );
  // };

  useEffect(() => {
    getUser();
  }, []);

  console.log("อันนี้", favData);

  return (
    <View>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("TabBarNavigator")}
          ></Ionicons>
          <Text style={styles.TextHead}>Favorite</Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
        <View style={styles.contentCard}>
          {favData.map((item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Proswap", { id: item.Pro_ID })
              }
              style={{ borderRadius: 25 }}
              key={item.id}
            >
              <ProductCard
                NameProduct={item.Pro_NameProduct}
                Size={item.Pro_Size}
                Images={item.Pro_Images}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* <TouchableOpacity
              onPress={() => navigation.navigate("Proswap", { id: item.id })}
              style={{ borderRadius: 25 }}
              key={item.id}
            >
              <ProductCard
                NameProduct={item.NameProduct}
                Size={item.Size}
                Images={item.Images}
              />
            </TouchableOpacity> */}
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
});
