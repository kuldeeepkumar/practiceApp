import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Exercise8 = () => {
  return (

    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>mahadev</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text}>mahadev</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text}>mahadev</Text>
      </View>
    </View>
  );
};
  
export default Exercise8

// -->>>>>>>>>>>  Building responsive layouts with Flexbox <<<<<<<<<<<<<---

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
      backgroundColor: "purple",
      height: 100,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    box2: {
      flex: 2,
      backgroundColor: "blue",
      height: 100,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    
    box3: {
        flex: 3,
        backgroundColor: "green",
        height: 100,
        justifyContent: "space-evenly",
        alignItems: "center",
      }, 

      text: {
        fontSize: 16,
        color: "white",
      },
    });


