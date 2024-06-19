import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise6 = () => {
  // ---------------->>>>>>>> ES6 and modern Java script Features <<<<<<<<---------------

  //  1) let and const Keywords

  let count = 20;
  if (true) {
    let count = 20; // Different variable, scoped to the if block
    // console.log(count);
  }
  // console.log(count);

  //  2) const Keywords

  // const PI = 3.14;
  // PI = 3.14159; // Error: Assignment to constant variable

  //  2) Arrow Functions

  // ES5 function
  function add(a, b) {
    return a + b;
  }

  // ES6 arrow function
  const addErrorFuntion = (a, b) => a + b;

  //  3) Template Literals and String Interpolation

  // let name = "Aashi";
  // let message = `Hello, ${name}!`;
  // console.log(message);

  //  4) Destructuring Assignments

  // Array destructuring
  let numbers = [1, 2, 3];
  let [first, Second] = numbers;
  console.log("first ", first);
  console.log("Second ", Second);

  // Object destructuring

  let person = { firstName: "aashi", lastName: "raman" };
  let { firstName, lastName } = person;
  console.log(firstName);
  console.log(lastName);

  //  5) Spread  Operators

  // Array spread
  let arr = [1, 2, 3];
  let newArr = [...arr, 4, 5]; // Spread elements of arr into newArr
  console.log(newArr);

  //  6) Rest Operators
  // Rest parameter

  const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  console.log(x);
  console.log(y);
  console.log(z);

  return (
    <View>
      <Text>Exercise6</Text>
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({});
