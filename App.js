import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercise2";
import { StatusBar } from "expo-status-bar";
import { kuldeep } from "./src/components/index";

export default function App() {
  return (
    <>
      {/* Variable declaration , datatypes , operators , conditions statements and
      looping statements are done using following component */}
      {/* <Exercise1 /> */}

      {/* Funtion Declaration  */}
      <Exercise2 />
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
