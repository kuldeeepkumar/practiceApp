import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 1000,
    height: 1000,
    borderRadius: 200,
  },
});

export default Exercise11;