import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { yourFunction } from "./Excercise1";

const Excercise2 = () => {
  //Function Declaration code is here
  function myFunction() {
    let a = 3;
    if (a > 2) {
      console.log("sum", a + 3);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myFunction();
          yourFunction(10);
        }}
      >
        <Text>Click Me </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Excercise2;

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
