import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { position: "absolute" }]}>
        <Text style={styles.text}>neha</Text>
      </View>
      <View style={[styles.box, { marginTop: 300, backgroundColor: "green" }]}>
        <Text style={styles.text}>harman</Text>
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
    backgroundColor: "pink",
  },
  box: {
    width: 500,
    height: 300,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "black",
  },
});
