import { StyleSheet, Text, View } from "react-native";

import { Avatar } from "react-native-paper";
import React from "react";

const AvtarImage = require("../../assets/img/avtar.png");
const CustomAvatar = () => {
  return (
    <>
      <Avatar.Icon
        color="black"
        style={{ backgroundColor: "red" }}
        size={100}
        icon={"home"}
      />
      <Avatar.Image
        color="black"
        style={{ backgroundColor: "red" }}
        size={100}
        source={AvtarImage}
      />
      <Avatar.Text
        color="black"
        style={{ backgroundColor: "red" }}
        size={100}
        label="AB"
      />
    </>
  );
};

export default CustomAvatar;

const styles = StyleSheet.create({});
