import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Excercise3 = () => {
  //------------------****************Array Creation ************------------------
  let fruits = ["apple", "banana", "cherry", "orange", "kiwi"];

  ////------------------ Array Manipulation -----------------

  // Push method adds elements to the end

  //   fruits.push("date");

  // Unshift method adds elements to the beginning
  //   fruits.unshift("orange");

  // splice method adds elements  at specific position
  //   fruits.splice(3, 0, "coconut");

  //------------------**************  Removing Element ***************----------------

  // Pop method removes the last element

  // fruits.pop(); // ['apple', 'banana']

  // Shift method removes the first element
  // fruits.shift(); // ['banana', 'cherry']
  // Splice method  removes at specific Position

  // fruits.splice(2 , 2); // ['banana', 'cherry']

  //------------------************Updating Element************* ----------------

  // Updating an element

  //   fruits[0] = "blueberry";

  //------------------*********** Array Traversal **************-----------------

  // Using forEach to iterate
  // fruits.forEach((fruit) => {
  //   console.log(fruit);
  // });

  // Using map to transform elements
  // let uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
  // console.log(uppercasedFruits);

  // Using for...of loop
  // for (let fruit of fruits) {
  //   console.log(fruit);
  // }
  console.log("my array is here", fruits);

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

export default Excercise3;

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
