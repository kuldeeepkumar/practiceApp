import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise5 = () => {
  console.log("Array Traversal");

  const array = [1, 2, 3, 4, 5];
  console.log("Array=", array);
  let fruits = ["apple", "banana", "oranage"];
  //------------>>>>>>>>>>>For loop in Array<<<<<<<<<<<-------------
  console.log("Array Traversal using for Loop");
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("Array is here", element);
  }
  const array1 = [
    {
      name: "Sam",
      city: "Hoshiarpur",
    },
    {
      name: "Robin",
      city: "Dasuya",
    },
    {
      name: "Sham",
      city: "Jalandhar",
    },
  ];
  array1.forEach((element) => {
    console.log("element value", element.city);
  });
  //----------->>>>>>>>>>>Using Map<<<<<<<<<<<-------------
  const newArray = array.map((item) => item * 2);
  console.log("new array", newArray);

  //----------->>>>>>>>>>>>Using for of loop<<<<<<<<<<<-----------
  for (const element of array) {
    console.log("array element is here", element);
  }
  //using array reduce method example
  const numbers = [1, 2, 3, 4, 5];
  //using reduce to calculate the sum
  const totalsum = numbers.reduce((accumulator, currentvalue) => {
    console.log("accumulator", accumulator);
    console.log("currentvalue", currentvalue);
  });

  console.log("total sum", totalsum);

  //using array filters method
  //----------->>>>>>>>>>>>filtering the array to find only even number<<<<<<<<<-----------
  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("original array or full array", numbers2);
  const evenNumbers = numbers2.filter((num) => num % 2 == 0);
  console.log("even numbers", evenNumbers);

  const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddNumbers = numbers3.filter((num2) => num2 % 2 == 1);
  console.log("odd numbers", oddNumbers);

  //------------>>>>>>>>>>>>Converting array element in UPPERCASE<<<<<<<<<<<------------
  console.log("Original array ", fruits);
  let uppercasedFruits = fruits.map((fruits) => fruits.toUpperCase());
  console.log("Fruits array's element in upeer case=", uppercasedFruits);
  return (
    <View>
      <Text>Exercise5</Text>
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({});
