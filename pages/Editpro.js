import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  PermissionsAndroid,
  Alert,
} from "react-native";
import { Header, Button, TextInput } from "../component/Theme";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
//  collection,
import { storage, db, addDoc } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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


const K_OPTIONS = [
  {
    item: "Women",
  },
  {
    item: "Men",
  },
  {
    item: "Others",
  },
];
const K_OPTIONSCON = [
  {
    item: "Excellent",
  },
  {
    item: "Good",
  },
  {
    item: "Fair",
  },
];
const K_OPTIONSCAT = [
  {
    item: "Tops and T-shirts",
  },
  {
    item: "Bottoms",
  },
  {
    item: "Accessories",
  },
  {
    item: "Co-ords",
  },
  {
    item: "Shoes",
  },
  {
    item: "Bags",
  },
  {
    item: "Dress",
  },
];
const K_OPTIONSS = [
  {
    item: "S",
  },
  {
    item: "M",
  },
  {
    item: "L",
  },
  {
    item: "XL",
  },
  {
    item: "XXL",
  },
];
const K_takePro = [
  {
    id: "1",
    item: "Receive the product",
  },
  {
    id: "2",
    item: "Delivery",
  },
];

const K_Place = [
  {
    item: "Technotanee",
  },
  {
    item: "Academic building 1",
  },
  {
    item: "Academic building 2",
  },
  {
    item: "Ratthasimakunakorn Building",
  },
  {
    item: "Library and Educational Center",
  },
  {
    item: "Kasalongkham Canteen",
  },
];

