import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise3 = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colors = ["pink", "orange", "yellow", "blue", "black"];
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

  return (
    <View>
      <Text>Exercise3</Text>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({});
