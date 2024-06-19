import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = () => {
  console.log("1.syntax error example");
  let x = 10;
  console.log(x);
  //  console.log(x;
  //  missing closing prenthesis in console.log statement

  //console.log("reference error example");
  //console.log(y);
  //let y = 10;
  //console.log("3.type error example");
  //let a = null;
  //a.toupperCase();
  //cannot call toupperCase on null
  console.log("4.debugging techniques");
  //using console.log
  let name = "ballu";
  console.log("name", name);
  //using debugger
  //function calculate() {
  //let x = 10;
  //debugger;
  //console.log(x * 2);
  //}
  //calculate();
  //using try and catch blocks

  try {
    //code that might throw an error
    let result = undefinedVariable * 2;
    console.log("result:", result);
    console.log(ab);
  } catch (error) {
    //handling the error
    console.log("error:", error.message);
  }

  // 3) Using throw statement

  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero!");
    }
    return a / b;
  }

  try {
    console.log(divide(10, 0));
  } catch (error) {
    console.log("Error:", error.message);
  }

  return (
    <View>
      <Text>Exercise5</Text>
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({});
