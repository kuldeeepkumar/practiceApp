import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise6 = () => {
  console.log("hello");
  let count = 69;
  if (true) {
    let count = 20;
    console.log(count);
  }
  console.log(count);

  const PI = 3.14;
  // Arrow function
  function add(a, b) {
    return a + b;
  }
  const addErrorfunction = (a, b) => a + b;
  let name = "ballu";
  let message = `hello, ${name}!`;
  console.log(message);
  let numbers = [1, 2, 3];
  let [first, second, third] = numbers;
  console.log(first);
  console.log(second);
  console.log(third);
  // object distributing
  let person = { firstName: "ballu", lastName: "ramgardhia" };
  let { firstName, lastName } = person;
  console.log(lastName);
  console.log("person.firstname", person.firstName);
  // spread operator
  let arr = [1, 2, 3];
  let newArr = [...arr, 9, 10];
  console.log(newArr);
  //rest operator
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
