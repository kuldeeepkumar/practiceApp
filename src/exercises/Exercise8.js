import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise8 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Akshay kumar</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>Ajay Devgn</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>Salman khan</Text>
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
    flex: 2,
    backgroundColor: "#75faea",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box2: {
    flex: 1,
    backgroundColor: "#db75f0",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box3: {
    flex: 2,
    backgroundColor: "#fc5b79",
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
