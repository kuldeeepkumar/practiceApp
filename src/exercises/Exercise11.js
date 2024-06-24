import { Button, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      {/* Example with Button: */}
      <Text style={{ marginBottom: 10 }}> without touchable opacity👀 </Text>
      <Button
        title="Press Me right now"
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
    backgroundColor: "gray",
  },
  button: {
    backgroundColor: "#42f587",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Exercise11;
