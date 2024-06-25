import { ImageBackground, StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise13 = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.text}>RIYA</Text>
        <Text style={styles.text}>SHIVANI</Text>
        <Text style={styles.text}>KULVINDER</Text>
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
    flexDirection: "row",
    overflow: "visible",
  },
  box: {
    width: 400,
    height: 400,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    margin: 40,
    elevation: 20,
    // borderWidth: 10,

    // opacity: 0.9,
    shadowColor: "yellow",
    shadowOffset: { width: -100, height: -100 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    borderStyle: "solid",
    position: "absolute",
    // zIndex: 2,

    borderRadius: 500,
    // transform: [{ rotate: "180deg" }],
    transform: [{ translateX: 40 }, { translateY: 10 }],
    // transform: [{ scale: 2 }],
  },
  text: {
    color: "yellow",

    letterSpacing: 7,
    lineHeight: 60,

    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Exercise13;
