import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise1 from "./src/exercises/Excercise1";
import Excercise2 from "./src/exercises/Excercise2";
import Excercise3 from "./src/exercises/Excercise3";

export default function App() {
  return (
    <>
      {/* <Excercise1 /> */}
      {/*  <Excercise2 /> */}
      <Excercise3 />
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
