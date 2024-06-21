import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Box 3</Text>
      </View>
    </View>
  );
};



export default Exercise8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  box1: {
    flex: 1,
    backgroundColor: "salmon",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 2,
    backgroundColor: "wheat",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box3: {
    flex: 3,
    backgroundColor: "orchid",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});