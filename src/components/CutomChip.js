import * as React from "react";

import { Chip } from "react-native-paper";
import { Text } from "react-native";
import { View } from "react-native";
import { containerStyle } from "../styles";

const CustomChip = () => (
  <>
    <View
      style={[
        containerStyle.container,
        {
          gap: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          height: "50%",
        },
      ]}>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontWeight: "bold", fontSize: 19, marginBottom: 10 }}>
          Select your Hobies Flat
        </Text>
      </View>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Dancing
      </Chip>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Singing
      </Chip>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Painting
      </Chip>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Traveling
      </Chip>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
      <Chip
        mode="flat"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
    </View>
    <View
      style={[
        containerStyle.container,
        {
          gap: 2,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          height: "50%",
        },
      ]}>
      <View
        style={{
          width: "100%",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Text style={{ fontWeight: "bold", fontSize: 19, marginBottom: 10 }}>
          Select your Hobies Outlined
        </Text>
      </View>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Dancing
      </Chip>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Singing
      </Chip>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Painting
      </Chip>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Traveling
      </Chip>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
      <Chip
        mode="outlined"
        style={{ margin: 5 }}
        icon="camera"
        onPress={() => console.log("Pressed")}>
        Example Chip
      </Chip>
    </View>
  </>
);

export default CustomChip;
