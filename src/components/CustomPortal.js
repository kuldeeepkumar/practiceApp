import * as React from "react";

import { Portal, Provider } from "react-native-paper";

import { Text } from "react-native";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomPortal = () => {
  return (
    <Provider>
      <View style={[containerStyle.container, { marginTop: 100 }]}>
        <Portal.Host>
          <Text>Content of the app</Text>
        </Portal.Host>
      </View>
    </Provider>
  );
};

export default CustomPortal;