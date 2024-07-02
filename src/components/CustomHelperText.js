import { HelperText, TextInput } from "react-native-paper";
import React, { useState } from "react";

import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomHelperText = () => {
  const [text, setText] = useState("");

  const onChangeText = (text) => setText(text);

  const hasErrors = () => {
    return !text.includes("@");
  };

  return (
    <View style={containerStyle.container}>
      <TextInput
        style={{ width: 300 }}
        label="Email"
        value={text}
        onChangeText={onChangeText}
      />
      <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
      </HelperText>
    </View>
  );
};

export default CustomHelperText;
