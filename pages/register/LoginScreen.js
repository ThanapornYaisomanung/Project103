import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import {
  Background,
  Logo,
  Header,
  Button,
  TextInput,
  BackButton,
} from "../../component/Theme";
import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("th@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  // const [email, setEmail] = useState({ value: '', error: '' })
  // const [password, setPassword] = useState({ value: '', error: '' })

  // const onLoginPressed = () => {
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   if (emailError || passwordError) {
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     return
  //   }
  //   navigation.reset({
  //     index: 0,
  //     routes: [{ name: 'Dashboard' }],
  //   })
  // }

  const onLoginPressed = () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.reset({
          index: 0,
          routes: [{ name: "Dashboard" }],
        });
        console.log("a", auth);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err", email);
        console.log("err", password);
        console.log(errorMessage);
        console.log(errorCode);

        if (errorCode === 'auth/invalid-email' || errorCode === 'auth/invalid-login-credentials' ) {
          const emailError = emailValidator(email.value);
          const passwordError = passwordValidator(password.value);
          if (emailError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return;
          }
        } 
        if (errorCode === 'auth/too-many-requests') {
          alert(
            "log in too many requests!",
            "Please log in to access the 2 love application again.",
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
        } 

        
      });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
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
        value={password}
        onChangeText={(text) => setPassword(text)}
        // onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
