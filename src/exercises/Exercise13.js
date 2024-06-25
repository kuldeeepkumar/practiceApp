import { ImageBackground, StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise13 = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Hi</Text>
      </View>
    </ImageBackground>
  );
};

// ------------->>>>>>>>>>>>>>>   Comprehensive list of React Native Syles   <<<<<<<<<<<<<----------------

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "column",
    overflow: "visible",
    flexWrap: "wrap",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 52,

    elevation: 20,
    borderWidth: 10,

    opacity: 0.9,
    shadowColor: "black",
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    borderStyle: "solid",

    // position: "absolute",
    // zIndex: 2,

    borderRadius: 10,
    transform: [{ rotate: "180deg" }],
    transform: [{ translateX: 40 }, { translateY: 10 }],
    transform: [{ scale: 2 }],
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    margin: 40,
    elevation: 20,
    borderWidth: 10,
  },
  text: {
    color: "white",

    letterSpacing: 10,
    lineHeight: 30,

    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Exercise13;
