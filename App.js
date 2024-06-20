import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercises2";
import Exercise3 from "./src/exercises/Exercise3";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise5 from "./src/exercises/Exercise5";
import Exercise6 from "./src/exercises/Exercise6";
import Exercise7 from "./src/exercises/exercise7";
import exercise8 from "./src/exercises/exercise8";

export default function App() {
  return (
    <>
      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise3/> */}
      {/* <Exercise4/> */}
      {/* <Exercise5/> */}
      {/* <Exercise6/> */}
      {/* <Exercise7
        title={"Exercise8"}
        subtitle={"Exercise 8 is about Using flex box and position absolute and position relative design understan…"}
      /> */}
      <Exercise8 />
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
