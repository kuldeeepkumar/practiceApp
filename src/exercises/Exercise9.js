import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { position: "absolute" }]}>
        <Text style={styles.text}>Absolute Box</Text>
      </View>
      <View style={[styles.box, { marginTop: 40, backgroundColor: "#965c7e" }]}>
        <Text style={styles.text}>Relative Box</Text>
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
    backgroundColor: "#5f3bed",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#0b9c9e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
