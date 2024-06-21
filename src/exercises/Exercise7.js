import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise7 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.text}>aaple </Text>
        </View>
        <View style={[styles.box,{ backgroundColor: "green" }]}>
            <Text style={styles.text}>mango </Text>
        </View>
        <View style={[styles.box,{ backgroundColor: "yellow" }]}>
            <Text style={styles.text}>cherry </Text>
        </View>
    </View>
  );
};
 

export default Exercise7;

// -->>>>>>>>>> Using flex properties: flex, flexdirection, justifycontent, alignItems<<<<<<<<<<<---


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", 
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"#33ccff",
       },
       box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 9,
        borderColor: "white",
        bordarWidth: 9,
        borderTopEndRadius: 10,
      },
      text: {
        fontSize: 15,
        color: "black",
      },
   });