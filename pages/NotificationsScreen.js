import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";

export default function NotificationsScreen({ navigation }) {
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
          <Text style={styles.TextHead}>Notifications</Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
        <View style={styles.contentCard}>
          <View>
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
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ paddingLeft: 10, color: "#D7385E", ontSize: 18 }}>
              Successfully!!
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#D7385E",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Mamygem
              </Text>
              <Text style={{ paddingLeft: 10, color: "#D7385E", fontSize: 18 }}>
                agreed to swap
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#D7385E",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                POLO
              </Text>
              <Text style={{ paddingLeft: 10, color: "#D7385E", fontSize: 18 }}>
                with
              </Text>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#D7385E",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                IG BRAND
              </Text>
              <Ionicons
                name="happy-outline"
                size={18}
                color={"#D7385E"}
              ></Ionicons>
              <Ionicons
                name="happy-outline"
                size={18}
                color={"#D7385E"}
              ></Ionicons>
            </View>
          </View>
        </View>
        <View style={styles.Form}></View>

        <View style={styles.contentCard}>
          <View>
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
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ paddingLeft: 10, color: "#D7385E", ontSize: 18 }}>
              2LOVE SWAP!!
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: "#D7385E",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Mamyfotko
              </Text>
              <Text style={{ paddingLeft: 10, color: "#D7385E", fontSize: 18 }}>
                request to swap{" "}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ paddingLeft: 10, color: "#D7385E", fontSize: 18 }}>
                your item
              </Text>
              <Ionicons
                name="heart-circle-outline"
                size={18}
                color={"#D7385E"}
              ></Ionicons>
              <Ionicons
                name="heart-circle-outline"
                size={18}
                color={"#D7385E"}
              ></Ionicons>
            </View>
          </View>
        </View>
        <View style={styles.Form}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
  },
  Topbar: {
    padding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextHead: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  Form: {
    height: 1,
    width: "90%",
    // alignContent:"center",
    // borderColor: "grey",
    // borderWidth:1,
    backgroundColor: "#D7385E",
    borderRadius: 1,
    marginVertical: 0,
    justifyContent: "center",
    marginLeft: 19,
  },
});
