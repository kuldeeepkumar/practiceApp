import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise2 = () => {
  //...>>>>>>>>>>>>>>function to add two number<<<<<<<<<<<<<<.....
  function add(a, b) {
    return a + b;
  }
  let number1 = 4;
  let number2 = 67;
  let sum = number1 + number2;
  console.log("The sum of the numbers", sum);
  //....>>>>>>>>>>function declaration<<<<<<<<<.......
  function add(a, b) {
    return a + b;
  }
  console.log("The output of function declaration is", add(2, 10));
  //.......>>>>>>>function  invocation <<<<<<<<<<.....
  function rich(jella) {
    console.log("kaka", jella, "the kaka is very poor man");
  }
  rich("khabar");
  //.........>>>>>>>>function with return value<<<<<<<<<.......
  function rich(a, b, c) {
    return a + b;
  }
  let poor = rich(45, 48);
  console.log(poor);

  return (
    <View>
      <Text>Exercise 2</Text>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({});
