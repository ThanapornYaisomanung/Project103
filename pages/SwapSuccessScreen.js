import { View, Text, StyleSheet,ScrollView, Image, Touchable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SwapSuccessScreen({ navigation }) {
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
          <Text style={styles.TextHead}>2LOVE SWAP</Text>
        </View>
      </View>
            <Text style={styles.text}>swap success!!</Text>
      {/* content */}
      <ScrollView>
      <View style={{ flexDirection: "row"}}>
        <View style={styles.contentCard}>
        <Image source={{uri: 'https://th-live-02.slatic.net/p/91bd1f3e1beba4dd18db84144f3d5c1f.jpg'}} 
            style={{height:200, width:150, borderRadius:40,}}/>
        <View style={styles.Formh}>
           <Ionicons 
           name="swap-horizontal" 
           size={40}
           color={"#D7385E"}
           alignSelf={"center"}
           paddingTop={40}></Ionicons> 
            </View>
        <Image source={{uri: 'https://down-th.img.susercontent.com/file/fcf098e12fb7556b7de3041910780171'}} 
            style={{height:200, width:150, borderRadius:40,}}/>
      </View>
        </View>
      <View>
        <View style={{flexDirection:"column", marginBTop:10,}}> 
    {/* <View style={styles.Form}> */}
        {/* input รอดึงข้อมูล */}
         {/* <TextInput></TextInput> */}
    {/* </View> */}
    <View style={{ flexDirection: "row"}}>
    <Image source={{uri: 'https://i.pinimg.com/236x/ca/45/7f/ca457f84deab7f1985b2f6bb7b196aca.jpg'}} 
        style={{
            height:50,
            width:50,
            borderRadius:50,
            left:70
        }}/>
                <View style={{ flexDirection: "row", paddingTop:10,}}>
                    
              </View>
        <Image source={{uri: 'https://pbs.twimg.com/media/DGCoceqUMAAQRn4.jpg'}} 
            style={{
                height:50,
                width:50,
                borderRadius:50,
                left:240
        }}/>
                <View style={{ flexDirection: "row", paddingTop:10,}}></View>
    </View>
    
    {/* <Text style={styles.Textform}>First Name</Text> */}
    <View style={{ flexDirection: "row"}}>
    <Text style={styles.Textform}>YOU</Text>
    <Text style={{marginRight: 150, fontSize: 20,color:"#D7385E", paddingHorizontal:40, fontWeight: "bold", left:70}}>DOGG.14</Text></View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 110, fontSize: 20,color:"#D7385E", paddingHorizontal:20,}} >Contact:</Text>
    <Text style={{marginRight: 90, fontSize: 20,color:"#D7385E", paddingHorizontal:20,}} >Contact:</Text></View>
    <View style={{ flexDirection: "row"}}>
    <Image source={{uri: 'https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg'}} 
        style={{
            height:50,
            width:50,
            borderRadius:5,
            left:20
        }}/> 
        <Image source={{uri: 'https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'}} 
        style={{
            height:50,
            width:50,
            borderRadius:5,
            left:20
        }}/>
                <View style={{ flexDirection: "row", paddingTop:10,}}>
              </View>
        <Image source={{uri: 'https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'}} 
            style={{
                height:50,
                width:50,
                borderRadius:5,
                left:145
        }}/>
                <View style={{ flexDirection: "row", paddingTop:10,}}></View>
    </View>
    <View style={styles.Form}></View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 90, fontSize: 20,color:"#D7385E", paddingHorizontal:20, fontWeight: "bold",}} >รายละเอียดแลกเปลี่ยนสินค้า</Text>
    </View>
    <View style={styles.Form}></View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 122, fontSize: 20,color:"#D7385E", paddingHorizontal:20,}} >เสื้อลาย</Text>
    <Text style={{marginRight: 90, fontSize: 20,color:"#D7385E", paddingHorizontal:20,}} >POLO</Text>
    </View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 132, fontSize: 18,color:"#D7385E", paddingHorizontal:20,}} >Size M</Text>
    <Text style={{marginRight: 90, fontSize: 18,color:"#D7385E", paddingHorizontal:20,}} >Size M</Text>
    </View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 0, fontSize: 18,color:"#D7385E", paddingHorizontal:20,}} >Categories: เสื้อกันหนาว</Text>
    <Text style={{marginRight: 0, fontSize: 18,color:"#D7385E", paddingHorizontal:20,}} >Categories: เสื้อ</Text>
    </View>
    <View style={{ flexDirection: "row" }}>
    <Text style={{marginRight: 130, fontSize: 18,color:"#D7385E", paddingHorizontal:20}} >by: you</Text>
    <Text style={{marginRight: 60, fontSize: 18,color:"#D7385E", paddingHorizontal:20,}} >by: DOGG.14</Text>
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
    flexDirection: 'row',
    // flexWrap: 'wrap',
    margin:20,
    // alignItems:"left",
   
    // gap: 10,
    
  },
  text: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: "#D7385E",
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
    marginLeft: 110,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    
  },
  Textform:{
    marginRight: 90,
    fontSize: 20,
    fontWeight: "bold",
    color:"#D7385E",
    paddingHorizontal:20, 
    left:55 ,
  },
  Textformname:{
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
    color:"#D7385E",
    // marginTop:50
  },
  Form:{
    height:1,
        width:"90%",
        alignSelf:"center",
        // borderColor: "grey",
        // borderWidth:1,
        backgroundColor: "#E0DFDF",
        borderRadius:1,
        marginVertical:15,
        justifyContent:"center",
        paddingLeft:8
  },
  Formh:{
        height:80,
        width:80,
        // alignSelf:"center",
        // borderColor: "grey",
        // borderWidth:1,
        // backgroundColor: "#D7385E",
        borderRadius:85,
        marginVertical:10,
        // justifyContent:"center",
        paddingLeft:8,
        // marginTop:150
        
  }
});