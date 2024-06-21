import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Exercise10 = () => {
  return (
    <View style={styles.container}>
      {/* Example with Button: */}
      <Text style={{ marginBottom: 10 }}> This one is normal button 👇 </Text>
      <Button
        title="Press Me"
        color="blue"
        onPress={() => alert("Button Clicked")}
      />

      {/* Example with TouchableOpacity: */}

      <Text style={{ marginvertical: 50 }}>
        This button is with touchable Opacity 👇
      </Text>
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
  },
  button: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "blue",
    fontSize: 30,
  },
});

export default Exercise10;
