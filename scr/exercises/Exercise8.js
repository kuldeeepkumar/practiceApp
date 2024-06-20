import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>nalla</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>chapari</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>berojgar</Text>
      </View>
      
    </View>
  );
};

// In this example:

// flex: 1 makes Box 1 take up one-third of the available space.
// flex: 2 makes Box 2 take up two-thirds of the available space.
// flex: 1 makes Box 3 take up one-third of the available space.

export default Exercise8;

// -->>>>>>>>>>>  Building responsive layouts with Flexbox <<<<<<<<<<<<<---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a0a0a",
  },
  box1: { 
    flex: 1,
    backgroundColor: "#a37c79",
    height: 200,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 2,
    backgroundColor: "#757c7d",
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box3: {
    flex: 3,
    backgroundColor: "#cbc5e8",
    height: 120,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#05001a",
  },
});