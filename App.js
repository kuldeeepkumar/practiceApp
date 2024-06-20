import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise1 from "./src/exercises/Excercise1";
import Excercise2 from "./src/exercises/Excercise2";
import Excercise3 from "./src/exercises/Excercise3";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise5 from "./src/exercises/Exercise5";
import Exercise6 from "./src/exercises/Exercise6";
import Exercise7 from "./src/exercises/Exercise7";

export default function App() {
  return (
    <>
      {/* <Excercise1 /> */}
      {/*  <Excercise2 /> */}
      {/*  <Excercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5 /> */}
      {/*<Exercise6 /> */}
      <Exercise7 />
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
