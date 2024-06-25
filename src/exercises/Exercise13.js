import { ImageBackground, StyleSheet, Text, View } from "react-native";

import React from "react";

const Exercise13 = () => {
  return (
    <ImageBackground style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello </Text>
      </View>
      <view style={style.box}>
        <text style={style.text}>Rajveer and Mandeep</text>
      </view>
    </ImageBackground>
  );
};

// ------------->>>>>>>>>>>>>>>   Comprehensive list of React Native Syles   <<<<<<<<<<<<<----------------

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "visible",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
    margin: 40,
    elevation: 20,
    borderWidth: 10,
    borderColor: "red",

    // opacity: 0.9,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    borderStyle: "solid",

    // position: "absolute",
    // zIndex: 2,

    borderRadius: 10,
    // transform: [{ rotate: "180deg" }],
    transform: [{ translateX: 40 }, { translateY: 10 }],
    // transform: [{ scale: 2 }],
  },
  text: {
    color: "white",

    letterSpacing: 10,
    lineHeight: 30,

    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Exercise13;
