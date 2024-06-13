import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  return (
    <View>
      <Text style={styles.container}>exercise</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
