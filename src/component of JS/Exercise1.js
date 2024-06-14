import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise1 = () => {
  console.log("Conditional Statements");

  //---------->>>>>>>>>>if statement<<<<<<<<<<----------
  console.log("If statement");
  let age = 18;
  if ((age) => 18) {
    console.log("You are an adult");
  }

  //---------->>>>>>>>>>if else statement<<<<<<<<<<------------
  console.log("If Else statement");
  let marks = 32;
  if (marks > 33) {
    console.log("Try your best ,next time ");
  } else {
    console.log("yoy are pass");
  }

  //---------->>>>>>>>>>if else if statement<<<<<<<<<<----------
  console.log("If Else If statement");
  let Passing_Marks = 60;
  if ((Passing_Marks) => 80) {
    console.log("A grade");
  } else if (Passing_Marks < 80 || Passing_Marks > 70) {
    console.log("B grade");
  } else if (Passing_Marks < 70 || Passing_Marks > 60) {
    console.log("C grade");
  } else if (Passing_Marks < 60 || Passing_Marks > 50) {
    console.log("D grade");
  } else {
    console.log("E grade");
  }

  //---------->>>>>>>>>>Switch Statement<<<<<<<<<<----------
  console.log("Switch Case statement");
  let color = "blue";
  switch (color) {
    case "blue":
      console.log("The color is blue");
      break;
    case "black":
      console.log("The color is black");
      break;
    case "red":
      console.log("The color is red");
    default:
      console.log("color is not matched");
      break;
  }

  console.log("Loppinfg Statement");

  //---------->>>>>>>>>>For Loop<<<<<<<<<<-----------
  console.log("For Lopp Statement");
  for (let aa = 1; aa <= 5; aa++) {
    console.log(aa);
  }

  //---------->>>>>>>>>>While Lopp statement<<<<<<<<<<-----------
  console.log("while Loop statement");
  let bb = 1;
  while (bb <= 5) {
    console.log(bb);
    bb++;
  }

  //---------->>>>>>>>>>Do While Loop Statement<<<<<<<<<<----------
  console.log("Do While Lopp statement");
  let cc = 1;
  do {
    console.log(cc);
    cc++;
  } while (cc <= 5);

  //---------->>>>>>>>>>>For In Loop Statement<<<<<<<<<<-----------
  console.log("For In Loop statement");
  const bss = {
    name: "dumy name ",
    rollnumber: 564,
    age: 19,
  };
  for (const item in bss) {
    console.log("data is here", item, ":" + bss[item]);
  }

  //---------->>>>>>>>>>For of Loop statement<<<<<<<<<<----------
  console.log("For of Loop satement ");
  const array = [1, 2, 3, 4, 5];

  for (const element of array) {
    console.log(element);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.container}>exercise</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
});
