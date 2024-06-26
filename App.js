import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise16 from "./src/excercises/Exercise16";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}
      {/*<Exercise15/>*/}
      <Exercise16 />
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
