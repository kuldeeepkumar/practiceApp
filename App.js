import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise2 from "./scr/exercises/Exercise2";
import Exercise3 from "./scr/exercises/Exercise3";
import Exercise1 from "./scr/exercises/Exercise1";
import Exercise4 from "./scr/exercises/Exercise4";
import Exercise5 from "./scr/exercises/Exercise5";
import Exercise6 from './scr/exercises/Exercise6';
import Exercise7 from "./scr/exercises/Exercise7";



export default function App() {
  return (
    <>
       {/* <Exercise1 /> */}
       {/* <Exercise2/> */}
       {/*<Exercise3/> */}
       {/*<Exercise4/> */}
       {/*<Exercise5/> */}
       {/*<Exercise6/> */}
       <Exercise7/>      
           
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});