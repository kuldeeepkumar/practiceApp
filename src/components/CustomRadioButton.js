import React, { useState } from "react";

import { RadioButton } from "react-native-paper";
import { Text } from "react-native";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomRadioButton = () => {
  const [checked, setChecked] = useState("first");

  return (
    <View style={containerStyle.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 6 }}>Yes</Text>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ marginTop: 6 }}>No</Text>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
      </View>
    </View>
  );
};

export default CustomRadioButton;
