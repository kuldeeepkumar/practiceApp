import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.box}>
        <Text style={styles1.text}>Box 1</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "saffron" }]}>
        <Text style={styles1.text}>Box 2</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "green" }]}>
        <Text style={styles1.text}>Box 3</Text>
      </View>
    </View>
  );
};

export default Exercise7;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Try changing to 'column' and see the difference
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  box: {
    width: 400,
    height: 400,
    backgroundColor: "brown",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 30,
    borderColor: "pink",
    borderWidth: 10,
  },
  text: {
    fontSize: 30,
    color: "black",
  },
});
