import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { yourfunction } from "./Exercise1";

const Exercise2 = () => {
  function myfunction() {
    let a = 3;
    if (a > 2) {
      console.log("normal function sum ", a + 3);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myfunction();
          yourfunction(10);
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
