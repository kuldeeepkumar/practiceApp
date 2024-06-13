import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exerciese1 from "./src/exercises/Exercise1";

export default function App() {
  //  we are trying operators

  const a = 1000;
  const b = 200;
  const c = a - b;
  console.log(c);
  return (
    <>
      <View style={styles.container}>
        <Text>the journey is yours enjoy each and every steps !</Text>
        <StatusBar style="auto" />
      </View>
      <Exerciese1 />
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
