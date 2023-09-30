import { View, Text, StyleSheet,ScrollView, Image, Touchable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import Proimg from "../component/Proimg";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function Donateform({ navigation }) {
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
          <Text style={styles.TextHead}>2LOVED DONATE</Text>
        </View>
      </View>

      {/* content */}
      <ScrollView>
      <View>
        <View style={{
            flexDirection:"column",
            marginBottom:6,
            paddingTop:10

    }}>
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
    <Text style={styles.Textform}>Phone Number</Text>
    <View style={styles.Form}>
        {/* input รอดึงข้อมูล */}
         {/* <TextInput></TextInput> */}
    </View>
    <Text style={styles.Textform}>Email</Text>
    <View style={styles.Form}>
        {/* input รอดึงข้อมูล */}
         {/* <TextInput></TextInput> */}
    </View>
    <Text style={styles.Textform}>How many clothes do you wish to donate?</Text>
    <View style={styles.Form}>
        {/* input รอดึงข้อมูล */}
         {/* <TextInput></TextInput> */}
    </View>
    <View style={{margin:20}}>
    <Text style={{fontSize:20,color:"#D7385E",fontWeight:"bold"}}>Foundation Address</Text>
    </View>
    <Text style={styles.Textform}>Name</Text>
    <View style={styles.Form}>
    </View>
    <Text style={styles.Textform}>address</Text>
    <View style={styles.Form}>
        
    </View>
    {/* <Text style={styles.Textform}>District</Text>
    <View style={styles.Form}>
        
    </View> */}
    {/* <Text style={styles.Textform}>Sub-district</Text>
    <View style={styles.Form}>
        
    </View> */}
    {/* <Text style={styles.Textform}>Country</Text>
    <View style={styles.Form}>
      
    </View> */}
    </View>
        </View>
    {/* <View>
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
    </View>*/}
    <TouchableOpacity style={{
        backgroundColor:"#D7385E",
        height:50,
        width:150,
        borderRadius:15,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <Text style={{
            color:"#fff",
            fontWeight:"bold",
            fontSize:25
        }}>DONATE!</Text>
    </TouchableOpacity>
    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    contentCard: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    margin:20,
    alignItems:"center",
   
    // gap: 10,
    
  },
  Topbar: {
    padding: 10,
    paddingTop: 25,
    backgroundColor: "#D7385E",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height:80
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop:5
  },
  TextHead: {
    marginLeft: 90,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    
    
  },
  Textform:{
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    color:"#D7385E"
  },
  Form:{
    height:44,
        width:"90%",
        alignSelf:"center",
        // borderColor: "grey",
        // borderWidth:1,
        backgroundColor: "#E0DFDF",
        borderRadius:10,
        marginVertical:6,
        justifyContent:"center",
        paddingLeft:8
  }
});
