import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  let a = 89;
  switch (a) {
    case 90:
      console.log("match");
      break;
    case 89:
      console.log("match");
      break;
    default:
      console.log("not match");
      break;
  }
  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
