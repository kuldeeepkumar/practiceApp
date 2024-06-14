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
  //while loop code
  let j = 0;
  while (j <= 5) {
    console.log("while loop:", j);
    j++;
  } //do while loop is here
  let k = 0;
  do {
    console.log("do while loop:", k);
    k++;
  } while (k < 5);
  const bss = {
    name: "dumy name ",
    rollnumber: 564,
    age: 19,
  };
  for (const item in bss) {
    console.log("data is here", item, ":" + bss[item]);
  }

  //---------->>>>>>>>>>For of Loop statement<<<<<<<<<<----------
  console.log("For of Loop satement ");
  const array = [1, 2, 3, 4, 5];

  for (const element of array) {
    console.log(element);
  }
  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
