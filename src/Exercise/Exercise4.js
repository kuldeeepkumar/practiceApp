import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise4 = () => {
  const array = [1, 2, 3, 4, 5];
  let fruits = ["apple", "banana", "orange"];

  // Using for loop

  for (let i = 0; i < array.length; i++) {
    console.log("i value", i);
    console.log("length", array.length);
    console.log("array value ", array[i]);
  }

  // using for each loop

  const array1 = [
    {
      name: "fruit",
      fruit: "mango",
    },
    {
      name: "fruit",
      fruit: "banana",
    },
    {
      name: "fruit",
      fruit: "apple",
    },
  ];

  array1.forEach((element) => {
    console.log("element value", element.fruit);
  });

  //using for of loop

  for (const element of array) {
    console.log(element);
  }
  //using reduce method
  const numbers = [1, 2, 3, 4, 5];

  const totalSum = numbers.reduce((accumulator, currentValue) => {
    accumulator + currentValue,
      console.log("accumulator", accumulator),
      console.log("currentValue", currentValue);
    console.log("total sum:", totalsum);
  });

  return (
    <View style={styles.container}>
      {fruits.map((item) => (
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
