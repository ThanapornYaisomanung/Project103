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
  updateDoc,
} from "firebase/firestore";
import { db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Swap12({ navigation, route }) {
  const ProductId = route.params.ProductId;
  const idMepro = route.params.idMepro;

  const [donateList, setDonateList] = useState([]);
  const [ProMeList, setProMeList] = useState([]);
  const [UserNameId, setUserNameId] = useState("");
  const [UserName, setUserName] = useState("");
  const [SwapItemsId, setSwapItemsId] = useState("");

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
        ItemProductOwner_NameProduct: donateList.NameProduct,
        ItemProductOwner_Size: donateList.Size,
        ItemProductOwner_Images: donateList.Images,
        ProductOwnerSwap_Locations: donateList.Locations,
        SO_AgreeSwap: "1",
        PO_AgreeSwap: "0",
        CancelSwap: "0",
        SuccessSwap: "0",
      });

      setSwapItemsId(docRef.id);
      console.log("Swap written with ID: ", docRef.id);

      const SwapUpdateRef = doc(db, "Products", ProductId);

      await updateDoc(SwapUpdateRef, {
        Swap: "1",
      });

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
              SwapItemsId: docRef.id,
            }),
        },
        navigation.navigate("Swap2", {
          idMepro: idMepro,
          ProductId: ProductId,
          SwapItemsId: docRef.id,
        }),
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchProductById(ProductId);
    fetchUser(ProductId);
    fetchProductMeById(idMepro);
  }, []);

  console.log("คนที่เราไปขอแลก", UserNameId);
  console.log("เราที่แลก", UserMeId);
  console.log("Swap written with ID: ", SwapItemsId);
  console.log(donateList.Locations);

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
          {/* Me */}
          <Text
            style={{
              marginLeft: 30,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              width: 105,
            }}
            numberOfLines={2}
          >
            {UserMe != UserMe ? <Text>Null</Text> : UserMe}
          </Text>

          <Text
            style={{
              marginLeft: 125,
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              width: 105,
            }}
            numberOfLines={2}
          >
            {/* dasdasdasdad */}
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
                {/* <View style={styles.Form}>
                  <Ionicons
                    name="add-circle-outline"
                    size={80}
                    color={"white"}
                    onPress={() => navigation.navigate("My2love" , { id: UserMeId })}
                    alignSelf={"center"}
                  ></Ionicons> 
                  
                </View>*/}
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
            <TouchableOpacity
              style={{
                backgroundColor: "#D7385E",
                height: 50,
                width: 150,
                borderRadius: 15,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
              onPress={() => upData()}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 25,
                }}
              >
                SWAP!!
              </Text>
            </TouchableOpacity>
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
