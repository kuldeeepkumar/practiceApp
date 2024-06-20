import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={[styles1.box, { backgroundColor: "orange" }]}>
        <Text style={styles1.text}>I</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "white" }]}>
        <Text style={styles1.text}>Love</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "green" }]}>
        <Text style={styles1.text}>India</Text>
      </View>
    </View>
  );
};

export default Exercise7;

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Try changing to 'column' and see the difference
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#892aa1",
    borderWidth: 15,
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
