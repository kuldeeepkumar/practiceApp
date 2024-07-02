import * as React from "react";

import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";

import { containerStyle } from "../styles";

const CustomSurfaceContainer = () => (
  <View
    style={[
      containerStyle.container,
      {
        gap: 6,
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
      },
    ]}>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
    <Surface style={styles.surface} elevation={4}>
      <Text>Surface</Text>
    </Surface>
  </View>
);

export default CustomSurfaceContainer;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
