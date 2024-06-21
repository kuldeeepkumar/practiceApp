import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise8 from "./src/exercises/Exercises8";
export default function App() {
  return (
    <>
     {/*<Exercise1/>*/}
      <Exercise8 />
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
