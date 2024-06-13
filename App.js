import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Exercise1 from "./src/exercises/Exercise1";
import { StatusBar } from "expo-status-bar";
import { kuldeep } from "./src/components/index";

export default function App() {
  // -------------->>>>>>>>>>>>>>>>>Variable Declaration<<<<<<<<<<<<<<<<---------------

  let a = "kuldeep";
  let ke = 6549879;
  var b = "b or boy";
  const c = "c for cat";
  let y;
  y = "y for yellow";

  const abc = {
    name: "kuldeep",
    rollNo: 132465,
    addres: "India",
  };

  const t = false;
  const d = true;
  console.log("sum is here: ", t && d);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={kuldeep}>
          <Text>Click me</Text>
        </TouchableOpacity>

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
  button: {
    backgroundColor: "pink",
    padding: 10,
  },
});
