import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
    <View style={[styles.box, { position: "absolute" }]}>
      <Text style={styles.text}>Absolute Box</Text>
    </View>
    <View style={[styles.box, { marginTop: 30, backgroundColor: "blue" }]}>
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
      backgroundColor: "#f0f0f0",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      },

      text: {
        fontSize: 18,
        color: "white",
      },
    });