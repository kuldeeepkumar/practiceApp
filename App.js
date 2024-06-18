import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/Exercise/Exercise1";
import Exercise2 from "./src/Exercise/Exercise2";
import Exercise3 from "./src/Exercise/Exercise3";

export default function App() {
  return (
    <>
      {/*<Exercise1>*/}
      {/* <Exercise2 /> */}
      <Exercise3 />
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
