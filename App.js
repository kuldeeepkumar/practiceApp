import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";
import Exercise2 from "./src/exercises/Exercise2";
import Raugh from "./src/exercises/Raugh";
import Exercise4 from "./src/exercises/Exercise4";
import Exercise5 from "./src/exercises/Exercise5";
import Exercise6 from "./src/exercises/Exercise6";
import Exercise7 from "./src/exercises/Exercise7";

export default function App() {
  return (
    <>
      {/*<Exercise1 />*/}
      {/*<Exercise2 />*/}
      {/*<Raugh/>*/}
      {/*<Exercise4 />*/}
      {/*<Exercise5 />*/}
      {/*<Exercise6 />*/}
      <Exercise7 />
      IdleDeadline={}
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
