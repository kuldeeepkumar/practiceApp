import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise4 = () => {
  //----------------------->>>>>>>>>>>>>>  Array Traversal<<<<<<<<<<<<<<--------------------
  const array = [1, 2, 3, 4, 5, 6];
  const colors = ["pink", "orange", "yellow", "blue", "black"];

  for (let i = 0; i < array.length; i++) {
    console.log("i value", i);
    console.log("length", array.length);
    console.log("array is here:", array[i]);
  }

  const array1 = [
    {
      name: "abc",
      city: "hoshiarpur",
    },
    {
      name: "abc",
      city: "jalandhar",
    },
    {
      name: "abc",
      city: "chandighar",
    },
  ];
  array1.forEach((element) => {
    console.log("element value", element.city);
  });

  //using map to trasform elements
  const newarray = array.map((item) => item * 2);
  console.log("new array", newarray);

  //using for of loop
  for (let color of colors) {
    console.log(color);
  }

  //using array method (e.g.,filter,reduce,etc)
  const number = [1, 2, 3, 4, 5];

  const sum = number.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);

  return (
    <View style={styles.container}>
      {colors.map((item) => (
        <>
          <text style={styles.button}>{item}</text>
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
