import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise6 = () => {
  // ---------------->>>>>>>> ES6 and modern Java script Features <<<<<<<<---------------

  //  1) let and const Keywords

  let count = 10;
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

  let name = "deepak kaka manpreet";
  let message = `Hello, ${name}!`;
  console.log(message);

  //destruturing arrays
  const number = [1, 2, 3];
  const [first, second] = number;

  console.log(first); //1
  console.log(second);

  // destructuing objects
  const person = { firstname: "abhi", lastname: "deepak" };
  const { firstname, lastname } = person;

  console.log(firstname);
  console.log(lastname);

  //array spread operator

  let arr = [2, 3, 4, 4, 5];
  let newarr = [...arr, 5, 6];
  console.log(newarr);

  //rest operators

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4));

  return (
    <View>
      <Text>Exercise6</Text>
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({});
