import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise1 from "./src/excercises/Excercise1";
import Excercise2 from "./src/excercises/Excercise2";
import Excercise3 from "./src/excercises/Excercise3";
import Excercise4 from "./src/excercises/Excercise4";

export default function App() {
  return (
    <>
      {/* <Excercise1 /> */}
      {/* <Excercise2 /> */}
      {/* <Excercise3 /> */}
      <Excercise4 />
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
