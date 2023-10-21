import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../component/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
// import SwipeSlide from "../componant/SwipeSlide";
import Proimg from "../component/Proimg";
import ProductCard from "../component/ProductCard";
import { TabViewNavigator } from "../navigation/TabViewNavigator";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

export default function ProfileScreen({ navigation }) {
const [UserName, setUserName] = useState('');
const [UserID, setUserID] = useState('');

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
        setUserName(doc.data().Name);
        setUserID(doc.id);
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
  console.log(UserID);

  return (
    // style={styles.scrollView}
    <View style={styles.container}>
      <View style={styles.Topbar}>
        <View style={styles.SubTopbar1}>
          <Ionicons
            name="menu-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.openDrawer()}
          ></Ionicons>
          <Text style={styles.textHead}>{UserName}</Text>
          <Ionicons
            name="create-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("EditScreen", {UserID:UserID})}
          ></Ionicons>
        </View>

        <View style={styles.SubTopbar}>
          <View style={styles.list1}>
            <Proimg></Proimg>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View style={styles.profile}>
                {/* <Text style={styles.text}>{UserName}</Text> */}
                <Text style={styles.text}>5,000 follwers</Text>
                <View style={styles.star}>
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
            </View>
          </View>
        </View>
      </View>
      <TabViewNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Topbar: {
    backgroundColor: "#D7385E",
    height: 200,
  },
  SubTopbar1: {
    padding: 10,
    paddingTop: 36,
    flexDirection: "row",
    backgroundColor: "#D7385E",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SubTopbar: {
    flex: 1,
    padding: 10,
  },
  list1: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 50,
  },
  star: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
  },
  text: {
    flex: 1,
    marginLeft: 20,
    fontSize: 18,
    color: "#fff",
  },
  textHead: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  text1: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
    color: "#fff",
  },
});
