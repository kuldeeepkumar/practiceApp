import * as React from "react";

import { IconButton, Provider, Tooltip } from "react-native-paper";

import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomTooltip = () => {
  return (
    <View style={containerStyle.container}>
      <Provider>
        <Tooltip title="Selected Camera">
          <IconButton icon="camera" selected size={24} onPress={() => {}} />
        </Tooltip>
      </Provider>
    </View>
  );
};

export default CustomTooltip;
