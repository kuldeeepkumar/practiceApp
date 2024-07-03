import * as React from "react";

import { Button } from "react-native-paper";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomButton = () => (
  <>
    <View style={[containerStyle.container, { gap: 15 }]}>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}>
        Botton 1
      </Button>
      <Button
        icon="camera"
        mode="contained-tonal"
        onPress={() => console.log("Pressed")}>
        Botton 2
      </Button>
      <Button
        icon="camera"
        mode="outlined"
        onPress={() => console.log("Pressed")}>
        Botton 3
      </Button>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}>
        Botton 4
      </Button>
      <Button
        icon="camera"
        mode="elevated"
        onPress={() => console.log("Pressed")}>
        Botton 5
      </Button>
    </View>
  </>
);

export default CustomButton;