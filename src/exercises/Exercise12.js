import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { containerStyle } from "../styles/index";
import ReusableButton from "../components/ReusableButton";

const Exercise12 = () => {
  const handleClick = () => {
    alert("buttons is clicked");
  };
  return (
    <View style={containerStyle.container}>
      <ReusableButton onClick={handleClick} title="Home" />
      <ReusableButton title="Profile" />
      <ReusableButton title="settings" />
    </View>
  );
};

export default Exercise12;
