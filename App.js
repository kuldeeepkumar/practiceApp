import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise10 from "./src/excercises/Exercise10";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}

      <Exercise10 />
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
