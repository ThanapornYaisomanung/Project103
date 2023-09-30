import React, { useState } from "react";
import { Text, View } from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// ติดตั้้ง selectbox ด้วยเด้อ
// npm i react-native-multi-selectbox
// เราเชื่อมลูกศร กดกลับไปที่ หน้า editScreen ส่วนเซฟยังม่ะเชื่อม

const K_OPTIONS = [
  {
    item: "Women",
    id: "W",
  },
  {
    item: "Men",
    id: "M",
  },
  {
    item: "Others",
    id: "O",
  },
];
const K_OPTIONSS = [
  {
    item: "S",
    id: "SS",
  },
  {
    item: "M",
    id: "SM",
  },
  {
    item: "L",
    id: "SL",
  },
  {
    item: "XL",
    id: "SXL",
  },
  {
    item: "XXL",
    id: "SXXL",
  },
];
function Prefernces({ navigation }) {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  console.log(selectedTeams);

  return (
    <View>
      <View style={{ width: "100%" }}>
        <View style={styles.Topbar}>
          <View style={styles.SubTopBar}>
            <Ionicons
              name="arrow-back-outline"
              size={30}
              color={"white"}
              // onPress={() => navigation.navigate("EditScreen")}
              onPress={() => navigation.goBack()}
            ></Ionicons>
            <Text style={styles.TextHead}>MY PREFERENCES</Text>
          </View>
        </View>
      </View>
      
      <View style={{ margin: 20 }}>
        <Text style={styles.Textform}>I’m looking for sometimg for :</Text>
        <SelectBox
          label="Select single"
          options={K_OPTIONS}
          value={selectedTeam}
          onChange={onChange()}
          toggleIconColor='#D7385E'
          arrowIconColor='#D7385E'
          searchIconColor='#D7385E'
          // hideInputFilter={false}
        />
      </View>

      <View style={{ margin: 20 }}>
        <Text style={styles.Textform}>Size :</Text>
        <SelectBox
          label="Select multiple"
          options={K_OPTIONSS}
          selectedValues={selectedTeams}
          toggleIconColor='#D7385E'
          arrowIconColor='#D7385E'
          searchIconColor='#D7385E'
          multiOptionContainerStyle={{backgroundColor:'#D7385E'}}
          multiOptionsLabelStyle={{fontSize:14, padding:5}}
          // containerStyle={{height:60}}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          
        />
      </View>

      <View>
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
      </View>
    </View>
  );
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  }

  function onChange() {
    return (val) => setSelectedTeam(val);
  }
}
export default Prefernces;

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
    marginLeft: 90,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  Textform: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D7385E",
    marginTop: 20,
    marginBottom:10
  },
  //   Form:{
  //     height:44,
  //         width:"90%",
  //         alignSelf:"center",
  //         // borderColor: "grey",
  //         // borderWidth:1,
  //         backgroundColor: "#E0DFDF",
  //         borderRadius:10,
  //         marginVertical:6,
  //         justifyContent:"center",
  //         paddingLeft:8
  //   }
});
