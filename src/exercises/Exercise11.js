import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Beautiful Image</Text>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_1280.jpg",
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
  text: {
    fontSize: 20,
    marginBottom: 20,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 40,
  },
});
export default Exercise11;
