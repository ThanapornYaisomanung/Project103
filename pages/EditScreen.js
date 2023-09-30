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
export default function EditScreen({ navigation }) {
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
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>First Name</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Last Name</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Description or bio</Text>
            <View
              style={{
                height: 80,
                width: "90%",
                alignSelf: "center",
                //  borderColor: "#E0DFD",
                backgroundColor: "#E0DFDF",
                //  borderWidth:1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Birthday</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Mobile no.</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Email</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Contact</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>My Address</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Postal code</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Province</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>District</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Sub-district</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
            <Text style={styles.Textform}>Country</Text>
            <View style={styles.Form}>
              {/* input รอดึงข้อมูล */}
              {/* <TextInput></TextInput> */}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.Textform}>My Prefernces</Text>
          <View style={styles.Form}>
            <Ionicons
              name="chevron-forward"
              size={30}
              color={"#D7385E"}
              marginLeft={320}
              onPress={() => navigation.navigate("TabBarNavigator")}
            ></Ionicons>
          </View>
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
          }}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentCard: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    margin: 20,
    marginTop:100,
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
    position:'absolute',
    left:0,
    top:0,
    right:0,
    zIndex:1
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
});
