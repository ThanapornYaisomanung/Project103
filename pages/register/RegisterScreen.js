import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
  // const navigation = useNavigation();
  // const [name, setName] = useState({ value: "", error: "" });
  // const [email, setEmail] = useState({ value: "", error: "" });
  // const [password, setPassword] = useState({ value: "", error: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const onSignUpPressed =  () => {
  // const nameError = nameValidator(name.value)
  // const emailError = emailValidator(email.value)
  // const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError || nameError) {
  //     setName({ ...name, error: nameError })
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })
  // }

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
        Email: email,
        Password: password,
        Roles: 'user',
      });
      console.log("Document written with ID: ", docRef.id);

      alert('sign up account success!' , 'Please log in to access the 2love application.' , [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      
      navigation.reset({
        index: 0,
        routes: [{ name: "StartScreen" }],
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // function onSignUpPressed() {
  //   var email = "test@example.com";
  //   var password = "hunter2";
  //   // [START auth_signup_password]
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       var user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ..
  //       console.log(error);
  //     });
  //   // [END auth_signup_password]
  // }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName(text)}
        // onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
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
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    // color: theme.colors.primary,
  },
});
