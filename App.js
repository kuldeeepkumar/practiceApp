import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Loop from "./src/exercises/Loop";
import Exercise3 from "./src/exercises/Exercise3";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise2 from "./src/exercises/Exercise2";
import Exercise5 from "./src/exercises/Exercise5";
import Exercise6 from "./src/exercises/Exercise6";
import Exercise7 from "./src/exercises/Exercise7";
import Exercise8 from "./src/exercises/Exercise8";
import Exercise9 from "./src/exercises/Exercise9";
import Exercise10 from "./src/exercises/Exercise10";

export default function App() {
  return (
    <>
      {/* <Exercise1 /> */}
      {/* <Exercise2    */}
      {/* <Loop /> */}
      {/*<Exercise3 /> */}
      {/*<Exercise4 /> */}
      {/* <Exercise5 /> */}
      {/* <Exercise6 /> */}
      {/* <Exercise7 /> */}
      {/* <Exercise8 /> */}
      {/* <Exercise9 /> */}
      <Exercise10 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
