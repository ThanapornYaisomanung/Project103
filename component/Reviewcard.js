import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Reviewcard() {
  return (
    // <View style={styles.container}>
    //    <View>
    //     <Image
    //     style={styles.Logo}
    //     source={{
    //       uri: 'https://legacy.reactjs.org/logo-og.png',
    //     }}/>

    //     </View>
    // </View>

    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <View style={styles.Form}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg",
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              left: 10,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                paddingLeft: 20,
                color: "#D7385E",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              GEM.M
            </Text>
            <Text
              style={{
                paddingLeft: 20,
                color: "#D7385E",
                fontSize: 18,
                fontWeight: "bold",
                paddingTop: 15,
              }}
            >
              Good Good{" "}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="star-sharp"
              size={20}
              color={"#FFDD67"}
              paddingLeft={10}
            ></Ionicons>
            <Ionicons
              name="star-sharp"
              size={20}
              color={"#FFDD67"}
              paddingLeft={0}
            ></Ionicons>
            <Ionicons
              name="star-sharp"
              size={20}
              color={"#FFDD67"}
              paddingLeft={0}
            ></Ionicons>
            <Ionicons
              name="star-sharp"
              size={20}
              color={"#FFDD67"}
              paddingLeft={0}
            ></Ionicons>
            <Ionicons
              name="star-sharp"
              size={20}
              color={"#fff"}
              paddingLeft={0}
            ></Ionicons>
          </View>
          {/* <Ionicons name="star-sharp" size={20} color={"#FFDD67"} paddingLeft={10}></Ionicons>
     <Ionicons name="star-sharp" size={20} color={"#FFDD67"} paddingLeft={0}></Ionicons>
     <Ionicons name="star-sharp" size={20} color={"#FFDD67"} paddingLeft={0}></Ionicons>
     <Ionicons name="star-sharp" size={20} color={"#FFDD67"} paddingLeft={0}></Ionicons>
     <Ionicons name="star-sharp" size={20} color={"#fff"} paddingLeft={0}></Ionicons> */}

          {/* <View style={{flexDirection: 'column'}}><Text>ddd</Text></View> */}
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 2,
  //   // justifyContent: "center",
  //   width: 380,
  //   maxHeight: 100,
  //   // borderWidth: 1.8,
  //   // borderColor:"#D09CB1",
  //   borderRadius: 25,
  //   borderRadiusLeft: 50,
  //   backgroundColor: "#C7C3C3",
  //   borderBottomLeftRadius: 89,
  //   borderTopLeftRadius: 89,
  // },
  // paragraph: {
  //   fontSize: 18,
  //   // textAlign: "center",
  //   paddingLeft: 20,
  //   paddingTop: 20,
  //   fontWeight: "bold",
  //   color: "#D7385E",
  //   flexDirection: "row-reverse",
  // },
  // paragraph2: {
  //   fontSize: 15,
  //   // textAlign: "center",
  //   paddingLeft: 20,
  //   paddingBottom: 20,
  //   color: "#D7385E",
  // },
  // Logo: {
  //   width: 89,
  //   height: 82,
  //   borderRadius: 85,
  // },

  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 380,
    maxHeight: 100,
    // borderWidth: 1.8,
    // borderColor:"#D09CB1",
    borderRadius: 25,
    borderRadiusLeft: 50,
    backgroundColor: "#C7C3C3",
    borderBottomLeftRadius: 89,
    borderTopLeftRadius: 89,
  },
  paragraph: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: "bold",
    color: "#D7385E",
    flexDirection: "row-reverse",
  },
  paragraph2: {
    fontSize: 15,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
    color: "#D7385E",
  },
  Logo: {
    width: 89,
    height: 82,
    borderRadius: 85,
  },
  Form: {
    height: 100,
    width: 370,
    // alignContent:"center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#C7C3C3",
    borderRadius: 1,
    marginVertical: 0,
    justifyContent: "center",
    marginLeft: 0,
    borderRadius: 15,
  },

});
