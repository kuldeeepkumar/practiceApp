import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  //....>>>>>>>>>conditional statements<<<<<<<<<<<....
  const a = 15;
  if (a >= 13) {
    console.log("you are young");
  } else {
    console.log("you are not youmg");
  }
  //else if condition
  const x = 10;
  if (x > 14) {
    console.log("you are poor");
  } else if (x > 20) {
    console.log("you are rich");
  } else {
    console.log("you are midel class");
  }
  //switch case
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
  //......<<<<<<<<<<<< program relate to for loop >>>>>>>>>>>......
  for (let i = 0; i < 7; i++) {
    console.log(i);
  }
  //.....<<<<<<<<<< relate to to while loop>>>>>>>>>>.....
  let i = 6;
  while (i <= 4) {
    console.log(i);
    i++;
  }
  //.......<<<<<<< do while loop >>>>>>......
  do {
    console.log(i);
    i++;
  } while (i <= 5);
  return (
    <View>
      <Text>Exercise 1</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
