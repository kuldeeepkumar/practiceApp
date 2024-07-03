import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { Switch } from "react-native-paper";
import { containerStyle } from "../styles";

const CustomSwitchButton = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={containerStyle.container}>
      <Text>CustomSwitchButton</Text>
      <Switch
        color={"pink"}
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

export default CustomSwitchButton;

const styles = StyleSheet.create({});