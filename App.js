import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise11 from "./src/exercises/Exercises11";
export default function App() {
  return (
    <>
     {/*<Exercise10/>*/}
      
    
    <Exercise11/>
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
