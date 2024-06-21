import { StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise9 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { position: "relative" }]}>
        <Text style={styles.text}>Absolute Box</Text>
      </View>
      

      <View style={[styles.box, { borderRadius: 100, backgroundColor: "white" }]}>
        <Text style={styles.text}>kaddu mera</Text>
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
    backgroundColor: "black",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "#929cad",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    color: "black",
  },
});
