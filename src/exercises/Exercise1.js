import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  let a = 3; // assign 3 to variable a
  console.log((a += 5)); //equivlent to a=a+5(adds 5 to a)
  console.log((a -= 3)); //equivlent to a=a-3(subtract 3 to a)
  console.log((a *= 2));
  console.log((a /= 2));
  console.log((a %= 2));
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
