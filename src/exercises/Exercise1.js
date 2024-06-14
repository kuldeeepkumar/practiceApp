import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function yourfunction(item) {
  let a = 4;
  if (a > 4) {
    console.log("sum:", a + item);
  }
  console.log("item:", item);
}

const Exercise1 = () => {
  let x = 20;
  let y = 30;
  let a = 6;
  console.log("here is sum:", x + y);
  console.log("here is subtraction:", x - y);
  console.log("here is multiplication:", x * y);
  console.log("here is divison:", x / y);
  console.log("here is modules:", x % y);
  console.log("greater than:", x > y);
  console.log("less than:", x < y);
  console.log("equal to:", x == y);
  console.log("not equal to:", x != y);
  console.log("here is unary plus:", +a);
  console.log("here is unary minus:", -a);
  console.log("here is increment:", ++a);
  console.log("here is:decremant", --a);
  let datevar = new Date();
  console.log(datevar);
  let objectvar = { name: "pinky", frnd: "ashu" };
  console.log(objectvar);
  let arrayvar = [1, 2, 3, 4];
  console.log(arrayvar);
  let numbervar = 234566;
  let stringvar = "akshu";
  let booleanvar = true;
  let nullvar = null;
  console.log(numbervar);
  console.log(stringvar);
  console.log(booleanvar);
  console.log(nullvar);
  let pp = 10;
  console.log((pp += 5));
  console.log((pp -= 5));
  console.log((pp *= 1));
  console.log((pp /= 4));
  let k = true;
  let l = false;
  console.log(k && l);
  console.log(k || l);
  console.log(!k);

  // If condition code is here
  const aa = 5;
  if (aa > 4) {
    console.log("am here ");
  }
  // if else condition code is here

  if (a > 5) {
    console.log("block one is working");
  } else {
    console.log("block two is working");
  }

  // else if condition code is here

  if (a > 5) {
    console.log("block one is working ");
  } else if (a > 6) {
    console.log("block two is working");
  } else if (a > 10) {
    console.log("block three is working");
  } else {
    console.log("nothing is working");
  }
  // switch statement code is here

  const abc = "Sunday";

  switch (abc) {
    case "Monday":
      console.log("Monday is here");
      break;
    case "Tuesday":
      console.log("Tuesday is here");
      break;
    case "Wednessday":
      console.log("Wednessday is here");
      break;
    case "Thursday":
      console.log("Thursday is here");
      break;
    case "Friday":
      console.log("Friday is here");
      break;
    case "Saturday":
      console.log("Saturday is here");
      break;
    case "Sunday":
      console.log("Sunday is here");
      break;
    default:
      break;
  }
  // for loop code is here

  for (let b = 1; b <= 6; b++) {
    console.log("for execution : ", b);
  }

  // while loop code is here

  let i = 0;
  while (i < 5) {
    console.log("While execution :", i);
    i++;
  }
  // do while loop code is here

  let p = 0;
  do {
    console.log("do while execution :", p);
    p++;
  } while (p < 5);

  // for in while loop code is here

  const person = {
    name: "John",
    age: 30,
    city: "New York",
    mobileno: 645567498,
    email: "john@gmail.com",
    hobby: "music",
  };

  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  // for of loop code is here

  const colors = ["red", "green", "blue", "yellow"];

  for (let key of colors) {
    console.log(key);
  }

  return (
    <View>
      <Text>Exercise1</Text>
    </View>
  );
};

export default Exercise1;

const styles = StyleSheet.create({});
