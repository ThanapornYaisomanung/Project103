import { Text, View, ScrollView } from "react-native";
import { Header, Button, TextInput } from "../component/Theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { storage, db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const Donateform = ({ navigation, route }) => {
  const Donatesid = route.params.Donatesid;
  const [donateList, setDonateList] = useState([]);

  const [FirstName, SetFirstName] = useState("");
  const [LastName, SetLastName] = useState("");
  const [PhoneNumber, SetPhoneNumber] = useState("");
  const [Email, SetEmail] = useState("");
  const [NumDonate, SetNumDonate] = useState("");
  const [NameDonate, SetNameDonate] = useState("");
  const [AddressDonate, SetAddressDonate] = useState("");

  const [UserName, setUserName] = useState("");

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
        setUserName(doc.id);
      });
    } else {
      // User is signed out
      alert("sign in Error!");
    }
  });

  const uploadInfo = async () => {
    try {
      const docRef = await addDoc(collection(db, "ToDonate"), {
        FirstName: FirstName,
        LastName: LastName,
        PhoneNumber: PhoneNumber,
        Email: Email,
        NumDonate: NumDonate,
        IdDonate: donateList.id,
        NameDonate: donateList.Name,
        AddressDonate: donateList.Address,


        UserCreate: UserName,
      });

      console.log("Document written with ID: ", docRef.id);

      alert("Add Donate form success!", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.goBack() },
        navigation.goBack(),
      ]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getProductById = async (Donatesid) => {
    try {
      // console.log("prod", Donatesid);
      const productRef = doc(db, "Donates", Donatesid);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  // console.log('อันนี้',donateList.id);

  const fetchProductById = async (Donatesid) => {
    const result = await getProductById(Donatesid);
    setDonateList(result);
  };

  useEffect(() => {
    fetchProductById(Donatesid);
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <View style={styles.Topbar}>
            <View style={styles.SubTopBar}>
              <Ionicons
                name="arrow-back-outline"
                size={30}
                color={"white"}
                onPress={() => navigation.goBack()}
              ></Ionicons>
              {/* <Text style={styles.TextHead}>{UserName}</Text> */}
              <Text style={styles.TextHead}>ADD PRODUCT</Text>
            </View>
          </View>
        </View>

        <View style={styles.Form}>
          {/* First Name */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>First Name</Text>
            <View style={{ width: 270 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={FirstName.value}
                onChangeText={(text) => SetFirstName(text)}
              />
            </View>
          </View>

          {/* Last Name */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Last Name</Text>
            <View style={{ width: 270 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={LastName.value}
                onChangeText={(text) => SetLastName(text)}
              />
            </View>
          </View>

          {/* Phone Number */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Phone Number</Text>
            <View style={{ width: 235 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={PhoneNumber.value}
                onChangeText={(text) => SetPhoneNumber(text)}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Email</Text>
            <View style={{ width: 310 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={Email.value}
                onChangeText={(text) => SetEmail(text)}
              />
            </View>
          </View>

          {/* How many clothes do you wish to donate? */}
          <View>
            <Text style={styles.Textform}>
              How many clothes do you wish to donate?
            </Text>
            <View style={{ width: 375 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={NumDonate.value}
                onChangeText={(text) => SetNumDonate(text)}
              />
            </View>
          </View>

          <Text style={styles.line}></Text>

          <Text style={styles.Textform}>Foundation Address</Text>

          {/* Name Donate? */}
          <View>
            <Text style={styles.Textform}>Name Donate</Text>
            <View style={{ width: 375 }}>
              <TextInput
                label=""
                returnKeyType="next"
                value={donateList.Name}
                onChangeText={(text) => SetNameDonate(text)}
              />
            </View>
          </View>

          {/* Address */}
          <View>
            <Text style={styles.Textform}>Address Donate</Text>
            <View style={{ width: 375 }}>
              <TextInput
                label=""
                editable
                multiline
                numberOfLines={3}
                maxLength={150}
                style={{ height: 80, width: 375 }}
                returnKeyType="next"
                value={donateList.Address}
                onChangeText={(text) => SetAddressDonate(text)}
              />
            </View>
          </View>
        </View>

        <View>
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
            onPress={uploadInfo}
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
};
export default Donateform;

const styles = StyleSheet.create({
  contentCard: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    margin: 20,
    alignItems: "center",
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
    marginLeft: 100,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  Textform: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
    marginTop: 20,
    marginRight: 20,
  },
  Textform2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
  },
  Textform3: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
    marginTop: 15,
    marginRight: 20,
  },
  Textform4: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
    marginTop: 15,
    marginRight: 20,
  },

  Formpho: {
    height: 210,
    width: 180,
    alignSelf: "center",
    backgroundColor: "#E0DFDF",
    borderRadius: 10,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
    marginBottom: 10,
  },
  FormRow: {
    flexDirection: "row",
  },
  FormRow3: {
    flexDirection: "row",
    gap: 10,
  },
  FormRow2: {
    flexDirection: "row",
    marginTop: 10,
  },
  Form: {
    alignSelf: "center",
  },
  buttonTextStyle: {
    backgroundColor: "#9ca3af",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  buttonStyle: {
    marginTop: 10,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
  },
  button: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#D9D9D9",
    backgroundColor: "#fff",
  },
  line: {
    borderColor: "#D7385E",
    alignSelf: "center",
    borderWidth: 3,
    width: 350,
    height: 1,
    marginTop: 20,
    marginBottom: 20,
  },
});
