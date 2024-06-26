import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import React from "react";


import { containerStyle } from "../styles";
import ReusableButton from "../componenets/ResuableButton";


const Exercise12 = () => {

    const handleClick = () => {
        alert("buttons is clicked");
        alert("buttons is clicked");
      };

  return (
    <View style={containerStyle.container}>
    <ReusableButton onClick={handleClick} title="aashi" />
    <ReusableButton onClick={handleClick}title="raman" />
    <ReusableButton title="nav" />
  </View>
);
};

export default Exercise12;

