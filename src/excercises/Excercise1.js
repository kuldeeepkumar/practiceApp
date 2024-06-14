import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Excercise1 = () => {
  // Operators are here
  let b = "Neha";
  console.log("my name is Neha:", b);
  let x = 34;
  let y = 12;
  let z = 56;
  console.log("here is sum:", x + y);
  console.log("here is subtraction:", z - x);
  console.log("here is modules:", x % z);
  console.log("here is multi:", x * z);

  // --------->>>>>>>>>Conditional statements code is here<<<<<<<<<<---------------------
  // if condition code is here
  const a = 5;
  if (a > 4) {
    console.log("am here");
  }
  //if else condition code is here
  //if (a > 5){
  //console.log("block one is working");
  //}else{
  //console.log("block two is working")
  //}
  //else if condition code is here
  if (a > 5) {
    console.log("block one is working");
  } else if (a > 6) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }
  //switch statement code is here
  const abc = "sunday";

  switch (abc) {
    case "monday":
      console.log("monday is here");
      break;
    case "tuesday":
      console.log("tuesday is here");
      break;
    case "wednessday":
      console.log("wednessday is here");
      break;
    case "thursday":
      console.log("thursdayis here");
      break;
    case "friday":
      console.log("friday is here");
      break;
    case "saturday":
      console.log("saturdayis here");
      break;
    case "sunday":
      console.log("sunday is here");
      break;
  }
  //----------------------
};
export default Excercise1;

const styles = StyleSheet.create({});
