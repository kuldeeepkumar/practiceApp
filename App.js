import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exercise1 from "./src/exercises/Exercise1";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Abhijeet</Text>
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
