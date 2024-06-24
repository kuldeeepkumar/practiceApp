import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ReusableButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 6,
    margin: 10,
  },
  buttonText: {
    color: "yellow",
    fontSize: 19,
  },
});

export default ReusableButton;
