import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise3 = () => {
  //---------->>>>>>>>>>Array Methods<<<<<<<<<<-----------
  console.log("Array Methods");

  //------------->>>>>>>>Array Lenght<<<<<<<<<<<------------
  console.log("Array Lenght");
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let size = fruits.length;
  console.log("The size of array(fruits) is:", size);

  //---------->>>>>>>>>>Adding element in Array<<<<<<<<<<-------------
  console.log("Adding element to the end using push method");
  fruits.push("Grape");
  console.log(fruits);

  console.log("Adding element to the beginning using unshifgt method");
  fruits.unshift("Pear");
  console.log(fruits);

  console.log("Adding element at specific postion using splice method");
  fruits.splice(2, 0, "kiwi", "Pineapple");
  console.log(fruits);

  //----------->>>>>>>>>>Removing Element in Array<<<<<<<<<<<------------
  console.log("Removing element from the end using pop method");
  fruits.pop();
  console.log(fruits);

  console.log("Removing element from the Beginning using shifgt method");
  fruits.shift();
  console.log(fruits);

  console.log("Removing elements at specific postions using splice method");
  fruits.splice(2, 1);
  console.log(fruits);

  //---------->>>>>>>>>>>Updating array element<<<<<<<<<<------------
  console.log("Updating element in array ");
  fruits[1] = "cherry";
  console.log(fruits);

  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({});
