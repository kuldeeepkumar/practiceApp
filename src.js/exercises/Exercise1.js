import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  // -------------->>>>>>>>>>>>>>>>>variable declaration and operaters are done code is as given below <<<<<<<<<<<<<<<<---------------

  var b = "b or boy";
  const c = "c for cat";
  console.log("My console is here");
  let t = 3;
  let d = 8;
  console.log("sum is here", t + d);
  console.log("subtraction is here", t - d);
  console.log("muliply is here", t * d);
  console.log("division is here", t / d);
  console.log("module is here", t % d);
  console.log(t == d);
  console.log(t > d);
  console.log(t < d);
  console.log(t >= d);
  console.log(t <= d);
  let datevar = new Date();
  console.log(datevar);
  let arrayvar = [2455675454];
  console.log(arrayvar);
  let numbervar = 23;
  console.log(numbervar);
  let stringvar = "aashima";
  console.log(stringvar);
  let booleanvar = true;
  console.log(booleanvar);


  // -------------->>>>>>>>>>>>>>>>>Conditional Statements<<<<<<<<<<<<<<<<---------------

  // If condition code is here
  const a = 5;
  if (a > 4) {
    console.log("am here ");
  }
  // if else condition code is here

  // if (a > 5) {
  //   console.log("block one is working");
  // } else {
  //   console.log("block two is working");
  // }

  // else if condition code is here

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

  // -------------->>>>>>>>>>>>>>>>>Function delaration and its use <<<<<<<<<<<<<<<<---------------

  console.log("hello kuldeep");
  return (
    <View>
      <Text>Exercise1</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
