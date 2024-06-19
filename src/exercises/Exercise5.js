import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = ({ title, subtitle }) => {
  // -------------------->>>>>>>>>Error Handling and Debugging<<<<<<<------------

  // ------->>>>>>Common JavaScript Errors<<<<<---------

  1; // Syntax Error Example
     // let x = 10;
   //console.log(x;

  // Missing closing parenthesis in console.log statement

  // 2) Reference Error Example

  console.log(y);
 let y = 10;
  //  Variable y is not declared or initialized

  // 3) Type Error Example
  // let z = null;
  // z.toUpperCase();
  // Cannot call toUpperCase on null

  // ------->>>>>> Debugging Techniques <<<<<---------

  // 1) Using Console.log

  // let name = "Alice";
  // console.log("Name:", name);

  // 1) Using debugger

  // function calculate() {
  //   let x = 10;
  //   debugger;
  //   console.log(x * 2);
  // }
  // calculate();

  // 2) Using Try and catch blocks

  // try {
  //   // Code that might throw an error
  //   let result = undefinedVariable * 2;
  //   console.log("Result:", result);
  // } catch (error) {
  //   // Handle the error
  //   console.log("Error:", error.message);
  // }

  // 3) Using throw statement

  // function divide(a, b) {
  //   if (b === 0) {
  //     throw new Error("Division by zero!");
  //   }
  //   return a / b;
  // }

  // try {
  //   console.log(divide(10, 7));
  // } catch (error) {
  //   console.log("Error:", error.message);
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
    padding: 10,
  },
});
