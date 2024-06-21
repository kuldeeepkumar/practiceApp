import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://media.istockphoto.com/id/902155732/photo/mixed-flower-bouquet.jpg?s=2048x2048&w=is&k=20&c=eRB_M35lubC8g4HF6AXF_gOsX2RxC4fQDg17iqvUWEI=",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ---->>>>>>>>>>> Styling images and multimedia components <<<<<<<<<<<<<-----
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 800,
    height: 800,
    borderRadius: 800,
  },
});

export default Exercise11;
