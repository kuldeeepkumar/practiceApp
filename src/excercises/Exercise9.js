import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { position: "absolute" }]}>
        <Text style={styles.text}>Absolute Box</Text>
      </View>
      <View
        style={[styles.box, { marginTop: 40, backgroundColor: "turquoise" }]}
      >
        <Text style={styles.text}>Neha/Manisha</Text>
      </View>
    </View>
  );
};

export default Exercise9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  box: {
    width: 200,
    height: 150,
    backgroundColor: "salmon",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "black",
  },
});
