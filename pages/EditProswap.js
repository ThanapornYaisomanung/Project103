import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  ActivityIndicator,
  Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import Proimg from "../component/Proimg";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
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
import { db ,  addDoc} from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function EditProswap({ navigation, route }) {
  const Donatesid = route.params.id;
  // console.log(Donatesid);
  const [donateList, setDonateList] = useState([]);
  const [UserId, setUserId] = useState("");
  const [UserName, setUserName] = useState("");
  const [favData, setFavData] = useState("");
  const [favDataID, setFavDataID] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const email = user.email;
      // console.log("This account:", uid, email);

      const q = query(collection(db, "Users"), where("Email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().Name);
        // console.log(doc.id, " => ", doc.id);
        setUserId(doc.id);

        
      });
    } else {
      // User is signed out
      alert("sign in Error!");
    }
  });

  const getProductById = async (Donatesid) => {
    try {
      // console.log("prod", Donatesid);
      const productRef = doc(db, "Products", Donatesid);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductById = async (Donatesid) => {
    const result = await getProductById(Donatesid);
    setDonateList(result);
  };

  const fetchUser = async (Donatesid) => {
    const result = await getProductById(Donatesid);
    // setUserId(result.UserCreate);
    try {
      const productRef = doc(db, "Users", result.UserCreate);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      setUserName(product.Name);
      // return product;
    } catch (error) {
      console.error(error);
    }
  };

  const getFavById = async (Donatesid) => {
    const q = query(collection(db, "fav"), where("Pro_ID", "==", Donatesid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setFavData(doc.data());
        setFavDataID(doc.id);
      });
  };


  

  async function fav() {
    try {
      const docRef = await addDoc(collection(db, "fav"), {
        UserName: UserId,
        Fav: 'fav',
        Pro_ID: donateList.id,
        Pro_NameProduct: donateList.NameProduct,
        Pro_Size: donateList.Size,
        Pro_Images: donateList.Images,
      });
      alert("Add To Favorite");
      console.log(docRef.id);
    } catch (e) {
      console.error("error", e);
    }
  }
  
  async function unfav() {
    console.log('canceled the swap ID: ', favDataID);
    await deleteDoc(doc(db, "fav", favDataID));

    try {
      Alert.alert(
        "Unfavorite!!",
        "You have successfully to unfavorite.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Proswap", { id: Donatesid })
          },
          navigation.navigate("Proswap", { id: Donatesid })

        ]
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  useEffect(() => {
    fetchProductById(Donatesid);
    fetchUser(Donatesid);
    getFavById(Donatesid);
  }, []);

  console.log(favData.Fav);

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

          <Ionicons
            name="create-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate('Editpro', { ProductID: Donatesid })}
          ></Ionicons>
        </View>
      </View>

      {/* content */}
      {donateList.NameProduct != donateList.NameProduct ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#D7385E" />
        </View>
      ) : (
        <ScrollView>
          {/* Images */}
          <View style={styles.contentCard}>
            {donateList.Images == null ? (
              <Image
                source={{
                  uri: "https://legacy.reactjs.org/logo-og.png",
                }}
                style={{
                  height: 300,
                  width: 250,
                  borderRadius: 15,
                }}
              />
            ) : (
              <Image
                source={{
                  uri: donateList.Images,
                }}
                style={{
                  height: 300,
                  width: 250,
                  borderRadius: 15,
                }}
              />
            )}

            <View
              style={{
                position: "absolute",
                bottom: 0,
                top: 240,
                right: 40,
                zIndex: 9999,
              }}
            >
              <View style={styles.Formh}>
                <Ionicons
                  name="swap-horizontal"
                  size={45}
                  color={"#fff"}
                  margin={11}
                  paddingTop={5}
                  onPress={() =>
                    navigation.navigate("Swap1", { id: Donatesid })
                  }
                ></Ionicons>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                bottom: 260,
                right: 80,
                zIndex: 9999,
              }}
            >
              {
                favData.Fav != 'fav' ?
                <Ionicons
                  name="heart-outline"
                  size={30}
                  color={"#fff"}
                  onPress={() => fav()}
                ></Ionicons>
                :
                <Ionicons
                  name="heart"
                  size={30}
                  color={"#f00"}
                  onPress={() => unfav()}
                ></Ionicons>
              }
                
              
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: "column",
                marginBTop: 6,
              }}
            >
              <Text style={styles.Textformname}>
                {donateList.NameProduct == null ? (
                  <Text>Null</Text>
                ) : (
                  donateList.NameProduct
                )}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Textform}>
                  Size :{" "}
                  {donateList.Size == null ? (
                    <Text>Null</Text>
                  ) : (
                    donateList.Size
                  )}
                </Text>
              </View>

              <View style={styles.Form}></View>
              <View style={{ flexDirection: "row" }}>
                {/* Image Profile */}
                <Image
                  source={{
                    uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    left: 20,
                  }}
                />

                {/* UserName */}
                {UserName == null ? (
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#D7385E",
                      paddingTop: 10,
                      paddingHorizontal: 30,
                      width: 230,
                    }}
                  >
                    Null
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#D7385E",
                      paddingTop: 10,
                      paddingHorizontal: 30,
                      width: 230,
                    }}
                  >
                    {UserName}
                  </Text>
                )}

                {/* star */}
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#FFDD67"}
                  ></Ionicons>
                  <Ionicons
                    name="star-sharp"
                    size={20}
                    color={"#C7C3C3"}
                  ></Ionicons>
                </View>
              </View>

              {/* <Text style={styles.Textform}>First Name</Text> */}
              <View style={styles.Form}></View>
              <View>
                <Text style={styles.Textform}>Description</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={styles.Textform}>
                    {donateList.Description == null ? (
                      <Text>Null</Text>
                    ) : (
                      donateList.Description
                    )}
                  </Text>
                </Text>
              </View>

              <View style={styles.Form}></View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.Textform}>Categories</Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    left: 60,
                  }}
                >
                  {donateList.Categories == null ? (
                    <Text>Null</Text>
                  ) : (
                    donateList.Categories
                  )}
                </Text>
              </View>

              <View style={styles.Form}></View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    right: 0,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                >
                  Condition
                </Text>
                <Text
                  style={{
                    left: 160,
                    fontSize: 16,
                    color: "#D7385E",
                  }}
                >
                  {donateList.Condition == null ? (
                    <Text>Null</Text>
                  ) : (
                    donateList.Condition
                  )}
                </Text>
              </View>

              <View style={styles.Form}></View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    marginRight: 90,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                >
                  Contact
                </Text>
                <Text
                  style={{
                    left: 80,
                    fontSize: 16,
                    color: "#D7385E",
                    width: 120,
                  }}
                >
                  {donateList.Contact == null ? (
                    <Text>Null</Text>
                  ) : (
                    donateList.Contact
                  )}
                </Text>
              </View>
              <View style={styles.Form}></View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    margin: 20,
    alignItems: "center",

    // gap: 10,
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
    justifyContent:'space-between'
  },
  TextHead: {
    // marginLeft: 110,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  Textform: {
    marginRight: 90,
    fontSize: 16,
    // fontWeight: "bold",
    color: "#D7385E",
    paddingHorizontal: 20,
    // marginTop:50
  },
  Textformname: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    color: "#D7385E",

    // marginTop:50
  },
  Form: {
    height: 1,
    width: "90%",
    alignSelf: "center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#E0DFDF",
    borderRadius: 1,
    marginVertical: 15,
    justifyContent: "center",
    paddingLeft: 8,
  },
  Formh: {
    height: 80,
    width: 80,
    // alignSelf:"center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#D7385E",
    borderRadius: 85,
    marginVertical: 6,
    // justifyContent:"center",
    paddingLeft: 8,
    // marginTop:150
  },
  container: {
    paddingTop: 350,
  },
  button: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    backgroundColor: "#fff",
  },
  selected: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#007E00",
    backgroundColor: "#C9FFC4",
  },
});
