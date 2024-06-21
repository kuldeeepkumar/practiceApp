import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import React from "react";

const Exercise11 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw,0&resize=980:*",
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
    width: 400,
    height: 400,
    borderRadius: 200,
  },
});

export default Exercise11;
