import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { containerStyle } from "./styles/Index";
import ReusableButton from "./component/ReuseableButton";

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
