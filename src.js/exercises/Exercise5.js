import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = ({ title, subtitle }) => {
  // -------------------->>>>>>>>>Error Handling and Debugging<<<<<<<------------

  // ------->>>>>>Common JavaScript Errors<<<<<---------

  //syntax error
  //   let x = 10;
  //   console.log(x;

  // Missing closing parenthesis in console.log statement

  // 2) Reference Error Example
  let y = 10;
  console.log(y);

  // 3) Type Error Example
  //   let z = null;
  //   z.toUpperCase();

  //-------->>>>>>>> debugging techniques <<<<<<<<--------

  // 1) Using Console.log
  //   let name = "ashu";
  //   console.log("Name:", name);

  // 2) Using debugger

  //   function calculate() {
  //     let x = 10;
  //     debugger;
  //     console.log(x * 2);
  //   }
  //   calculate();

  // 3) Using Try and catch blocks

  //   try {
  //     //Code that might throw an error
  //     let result = undefinedvariable * 2;
  //     console.log("Result:", result);
  //   } catch (error) {
  //     // Handle the error
  //     console.log("Error:", error.message);
  //   }

  // 4) Using throw statement

  //   function divide(a, b) {
  //     if (b === 0) {
  //       throw new Error("Division  by zero!");
  //     }
  //   }
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
