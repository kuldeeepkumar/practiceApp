import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exerciese1 = () => {
  //if condtion is here

  const a = 5;
  if (a > 4) {
    console.log("am here");
  }
  //if else condtion is here

  if (a > 5) {
    console.log("block one is working");
  } else if (a > 4) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }
  //else if condition
  const x = 10;
  if (x > 14) {
    console.log("you are poor");
  } else if (x > 8) {
    console.log("you are rich");
  } else {
    console.log("your are middel class");
  }

  switch (a) {
    case 15:
      console.log("match");
      break;
    case 40:
      console.log("match");
      break;
    default:
      console.log("not match");
      break;
  }
  //for loop code is here

  for (let b = 1; b <= 6; b++) {
    console.log("for execution : ", b);
  }

  // while loop code is here

  let i = 0;
  while (i < 5) {
    console.log("While execution :", i);
    i++;
  }
  // do while loop code is here

  let p = 0;
  do {
    console.log("do while execution :", p);
    p++;
  } while (p < 5);

  // for in while loop code is here

  const person = {
    name: "John",
    age: 30,
    city: "New York",
    mobileno: 645567498,
    email: "john@gmail.com",
    hobby: "music",
  };

  for (let key in person) {
    console.log(key + ": " + person[key]);
  }

  // for of loop code is here

  const colors = ["red", "green", "blue", "yellow"];

  for (let key of colors) {
    console.log(key);
  }

  return (
    <View>
      <Text>Exerciese1</Text>
    </View>
  );
};
export default Exerciese1;

const styles = StyleSheet.create({});
