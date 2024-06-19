import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercises2";
import Exercise3 from "./src/exercises/Exercise3";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise5 from "./src/exercises/Exercise5";
export default function App() {
  return (
    <>
      {/* <Exercise1 /> */}
      {/*  <Exercise2 /> */}
      {/* <Exercise3/> */}
      {/* <Exercise4/> */}
      <Exercise5
        title={"Exercise5"}
        subtitle={"Exercise 5 is about error handling and debugging"}
      />
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
});
