import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import ReusableButton from "../componenets/ReusableButton";
import { containerStyle } from "../styles";

const Exercise12 = () => {
  const handleClick = () => {
    alert("Button are clicked");
  };
  return (
    <View style={containerStyle}>
      <ReusableButton onClick={handleClick} title="menu" />
      <ReusableButton title="profile" />
      <ReusableButton title="settings" />
    </View>
  );
};

export default Exercise12;

const styles = StyleSheet.create({});
