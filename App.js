import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/Exercise/Exercise1";
import Exercise2 from "./src/Exercise/Exercise2";
import Exercise3 from "./src/Exercise/Exercise3";
import Exercise4 from "./src/Exercise/Exercise4";
import Exercise5 from "./src/Exercise/Exercise5";
import Exercise6 from "./src/Exercise/Exercise6";
import Exercise7 from "./src/Exercise/Exercise7";
import Exercise8 from "./src/Exercise/Exercise8";
import Exercise9 from "./src/Exercise/Exercise9";
import Exercise10 from "./src/Exercise/Exercise10";
import Exercise11 from "./src/Exercise/Exercise11";
import Exercise12 from "./src/Exercise/Exercise12";
import Exercise13 from "./src/Exercise/Exercise13";

export default function App() {
  return (
    <>
      {/*<Exercise1>*/}
      {/* <Exercise2 /> */}
      {/* <Exercise3 /> */}
      {/* <Exercise4 /> */}
      {/* <Exercise5
        title={"Exercise5"}
        subtitle={"Exercise 5 is about error handling and debugging"}
      /> */}
      {/* <Exercise6 /> */}
      {/* <Exercise7 /> */}
      {/* <Exercise8 /> */}
      {/* <Exercise9 /> */}
      {/* <Exercise10 />*/}
      {/* <Exercise11 /> */}
      {/* <Exercise12 /> */}
      <Exercise13 />
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
