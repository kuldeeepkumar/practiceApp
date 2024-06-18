import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise3 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colors = ["pink", "orange", "yellow", "blue"];
  console.log(colors);
  let color = colors.length;
  console.log("array length:", color);
  console.log(numbers);

  //----------------------->>>>>>>>>>>>>>  Array manipulation<<<<<<<<<<<<<<--------------------
  //push method is perform
  colors.push("date");
  console.log("push method is perform:", colors);
  //unshift method is perform
  colors.unshift("ashu");
  console.log(" unshift method is perform:", colors);
  //adding element at specific postion
  colors.splice(6, 0, "gray");
  console.log("splice method is perform:", colors);
  //----------------------->>>>>>>>>>>>>>Remove array elememt<<<<<<<<<<<<<<--------------------

  colors.pop();
  console.log("pop method is here:", colors);
  //shift method remove the first element
  colors.shift();
  console.log("shift  method is here:", colors);
  colors.splice(2);
  console.log("splice method is here:", colors);
  //----------------------->>>>>>>>>>>>>> Update array elememt<<<<<<<<<<<<<<--------------------

  colors[2] = "black";
  console.log("update  method is here:", colors);

  //----------------------->>>>>>>>>>>>>>  Array Traversal<<<<<<<<<<<<<<--------------------
  //using for each loop
  colors.forEach((color) => {
    console.log(color);
  });

  //using map to trasform elements
  let uppercasedcolos = colors.map((colors) => colors.toUpperCase());
  console.log(uppercasedcolos);

  //using for of loop
  for (let color of colors) {
    console.log(color);
  }
  //using array method (e.g.,filter,reduce,etc)
  constfilterscolors = colors.filter((color) => color !== "blue");
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(sum);

  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({});
