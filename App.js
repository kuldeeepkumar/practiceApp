import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src.js/exercises/Exercise1";

export default function App() {
  let a = "aman";
  var b = "b or boy";
  const c = "c for cat";
  console.log("My console is here");
  let t = 3;
  let d = 8;
  console.log("sum is here", t + d);
  console.log("subtraction is here", t - d);
  console.log("muliply is here", t * d);
  console.log("division is here", t / d);
  console.log("module is here", t % d);
  console.log(t == d);
  console.log(t > d);
  console.log(t < d);
  console.log(t >= d);
  console.log(t <= d);
  let datevar = new Date();
  console.log(datevar);
  let arrayvar = [2455675454];
  console.log(arrayvar);
  let numbervar = 23;
  console.log(numbervar);
  let stringvar = "aashima";
  console.log(stringvar);
  let booleanvar = true;
  console.log(booleanvar);
  return (
    <>
      <View style={styles.container}>
        <Text>aashi raman navdeep!</Text>
        <StatusBar style="auto" />
      </View>
      <Exercise1 />
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

console;
