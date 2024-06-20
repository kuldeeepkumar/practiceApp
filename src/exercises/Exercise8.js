import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Kulvinder Kaur</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Riya Thakur</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Shivani</Text>
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
    flexDirection: "column", // Try changing to 'column' and see the difference
    justifyContent: "space-around",
    alignItems: "left",
    backgroundColor: "white",
  },
  box1: {
    flex: 2,
    backgroundColor: "red",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 2,
    backgroundColor: "green",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box3: {
    flex: 3,
    backgroundColor: "purple",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
