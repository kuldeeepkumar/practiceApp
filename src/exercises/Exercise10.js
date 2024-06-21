import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TouchableOpacity } from "react-native-web";

const Exercise10 = () => {
  return (
    <View style={styles.container}>
      <text style={{ marginBottom: 10 }}>What is My name🧐?</text>
      <Button
        title="press me"
        color="#5aa2a6"
        onPress={() => alert("Pinky Devi")}
      />
      <Text style={{ marginVertical: 15 }}>What is your Name🧐?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("Ashima kumari")}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#855ea8",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
});
export default Exercise10;
