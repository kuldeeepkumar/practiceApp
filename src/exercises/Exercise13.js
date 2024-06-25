import { ImageBackground, StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise13 = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.text}>Harman virk</Text>
      </View>
    </ImageBackground>
  );
};

// ------------->>>>>>>>>>>>>>>   Comprehensive list of React Native Syles   <<<<<<<<<<<<<----------------

const styles = StyleSheet.create({
  container: {
    justifyContent: "left",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 3,
    flexDirection: "row",
    overflow: "visible",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    margin: 10,
    elevation: 10,
    borderWidth: 9,

    // opacity: 0.9,
    // shadowColor: "black",
    // shadowOffset: { width: 100, height: 100 },
    // shadowOpacity: 0.9,
    // shadowRadius: 9,
    // borderStyle: "solid",

    // position: "absolute",
    // zIndex: 2,

    // borderRadius: 10,
    // transform: [{ rotate: "180deg" }],
    // transform: [{ translateX: 40 }, { translateY: 10 }],
    // transform: [{ scale: 2 }],
  },
  text: {
    color: "green",

    letterSpacing: 5,
    lineHeight: 50,

    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Exercise13;
