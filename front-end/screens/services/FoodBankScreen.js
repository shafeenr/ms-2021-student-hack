import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FoodBankScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>Food</Text>
    </View>
  );
};

export default FoodBankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
