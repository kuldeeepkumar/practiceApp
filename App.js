import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Exercise6 from "./src/excercises/Exercise6";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}
      {/* <Excercise4 /> */}
      {/* <Excercise5/> */}
      <Exercise6 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
