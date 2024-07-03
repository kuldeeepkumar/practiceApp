import { Divider, Text } from "react-native-paper";

import React from "react";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomDivider = () => (
  <View style={containerStyle.container}>
    <Text>Lemon</Text>
    <Divider />
    <Text>Mango</Text>
    <Divider />
  </View>
);

export default CustomDivider;