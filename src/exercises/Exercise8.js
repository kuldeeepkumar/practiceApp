import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise8 = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.box}>
        <Text style={styles1.text}>BOSS</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "green" }]}>
        <Text style={styles1.text}>MANAGER</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "maroon" }]}>
        <Text style={styles1.text}>PEON</Text>
      </View>
    </View>
  );
};

export default Exercise8;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "coloumn", // Try changing to 'column' and see the difference
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#03fc03",
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "navy",
    borderWidth: 30,
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
