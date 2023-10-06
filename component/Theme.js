import React from 'react'
import { TouchableOpacity, Image, StyleSheet,ImageBackground, KeyboardAvoidingView } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const BackButton = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/arrow_back.png')}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 0,
  },
  image: {
    width: 24,
    height: 24,
  },
})
export {BackButton}


import { theme } from '../pages/core/theme'
const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles2.background}
    >
      <KeyboardAvoidingView style={styles2.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
const styles2 = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export {Background}


import { Button as PaperButton } from 'react-native-paper'
const Button = ({ mode, style, ...props }) => {
  return (
    <PaperButton
      style={[
        styles3.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles3.text}

      mode={mode}
      {...props}
    />
  )
}
const styles3 = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    
  },
})
export {Button}


import { Text } from 'react-native-paper'
const Header = (props) => {
  return <Text style={styles4.header} {...props} />
}
const styles4 = StyleSheet.create({
  header: {
    fontSize: 21,
    color: '#D7385E',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
export {Header}




const Logo = () => {
  return <Image source={require('../assets/logoLoved.png')} style={styles5.image} />
}
const styles5 = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
export {Logo}


const Paragraph = (props) => {
    return <Text style={styles.text} {...props} />
  }
  const styles6 = StyleSheet.create({
    text: {
      fontSize: 15,
      lineHeight: 21,
      textAlign: 'center',
      marginBottom: 12,
      width:200
    },
  })
  export {Paragraph}

import { View} from 'react-native'
import { TextInput as Input } from 'react-native-paper'
const TextInput = ({ errorText, description, ...props }) => {
  return (
    <View style={styles7.container}>
      <Input
        style={styles7.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles7.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles7.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles7 = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    backgroundColor: theme.colors.surface,
    
  },
  description: {
    fontSize: 13,
    color: theme.colors.seconprimarydary,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})

export {TextInput}
