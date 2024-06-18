import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise3 = () => {

const fruit=['apple', 'banana', 'cherry', ];
//console.log(fruit);

////------------------>>>>>>>>>>>> Array Manipulation <<<<<<<<<<<-----------------

// Push method adds elements to the end

//fruit.push("apple"); // ['apple', 'banana', 'cherry', 'date']/

// Unshift method adds elements to the beginning
 //fruits.unshift("orange"); // ['orange', 'apple', 'banana', 'cherry', 'date']

// splice method adds elements  at specific position
 //fruit.splice(3, 0, "coconut"); // [ 'apple', 'banana',  'cherry',  'coconut' , 'date']

//------------------>>>>>>>>>>>> Removing Element <<<<<<<<<<<-----------------

// Pop method removes the last element

// fruit.pop("banana"); // ['apple', 'banana']

// Shift method removes the first element
 fruit.shift("apple"); // ['banana', 'cherry']
// Splice method  removes at specific Position

// fruits.splice(2 , 2); // ['banana', 'cherry']

//------------------>>>>>>>>>>>> Updating Element <<<<<<<<<<<-----------------

// Updating an element

//fruits[0] = "blueberry"; // ['apple', 'blueberry', 'cherry']

console.log("my array is here", fruit);

//------------------>>>>>>>>>>>> Array Traversal <<<<<<<<<<<-----------------

// Using forEach to iterate
//  fruit.forEach((fruit) => {
//   console.log(fruit);
// });

// Using map to transform elements
// let uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
// console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

// Using for...of loop
// for (let fruit of fruits) {
//   console.log(fruit);
//









  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  )
}

export default Exercise3

const styles = StyleSheet.create({})