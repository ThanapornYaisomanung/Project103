import { View, Text, StyleSheet, ScrollView, Image , ActivityIndicator} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { collection, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Infodonate({ navigation, route }) {
  const Donatesid = route.params.Id;
  const [donateList, setDonateList] = useState([]);

  // const getDonatesId = async () => {
  //   if (Donatesid) {
  //     const q = query(collection(db, "Donates"), where("id", "==", Donatesid));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data().Name);

  //     });

  const getProductById = async (Donatesid) => {
    try {
      console.log("prod", Donatesid);
      const productRef = doc(db, "Donates", Donatesid);
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
  }, [Donatesid]);

  // console.log(donateList);

  return (
    <View>
      {
        donateList.length == 0 ? 
          <View style={styles.container}>
             <ActivityIndicator  size="large" color="#D7385E" />
          </View>
          :
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
            <Text style={styles.TextHead}>{donateList.Name}</Text>
          </View>
        </View>

        {/* content */}

        <View style={{ alignSelf: "center", margin: 20 }}>
          <Image
            source={{
              uri: donateList.Images,
            }}
            style={{
              height: 250,
              width: 350,
              borderRadius: 8,
              margin: 10,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              width: 250,
              flexWrap: "wrap",
              fontSize: 25,
              fontWeight: "bold",
              color: "#D7385E",
              alignSelf: "center",
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {donateList.Name}
            
          </Text>

          
        </View>

        <View
          style={{
            width: "90%",
            alignSelf: "center",
            //  borderColor: "#E0DFD",
            backgroundColor: "#E0DFDF",
            //  borderWidth:1,
            borderRadius: 10,
            marginVertical: 6,

            paddingLeft: 8,
          }}
        >
          <Text style={{ margin: 15, fontSize: 18 }}>
            {donateList.Note}

            {/* เปิดรับบริจาคสิ่งของสภาพดีที่ไม่ได้ใช้
            ประโยชน์แล้วเพื่อเป็นสินค้าแบ่งปันในร้าน
            นำเงินที่ได้ไปเป็นทุนเพื่อสร้างประโยชน์และ
            ก่อให้เกิดการเปลี่ยนแปลงที่ดีขึ้นแก่สังคม ในด้านต่างๆ */}
          </Text>

          <Text style={{ margin: 15, fontSize: 18, fontWeight: "bold" }}>
            ขนาดเสื้อผ้าที่ต้องการ:
          </Text>
          <Text style={{ margin: 15, fontSize: 18, marginTop: 1 }}>
            {donateList.Size}
          </Text>

          <Text style={{ margin: 15, fontSize: 18, fontWeight: "bold" }}>
            ติดต่อเพิ่มเติม
          </Text>
          <Text style={{ margin: 15, fontSize: 18, marginTop: 1 }}>
            {donateList.Address}
          </Text>

          <Text style={{ margin: 15, fontSize: 18, fontWeight: "bold" }}>
            เบอร์โทรติดต่อ
          </Text>
          <Text style={{ margin: 15, fontSize: 18, marginTop: 1 }}>
            0{donateList.Tel}
          </Text>
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
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("Donateform")}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            DONATE!!
          </Text>
        </TouchableOpacity>
      </ScrollView>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    margin: 20,
    gap: 10,
  },
  Topbar: {
    padding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
    height: 80,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextHead: {
    paddingLeft:20,
    // flexWrap: "wrap",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    maxWidth:350
  },
  container: {
    paddingTop: 300,
  },
});
