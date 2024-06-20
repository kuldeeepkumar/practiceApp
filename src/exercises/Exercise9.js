import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { position: "absolute" }]}>
        <Text style={styles.text}>Absolute Box</Text>
      </View>
      <View style={[styles.box, { marginTop: 40, backgroundColor: "red" }]}>
        <Text style={styles.text}>Relative Box</Text>
      </View>
    </View>
  );
};

export default Exercise9;

// -->>>>>>>>>>>  Styling with absolute and relative positioning <<<<<<<<<<<<<---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#51f542",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
  },
});
