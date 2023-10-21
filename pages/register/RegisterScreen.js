import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import {
  Background,
  Logo,
  Header,
  Button,
  TextInput,
  BackButton,
} from "../../component/Theme";
// import { theme } from './core/theme'
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/app";
import { useNavigation } from "@react-navigation/native";
// import { collection, addDoc } from "firebase/firestore";
import { db, collection, addDoc, getFirestore } from "../../firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [PhoneN, setlPhoneN] = useState("");
  const [contact, setcontact] = useState("");
  const [Address, setAddress] = useState("");
  const [Postal, setPostal] = useState("");
  const [Province, setProvince] = useState("");
  const [District, setDistrict] = useState("");
  const [SDistrict, setSDistrict] = useState("");
  const [Country, setCountry] = useState("");

  const onSignUpPressed = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });

    try {
      const docRef = await addDoc(collection(db, "Users"), {
        Name: name,
        Fname: fname,
        Lname: lname,
        PhoneN: PhoneN,
        contact: contact,
        Address: Address,
        Postal: Postal,
        Province: Province,
        District: District,
        SDistrict: SDistrict,
        Country: Country,
        Email: email,
        Password: password,
        Roles: "user",
      });
      console.log("Document written with ID: ", docRef.id);

      alert(
        "sign up account success!",
        "Please log in to access the 2love application.",
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
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // const onSignUpPressed = async () => {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error);
  //     });

  //   try {
  //     const docRef = await addDoc(collection(db, "Users"), {
  //       Name: name,
  //       Email: email,
  //       Password: password,
  //       Roles: "user",
  //     });
  //     console.log("Document written with ID: ", docRef.id);

  //     alert(
  //       "sign up account success!",
  //       "Please log in to access the 2love application.",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         { text: "OK", onPress: () => console.log("OK Pressed") },
  //       ]
  //     );

  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "StartScreen" }],
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  return (
    <ScrollView style={{ width: 400 }}>
      {/* <Background> */}

      <View style={{ marginTop: 10, marginLeft: 20 }}>
        <BackButton goBack={navigation.goBack} />
      </View>

      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Logo />
        <Header>Create Account</Header>
      </View>

      <Text style={styles.Textform}>Account Name</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Account Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
      </View>

      <Text style={styles.Textform}>Email</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail(text)}
          // onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>

      <Text style={styles.Textform}>Password</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword(text)}
          // onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </View>

      <Text style={styles.Textform}>First Name</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="First Name"
          returnKeyType="next"
          value={fname.value}
          onChangeText={(text) => setfname(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!fname.error}
          errorText={fname.error}
        />
      </View>

      <Text style={styles.Textform}>Last Name</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Last Name"
          returnKeyType="next"
          value={lname.value}
          onChangeText={(text) => setlname(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!lname.error}
          errorText={lname.error}
        />
      </View>

      <Text style={styles.Textform}>Mobile no.</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          type="number"
          label="Phone number"
          returnKeyType="next"
          value={PhoneN.value}
          onChangeText={(text) => setlPhoneN(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!PhoneN.error}
          errorText={PhoneN.error}
        />
      </View>

      <Text style={styles.Textform}>Contact ig or facebook</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="contact"
          returnKeyType="next"
          value={contact.value}
          onChangeText={(text) => setcontact(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!contact.error}
          errorText={contact.error}
        />
      </View>

      <Text style={styles.Textform}>Address</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Address"
          returnKeyType="next"
          value={Address.value}
          onChangeText={(text) => setAddress(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!Address.error}
          errorText={Address.error}
        />
      </View>

      <Text style={styles.Textform}>Postal Code</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Postal Code"
          returnKeyType="next"
          value={Postal.value}
          onChangeText={(text) => setPostal(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!Postal.error}
          errorText={Postal.error}
        />
      </View>

      <Text style={styles.Textform}>Province</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Province"
          returnKeyType="next"
          value={Province.value}
          onChangeText={(text) => setProvince(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!Province.error}
          errorText={Province.error}
        />
      </View>

      <Text style={styles.Textform}>District</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="District"
          returnKeyType="next"
          value={District.value}
          onChangeText={(text) => setDistrict(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!District.error}
          errorText={District.error}
        />
      </View>

      <Text style={styles.Textform}>Sub-District</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Sub-District"
          returnKeyType="next"
          value={SDistrict.value}
          onChangeText={(text) => setSDistrict(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!SDistrict.error}
          errorText={SDistrict.error}
        />
      </View>

      <Text style={styles.Textform}>Country</Text>
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <TextInput
          label="Country"
          returnKeyType="next"
          value={Country.value}
          onChangeText={(text) => setCountry(text)}
          // onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!Country.error}
          errorText={Country.error}
        />
      </View>

      <View>
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24, width: 150, alignSelf: "center" }}
        >
          Sign Up
        </Button>

        <View style={{marginTop:20}}>
          <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </View>
      <View style={{marginTop:50}}>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 0,
    alignSelf: "center",
  },
  link: {
    fontWeight: "bold",
    // color: theme.colors.primary,
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
  Textform: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#D7385E",
  },
});
