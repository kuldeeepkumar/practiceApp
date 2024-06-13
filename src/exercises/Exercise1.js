import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  const a = 3;
  const b = 4;
  const c = a + b;
  const d = a - b;
  const e = a * b;
  console.log("sum is", c);
  console.log("sub is", d);
  console.log("mul is", e);
  return (
    <View style={styles.container}>
      <Text style={styles.container}>exercise</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
});
