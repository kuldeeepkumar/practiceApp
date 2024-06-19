import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Exercise4 from "./src.js/exercises/Exercise4";
import Exercise5 from "./src.js/exercises/Exercise5";

export default function App() {
  return (
    <>
      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise3/> */}
      {/* <Exercise4 /> */}
      <Exercise5 />
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
