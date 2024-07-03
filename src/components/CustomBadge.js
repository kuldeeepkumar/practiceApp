import { Avatar, Badge } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { containerStyle } from "../styles";

const CustomBadge = () => {
  return (
    <>
      <View style={containerStyle.container}>
        <View
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            backgroundColor: "green",
            borderRadius: 100,
          }}
          color="black"
          size={100}
          icon={"home"}>
          <Badge style={{ position: "relative", top: 12 }}>465</Badge>
          <AntDesign
            name="notification"
            style={{ marginLeft: 25 }}
            size={50}
            color="black"
          />
        </View>
      </View>
      <View style={containerStyle.container}>
        <View
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            backgroundColor: "green",
            borderRadius: 100,
          }}
          color="black"
          size={100}
          icon={"home"}>
          <Badge style={{ position: "relative", top: 12 }}></Badge>
          <AntDesign
            name="notification"
            style={{ marginLeft: 25 }}
            size={50}
            color="black"
          />
        </View>
      </View>
      <View style={containerStyle.container}>
        <View
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            backgroundColor: "green",
            borderRadius: 100,
          }}
          color="black"
          size={100}
          icon={"home"}>
          <Badge size={15} style={{ position: "relative", top: 12 }}></Badge>
          <AntDesign
            name="notification"
            style={{ marginLeft: 25 }}
            size={50}
            color="black"
          />
        </View>
      </View>
    </>
  );
};

export default CustomBadge;

const styles = StyleSheet.create({});