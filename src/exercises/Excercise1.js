import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  let a = 8;
  console.log((a += 6));
  console.log((a -= 7));
  console.log((a *= 3));
  console.log((a /= 6));

  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