const Editpro = ({ navigation, route }) => {
  const ProductID = route.params.ProductID;

  const [Gender, SetGender] = useState({});
  const [Size, SetSize] = useState({});
  const [Categories, SetCategories] = useState({});
  const [Condition, SetCondition] = useState({});
  const [Url, SetUrl] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [Locations, SetLocations] = useState({});
  
  const [uploading, setUploading] = useState(false);
  const [post, setPost] = useState(null);
  const [ProductList, setProductList] = useState([])

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

  const getProductById = async (ProductID) => {
    try {
      // console.log("prod", Donatesid);
      const productRef = doc(db, "Products", ProductID);
      const productSnapshot = await getDoc(productRef);
      const product = { id: productSnapshot.id, ...productSnapshot.data() };
      return product;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductById = async (ProductID) => {
    const result = await getProductById(ProductID);
    setProductList(result);
  };

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = result.assets[0].uri;
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image);
    const bold = await response.blob();
    const filename = image.substring(image.lastIndexOf("/") + 1);

    console.log("อันนี้", filename);

    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + filename);
    const uploadTask = uploadBytesResumable(storageRef, bold, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          SetUrl(downloadURL);
        });

        alert("Upload is 100% done");
      }
    );

   
  };


  const [UserName, setUserName] = useState("");

  function getSelectedValue(item) {
    // console.log(item);
    if (item.item == "Delivery") {
      SetLocations(item);
    }
    setSelectedValue(item);
  }

  const place = selectedValue.item;

  const upData = async () => {
    const SwapUpdateRef = doc(db, "Products", ProductID);

    if (Namepro != ProductList.NameProduct) {
      await updateDoc(SwapUpdateRef, {
        NameProduct: Namepro,
      });
    } else if (Description != ProductList.Description) {
      await updateDoc(SwapUpdateRef, {
        Description: Description,
      });
    }
    else if (Contact != ProductList.Contact) {
      await updateDoc(SwapUpdateRef, {
        Contact: Contact,
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

  const alertCancelOrder = () => {
    try {
      Alert.alert("Delete product", "Do you want to delete product?", [
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
    console.log('canceled the swap ID: ', ProductID);
    await deleteDoc(doc(db, "Products", ProductID));

    try {
      Alert.alert(
        "Delete product",
        "You have successfully delete product.",
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

const [Namepro, SetNamepro] = useState(ProductList.NameProduct);
const [Description, SetDescription] = useState(ProductList.Description);
const [Contact, SetContact] = useState(ProductList.Contact);


  useEffect(() => {
    fetchProductById(ProductID);
  }, []);

  console.log(ProductID);

  return (
    <View>
      <SafeAreaView>
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
              <Text style={styles.TextHead}>EDIT PRODUCT</Text>
            </View>
            {/* <View style={styles.Formpho}>
              <Ionicons
                name="add-circle-outline"
                size={80}
                color={"white"}
                alignSelf={"center"}
              ></Ionicons>
            </View> */}
          </View>
        </View>

        <View style={styles.Form}>
          {/* Brand */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Name</Text>
            <View style={{ width: 305 }}>
              <TextInput
                label=""
                returnKeyType="next"
                defaultValue={ProductList.NameProduct}
                onChangeText={(text) => SetNamepro(text)}
      
              />
            </View>
          </View>

          {/* Description */}
          <View>
            <View style={styles.FormRow}>
              <Text style={styles.Textform}>Detail</Text>
              <View>
                <TextInput
                  label=""
                  editable
                  multiline
                  numberOfLines={3}
                  maxLength={150}
                  style={{ height: 80, width: 305 }}
                  returnKeyType="next"
                  defaultValue={ProductList.Description}
                  onChangeText={(text) => SetDescription(text)}

                  // value={Description.value}
                  // onChangeText={(text) => SetDescription(text)}
                />
              </View>
            </View>
          </View>

          {/* Contact */}
          <View>
            <View style={styles.FormRow}>
              <Text style={styles.Textform}>Contact</Text>
              <View>
                <TextInput
                  label=""
                  editable
                  multiline
                  numberOfLines={3}
                  maxLength={150}
                  style={{ height: 80, width: 287 }}
                  returnKeyType="next"
                  defaultValue={ProductList.Contact}
                  onChangeText={(text) => SetContact(text)}

                  // value={Contact.value}
                  // onChangeText={(text) => SetContact(text)}
                />
              </View>
            </View>
          </View>

          {/* takePro */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform4}>Shipment</Text>
            <View style={styles.FormRow3}>
              {K_takePro.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  // onPress={() => setSelectedValue(item)}
                  onPress={() => getSelectedValue(item)}
                  style={[
                    styles.button,
                    selectedValue === item && styles.selected,
                  ]}
                >
                  <Text>{item.item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Receive the product */}
          {place == "Receive the product" ? (
            <View style={styles.FormRow}>
              <Text style={styles.Textform}>Place</Text>
              <View style={{ width: 315 }}>
                <SelectBox
                  label=""
                  options={K_Place}
                  value={Locations}
                  onChange={(text) => SetLocations(text)}
                  hideInputFilter={true}
                />
              </View>
            </View>
          ) : (
            <View></View>
          )}

          {/* Size */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Size</Text>
            <View style={{ width: 325 }}>
              <SelectBox
                label=""
                options={K_OPTIONSS}
                value={Size}
                onChange={(text) => SetSize(text)}
                hideInputFilter={true}
              />
            </View>
          </View>

          {/* Gender */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Gender</Text>
            <View style={{ width: 300 }}>
              <SelectBox
                label=""
                options={K_OPTIONS}
                value={Gender}
                onChange={(text) => SetGender(text)}
                hideInputFilter={true}
              />
            </View>
          </View>

          {/* Categories */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Categories</Text>
            <View style={{ width: 265 }}>
              <SelectBox
                label=""
                options={K_OPTIONSCAT}
                value={Categories}
                onChange={(text) => SetCategories(text)}
                hideInputFilter={true}
              />
            </View>
          </View>

          {/* Condition */}
          <View style={styles.FormRow}>
            <Text style={styles.Textform}>Condition</Text>
            <View style={{ width: 275 }}>
              <SelectBox
                label=""
                options={K_OPTIONSCON}
                value={Condition}
                onChange={(text) => SetCondition(text)}
                hideInputFilter={true}
              />
            </View>
          </View>

          {/* Images */}
          <View style={styles.Form}>
            <Text style={styles.Textform3}>Images</Text>
            <View style={styles.FormRow}>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={choosePhotoFromLibrary}
              >
                <Text style={styles.buttonTextStyle}>Select File</Text>
              </TouchableOpacity>

              {ProductList.Images != null ? (
                <View style={styles.FormRow2}>
                  <Text
                    style={{ alignSelf: "center", marginLeft: 10, width: 200 }}
                    numberOfLines={1}
                  >
                    {ProductList.Images ? ProductList.Images : ""}
                  </Text>

                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    activeOpacity={0.5}
                    onPress={uploadImage}
                  >
                    <Text style={styles.buttonUpdateTextStyle}>upload</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>

            {/* <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              // onPress={submitData}
            >
              <Text style={styles.buttonTextStyle}>Upload File</Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={{justifyContent:'center', alignSelf:'center'}}>
          <View style={styles.FormRow3}>
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
              onPress={alertCancelOrder}
            >
              <Text
                style={{
                  color: "#D7385E",
                    fontWeight: "bold",
                    fontSize: 20,
                }}
              >
                DELETE
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
                marginTop: 20,
              }}
              onPress={upData}
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
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Editpro;

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
    marginLeft: 10,
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
  buttonUpdateTextStyle: {
    backgroundColor: "#007E30",
    borderWidth: 0,
    color: "#C9FFC4",
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
  selected: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "#007E00",
    backgroundColor: "#C9FFC4",
  },
});
