import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise6 = () => {
  // ---------------->>>>>>>> ES6 and modern Java script Features <<<<<<<<---------------

  //  1) let and const Keywords

  let count = 10;
  if (true) {
    let count = 20; // Different variable, scoped to the if block
    console.log(count);
  }
  console.log(count);

  //  2) const Keywords

  // const PI = 3.14;
  // PI = 3.14159; // Error: Assignment to constant variable

  //  2) Arrow Functions

  // ES5 function
  function add(a, b) {
    return a + b;
  }

  // ES6 arrow function
  //   const addErrorFuntion = (a, b) => a + b;

  //  3) Template Literals and String Interpolation

  let name = "Alice";
  let message = `Hello, ${name}!`;
  let message1 = `HELLO Good Morning ${name}`;
  console.log(message);
  console.log(message1);

  //  4) Destructuring Assignments

  // Array destructuring
  let numbers = [1, 2, 3];
  let [first, Second, third] = numbers;
  console.log(first);
  console.log(Second);
  console.log(third);

  // Object destructuring

  let person = { firstName: "John", lastName: "kumar" };
  let { firstName, lastName } = person;
  console.log(firstName);
  console.log(lastName);
  console.log(`Hi mister ${firstName} ${lastName}`);

  //  5) Spread  Operators

  // Array spread
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let newArr = [...arr, 4, 5]; // Spread elements of arr into newArr
  console.log(newArr);

  //  6) Rest Operators
  // Rest parameter
  const { x, y, ...z } = { x: 1, y: 2, z: 4, a: 3, u: 7 };
  console.log("x value is here", x);
  console.log("y value is here", y);
  console.log("z value is here", z);

  return (
    <View style={styles.container}>
      <Text>Exercise6</Text>
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
  },
});
