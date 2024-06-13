import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  //----------------->>>>>>>>>>conditional statements<<<<<<<<<<<<<<<----------------------------

  //if statement code is here

  const a = 80;
  if (a >= 18) {
    console.log("you are eligible for vote");
  }

  //if else code is here
  if (a >= 18) {
    console.log("you are eligible to vote");
  } else {
    console.log("you are not eligible to vote");
  }

  //else if condition code is here
  if (a > 18) {
    console.log("you are eligible to vote");
  } else if ((a = 18)) {
    console.log("you are eligible to vote");
  } else {
    console.log("you are not eligible to vote");
  }

  //switch code is here
  switch (a) {
    case 34:
      console.log(" match");
      break;
    case 80:
      console.log(" match");
      break;
    default:
      console.log(" no match");
      break;
  }
  //-------------------->>>>>>>>>>>>>>looping statements>>>>>>>>>>>>>>>>>------------
  //for loop code is here
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  while ) {
    
  }
  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
