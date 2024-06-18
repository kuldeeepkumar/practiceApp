import { StyleSheet, Text, View } from "react-native";
import React from "react";

const exercise4 = () => {
  //-------------------Creating an array------------------------
  let fruits = ["apple", "banana", "mango"];
  console.log("orignal Array", fruits);
  //-------------------Array manuplation------------------------
  // array manuplation is a way that include various metiods like push, pop,slice,remnove,shift,update,splice etc.
  //-------------------push operation------------
  fruits.push("pineapple");
  console.log("push array", fruits);
  //-------------------unshift array------------
  fruits.unshift("Apple");
  console.log("unshift array", fruits);
  //-------------------splice array--------------
  fruits.splice(1, 0, "cherry");
  console.log("splice array", fruits);
  //--------------------pop array----------------
  fruits.pop();
  console.log("pop array", fruits);
  //-------------------shift array--------------
  fruits.shift("cherry");
  console.log("shift array", fruits);
  //-------------------splice array-----------
  fruits.splice(0, 2);
  console.log("splice array", fruits);
  //-------------------update array-----------
  fruits[1] = "watermelon";
  console.log("update arraay:", fruits);
  return (
    <View>
      <Text>exercise4</Text>
    </View>
  );
};

export default exercise4;

const styles = StyleSheet.create({});
