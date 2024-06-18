import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise3 = () => {


   //------------------>>>>>>>>>>>> Array Creation <<<<<<<<<<<------------------
   let fruits = ["apple", "banana", "cherry", "orange", "kiwi"];

   ////------------------>>>>>>>>>>>> Array Manipulation <<<<<<<<<<<-----------------
 
   // Push method adds elements to the end
 
    fruits.push("date"); 
    
    console.log("my array is here", fruits); 
 
   // Unshift method adds elements to the beginning
    fruits.unshift("orange"); 
    
   console.log("my array is here", fruits);
 
   // splice method adds elements  at specific position
    fruits.splice(3, 0, "coconut"); 
    
   console.log("my array is here", fruits);
 
   //------------------>>>>>>>>>>>> Removing Element <<<<<<<<<<<-----------------
 
   // Pop method removes the last element
 
    fruits.pop(); 
    console.log("my array is here", fruits);
 
 
   // Shift method removes the first element
   fruits.shift();
   console.log("my array is here", fruits);
  
   // Splice method  removes at specific Position
 
    fruits.splice(2 , 2); 
    console.log("my array is here", fruits);
 
 
   //------------------>>>>>>>>>>>> Updating Element <<<<<<<<<<<-----------------
 
   // Updating an element
 
    fruits[0] = "blueberry";
    console.log("my array is here", fruits);
 
 
   //------------------>>>>>>>>>>>> Array Traversal <<<<<<<<<<<-----------------
 
   // Using forEach to iterate
   fruits.forEach((fruit) => {
     console.log(fruit);
    });
 
   // Using map to transform elements
  //  let uppercasedFruits = fruits.map((fruit) => fruit.toUpperCase());
  //  console.log(uppercasedFruits); 
 
   // Using for...of loop
   // for (let fruit of fruits) {
   //   console.log(fruit);
   // }
  return (
    <View>
      <Text>Exercise3</Text>
    </View> 
  )
}

export default Exercise3

const styles = StyleSheet.create({})