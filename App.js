import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercise2";
import Exercise3 from "./src/exercises/Exercise3";
import Exercise4 from "./src/exercises/Exercise4";
import { StatusBar } from "expo-status-bar";
import { kuldeep } from "./src/components/index";

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
      <Exercise4 />
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
