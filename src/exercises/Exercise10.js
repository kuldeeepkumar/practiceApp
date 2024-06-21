import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Exercise10 = () => {
  return (
    <View style={styles.container}>
      {/* Example with Button: */}
      <Text style={{ marginBottom: 10 }}> without touchable opacity👀 </Text>
      <Button
        title="Press Me"
        color="#841584"
        onPress={() => alert("Button Clicked")}
      />

      {/* Example with TouchableOpacity: */}

      <Text style={{ marginVertical: 20 }}>with touchable Opacity 🌹🌹</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Button Pressed!")}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "sky blue",
  },
  button: {
    backgroundColor: "#841584",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Exercise10;
