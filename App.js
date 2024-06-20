import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise6 from "./src.js/exercises/Exercise6";
import Exercise7 from "./src.js/exercises/Exercise7";

export default function App() {
  return (
    <>
      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise3/> */}

     {/* <Exercise6 /> */}
      <Exercise7 />
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
