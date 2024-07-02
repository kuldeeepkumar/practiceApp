import { Button, ProgressBar, Text } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const CustomProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 0.1, 1));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 0.1, 0));
  };

  console.log("progress", progress);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Paper Progress Bar Example</Text>
      <ProgressBar
        progress={progress}
        color={"#6200ee"}
        style={styles.progressBar}
        visible={true}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={decreaseProgress}
          style={styles.button}>
          Back
        </Button>
        <Button
          mode="contained"
          onPress={increaseProgress}
          style={styles.button}>
          Next
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  progressBar: {
    width: "80%",
    height: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default CustomProgressBar;
