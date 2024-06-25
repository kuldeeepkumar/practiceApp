import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";

const Exercise13 = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2024/05/24/20/56/ai-generated-8785780_1280.png",
      }}
      style={styles.background}
    >
      <View style={styles.box}>
        <Text style={styles.text}>Teddy Bear💖🧸</Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    //justifyContent: "center",
    //alignItems: "center",
    //gap: 5,
    //flexDirection: "row",
    //overflow: "visible",
  },

  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#d46c26",
    flexWrap: "wrap",
    paddingRight: 20,
    margin: 40,
    //evaluation: 20,
    //borderWidth: 5,
    //Opacity: 0.9,
    shadowColor: "black",
    //shadowOffset: { width: 50, height: 50 },
    //shadowOpacity: 0.9,
    shadowRadius: 20,
    borderStyle: "initial",
    //position: "absolute",
    zIndex: 2,
    borderRadius: 20,
    //Transform: [{ rotate: "180deg" }],
    //Transform: [{ translateX: 40 }, { translateY: 10 }],
    //Transform: [{ scale: 2 }],
  },
  text: {
    color: "white",
    //letterSpacing: 6,
    //lineHeight: 28,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    //textDecorationLine: "underline ",
    textTransform: "uppercase",
    // textAlign: "center",
  },
});
export default Exercise13;
