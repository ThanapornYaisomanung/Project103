import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
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

export default function SwapSuccessScreen({ navigation, route }) {
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
      PO_AgreeSwap: "1",
    });

    try {
      Alert.alert("Swap Iteam", "You have successfully the swap.", [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("SwapSuccessScreen", {
              ProductOwnerID: ProductOwnerID,
              ItemProductOwnerID: ItemProductOwnerID,
              SwapItemsID: SwapItemsID,
              SwapOwnerID: SwapOwnerID,
              ItemSwapOwnerID: ItemSwapOwnerID,
            }),
        },
        navigation.navigate("SwapSuccessScreen", {
          ProductOwnerID: ProductOwnerID,
          ItemProductOwnerID: ItemProductOwnerID,
          SwapItemsID: SwapItemsID,
          SwapOwnerID: SwapOwnerID,
          ItemSwapOwnerID: ItemSwapOwnerID,
        }),
      ]);
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
      <ScrollView>
        {/* หัว */}
        <View style={styles.Topbar}>
          <View style={styles.SubTopBar}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={"white"}
              onPress={() => navigation.navigate("TabBarNavigator")}
            ></Ionicons>
            <Text style={styles.TextHead}>2LOVE SWAP</Text>
          </View>
        </View>

        {/* content */}

        <Text style={styles.text}>swap success!!</Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.contentCard}>
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
                  marginLeft: 5,
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
                  marginLeft: 5,
                }}
              />
            )}

            <View style={styles.Formh}>
              <Ionicons
                name="swap-horizontal"
                size={40}
                color={"#D7385E"}
                alignSelf={"center"}
                paddingTop={40}
              ></Ionicons>
            </View>
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
                }}
              />
            )}
          </View>
        </View>

        <View>
          <View style={{ flexDirection: "column", marginBTop: 10 }}>
            {/* <View style={styles.Form}> */}
            {/* input รอดึงข้อมูล */}
            {/* <TextInput></TextInput> */}
            {/* </View> */}
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  left: 70,
                }}
              />
              <View style={{ flexDirection: "row", paddingTop: 10 }}></View>
              <Image
                source={{
                  uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  left: 240,
                }}
              />
              <View style={{ flexDirection: "row", paddingTop: 10 }}></View>
            </View>

            {/* <Text style={styles.Textform}>First Name</Text> */}
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.Textform}>
                {SwapOwner.Name != ProductOwner.Name
                  ? SwapOwner.Name
                  : ProductOwner.Name}
              </Text>
              <Text
                style={{
                  marginRight: 150,
                  fontSize: 20,
                  color: "#D7385E",
                  paddingHorizontal: 40,
                  fontWeight: "bold",
                  left: 60,
                }}
              >
                {SwapOwner.Name == ProductOwner.Name
                  ? SwapOwner.Name
                  : ProductOwner.Name}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 110,
                  fontSize: 20,
                  color: "#D7385E",
                  paddingHorizontal: 20,
                }}
              >
                Contact:
              </Text>
              <Text
                style={{
                  marginRight: 90,
                  fontSize: 20,
                  color: "#D7385E",
                  paddingHorizontal: 20,
                }}
              >
                Contact:
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={{
                    marginRight: 90,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                >
                  {ItemSwapOwner.Contact == null
                    ? "null"
                    : ItemSwapOwner.Contact}
                </Text>
              </View>

              <View
                style={{
                  left: 70,
                }}
              >
                <Text
                  style={{
                    marginRight: 90,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                >
                  {ItemProductOwner.Contact == null
                    ? "null"
                    : ItemProductOwner.Contact}
                </Text>
              </View>
            </View>
            <View style={styles.Form}></View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 90,
                  fontSize: 20,
                  color: "#D7385E",
                  paddingHorizontal: 20,
                  fontWeight: "bold",
                }}
              >
                รายละเอียดแลกเปลี่ยนสินค้า
              </Text>
            </View>
            <View style={styles.Form}></View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 210 }}>
                {/* name */}
                <Text
                  style={{
                    fontSize: 20,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  {ItemSwapOwner.NameProduct == null
                    ? "null"
                    : ItemSwapOwner.NameProduct}
                </Text>

                {/* size */}
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  Size{" "}
                  {ItemSwapOwner.Size == null ? "null" : ItemSwapOwner.Size}
                </Text>

                {/* Categories */}
                <Text
                  style={{
                    marginRight: 0,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  Categories:{" "}
                  {ItemSwapOwner.Categories == null
                    ? "null"
                    : ItemSwapOwner.Categories}
                </Text>

                {/* By */}
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  by:{" "}
                  {SwapOwner.Name != ProductOwner.Name
                    ? SwapOwner.Name
                    : ProductOwner.Name}
                </Text>
              </View>

              <View style={{ width: 210 }}>
                {/* ItemProductOwner */}
                {/* name */}
                <Text
                  style={{
                    fontSize: 20,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  {ItemProductOwner.NameProduct == null
                    ? "null"
                    : ItemProductOwner.NameProduct}
                </Text>

                {/* size */}
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  Size{" "}
                  {ItemProductOwner.Size == null
                    ? "null"
                    : ItemProductOwner.Size}
                </Text>

                {/* Categories */}
                <Text
                  style={{
                    marginRight: 0,
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  Categories:{" "}
                  {ItemProductOwner.Categories == null
                    ? "null"
                    : ItemProductOwner.Categories}
                </Text>

                {/* By */}
                <Text
                  style={{
                    fontSize: 16,
                    color: "#D7385E",
                    paddingHorizontal: 20,
                  }}
                  numberOfLines={2}
                >
                  by:{" "}
                  {SwapOwner.Name == ProductOwner.Name
                    ? SwapOwner.Name
                    : ProductOwner.Name}
                </Text>
              </View>
            </View>

            <View style={styles.Form}></View>
          </View>
        </View>

        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 20,
              color: "#D7385E",
              fontWeight: "bold",
            }}
          >
            รายละเอียดการรับสินค้า
          </Text>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.subtext}>
              รับสินค้าแบบ:{" "}
              {ItemProductOwner.Shipment == null
                ? "null"
                : ItemProductOwner.Shipment}
            </Text>

            <View>
              {ItemProductOwner.Shipment == "Receive the product" ? (
                <Text style={styles.subtext} numberOfLines={1}>
                  นัดรับที่:{" "}
                  {ItemProductOwner.Locations == null
                    ? "null"
                    : ItemProductOwner.Locations}
                </Text>
              ) : (
                <View></View>
              )}

              {ItemProductOwner.Shipment == "Delivery" ? (
                <View>
                  {/* ItemSwapOwner */}
                  <View style={{ width: 210 }}>
                    <Text style={styles.subtext} numberOfLines={10}>
                      {SwapOwner.Name != ProductOwner.Name
                        ? SwapOwner.Name
                        : ProductOwner.Name}{" "}
                      จัดส่งที่:{" "}
                      {/* {ItemProductOwner.Locations == null
                    ? "null"
                    : ItemProductOwner.Locations} */}
                    </Text>
                  </View>

                  {/* ItemProductOwner */}
                  <View style={{ width: 210 }}>
                    <Text style={styles.subtext} numberOfLines={10}>
                      {SwapOwner.Name == ProductOwner.Name
                        ? SwapOwner.Name
                        : ProductOwner.Name}{" "}
                      จัดส่งที่:{" "}
                      {/* {ItemProductOwner.Locations == null
                    ? "null"
                    : ItemProductOwner.Locations} */}
                    </Text>
                  </View>
                </View>
              ) : (
                <View></View>
              )}
            </View>

            {ItemProductOwner.Shipment == "Receive the product" ? (
              <View style={styles.map}>
                <View
                  style={{ height: 350, width: 370, backgroundColor: "#022" }}
                ></View>
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
    flexDirection: "row",
    margin: 10,
  },
  text: {
    fontSize: 24,
    // marginTop: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: "#D7385E",
  },
  subtext: {
    fontSize: 16,
    color: "#D7385E",
    marginTop: 5,
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
  Textform: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D7385E",
    paddingHorizontal: 20,
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
    // backgroundColor: "#D7385E",
    borderRadius: 85,
    marginVertical: 10,
    // justifyContent:"center",
    paddingLeft: 8,
    marginTop: 60,
  },

  map: {
    marginBottom: 20,
    marginTop: 10,
  },
});
