import * as React from "react";

import { Icon, MD3Colors } from "react-native-paper";

import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomIcons = () => (
  <View style={containerStyle.container}>
    <Icon source="camera" color={MD3Colors.error50} size={20} />
    <Icon source="plus" color={MD3Colors.error50} size={20} />
    <Icon source="home" color={MD3Colors.error50} size={20} />
    <Icon source="bell" color={MD3Colors.error50} size={20} />
    <Icon source="phone" color={MD3Colors.error50} size={20} />
  </View>
);

export default CustomIcons;