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
import ProductCard from "../component/ProductCard";
import Proimg from "../component/Proimg";
import { TextInput } from "../component/Theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
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

export default function EditScreen({ navigation, route }) {
  const UserNameID = route.params.UserID;
  const [InfoUser, setInfoUser] = useState([]);

  const getProductOwnerID = async (UserNameID) => {
    try {
      console.log("prod", UserNameID);
      const productRef = doc(db, "Users", UserNameID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductOwnerID = async (UserNameID) => {
    const result = await getProductOwnerID(UserNameID);
    setInfoUser(result);
  };

  useEffect(() => {
    fetchProductOwnerID(UserNameID);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(InfoUser.Name);
  const [fname, setfname] = useState(InfoUser.Fname);
  const [lname, setlname] = useState(InfoUser.Lname);
  const [PhoneN, setlPhoneN] = useState(InfoUser.PhoneN);
  const [contact, setcontact] = useState(InfoUser.contact);
  const [Address, setAddress] = useState(InfoUser.Address);
  const [Postal, setPostal] = useState(InfoUser.Postal);
  const [Province, setProvince] = useState(InfoUser.Province);
  const [District, setDistrict] = useState(InfoUser.District);
  const [SDistrict, setSDistrict] = useState(InfoUser.SDistrict);
  const [Country, setCountry] = useState(InfoUser.Country);
  const [Description, setDescription] = useState(InfoUser.Description);
  const [UserName, setUserName] = useState("");

  const auth = getAuth();

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

  const UserUpdate = async () => {
    const SwapUpdateRef = doc(db, "Users", UserNameID);

    if (name != InfoUser.Name) {
      await updateDoc(SwapUpdateRef, {
        Name: name,
      });
    } else if (fname != InfoUser.Fname) {
      await updateDoc(SwapUpdateRef, {
        Fname: fname,
      });
    }
    else if (lname != InfoUser.Lname) {
      await updateDoc(SwapUpdateRef, {
        Lname: lname,
      });
    }
    else if (PhoneN != InfoUser.PhoneN) {
      await updateDoc(SwapUpdateRef, {
        PhoneN: PhoneN,
      });
    }
    else if (contact != InfoUser.contact) {
      await updateDoc(SwapUpdateRef, {
        contact: contact,
      });
    }
    else if (Address != InfoUser.Address) {
      await updateDoc(SwapUpdateRef, {
        Address: Address,
      });
    }
    else if (Postal != InfoUser.Postal) {
      await updateDoc(SwapUpdateRef, {
        Postal: Postal,
      });
    }
    else if (Province != InfoUser.Province) {
      await updateDoc(SwapUpdateRef, {
        Province: Province,
      });
    }
    else if (District != InfoUser.District) {
      await updateDoc(SwapUpdateRef, {
        District: District,
      });
    }
    else if (SDistrict != InfoUser.SDistrict) {
      await updateDoc(SwapUpdateRef, {
        SDistrict: SDistrict,
      });
    }
    else if (Country != InfoUser.Country) {
      await updateDoc(SwapUpdateRef, {
        Country: Country,
      });
    }
    else if (Description != InfoUser.Description) {
      await updateDoc(SwapUpdateRef, {
        Description: Description,
      });
    }



    try {
      Alert.alert(
        "Update My Preferences",
        "Update you preferences have successfully.",
        [
          {
            text: "OK",
            //           const ProductOwnerID = route.params.ProductOwnerID;
            // const ItemProductOwnerID = route.params.ItemProductOwnerID;
            // const SwapItemsID = route.params.SwapItemsID;
            // const SwapOwnerID = route.params.SwapOwnerID;
            // const ItemSwapOwnerID = route.params.ItemSwapOwnerID;
            onPress: () => navigation.navigate("ProfileScreen"),
          },
          navigation.navigate("ProfileScreen"),
        ]
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  console.log(name, '=>' , InfoUser.Name);

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
          <Text style={styles.TextHead}>Edit Profile</Text>
        </View>
      </View>
      <ScrollView>
        {/* content */}

        <View style={styles.contentCard}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
            }}
            style={{
              height: 170,
              width: 170,
              borderRadius: 85,
            }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 110,
              zIndex: 9999,
            }}
          >
            <Ionicons name="camera" size={32}></Ionicons>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={styles.Textform}>Account Name</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Name}
                onChangeText={(text) => setName(text)}
              />
            </View>

            <Text style={styles.Textform}>First Name</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Fname}
                onChangeText={(text) => setfname(text)}
              />
            </View>

            <Text style={styles.Textform}>Last Name</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Lname}
                onChangeText={(text) => setlname(text)}
              />
            </View>

            <Text style={styles.Textform}>Description or bio</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>

            <Text style={styles.Textform}>Mobile no.</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.PhoneN}
                onChangeText={(text) => setlPhoneN(text)}
              />
            </View>

            <Text style={styles.Textform}>Contact</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.contact}
                onChangeText={(text) => setcontact(text)}
              />
            </View>

            <Text style={styles.Textform}>My Address</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Address}
                onChangeText={(text) => setAddress(text)}
              />
            </View>

            <Text style={styles.Textform}>Postal code</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Postal}
                onChangeText={(text) => setPostal(text)}
              />
            </View>

            <Text style={styles.Textform}>Province</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Province}
                onChangeText={(text) => setProvince(text)}
              />
            </View>

            <Text style={styles.Textform}>District</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.District}
                onChangeText={(text) => setDistrict(text)}
              />
            </View>

            <Text style={styles.Textform}>Sub-district</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.SDistrict}
                onChangeText={(text) => setSDistrict(text)}
              />
            </View>

            <Text style={styles.Textform}>Country</Text>
            <View style={{ width: 380, marginLeft: 15 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={InfoUser.Country}
                onChangeText={(text) => setCountry(text)}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.FormPre}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Prefernces")}
              style={{ flexDirection: "row" }}
            >
              <View style={{ marginTop: 3 }}>
                <Text style={styles.Textform}>My Prefernces</Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={30}
                color={"#D7385E"}
                marginLeft={190}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ margin: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#D7385E",
              height: 50,
              width: 150,
              borderRadius: 15,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => UserUpdate()}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              SAVE!!
            </Text>
          </TouchableOpacity>
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
    marginTop: 100,
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
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    zIndex: 1,
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
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
  },
  Form: {
    height: 44,
    width: "90%",
    alignSelf: "center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#E0DFDF",
    borderRadius: 10,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  FormPre: {
    height: 44,
    width: "90%",
    alignSelf: "center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
});
