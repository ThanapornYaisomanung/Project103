import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
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
import { db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Swap2({ navigation, route }) {
  const ProductId = route.params.ProductId;
  const idMepro = route.params.idMepro;
  const SwapItemsId = route.params.SwapItemsId;

  console.log("อันนี้", SwapItemsId);

  const [donateList, setDonateList] = useState([]);
  const [ProMeList, setProMeList] = useState([]);
  const [UserNameId, setUserNameId] = useState("");
  const [UserName, setUserName] = useState("");
  const [UserMe, setUserMe] = useState("");
  const [UserMeId, setUserMeId] = useState("");

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
        setUserMe(doc.data().Name);
        setUserMeId(doc.id);
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
      navigation.reset({
        index: 0,
        routes: [{ name: "StartScreen" }],
      });
    }
  });

  const getProductById = async (ProductId) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Products", ProductId);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductById = async (ProductId) => {
    const result = await getProductById(ProductId);
    setDonateList(result);
  };

  const fetchUser = async (ProductId) => {
    const result = await getProductById(ProductId);

    // setUserId(result.UserCreate);
    try {
      const productRef = doc(db, "Users", result.UserCreate);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      setUserName(product.Name);
      setUserNameId(product.id);
      // return product;
    } catch (error) {
      console.error(error);
    }
  };

  const getProductMeById = async (idMepro) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Products", idMepro);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductMeById = async (idMepro) => {
    const result = await getProductMeById(idMepro);
    setProMeList(result);
  };

  const upData = async () => {
    try {
      const docRef = await addDoc(collection(db, "SwapItems"), {
        SwapOwner: UserMeId,
        ProductOwner: UserNameId,
        ItemSwapOwner: ProMeList.id,
        ItemProductOwner: donateList.id,
        SO_AgreeSwap: "1",
        PO_AgreeSwap: "0",
        CancelSwap: "0",
        SuccessSwap: "0",
      });

      console.log("Swap written with ID: ", docRef.id);

      alert("Swap item success!", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("Swap2", {
              idMepro: idMepro,
              ProductId: ProductId,
            }),
        },
        navigation.navigate("Swap2", {
          idMepro: idMepro,
          ProductId: ProductId,
        }),
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const alertCancelOrder = () => {
    try {
      Alert.alert("Cancel to swap", "Do you want to cancel the swap?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => CancelOrder() },
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  const CancelOrder = async () => {
    console.log('canceled the swap ID: ', SwapItemsId);
    await deleteDoc(doc(db, "SwapItems", SwapItemsId));

    try {
      Alert.alert(
        "Cancel to swap",
        "You have successfully canceled the swap.",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("TabBarNavigator"),
          },
          navigation.navigate("TabBarNavigator"),

        ]
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchProductById(ProductId);
    fetchUser(ProductId);
    fetchProductMeById(idMepro);
  }, []);

  // console.log('คนที่เราไปขอแลก', UserNameId);
  // console.log('เราที่แลก', UserMeId);

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
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
            }}
            style={{
              height: 90,
              width: 90,
              borderRadius: 55,
              marginTop: 50,
              marginLeft: 30,
            }}
          />
          <Ionicons
            name="swap-horizontal"
            size={45}
            color={"#fff"}
            alignSelf={"center"}
            paddingTop={50}
            paddingLeft={50}
          ></Ionicons>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
            }}
            style={{
              height: 90,
              width: 90,
              borderRadius: 55,
              marginTop: 50,
              marginLeft: 50,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginLeft: 30,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {UserMe != UserMe ? <Text>Null</Text> : UserMe}
          </Text>
          <Text
            style={{
              marginLeft: 130,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            {UserName != UserName ? <Text>Null</Text> : UserName}
          </Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: "column",
              marginBTop: 9,
            }}
          >
            <Text style={styles.Textformname}>Product to swap</Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                {donateList.Images == null ? (
                  <Image
                    source={{
                      uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
                    }}
                    style={{
                      height: 200,
                      width: 150,
                      borderRadius: 15,
                      marginTop: 20,
                      marginLeft: 15,
                    }}
                  />
                ) : (
                  <Image
                    source={{
                      uri: ProMeList.Images,
                    }}
                    style={{
                      height: 200,
                      width: 150,
                      borderRadius: 15,
                      marginTop: 20,
                      marginLeft: 15,
                    }}
                  />
                )}
              </View>
              <Ionicons
                name="swap-horizontal"
                size={45}
                color={"#D7385E"}
                alignSelf={"center"}
                paddingLeft={20}
              ></Ionicons>
              {donateList.Images == null ? (
                <Image
                  source={{
                    uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
                  }}
                  style={{
                    height: 200,
                    width: 150,
                    borderRadius: 15,
                    marginTop: 20,
                    marginLeft: 15,
                  }}
                />
              ) : (
                <Image
                  source={{
                    uri: donateList.Images,
                  }}
                  style={{
                    height: 200,
                    width: 150,
                    borderRadius: 15,
                    marginTop: 20,
                    marginLeft: 15,
                  }}
                />
              )}
            </View>

            <View>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#D7385E",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Waiting to approval
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", bottom: 0 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#F4E8E7",
                  height: 50,
                  width: 150,
                  borderRadius: 15,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",

                  borderColor: "#D7385E",
                  borderWidth: 2,
                  marginLeft: 40,
                  marginRight: 30,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    color: "#D7385E",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  onPress={() => alertCancelOrder()}
                >
                  CENCLE!!
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#D7385E",
                  height: 50,
                  width: 150,
                  borderRadius: 15,
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 50,
                  marginTop: 20,
                }}
                onPress={() => navigation.navigate("SwapItemsScreen")}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  GO to Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    height: 300,
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
    marginTop: 20,
  },
  Form: {
    height: 200,
    width: 150,
    alignSelf: "center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#E0DFDF",
    borderRadius: 15,
    marginVertical: 15,
    justifyContent: "center",
    paddingLeft: 8,
    marginLeft: 15,
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
});
