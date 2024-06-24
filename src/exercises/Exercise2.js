import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { containerStyle } from "../styles";
import { yourFuntion } from "./Exercise1";

const Exercise2 = () => {
  // Funtion Declaration code is here
  function myFuntion(item) {
    let a = 3;
    if (a > 2) {
      console.log("sum", a + item);
    }
  }

  return (
    <View style={containerStyle.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myFuntion();
          yourFuntion(10);
        }}>
        <Text>CLick Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    padding: 10,
  },
});
