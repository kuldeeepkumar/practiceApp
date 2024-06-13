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
      break;
  }

  return (
    <View>
      <Text>Exerciese1</Text>
    </View>
  );
};
export default Exerciese1;

const styles = StyleSheet.create({});
