import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise1 = () => {
  const a = 8;
  const b = 9;
  const c = a + b;
  const d = a - b;
  const e = a * b;
  const f = a / b;
  console.log("sum is:", c);
  console.log("sub is:", d);
  console.log("mul is:", e);
  console.log("div is:", f);

  return (
    <View>
      <Text>Excercise1</Text>
    </View>
  );
};

export default Excercise1;

const styles = StyleSheet.create({});
