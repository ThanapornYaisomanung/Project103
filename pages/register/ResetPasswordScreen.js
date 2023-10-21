import React, { useState } from "react";
import {
  Background,
  Logo,
  Header,
  Button,
  TextInput,
  BackButton,
} from "../../component/Theme";
import { emailValidator } from "../helpers/emailValidator";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  async function Repass() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        alert(
          "Reset Password success!",
          "Please check our email in your inbox.",
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
        // error={!!email.error}
        // errorText={email.error}
        // autoCapitalize="none"
        // autoCompleteType="email"
        // textContentType="emailAddress"
        // keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={Repass}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  );
}
