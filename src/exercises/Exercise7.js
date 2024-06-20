import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={[styles1.box, { backgroundColor: "orange" }]}>
        <Text style={styles1.text}>Kulvinder Kaur</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "white" }]}>
        <Text style={styles1.text}>Riya Thakur</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "green" }]}>
        <Text style={styles1.text}>Shivani</Text>
      </View>
    </View>
  );
};

export default Exercise7;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Try changing to 'column' and see the difference
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  box: {
    width: 2000,
    height: 300,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderColor: "white",
    borderWidth: 20,
  },
  text: {
    fontSize: 40,
    color: "black",
  },
});
