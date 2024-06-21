import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Exercise11 = () => {
  return (
      <View style={styles.container}>
 <TouchableOpacity>

        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
 </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
     // ---->>>>>>>>>>> Styling images and multimedia components <<<<<<<<<<<<<-----
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 100,
  },
});
export default Exercise11;