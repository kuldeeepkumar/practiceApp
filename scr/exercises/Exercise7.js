import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise7 = () => {
  return (
    <View style={styles1.container}>
      <View style={styles1.box}>
        <Text style={styles1.text}>ki</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "#e6c1d6" }]}> 
        <Text style={styles1.text}> hall</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "#b59e96" }]}>
        <Text style={styles1.text}>chall</Text>
      </View>

      <View style={[styles1.box, { backgroundColor: "#a4b596" }]}>
        <Text style={styles1.text}>aaa</Text>
      </View>
      <View style={[styles1.box, { backgroundColor: "#c1c9db" }]}>
        <Text style={styles1.text}>dosto</Text>
      </View>
    </View>
  );
};

export default Exercise7;

// -->>>>>>>>>>>  Using flex properties: flex, flexDirection, justifyContent, alignItems <<<<<<<<<<<<<---

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", 
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0a0a0a", 
  },
  box: {
    width: 120,
    height: 100,
    backgroundColor: "#92a5a6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderColor: "#dbdac1",
    borderWidth: 20,
  },  
  text: {
    fontSize: 30,
    color: "black",
  },
});