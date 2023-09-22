import { useState } from "react";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

const Images = [
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-f7863ed31571a109d072a7dae4778ca1_screen.jpg?ts=1605627076",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-banner-template-design-389dc7a74f096738d1d425314404a2cd_screen.jpg?ts=1605613724",
  "https://marketplace.canva.com/EAFKrIwbuM0/1/0/1600w/canva-brown-and-beige-minimalist-fashion-store-banner-5NW6aFNtwuc.jpg",
];

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function SwipeSlide() {
    const [imgActive, setImgActive] = useState(0);


    onchange = (nativeEvent) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != imgActive){
                setImgActive(slide);
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                onScroll={({nativeEvent}) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={styles.wrap}
                >
                    {
                        Images.map((e, index) =>
                        
                        <Image
                        key={e}
                        resizeMode="stretch"
                        style={styles.wrap}
                        source={{uri: e}}

                        />

            
                        )

                    }

                </ScrollView>

                <View style={styles.wrapDot}>
                    {
                        Images.map((e, index) =>
                        <Text
                        key={e}
                        style={imgActive == index ? styles.dotActive : styles.dot}
                        >
                             ●
                        </Text>
                        )
                    }
                </View>

            </View>
        </SafeAreaView>

);};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap:{
    width: WIDTH,
    height: HEIGHT * 0.25
  },
  wrapDot:{
    position: 'absolute',
    bottom: 0 ,
    flexDirection: "row",
    alignSelf: 'center'
  },
  dotActive:{
    margin:3,
    color: '#D7385E'
  },
  dot:{
    margin:3,
    color: '#fff',
  }

});
