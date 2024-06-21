import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { yourfuncation } from "./Exercise1";

const Exercise2 = () => {
  //function declaration code is  here
  function myfunction() {
    let a = 3;
    if (a > 2) {
      console.log("normal funtion sum is here", a + 4);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          myfunction();
          yourfuncation(10);
        }}
      >
        <Text>click me</Text>
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
