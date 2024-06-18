import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercise2";
import Loop from "./src/exercises/Loop";
import Exercise3 from "./src/exercises/Exercise3";

export default function App() {
  return (
    <>
      {/* <Exercise1 /> */}
      {/* <Exercise2 /> */}
      {/* <Loop /> */}
      <Exercise3 />
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
