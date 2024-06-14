import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { yourFunction } from "./Excercise1";

const Excercise2 = () => {
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
        <Text>Excercise2</Text>
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
