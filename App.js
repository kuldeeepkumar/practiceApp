import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/Exercise/Exercise1";
import Exercise2 from "./src/Exercise/Exercise2";
import Exercise3 from "./src/Exercise/Exercise3";
import Exercise4 from "./src/Exercise/Exercise4";
import Exercise5 from "./src/Exercise/Exercise5";
import Exercise6 from "./src/Exercise/Exercise6";

export default function App() {
  return (
    <>
      {/*<Exercise1>*/}
      {/* <Exercise2 /> */}
      {/* <Exercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5
        title={"Exercise5"}
        subtitle={"Exercise 5 is about error handling and debugging"}
      /> */}
      <Exercise6 />
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
