import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise4 = () => {
  // ------------------>>>>>>>>> Array Traversal Methods <<<<<<<<<<<-----------------
  const array = [1, 2, 3, 4, 5];
  let fruits = ["apple", "banana", "cherry", "orange", "kiwi"];

  // Using for loop

  //for (let i = 0; i < array.length; i++) {
  //console.log("i value", i);
  //console.log("length", array.length);
  //console.log("array value ", array[i]); // Access array elements using array[i]
  //}

  // -------------Using for each --------------------------
  //   const array1 = [
  //     {
  //       name: "ac",
  //       city: "hoshiarpur",
  //     },
  //     {
  //       name: "ab",
  //       city: "Jalandhar",
  //     },
  //     {
  //       name: "abc",
  //       city: "chandigarh",
  //     },
  //   ];

  //   array1.forEach((element) => {
  //     console.log("element value", element.name); // Access array elements using element
  //   });

  //------------ Using map (for ajax rendering)-------------

  //   const newArray = array.map((item) => item * 5);
  //   console.log("new array", newArray);

  //------------- Using for of loop ----------------------

  //   for (const element of array) {
  //     console.log(element); // Access array elements using element
  //   }

  // Using array reduce method example

  //const numbers = [1, 2, 3, 4, 5];

  //   Using reduce to calculate the sum

  //console.log("total sum ", totalSum);
  // console.log("total sum", totalSum)

  // Using array filters method
  //const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Using filter to get only even numbers
  //const evenNumbers = numbers.filter((num) => num % 4 === 0);

  //console.log("even numbers", evenNumbers);

  //Using map to transform elements
  let uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
  console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

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
