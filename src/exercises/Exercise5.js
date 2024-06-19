import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = ({ title, subtitle }) => {
  // 1. syntax error
  let a = 20;
  console.log(a);
  //missing closing parenthesis in console.log statemennt

  //2.reference error
  //console.log(y);
  //let y = 10;

  //3. Type Error
  //let z = null;
  //z.toUpperCase();

  //--------------------->>>>>>>>>>>>>>debugging techniques<<<<<<<<<<<<<<<<-------------------
  let name = "janvibhatia";
  console.log("Name:", name);

  //using debugger

  function add() {
    let b = 10;
    debugger;
    console.log(b + 5);
  }
  add();

  //using try and catch block
  try {
    let result = undefinedvariable * 2;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error", error.message);
  }

  //using throw statement
  function divide(r, q) {
    if (r === 0) {
      throw new error("division by 0");
    }
    return r / q;
  }
  try {
    console.log(divide(10, 5));
  } catch (error) {
    console.log("Error", error.message);
  }

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
  },
});
