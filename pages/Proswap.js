import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import Proimg from "../component/Proimg";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { collection, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Proswap({ navigation, route }) {
  const Donatesid = route.params.id;
  // console.log(Donatesid);
  const [donateList, setDonateList] = useState([]);

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

  useEffect(() => {
    fetchProductById(Donatesid);
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
      </View>

      {/* content */}
      <ScrollView>
        <View style={styles.contentCard}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
            }}
            style={{
              height: 300,
              width: 250,
              borderRadius: 15,
            }}
          />
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
                onPress={() => navigation.navigate("Swap1")}
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
            <Ionicons
              name="heart-outline"
              size={30}
              color={"#fff"}
              onPress={() => navigation.navigate("FavoriteScreen")}
            ></Ionicons>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "column",
              marginBTop: 6,
            }}
          >
            <Text style={styles.Textformname}>{donateList.NameProduct}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.Textform}>Size : {props.Size}</Text>
              <Text style={styles.Textform}>สภาพยังดูดีเวรี่กู้ดนะคะะะะะ</Text>
            </View>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <View style={{ flexDirection: "row" }}>
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
              <Text
                style={{
                  marginRight: 90,
                  fontSize: 16,
                  color: "#D7385E",
                  paddingTop: 10,
                  paddingHorizontal: 30,
                }}
              >
                Mamygem
              </Text>
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
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.Textform}>Categories</Text>
              <Text
                style={{
                  marginRight: 90,
                  fontSize: 16,
                  color: "#D7385E",
                  paddingHorizontal: 40,
                }}
              >
                Tops and T - shirts
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
                Condition
              </Text>
              <Text
                style={{
                  marginRight: 90,
                  fontSize: 16,
                  color: "#D7385E",
                  paddingHorizontal: 110,
                }}
              >
                Excellent
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
                  marginRight: 90,
                  fontSize: 16,
                  color: "#D7385E",
                  paddingHorizontal: 90,
                }}
              >
                IG:Mamyfotko
              </Text>
            </View>
            <View style={styles.Form}></View>
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
});
