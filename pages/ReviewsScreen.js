import * as React from 'react';
import { Text, View ,StyleSheet, ScrollView} from 'react-native';
import ProductCard from "../component/ProductCard";
import Reviewcard from '../component/Reviewcard';

const ReviewsScreen = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        {/* <Text style={styles.TextHead}>ReviewsScreen</Text> */}
        <View style={styles.contentCard}>
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard />
          <Reviewcard /> 
        </View>
      </ScrollView>
    </View>
    </View>
  );
}
export {ReviewsScreen}

const styles = StyleSheet.create({
  contentCard: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 20,
    gap: 10,
  },
  TextHead:{
    marginTop:20,
    marginLeft:20,
    fontSize:18,
    fontWeight: 'bold'
  }
});
