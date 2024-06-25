import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

import ReusableButton from "./Component/ReusableButton";
import { containerStyle } from "../style";

const Exercise12 = () => {
  const handleClick = () => {
    alert("buttons is clicked");
  };
  return (
    <View style={containerStyle.container}>
      <ReusableButton onClick={handleClick} title="Press1" />
      <ReusableButton title="Press2" />
      <ReusableButton title="Press3" />
    </View>
  );
};

export default Exercise12;
