import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise6 = () => {
  //let and const keywords

  let count = 20;
  if (true) {
    let count = 10;
    console.log(count);
  }
  console.log(count);

  //const keywords
  const p = 3.14;
  //p = 3.14159;
  console.log(p);

  //arrow function
  // ESS function

  function multiply(p, q) {
    return p * q;
  }

  //ES6 arrow function
  const mulError = (p, q) => p * q;

  //Array destrcturing

  let number = [1, 2, 3];
  let [first, second] = number;
  console.log("first number:", first);
  console.log("second number:", second);
  //object destructuring
  let person = { firstName: "preet", lastName: "kaur" };
  let { firstName, lastName } = person;
  console.log("firstName:", firstName);
  console.log("lastName:", lastName);

  //spread operators
  const arr1 = [5, 6, 7];
  const arr2 = [...arr1, 8, 9];
  console.log(arr2);

  //spread operstor with object
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj1, d: 4 };
  console.log(obj2);

  //Rest operator

  const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4, c: 5 };
  console.log("assign the value  x variable:", x);
  console.log("assign the value  y variable:", y);
  console.log("assign the value  z variable:", z);

  //Template litrlas and string interpolation

  const name = "harry";
  const great = `student ${name}`;

  console.log(great);

  return (
    <View style={styles.container}>
      <Text>ES6 and modern java script</Text>
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
    backgroundColor: "pink",
    padding: 15,
  },
});
