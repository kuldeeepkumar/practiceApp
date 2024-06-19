import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = ({ title, subtitle }) => {
  //-------------->>>>>>>>>>>>error handling and debugging<<<<<<<<<<----------

  //>>>>>>>>>>>>>..common java script errors

  //>>>>>>>syntax errors
  // let x = 40;
  //console.log(x;

  //>>>>>>>reference error example

  //console.log(y);
  // let y = 50;

  //>>>>>>>type error example

  // let z = 5;
  //z.touppercase();

  //--------------------->>>>>>>>>>>debugging techniques<<<<<<<<<<<<----------------

  //>>>>>using console.log

  //let a = "nature";
  //console.log("word:", a);

  //>>>>>using debuger

  // function add() {
  //   let b = 20;
  //  debugger;
  //    console.log(b + 15);
  // }
  // add();

  //>>>>>>using try and catch blocks

  //   try {
  //     let result = 2 / 0;
  //     let value = undefined * 2;
  //     console.log("result:", result);
  //     console.log("value", value);
  //   } catch (error) {
  //     console.log("error:", error.message);
  //     console.log("error:", error.message);
  //   }

  //>>>>>Using throw statement

  // function divide(a, b) {
  //   if (b === 0) {
  //     throw new Error("Division by zero!");
  //   }
  //   return a / b;
  // }

  // try {
  //   console.log(divide(10, 0));
  // } catch (error) {
  //   console.log("Error:", error.message);
  // }
  return (
    <View>
      <Text>Excercise5</Text>
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({});
