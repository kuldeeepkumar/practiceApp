import { StyleSheet, Text, View,ImageBackground } from "react-native";
import React from "react";

const Exercise13 = () =>{
  return (
<ImageBackground source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ0Hx6ZEKetfUWyfodo5WsFFbDcjr1vM5jKA&s"}}
    style={styles.background}>

      <View style={styles.box}>
        <Text style={styles.text}>Hello teddy</Text>
      </View>
    </ImageBackground>
  );
};
// ------------->>>>>>>>>>>>>>>   Comprehensive list of React Native Syles   <<<<<<<<<<<<<----------------

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    background: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      flexDirection: "row",
      overflow: "visible",
    },
    box: {
      width: 100,
      height: 100,
      justifyContent: "flex-end",
      alignItems: "baseline",
      paddingLeft: 20,
      margin: 40,
      elevation: 20,
      // borderWidth: 40,
  
      // opacity: 0.9,
      shadowColor: "black",
      shadowOffset: { width: 20, height: 20 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      borderStyle: "dotted",
  
      // position: "absolute",
      // zIndex: 2,
  
      //   borderRadius: 50,
      // transform: [{ rotate: "180deg" }],
      transform: [{ translateX: 40 }, { translateY: 10 }],
      // transform: [{ scale: 5 }],
    },
    text: {
      color: "white",
  
      // letterSpacing: 10,
      lineHeight: 30,
  
      // fontSize: 30,
      // fontWeight: "bold",
      // textAlign: "center",
    },
  });
  
  export default Exercise13;
