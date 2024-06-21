import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise11 from "./src/excercises/Exercise11";

export default function App() {
  return (
    <>
      {/*<Exercise1/>*/}
      {/*<Exercise2/>*/}
      {/*<Exercise3/>*/}
      {/*<Exercise10/>*/}

      <Exercise11 />
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
