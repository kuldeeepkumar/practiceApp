import Exercise1 from "./src/exercises/Exercise1";
import Exercise10 from "./src/exercises/Exercise10";
import Exercise11 from "./src/exercises/Exercise11";
import Exercise12 from "./src/exercises/Exercise12";
import Exercise13 from "./src/exercises/Exercise13";
import Exercise2 from "./src/exercises/Exercise2";
import Exercise3 from "./src/exercises/Exercise3";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise5 from "./src/exercises/Exercise5";
import Exercise6 from "./src/exercises/Exercise6";
import Exercise7 from "./src/exercises/Exercise7";
import Exercise8 from "./src/exercises/Exercise8";
import Exercise9 from "./src/exercises/Exercise9";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      {/* Variable declaration , datatypes , operators , conditions statements and
      looping statements are done using following component */}
      {/* <Exercise1 /> */}
      {/* Funtion Declaration  */}
      {/* <Exercise2 /> */}
      {/* Array Manipulation  */}
      {/* <Exercise3 /> */}
      {/* Array Traversal methods are covered in Exercise 4  */}
      {/* <Exercise4 /> */}
      {/* Error handling and debugging techniques are covered in Exercise 5  */}
      {/* <Exercise5
        title={"Exercise5"}
        subtitle={"Exercise 5 is about error handling and debugging"}
      /> */}
      {/* ES6 and modern Java script Features are covered in Exercise 6  */}
      {/* <Exercise6 /> */}
      {/*	Using flex properties: flex, flexDirection, justifyContent, alignItems are covered in Exercise 7 */}
      {/* <Exercise7 /> */}
      {/* 	Building responsive layouts with Flexbox are covered in Exercise 8 */}
      {/* <Exercise8 /> */}
      {/* Styling with absolute and relative positioning are covered in Exercise 9 */}
      {/* <Exercise9 /> */}
      {/* Styling buttons and touchable are covered in Exercise 10 */}
      {/* <Exercise10 /> */}
      {/* Styling images and multimedia components  are covered in Exercise 11 */}
      {/* <Exercise11 /> */}
      {/* Creating reusable styles and components are covered in Exercise 12 */}
      {/* <Exercise12 /> */}

      {/*Comprehensive list of React Native Syles are covered in Exercise 12 */}
      <Exercise13 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
  },
});
