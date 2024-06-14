import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  console.log("Exercise1");
  //here is arithmatic operators s

  //addition
  let sum = 5 + 3;
  //subtraction
  let difference = 10 - 4;
  //multiplication
  let product = 2 * 6;
  //division
  let quotient = 15 / 3;
  //remainder(modulus)
  let remainder = 17 % 4;

  console.log("sum", sum);
  console.log("difference", difference);
  console.log("multiplication", product);
  console.log("quotient", quotient);
  console.log("remainder", remainder);

  // -------------->>>>>>>>>>>>>>>>>Conditional Statements<<<<<<<<<<<<<<<<---------------

  // If condition code is here
  const a = 5;
  if (a > 4) {
    console.log("am here ");
  }

  // if else condition code is here

  if (a > 5) {
    console.log("block one is working");
  } else {
    console.log("block two is working");
  }

  //else if condition code is here

  if (a > 5) {
    console.log("block one is working ");
  } else if (a > 6) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }

  // switch statement code is here

  const abc = "Sunday";

  switch (abc) {
    case "Monday":
      console.log("Monday is here");
      break;
    case "Tuesday":
      console.log("Tuesday is here");
      break;
    case "Wednessday":
      console.log("Wednessday is here");
      break;
    case "Thursday":
      console.log("Thursday is here");
      break;
    case "Friday":
      console.log("Friday is here");
      break;
    case "Saturday":
      console.log("Saturday is here");
      break;
    case "Sunday":
      console.log("Sunday is here");
      break;
    default:
      break;
  }

  // -------------->>>>>>>>>>>>>>>>>Looping Statements<<<<<<<<<<<<<<<<---------------

  // for loop code is here

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
    name: "akash",
    age: 18,
    city: "punjab",
    mobileno: 7710161572,
    email: "akash@gmail.com",
    hobby: "crickets",
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
      <Text>Exercise1</Text>
    </View>
  );
};
export default Exercise1;

const styles = StyleSheet.create({});
