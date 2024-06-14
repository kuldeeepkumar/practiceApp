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
    console.log("for loop", i);
  }
  //.....<<<<<<<<<< relate to to while loop>>>>>>>>>>.....
  let k = 1;
  while (k <= 4) {
    console.log("while loop", k);
    k++;
  }
  //.......<<<<<<< do while loop >>>>>>......
  let l = 1;
  do {
    console.log("do while loop", l);
    l++;
  } while (l <= 5);
  console.log("For In Loop statement");
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
      <Text>Exercise1</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
