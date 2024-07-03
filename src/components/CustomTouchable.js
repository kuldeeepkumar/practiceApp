import * as React from "react";

import { Text, TouchableRipple } from "react-native-paper";

import { View } from "react-native";

const CustomTouchableRipple = () => (
  <TouchableRipple
    style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    onPress={() => console.log("Pressed")}
    rippleColor="rgba(0, 0, 0, .32)">
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default CustomTouchableRipple;