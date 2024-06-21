import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise10 from "./src/exercises/Exercises10";
export default function App() {
  return (
    <>
     {/*<Exercise9/>*/}
      
     <Exercise10 />
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
