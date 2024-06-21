import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Exercise10 = () => {
  return (
    <View style={styles.container}>
      {/* Example with Button: */}
      <Text style={{ marginBottom: 10 }}> haddi mera buddy☠💀 </Text>
      <Button
        title="Press Me"
        color="#841584"
        onPress={() => alert("ki hall chal dosto")}
      />

      {/* Example with TouchableOpacity: */}
       <Text style={{ marginVertical: 40 }}>
        This button is with touchable Opacity 💩💩💩
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("yo joginder thara bhai joginder!")}>
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
    backgroundColor: "#f50717",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "02#000f",
    fontSize: 16,
  },
});

export default Exercise10;