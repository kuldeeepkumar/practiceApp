import { Menu } from "react-native-paper";
import React from "react";
import { View } from "react-native";

const CustomMenu = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    }}>
    <Menu.Item
      leadingIcon="redo"
      onPress={() => {
        console.log("pressed");
      }}
      title="Redo"
    />
    <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
    <Menu.Item
      leadingIcon="content-cut"
      onPress={() => {}}
      title="Cut"
      disabled
    />
    <Menu.Item
      leadingIcon="content-copy"
      onPress={() => {}}
      title="Copy"
      disabled
    />
    <Menu.Item leadingIcon="content-paste" onPress={() => {}} title="Paste" />
  </View>
);

export default CustomMenu;
