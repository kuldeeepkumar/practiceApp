import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function yourFuntion(item) {
  let a = 3;
  if (a > 2) {
    console.log("sum", a + item);
  }
  console.log("item:", item);
}

const Exercise2 = () => {
  return (
    <View>
      <Text>exercise2</Text>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({});
