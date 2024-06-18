import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Excercise3 = () => {
  //.....................<<<<<<<Array creation>>>>>>>>>......................................
  const fruit = ["apple", "banana", "orange"];
  console.log("my array is here:", fruit);

  //...................................<<<<<Array Manipulation>..............................
  //to add array elements
  //array push() method...........
  fruit.push("cherry");
  console.log("my array is here:", fruit);

  //array unshift() method
  fruit.unshift("lemon");
  console.log("my array is here:", fruit);

  //array splice() method
  fruit.splice(2, 0, "guava");
  console.log("my array is here:", fruit);

  //TO remove array elements..........................
  //array pop() method
  fruit.pop();
  console.log("my array is here:", fruit);

  //array shift() method
  fruit.shift();
  console.log("my array is here:", fruit);

  //array splice() method
  fruit.splice(2, 1);
  console.log("my array is here:", fruit);

  //to update array elements
  fruit[1] = "watermelon";
  console.log("my array is here:", fruit);

  return (
    <View>
      <Text>Array and its traversal</Text>
    </View>
  );
};

export default Excercise3;

const styles = StyleSheet.create({});
