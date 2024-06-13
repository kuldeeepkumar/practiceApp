import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  let a = 8;
  let b = 8;
  console.log(a == b);
  console.log(a != b);
  console.log(a > b);
  console.log(a >= b);
  console.log(a < b);
  console.log(a <= b);
  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
