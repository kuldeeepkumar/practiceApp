import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise6 = () => {
  // ---------------->>>>>>>> ES6 and modern Java script Features <<<<<<<<---------------

  //  1) let and const Keywords

  let count = 1000;
  if (true) {
    let count = 2000;
     console.log(count);
  }
  // console.log(count);

  //  2) const Keywords

   let PI = 3.14;
   PI = 3.14159; //  

  //  2) Arrow Functions

  // ES5 function
  function add(a, b) { Exmo
    return a + b;
  }

  // ES6 arrow function
  const addErrorFuntion = (a, b) => a + b;

  //  3) Template Literals and String Interpolation

   let name = "shweta";
   let message = `Hello- ${name}`;
   console.log(message);

  //  4) Destructuring Assignments

  // Array destructuring
  let numbers = [3, 2, 1];
  let [first, Second] = numbers;
  console.log(first);
  console.log(Second);

  // Object destructuring

  let person = { firstName: "upinderjit", lastName: "singh" };
  let { firstName, lastName } = person;
  console.log(firstName);
  console.log(lastName);
  console.log("person.firstName", person.firstName);

  //  5) Spread  Operators

  // Array spread
  let arr = [1, 2, 3];
  let newArr = [...arr, 4, 5,6,7,8,9,10]; 
  console.log(newArr);

  //  6) Rest Operators
  // Rest parameter

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(10, 20, 30, 40,50,60));

  return (
    <View style={styles.container}>
      <Text>Exercise6</Text>
    </View>
  );
};

export default Exercise6;

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