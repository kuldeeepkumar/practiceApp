import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { yourFuntion } from "./Exercise1";

const Exercise2 = () => {
  // Funtion Declaration code is here
  function myFuntion() {
    let a = 3;
    if (a > 2) {
      console.log("sum", a + 2);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myFuntion();
          yourFuntion(10);
        }}
      >
        <Text>CLick Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
  },
});
