import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";

export default function DonateCard() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.Logo}
        source={{
          uri: 'https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/277156778_10158465141900009_2579371030611267744_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGEzI7k-IKZTkD69uqEeJHlJ-GFf5s_yYYn4YV_mz_JhsAbuddmxPLf0C4Jjx0YwTIw_Ybm14TR1rTHNwJlp828&_nc_ohc=ZDg_fTRbhGMAX_wlerf&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfARnvzL5mvkmTpnFCoGARXuiGroDpc0tbMQFl0d5D4daw&oe=650FABEA',
        }}
      />
      <Text style={styles.paragraph}>
      ProductCard 
      </Text>
      <Text style={styles.paragraph2}>
      $999
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // justifyContent: "center",
    width: 180,
    maxHeight: 500,
    borderRadius: 25,
    backgroundColor: "#EAEAEA",
  },
  paragraph: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingTop: 20,
  },
  paragraph2: {
    fontSize: 18,
    // textAlign: "center",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  Logo:{
    // margin:20,
    width:150,
    marginTop:5,
   marginLeft:15,
    height:150,
    borderRadius: 20,
    
  },
});
