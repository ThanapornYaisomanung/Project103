import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ProductCard from "../component/ProductCard";

const PostsScreen = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <ScrollView>
        <Text style={styles.TextHead}>PostsScreen</Text>
        <View style={styles.contentCard}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
    </View>
  );
};
export { PostsScreen };

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
