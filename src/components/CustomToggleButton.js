import * as React from "react";

import { ToggleButton } from "react-native-paper";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomToggleButton = () => {
  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);

  return (
    <View style={containerStyle.container}>
      <ToggleButton.Group
        onValueChange={(value) => setValue(value)}
        value={value}>
        <ToggleButton icon="format-align-left" value={0} />
        <ToggleButton icon="home" value={1} />
        <ToggleButton icon="bell" value={2} />
      </ToggleButton.Group>

      <ToggleButton.Row
        style={{ marginTop: 40 }}
        onValueChange={(value) => setValue1(value)}
        value={value1}>
        <ToggleButton icon="format-align-left" value={0} />
        <ToggleButton icon="home" value={1} />
        <ToggleButton icon="bell" value={2} />
      </ToggleButton.Row>
    </View>
  );
};

export default CustomToggleButton;