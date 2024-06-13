import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Excercise1 from "./src/exercises/Excercise1";

export default function App() {
  let a = 8;
  console.log(+a);
  console.log(-a);
  console.log(++a);
  console.log(--a);
  return (
    <>
      <View style={styles.container}>
        <Text>hello guys</Text>
        <StatusBar style="auto" />
      </View>
      <Excercise1 />
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
