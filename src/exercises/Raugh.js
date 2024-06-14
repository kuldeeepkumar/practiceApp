import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { yourFunction } from "./Exercise2";

const Raugh = () => {
  // Funtion Declaration code is here
  function myFuntion(item) {
    let a = 3;
    if (a > 2) {
      console.log("sum", a + item);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myFuntion();
          yourFunction(10);
        }}
      >
        <Text>CLick Me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Raugh;

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
