import { Button , Paragraph, Header} from "./Theme";
import { View , StyleSheet, Text} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


const ButtonLogout = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.con1}>
            <Ionicons name="help-circle-outline" size={100} color={'#D7385E'}></Ionicons>
            <Header>Log out To 2Loved</Header>
            <Paragraph>Are you sure you want to log out of your account?</Paragraph>
        </View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <View style={{ width: 160 }}>
          <Button
            mode="contained"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "StartScreen" }],
              })
            }
          >
            Yes
          </Button>
        </View>

        <View style={{ width: 160 }}>
          <Button
            mode="outlined"
            onPress={() => navigation.goBack()}
          >
            No
          </Button>
        </View>
      </View>
    </View>
  );
};
export { ButtonLogout };


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    con1:{
        alignItems:'center',
        gap:10,
        marginBottom: 20
    }
  });
  
