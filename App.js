import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { kuldeep } from "./src/components/index";

export default function App() {
  let a = "kuldeep";
  let ke = 6549879;
  var b = "b or boy";
  const c = "c for cat";
  let y;
  y = "y for yellow";

  const t = false;
  const d = true;
  console.log("sum is here: ", t && d);

  const colors = ["red", "green", "blue"];

  // for (let color of colors) {
  //   console.log(color);
  // }
  // for (let i = 0; i < 5; i++) {
  //   console.log(i);
  // }

  // let i = 0;
  // while (i < 5) {
  //   console.log(i);
  //   i++;
  // }

  // let i = 0;
  // do {
  //   console.log(i);
  //   i++;
  // } while (i < 5);

  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };

  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={kuldeep}>
        <Text>Click me</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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
