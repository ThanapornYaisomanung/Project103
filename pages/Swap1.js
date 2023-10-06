import { View, Text, StyleSheet,ScrollView, Image, Touchable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../component/ProductCard";
import Proimg from "../component/Proimg";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Swap1({ navigation }) {
  return (
    <View>
      {/* หัว */}
      <View style={styles.Topbar}>
        <View style={styles.SubTopBar}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={"white"}
            onPress={() => navigation.navigate("Proswap")}
          ></Ionicons>
          <Text style={styles.TextHead}>2LOVE SWAP</Text>
        </View>
        <View style={{ flexDirection:"row"}}>
        <Image source={{uri: 'https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg'}} 
        style={{
            height:90,
            width:90,
            borderRadius:55,
            marginTop:50,
            marginLeft:30
        }}/>
        <Ionicons 
           name="swap-horizontal" 
           size={45}
           color={"#fff"}
           alignSelf={"center"}
           paddingTop={50}
          paddingLeft={50}></Ionicons> 
          <Image source={{uri: 'https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg'}} 
        style={{
            height:90,
            width:90,
            borderRadius:55,
            marginTop:50,
            marginLeft:50
        }}/>
        </View>
        <View style={{ flexDirection:"row"}}>
        <Text style={{ 
            marginLeft: 30,
            marginTop:20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",}}>Mamyfotko</Text>
            <Text style={{ 
            marginLeft: 130,
            marginTop:20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff"}}>Mamygem</Text>
      </View></View>

      {/* content */}
      <ScrollView>
      <View>
        <View style={{
            flexDirection:"column",
            marginBTop:9,

    }}> 
        <Text style={styles.Textformname}>Product to swap</Text>
        <View style={{ flexDirection:"row"}}>
        <View >
        <View style={styles.Form}>
        <Ionicons
            name="add-circle-outline"
            size={80}
            color={"white"}
            onPress={() => navigation.navigate("My2love")}
            alignSelf={"center"}
          ></Ionicons></View>
       </View>
       <Ionicons 
           name="swap-horizontal" 
           size={45}
           color={"#D7385E"}
           alignSelf={"center"}
          paddingLeft={20}></Ionicons> 
        <Image source={{uri: 'https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg'}} 
        style={{
            height:200,
            width:150,
            borderRadius:15,
            marginTop:20,
            marginLeft:15
        }}/>
        </View>
        <TouchableOpacity style={{
        backgroundColor:"#D7385E",
        height:50,
        width:150,
        borderRadius:15,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
        marginTop:20,}}  
        onPress={() => navigation.navigate("Swap2")}>
        <Text style={{
            color:"#fff",
            fontWeight:"bold",
            fontSize:25,
        }}>SWAP!!</Text>
    </TouchableOpacity>
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
    height:300
  },
  SubTopBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop:5
  },
  TextHead: {
    marginLeft: 110,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    
  },
  Textform:{
    marginRight: 90,
    fontSize: 16,
    // fontWeight: "bold",
    color:"#D7385E",
    paddingHorizontal:20
    // marginTop:50
  },
  Textformname:{
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    color:"#D7385E",
    marginTop:20
  },
  Form:{
    height:200,
        width:150,
        alignSelf:"center",
        // borderColor: "grey",
        // borderWidth:1,
        backgroundColor: "#E0DFDF",
        borderRadius:15,
        marginVertical:15,
        justifyContent:"center",
        paddingLeft:8,
        marginLeft:15
  },
  Formh:{
        height:80,
        width:80,
        // alignSelf:"center",
        // borderColor: "grey",
        // borderWidth:1,
        backgroundColor: "#D7385E",
        borderRadius:85,
        marginVertical:6,
        // justifyContent:"center",
        paddingLeft:8,
        // marginTop:150
        
  }
});
