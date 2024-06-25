import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import ReusableButton from "../component/ReusableButton";
import { containerStyle } from "../styles/Index";

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
