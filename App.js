import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise4 from "./src/excercises/Exercise4";
import Exercise5 from "./src/excercises/Exercise5";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}
      {/* <Excercise4 /> */}
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
    backgroundcolor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
