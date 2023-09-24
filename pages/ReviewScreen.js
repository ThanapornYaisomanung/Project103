import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../componant/SearchBar";
import Ionicons from "react-native-vector-icons/Ionicons";
// import SwipeSlide from "../componant/SwipeSlide";
import Proimg from "../componant/Proimg";
import ProductCard from "../componant/ProductCard";

export default function ReviewScreen() {
  return (
    
    <ScrollView style={styles.scrollView}>
      <View style={styles.Topbar}>
        
        <View style={styles.SubTopbar}>
            <Ionicons name="menu-outline" size={30} color={"white"}></Ionicons>
        
        <SearchBar style={styles.searchBar} />
        <Ionicons
          name="create-outline"
          size={30}
          color={"white"}
        ></Ionicons>
        
        </View>
        <View style={styles.list1}>
        <Proimg></Proimg>
        <View style={{flex:1, flexDirection: "row",
    alignItems: "center",}}>
        <View>
          <Text style={styles.text}>Mamyfotko</Text>
          <Text style={styles.text}>5,000 follwers</Text>
          <View style={styles.star}>
          <Ionicons name="star-sharp" size={20} color={"#FFDD67"} ></Ionicons>
          <Ionicons name="star-sharp" size={20} color={"#FFDD67"} ></Ionicons>
          <Ionicons name="star-sharp" size={20} color={"#FFDD67"} ></Ionicons>
          <Ionicons name="star-sharp" size={20} color={"#FFDD67"} ></Ionicons>
          <Ionicons name="star-sharp" size={20} color={"#C7C3C3"} ></Ionicons></View>
        </View>
      </View>
        </View>
        {/* <View > 
        <Text>ddddd {'\n'}dddd</Text>
        </View>   */}
        {/* <View style={styles.text1}>
        <Text>Mamyfotko</Text>
        </View> */}
        
      </View>
      <View style={styles.list}>
        <ProductCard ></ProductCard>
        <ProductCard ></ProductCard>
        <ProductCard ></ProductCard>
        <ProductCard ></ProductCard>
        <ProductCard ></ProductCard>
        <ProductCard ></ProductCard>
      </View>

  {/* <SwipeSlide></SwipeSlide> */}

      {/* <Text style={styles.text}>Recommend</Text> */}
      
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list:{
    flex:1,
    flexDirection: 'column',
    margin:20,
    flexWrap:'wrap',
    justifyContent: "space-between",
    alignContent: 'space-between',
    maxHeight:750,
    maxWidth:500
    
  },
//   scrollView: {},
//   text: {
//     fontSize: 24,
//     // marginTop: 20,
//     fontWeight:'bold',
//     paddingHorizontal: 20,
//   },
  Topbar: {
    padding: 10,
    paddingTop: 25,
    
    backgroundColor: "#D7385E",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height:250
  },
  SubTopbar:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    
    // alignItems: "center",
  },
  list1:{
    flex:1,
    flexDirection: "row",
    paddingBottom:80,
    paddingLeft:50
    // margin: 20,
    // marginBottom:120,
  },
  star:{
    flex:1,
    flexDirection: "row",
    // paddingBottom:0.80,
    paddingLeft:20
    // margin: 20,
    // marginBottom:120,
  },
  text:{
    flex: 1,
    marginLeft:20,
    // flexDirection: "row",
    // justifyContent: "space-between",
    fontSize:20,
    color:"#fff"
  },
  text1:{
    flex: 1,
    marginLeft:20,
    // paddingTop:5,
    // flexDirection: "column",
    // justifyContent: "space-between",
    fontSize:20,
    color:"#fff"
  }
});
