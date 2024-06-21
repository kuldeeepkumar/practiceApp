import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise4 = () => {
  const colors = ["pink", "yellow", "blue"];
  //using forEach
  const array1 = [
    {
      name: "abc",
      city: "jalander",
    },
    {
      name: "abc",
      city: "mukerian",
    },
    {
      name: "abc",
      city: "dasuya",
    },
  ];

  array1.forEach((elements) => {
    console.log("element value", elements.city); // Access array elements using element
  });

  //using array method (e.g.,filter,reduce,etc)
  const number = [1, 2, 3, 4, 5];

  const sum = number.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);

  //using map to transform elmenets
  let uppercasedcolors = colors.map((color) => color.toUpperCase());
  console.log(uppercasedcolors);

  return (
    <View style={styles.container}>
      {colors.map((item) => (
        <>
          <Text style={styles.button}>{item}</Text>
        </>
      ))}
    </View>
  );
};
export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 20,
  },
});
