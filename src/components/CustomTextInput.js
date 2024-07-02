import * as React from "react";

import { TextInput } from "react-native-paper";
import { View } from "react-native";

const CustomTextInput = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={{ marginTop: 200, paddingHorizontal: 40 }}>
      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        right={<TextInput.Affix text="/100" />}
      />
      <TextInput
        style={{ marginTop: 40, borderRadius: 10 }}
        label="Password"
        maxLength={8}
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
    </View>
  );
};

export default CustomTextInput;
