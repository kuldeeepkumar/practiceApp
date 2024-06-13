import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  const a = 3;
  const b = 4;
  const c = 8;
  const d = a + b;
  const e = a * b * c;
  const f = a / b / c;
  console.log("sum is", d);
  console.log("multiply is", e);
  console.log("devide is", f);
  console.log("hello hassan");
  return (
    <view>
      <text>Exercise1</text>
    </view>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
