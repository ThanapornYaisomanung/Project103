import React from 'react'
import { Background, Logo, Header, Button, Paragraph } from '../../component/Theme'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login To 2Loved</Header>
      <Paragraph>
      The easiest way to start with your application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
