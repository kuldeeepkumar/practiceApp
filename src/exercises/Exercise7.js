import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>pinky</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#0cf7f0" }]}>
        <Text style={styles.text}>friend</Text>
      </View>

      <View style={[styles.box, { backgroundColor: "#1ff0b5" }]}>
        <Text style={styles.text}>ashima</Text>
      </View>
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f593ba",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#b7f757",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 9,
  },
  text: {
    fontSize: 22,
    color: "black",
  },
});
