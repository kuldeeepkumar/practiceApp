import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.box}>
        <Text style={styles1.text}>Neha</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "orchid" }]}>
        <Text style={styles1.text}>Raju</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "blue" }]}>
        <Text style={styles1.text}>Pooja</Text>
      </View>
    </View>
  );
};

export default Exercise7;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#46c2ab",
  },
  box: {
    width: 120,
    height: 120,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 20,
    borderColor: "white",
    borderWidth: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
