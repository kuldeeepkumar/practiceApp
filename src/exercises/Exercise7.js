import { StyleSheet, Text, View } from "react-native";
import React from "react";
const Exercise7 = () => {
  return (
    <view style={styles1.container}>
      <view style={styles1.box}>
        <text style={styles1.text}>box 1</text>
      </view>
      <view style={[styles1.box, { backgroundcolor: "green" }]}>
        <text style={styles1.text}>box 3</text>
      </view>
    </view>
  );
};
export default Exercise7;
//-->>>>>>> using flex properties flex,flexdirection,justifycontent, alignitems<<<<<<<<<<<<<
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    flexdireaction: "row", // try changing to 'colum' and see the difference
    justifycontent: "space-evenly",
    alignitems: "center",
    backgroundcolor: "#46c2ab",
  },
  box: {
    width: 120,
    height: 120,
    backgroundcolor: "red",
    justifycontent: "center",
    alignitems: "center",
    bordertopendradius: 10,
    bordercolor: "white",
    borderwidth: 20,
  },
  text: {
    fontsize: 20,
    color: "black",
  },
});
