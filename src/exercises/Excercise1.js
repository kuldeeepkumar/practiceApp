import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  let a = 89;
  if (a > 18) {
    console.log("you are eligible for vote");
  } else {
    console.log("you are not eligible");
  }
  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
