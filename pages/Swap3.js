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
  updateDoc,
} from "firebase/firestore";
import { db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Swap3({ navigation, route }) {
  const ProductOwnerID = route.params.ProductOwnerID;
  const ItemProductOwnerID = route.params.ItemProductOwnerID;
  const SwapItemsID = route.params.SwapItemsID;
  const SwapOwnerID = route.params.SwapOwnerID;
  const ItemSwapOwnerID = route.params.ItemSwapOwnerID;


  const [ProductOwner, setProductOwner] = useState([]);
  const [SwapOwner, setSwapOwner] = useState([]);
  const [ItemSwapOwner, setItemSwapOwner] = useState([]);
  const [ItemProductOwner, setItemProductOwner] = useState([]);

  const [UserMe, setUserMe] = useState("");
  const [UserMeId, setUserMeId] = useState("");

  //--------------------fetch and Get User-------------------------

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

  const getProductOwnerID = async (ProductOwnerID) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Users", ProductOwnerID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductOwnerID = async (ProductOwnerID) => {
    const result = await getProductOwnerID(ProductOwnerID);
    setProductOwner(result);
  };

  const getSwapOwnerID = async (SwapOwnerID) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Users", SwapOwnerID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSwapOwnerID = async (SwapOwnerID) => {
    const result = await getSwapOwnerID(SwapOwnerID);
    setSwapOwner(result);
  };

  //---------------------------------------------


  //-------------------Get Product-----------------------

  const getItemSwapOwnerID = async (ItemSwapOwnerID) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Products", ItemSwapOwnerID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItemSwapOwnerID = async (ItemSwapOwnerID) => {
    const result = await getItemSwapOwnerID(ItemSwapOwnerID);
    setItemSwapOwner(result);
  };


  const getItemProductOwnerID = async (ItemProductOwnerID) => {
    try {
      // console.log("prod", ProductId);
      const productRef = doc(db, "Products", ItemProductOwnerID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchItemProductOwnerID = async (ItemProductOwnerID) => {
    const result = await getItemProductOwnerID(ItemProductOwnerID);
    setItemProductOwner(result);
  };


  //---------------------------------------------


  //-------------------- function -------------------------

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
    console.log("canceled the swap ID: ", SwapItemsID);
    await deleteDoc(doc(db, "SwapItems", SwapItemsID));

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

  //-------------------------------------------------------

  const alertSwapUpdate = async () => {
    try {
      Alert.alert("Swap the item", "Do you want to swap the item?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => SwapUpdate() },
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const SwapUpdate = async () => {
    const SwapUpdateRef = doc(db, "SwapItems", SwapItemsID);


    await updateDoc(SwapUpdateRef, {
      PO_AgreeSwap: '1',
    });

    try {
      Alert.alert(
        "Swap Iteam",
        "You have successfully the swap.",
        [
          {
            text: "OK",
  //           const ProductOwnerID = route.params.ProductOwnerID;
  // const ItemProductOwnerID = route.params.ItemProductOwnerID;
  // const SwapItemsID = route.params.SwapItemsID;
  // const SwapOwnerID = route.params.SwapOwnerID;
  // const ItemSwapOwnerID = route.params.ItemSwapOwnerID;
            onPress: () => navigation.navigate("SwapSuccessScreen", {ProductOwnerID: ProductOwnerID, ItemProductOwnerID: ItemProductOwnerID, SwapItemsID: SwapItemsID, SwapOwnerID: SwapOwnerID, ItemSwapOwnerID: ItemSwapOwnerID}),
          },
          navigation.navigate("SwapSuccessScreen", {ProductOwnerID: ProductOwnerID, ItemProductOwnerID: ItemProductOwnerID, SwapItemsID: SwapItemsID, SwapOwnerID: SwapOwnerID, ItemSwapOwnerID: ItemSwapOwnerID}),
        ]
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchSwapOwnerID(SwapOwnerID);
    fetchProductOwnerID(ProductOwnerID);
    fetchItemSwapOwnerID(ItemSwapOwnerID);
    fetchItemProductOwnerID(ItemProductOwnerID);
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
            {SwapOwner.Name != ProductOwner.Name
              ? SwapOwner.Name
              : ProductOwner.Name}
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
            {SwapOwner.Name == ProductOwner.Name
              ? SwapOwner.Name
              : ProductOwner.Name}
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
                {ItemSwapOwner.Images == null ? (
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
                      uri: ItemSwapOwner.Images,
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
              {ItemProductOwner.Images == null ? (
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
                    uri: ItemProductOwner.Images,
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

            {UserMe === ProductOwner.Name ? (
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
                  onPress={() => alertSwapUpdate()}
                  // onPress={() => navigation.navigate("SwapSuccessScreen")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Swap!!
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View></View>
            )}

            {UserMe === SwapOwner.Name ? (
              <View style={{ flexDirection: "row", bottom: 0 , alignSelf: "center",
              justifyContent: "center",
          }}>
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

                {/* <TouchableOpacity
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
                  onPress={() => navigation.navigate("SwapSuccessScreen")}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Swap!!
                  </Text>
                </TouchableOpacity> */}
              </View>
            ) : (
              <View></View>
            )}
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
