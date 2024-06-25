import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise12 from "./src/excercises/Exercise12";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}
      {/*<Exercise11/>*/}

      <Exercise12 />
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
