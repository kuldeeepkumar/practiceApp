import { StyleSheet, Text, View } from "react-native";
import React from "react";
const Exercise1 = () => {
  //------------------------------OPERATORS----------------

  const r = 100;
  const k = 50;
  console.log("sum is here:", r + k);
  console.log("sub is here:", r - k);
  console.log("mult is here:", r * k);
  console.log("div is here:", r / k);
  console.log("modis here:", r % k);

  //--------------------------CONDITIONAL STATEMENT---------------
  // If condition code is here
  const a = 52;
  if (a > 4) {
    console.log(" its true condition ");
  }

  // if else condition code is here

  if (a > 5) {
    console.log("block one is working");
  } else {
    console.log("block two is working");
  }

  //3
  // else if condition code is here

  if (a < 5) {
    console.log("block one is working ");
  } else if (a < 2) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }

  //4
  // switch statement code is here

  const abc = "Wednesday";

  switch (abc) {
    case "Monday":
      console.log("Monday is here");
      break;
    case "Tuesday":
      console.log("Tuesday is here");
      break;
    case "Wednesday":
      console.log("Wednesday is here");
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

  // -------------->>>>>>>>>>>>>>>>>LOOPING STATEMENT<<<<<<<<<<<<<<<<---------------

  // for loop code is here

  for (let b = 10; b >= 6; b--) {
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

  let b = "shivani is here";

  console.log("here is my console:lkaewrutiop24u032490581098", a);

  return (
    <View>
      <Text>Exercise</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
