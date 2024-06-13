import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Exercise1 = () => {

//  we have tried logial operators
const a = true;
const b = false;

const c = a && b;
console.log("value:", c)

  return (
    <View>
      <Text>Exercise1</Text>
    </View>
  )
}

export default Exercise1

const styles = StyleSheet.create({})