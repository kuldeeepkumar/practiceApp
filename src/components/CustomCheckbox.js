import * as React from "react";

import { Checkbox } from "react-native-paper";
import { View } from "react-native";
import { containerStyle } from "../styles";
import { useState } from "react";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);

  return (
    <View style={containerStyle.container}>
      <View style={{ width: 40, height: 40 }}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color="red"
        />
        <Checkbox
          status={checked1 ? "checked" : "unchecked"}
          onPress={() => {
            setChecked1(!checked1);
          }}
          color="blue"
        />
      </View>
    </View>
  );
};

export default CustomCheckbox;
